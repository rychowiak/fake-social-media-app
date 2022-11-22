import "./stories.scss";
import { styled } from "@mui/material/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: "5px",
    marginBottom: "-5rem",
    ".story": {
      flex: "none",
      height: "50px",
      width: "50px",
      borderRadius: "50%",
      span: {
        display: "none",
      },
      button: {
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
      },
    },
  },
  [theme.breakpoints.down("tablet")]: {
    height: "200px",
  },
}));

function Stories() {
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <Responsive className="stories">
      <div className="story">
        <img
          src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>john smith</span>
        <button>
          <AddOutlinedIcon />
        </button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </Responsive>
  );
}

export default Stories;
