import "./navBar.scss";
import { Link } from "react-router-dom";
import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { colorModeContext, tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";

function NavBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);

  return (
    <Box
      className="topBar"
      backgroundColor={colors.primary[400]}
      sx={{ boxShadow: `0 0 15px ${colors.action[100]}` }}
    >
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SocialAPP</span>
        </Link>
        <IconButton>
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton>
          <GridViewOutlinedIcon />
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Box
          display="flex"
          backgroundColor={colors.grey[800]}
          borderRadius="3px"
        >
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <InputBase sx={{ ml: 2 }} placeholder="Search..." />
        </Box>
      </div>
      <div className="right">
        <IconButton>
          <PeopleOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <div className="user">
          <img src="../../assets/user.png" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </Box>
  );
}

export default NavBar;
