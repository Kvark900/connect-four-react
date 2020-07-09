import React, {useContext, useEffect, useState} from "react";
import {GameContext} from "../../App";
import Modal from "reactstrap/es/Modal";
import ModalHeader from "reactstrap/es/ModalHeader";

export default function CustomAlert(props) {
  let {showAlert, toggleShowAlert, winnerMsg} = useContext(GameContext);

  if (showAlert) {
    return (
        <Modal isOpen={showAlert} toggle={() => toggleShowAlert(!showAlert)} >
          <ModalHeader className="text-success" toggle={() => toggleShowAlert(!showAlert)}>{winnerMsg}</ModalHeader>
        </Modal>
    );
  }
  else return ""
}
