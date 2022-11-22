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

function Profile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="profile">
      <img
        className="coverImg"
        src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
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
          <img className="user-img" src="../../assets/user.png" alt="" />
          <span style={{ fontSize: "24px", fontWeight: "500" }}>John Doe</span>
          <div className="user-icons">
            <div className="item">
              <PlaceIcon /> <span>EUR</span>
            </div>
            <div className="item">
              <LanguageIcon /> <span>lorem.dev</span>
            </div>
          </div>
          <Button
            sx={{
              mt: "20px",
              backgroundColor: colors.green[600],
              "&:hover": {
                backgroundColor: colors.green[500],
              },
            }}
          >
            follow
          </Button>
        </div>
        <div className="user-contact">
          <EmailOutlinedIcon />
          <MoreVertIcon />
        </div>
      </Box>
      <Posts />
    </div>
  );
}

export default Profile;
