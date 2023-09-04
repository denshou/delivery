import React, { useEffect, useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  let cnt = [];

  for (let i = 0; i < props.menu.length; i++) {
    cnt.push(props.menu[i].count);
  }
  const [modalCount, setModalCount] = useState(cnt); // [0, 0, 0]

  useEffect(() => {
    props.modalInputChange(modalCount);
  }, [modalCount]);

  const changeModalCount = (event) => {
    cnt[event.target.id] = Number(event.target.value);
    setModalCount(cnt);
    // props.modalInputChange(modalCount);
  };

  const minusClick = (event) => {
    cnt[event.target.id]--;
    setModalCount(cnt);
    //if cnt===0 버튼 disabled
  };
  const plusClick = (event) => {
    cnt[event.target.id]++;
    setModalCount(cnt);
  };

  const closeModal = () => {
    props.setIsOpen(false);
  };

  const filteredMenu = props.menu.filter((menus) => {
    return menus.count > 0;
  });
  let selectedMenu = <p className="empty">장바구니가 비었습니다.</p>;
  if (filteredMenu.length > 0) {
    selectedMenu = filteredMenu.map((menus) => {
      return (
        <div className="menu-payment" key={menus.id}>
          <div className="payment">
            <div>
              <div className="menu-name">{menus.name}</div>
              <div>
                {menus.price}원 X
                <input
                  type="number"
                  name=""
                  id={`${menus.id}`}
                  value={modalCount[`${menus.id}`]}
                  onChange={changeModalCount}
                  min={1}
                />
              </div>
            </div>
            <div className="plus-minus-buttons">
              <button onClick={minusClick} id={`${menus.id}`} className="minus">
                -
              </button>
              <button onClick={plusClick} id={`${menus.id}`} className="plus">
                +
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  let totalPrice = 0;
  if (filteredMenu.length > 0) {
    filteredMenu.map((menus) => {
      totalPrice += menus.price * menus.count;
    });
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div className="backdrop" onClick={closeModal} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <div className="modal-box">
          {selectedMenu}
          <div className="total">
            <div>전체 금액</div>
            <div>{totalPrice}원</div>
          </div>
          <div className="pay-buttons">
            <button onClick={closeModal}>취소</button>
            <button>결제</button>
          </div>
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
