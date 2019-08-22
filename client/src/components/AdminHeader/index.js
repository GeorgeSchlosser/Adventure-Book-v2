import React from "react";
import "./style.css";

const AdminHeader = (props) => {
  return (
    <h2 className="adminHead">{ props.children }</h2>
  );
};

export default AdminHeader;