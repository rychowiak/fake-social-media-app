import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Navigate } from "react-router-dom";
import Loader from "../Loader";

function Posts({ userId }) {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get(`/posts?userId=${userId}`).then((res) => {
      return res.data;
    })
  );
  // console.log(data);
  if (error) return <Navigate to="/fake-social-media-app/login" />;

  return (
    <div className="posts">
      {error ? (
        "Something went wrong!"
      ) : isLoading ? (
        <Loader />
      ) : (
        data.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
}

export default Posts;
