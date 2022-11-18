import "./share.scss";
import Friends from "../../assets/1.png";
import Map from "../../assets/map.png";
import Image from "../../assets/img.png";
import { Button, useTheme, Box, TextField } from "@mui/material";
import { tokens } from "../../theme";

function Share() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="share" sx={{ boxShadow: `0 0 25px ${colors.action[100]}` }}>
      <div className="container">
        <div className="top">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <TextField
            fullWidth
            variant="filled"
            label="What's on your mind?"
            color="secondary"
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friends} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.green[600],
              "&:hover": {
                backgroundColor: colors.green[500],
              },
            }}
          >
            share
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default Share;
