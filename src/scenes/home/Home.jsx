import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import Stories from "../../components/stories/Stories";
import "./home.scss";
import { styled } from "@mui/material/styles";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    padding: "10px",
    width: "100%",
  },
}));

function Home() {
  return (
    <Responsive className="home">
      <Stories />
      <Share />
      <Posts />
    </Responsive>
  );
}

export default Home;
