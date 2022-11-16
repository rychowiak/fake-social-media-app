import "./socialBar.scss";
import { Button, IconButton, Badge } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function SocialBar() {
  return (
    <div className="socialBar">
      <div className="container">
        <div className="item"></div>
        <span>LOREM IPSUM</span>
        <div className="container-info">
          <div className="user">
            <div className="user-info">
              <img src="../../assets/user.png" alt="" />
              <span>Name name</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button variant="contained" size="small">
                follow
              </Button>
              <IconButton color="error" size="small">
                <CancelOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="../../assets/user.png" alt="" />
              <span>Name name</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button variant="contained" size="small">
                follow
              </Button>
              <IconButton color="error" size="small">
                <CancelOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <span>Lates activities</span>
        <div className="container-info">
          <div className="user">
            <div className="user-info">
              <img src="../../assets/user.png" alt="" />
              <span>Name lastname</span>
              <span>liked a post</span>
            </div>
            <div>
              <span>just now</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="../../assets/user.png" alt="" />
              <span>Name name</span>
              <span>just posted</span>
            </div>
            <div>
              <span>1 min ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <span>Online Friends</span>
        <div className="container-info">
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="" />
              </Badge>
              <span>Name lastname</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="warning">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <Badge variant="dot" color="success">
                <img src="../../assets/user.png" alt="alt-img" />
              </Badge>
              <span>Name name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialBar;
