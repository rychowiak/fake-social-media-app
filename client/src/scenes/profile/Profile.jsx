import "./profile.scss";
import { Box, Button, useTheme } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { tokens } from "../../theme";
import Posts from "../../components/posts/Posts";
import { styled } from "@mui/material/styles";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Loader from "../../components/Loader";
import Update from "../../components/update/Update";
import { useState } from "react";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    ".container": {
      flexDirection: "column",
      height: "30vh",
    },
  },
  [theme.breakpoints.down("tablet")]: {
    ".container": {
      ".social-apps": {
        flexWrap: "wrap",
      },
    },
  },
}));

function Profile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openUpdate, setOpenUpdate] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user", userId], () =>
    makeRequest.get(`/users/find/${userId}`).then((res) => res.data)
  );

  const { isLoading: loadingR, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest
        .get(`/relationships?followedUserId=${userId}`)
        .then((res) => res.data)
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (following) => {
      if (following)
        return makeRequest.delete(`/relationships?userId=${userId}`);
      return makeRequest.post("/relationships", { userId });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["relationship"] });
    },
  });

  const handleFollow = (e) => {
    e.preventDefault();
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  // console.log(relationshipData);
  if (isLoading || loadingR) return;
  if (error) return "unkown error";
  return (
    <Responsive className="profile">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img className="coverImg" src={data.coverPic} alt="" />
          <Box
            className="container"
            sx={{ boxShadow: `0 0 25px ${colors.action[100]}` }}
          >
            <div className="social-apps">
              <FacebookTwoToneIcon fontSize="large" />
              <LinkedInIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <PinterestIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
            </div>
            <div className="profile-info">
              <img className="user-img" src={data.profilePic} alt="" />
              <span style={{ fontSize: "24px", fontWeight: "500" }}>
                {data.name}
              </span>
              <div className="user-icons">
                <div className="item">
                  <PlaceIcon /> <span>{data.city}</span>
                </div>
                <div className="item">
                  <LanguageIcon /> <span>{data.website}</span>
                </div>
              </div>
              {loadingR ? (
                "Loading"
              ) : userId === currentUser.id ? (
                <Button
                  onClick={() => setOpenUpdate(true)}
                  sx={{
                    mt: "20px",
                    backgroundColor: colors.green[600],
                    "&:hover": {
                      backgroundColor: colors.green[500],
                    },
                  }}
                >
                  update
                </Button>
              ) : (
                // TODO confirm unfollow button
                <Button
                  onClick={handleFollow}
                  sx={{
                    mt: "20px",
                    backgroundColor: colors.green[600],
                    "&:hover": {
                      backgroundColor: colors.green[500],
                    },
                  }}
                >
                  {relationshipData.includes(currentUser.id)
                    ? "Following"
                    : "Follow"}
                </Button>
              )}
            </div>
            <div className="user-contact">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </Box>
          <Posts userId={userId} />
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} />}
    </Responsive>
  );
}

export default Profile;
