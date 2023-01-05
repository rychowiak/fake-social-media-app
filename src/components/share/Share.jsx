import React, { useState } from "react";
import "./share.scss";
import Friends from "../../assets/1.png";
import Map from "../../assets/map.png";
import Image from "../../assets/img.png";
import { Button, useTheme, Box, TextField } from "@mui/material";
import { tokens } from "../../theme";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

function Share() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { currentUser } = useContext(AuthContext);
  // const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ desc });
  };

  return (
    <Box className="share" sx={{ boxShadow: `0 0 25px ${colors.action[100]}` }}>
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <TextField
            fullWidth
            variant="filled"
            label={`What's on your mind ${currentUser.name}?`}
            color="secondary"
            onChange={(e) => setDesc(e.target.value)}
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
            onClick={handleClick}
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
