import React, { useState } from "react";
import "./comments.scss";
import { useContext } from "react";
import { TextField, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { AuthContext } from "../../context/authContext.js";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Comments({ postId }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments", postId], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );
  // console.log(data);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  if (error) return;
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <TextField
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          fullWidth
          variant="filled"
          label="Write a comment"
          color="secondary"
        />
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
          send
        </Button>
      </div>
      {isLoading
        ? "loading..."
        : data.map((comment) => (
            <div className="comment" key={comment.id}>
              <img src={comment.profilePicture} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
}

export default Comments;
