import React from "react";
import "./style.css";

const AdminSubHeader = (props) => {
  return (
    <h2 className="admin-subheader">{ props.children }</h2>
  );
};

export default AdminSubHeader;