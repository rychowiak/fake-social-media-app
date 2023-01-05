import React from "react";
import "./update.scss";

const Update = ({ setOpenUpdate }) => {
  return (
    <div className="update-modal">
      <div className="modal-content" style={{ opacity: 1 }}>
        Update
        <button onClick={() => setOpenUpdate(false)}>X</button>
      </div>
    </div>
  );
};

export default Update;
