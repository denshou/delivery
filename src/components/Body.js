import React, { useState } from "react";
import "./Body.css";
import Menu from "./Menu";
import Modal from "./Modal";

const Body = (props) => {
  const [menu, setMenu] = useState([
    {
      id: 0,
      name: "피자",
      price: 20000,
      count: 0,
    },
    {
      id: 1,
      name: "김치찌개",
      price: 9000,
      count: 0,
    },
    {
      id: 2,
      name: "자장면",
      price: 6500,
      count: 0,
    },
  ]);

  const getCnt = (data) => {
    // data=cnt
    let copy = menu.map((menu) => {
      if (menu.id === data.id) {
        return {
          ...menu,
          count: menu.count + Number(data.cnts),
        };
      } else {
        return menu;
      }
    });
    setMenu(copy);
  };

  const modalInputChange = (modalCount) => {
    // [0, 0, 0]
    let copy = menu.map((menu) => {
      return {
        ...menu,
        count: modalCount[`${menu.id}`],
      };
    });
    setMenu(copy);
  };

  const modalButtonChange = () => {};

  let menuContent = menu.map((list) => (
    <Menu
      key={list.id}
      id={list.id}
      name={list.name}
      price={list.price}
      count={list.count}
      getCnt={getCnt}
    />
  ));

  return (
    <div className="body">
      {menuContent}
      {props.isOpen && (
        <Modal
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
          menu={menu}
          modalInputChange={modalInputChange}
          modalButtonChange={modalButtonChange}
        />
      )}
    </div>
  );
};

export default Body;
