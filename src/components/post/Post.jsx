import { useContext, useState } from "react";
import "./post.scss";
import { IconButton, useTheme } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { tokens } from "../../theme";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Loader from "../Loader";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    margin: "10px",
    padding: "0",
    ".container": {
      height: "100%",
    },
  },
}));

function Post({ post }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [commentOpen, setCommentOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate(data.includes(currentUser.id));
  };

  if (isLoading) return;
  if (error) return "An error has ocurred fetching data" + error.message;

  return (
    <Responsive
      className="post"
      sx={{ boxShadow: `0 0 25px ${colors.action[100]}` }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img src={post.profilePic} alt="" />
              <div className="details">
                <Link
                  to={`/profile/${post.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="name">{post.name}</span>
                </Link>
                <span className="date">{moment(post.createdAt).fromNow()}</span>
              </div>
            </div>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </div>
          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
          </div>
          <div className="info">
            <div className="item">
              {isLoading ? (
                <Loader />
              ) : data.includes(currentUser.id) ? (
                <FavoriteOutlinedIcon
                  style={{ color: "red" }}
                  onClick={handleClick}
                />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={handleClick} />
              )}
              {data.length === 1
                ? `${data.length} like`
                : `${data.length} likes`}
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <TextsmsOutlinedIcon />
              12 Comments
            </div>
            <div className="item">
              <ShareOutlinedIcon />
              Share
            </div>
          </div>
          {commentOpen && <Comments postId={post.id} />}
        </div>
      )}
    </Responsive>
  );
}

export default Post;
