import React, { useContext } from "react";
import CartItem from "../cartitem/CartItem";
import { SideBarContext } from "../../context/SideBarContext";
import "./SideBar.css";

const SideBar = () => {
  const { IsOpen, handleClose } = useContext(SideBarContext);
  return <div className="sidebar">SideBar</div>;
};

export default SideBar;
