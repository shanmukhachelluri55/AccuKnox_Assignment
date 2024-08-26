import '../styles/NotificationModal.css'
import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';

const NotificationModal = (props) => {
    const handleClose = () => props.setNotificationOpen(false);

    return (
        <Modal show={props.notificationOpen} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Alert!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {props.notificationMssg}
            </Modal.Body>
        </Modal>
    );
}

export default NotificationModal;