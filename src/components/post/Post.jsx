import { useState } from "react";
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

  const liked = false;

  return (
    <Responsive
      className="post"
      sx={{ boxShadow: `0 0 25px ${colors.action[100]}` }}
    >
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
              <span className="date">1 min ago</span>
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
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
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
        {commentOpen && <Comments />}
      </div>
    </Responsive>
  );
}

export default Post;
