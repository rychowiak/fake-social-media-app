import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";

function NavBar() {
  return (
    <div className="topBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SocialAPP</span>
        </Link>
        <IconButton color="primary">
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton color="primary">
          <GridViewOutlinedIcon />
        </IconButton>
        <IconButton color="primary">
          <DarkModeOutlinedIcon />
        </IconButton>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="search" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <IconButton color="primary">
          <PeopleOutlinedIcon />
        </IconButton>
        <IconButton color="primary">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton color="primary">
          <SettingsOutlinedIcon />
        </IconButton>
        <div className="user">
          <img src="../../assets/user.png" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
