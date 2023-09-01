import React, { useState } from "react";
import "./Body.css";
import Menu from "./Menu";

const Body = () => {
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
    console.log(copy);
    setMenu(copy);
  };

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
  return <div className="body">{menuContent}</div>;
};

export default Body;
