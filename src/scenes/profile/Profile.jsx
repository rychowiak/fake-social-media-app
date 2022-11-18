import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Profile() {
  return (
    <div className="profile">
      <img
        src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
      <div className="container">
        <div className="profile-info">
          <img className="user-img" src="../../assets/user.png" alt="" />
          <div className="social-apps">
            <FacebookTwoToneIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <PinterestIcon />
            <TwitterIcon />
          </div>
          <div className="user-info"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
