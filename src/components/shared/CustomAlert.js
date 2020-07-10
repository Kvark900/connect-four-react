import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../App";
import Modal from "reactstrap/es/Modal";
import ModalHeader from "reactstrap/es/ModalHeader";

export default function CustomAlert(props) {
  let {
    showAlert, toggleShowAlert,
    alertMsg, updateAlertMsg
  } = useContext(GlobalContext);

  if (showAlert) {
    return (
        <Modal isOpen={showAlert}
               toggle={() => toggleShowAlert(!showAlert)}>
          <ModalHeader className="text-success"
                       toggle={() => toggleShowAlert(!showAlert)}>{alertMsg}</ModalHeader>
        </Modal>
    );
  } else return <></>
}
