import React, { useState } from "react";
import "./Menu.css";

const Menu = (props) => {
  const [cnt, setCnt] = useState({ id: props.id, cnts: 0 });

  const changeCnt = (event) => {
    setCnt((prevState) => ({ ...prevState, cnts: event.target.value }));
  };

  const btnSubmitHandler = (event) => {
    event.preventDefault();
    props.getCnt(cnt);

    setCnt((prevState) => ({ ...prevState, cnts: 0 }));
  };

  return (
    <form className="menu-box" onSubmit={btnSubmitHandler}>
      <div>
        <div className="menu-detail">{props.name}</div>
        <div className="menu-detail">{props.price}원</div>
      </div>
      <div>
        <div className="menu-add">
          <label htmlFor={`menu${props.id}`}>수량</label>
          <input
            type="number"
            name="count"
            id={`menu${props.id}`}
            value={cnt.cnts}
            onChange={changeCnt}
          />
        </div>
        <div className="menu-add">
          <button>추가하기</button>
        </div>
      </div>
    </form>
  );
};

export default Menu;