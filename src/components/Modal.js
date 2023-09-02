import React from "react";
import "./Modal.css";

const Modal = (props) => {

  const closeModal = () => {
    props.setIsOpen(false);
  };

  return (
    <div className="backdrop" onClick={closeModal}>
      <div className="modal-box">
        <div className="menu-payment">
          <div className="payment">
            <div>
              <div className="menu-name">피자</div>
              <div>
                20000원 X <input type="number" name="" id="" />
              </div>
            </div>
            <div className="plus-minus-buttons">
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="total">
          <div>전체 금액</div>
          <div>20000원</div>
        </div>
        <div className="pay-buttons">
          <button onClick={closeModal}>취소</button>
          <button>결제</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
