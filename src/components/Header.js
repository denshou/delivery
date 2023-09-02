import React, { useState } from "react";
import "./Header.css";

const Header = (props) => {


  const openModalHandler = () => {
    
    props.setIsOpen(true);
    // props.getModalOpen(props.isOpen);
  };

  return (
    <div className="header-line">
      <div className="title">DeliveryApp</div>
      <button onClick={openModalHandler}>장바구니</button>
    </div>
  );
};

export default Header;
