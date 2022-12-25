import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalSettingIcon = ({ iconLocation, classLocation, colorLocation, sizeLocation, setIconLocation, setClassLocation, setColorLocation, setSizeLocation }) => {
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false)
  };
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="form-group mr-1">
      <Button variant="primary" onClick={handleShow}>
        Setting Marker Location
      </Button>
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Marker Icon</Form.Label>
              <Form.Control
                type="text"
                name="marker"
                placeholder="marker icon . . ."
                autoFocus
                autoComplete="off"  
                required
                value = { iconLocation }
                onChange={ (e) => setIconLocation(e.target.value) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Class</Form.Label>
              <Form.Control
                type="text"
                name="class"
                placeholder="class . . ."
                autoComplete="off"  
                required
                value = { classLocation }
                onChange={ (e) => setClassLocation(e.target.value) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                placeholder="color . . ."
                autoComplete="off"  
                required
                value = { colorLocation }
                onChange={ (e) => setColorLocation(e.target.value) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                name="size"
                placeholder="size . . ."
                autoComplete="off"  
                required
                value = { sizeLocation }
                onChange={ (e) => setSizeLocation(e.target.value) }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <a style={{textDecoration: "none",textAlign:"right"}} target="_blank" href="https://www.w3schools.com/icons/fontawesome5_icons_maps.asp" rel="noreferrer">
          <Button align="left" variant="warning">
            Icon <i className="far fa-smile text-success"></i>
          </Button></a>
          <div className="group"> 
          <Button variant="secondary" onClick={e => handleClose(e)}>
            Close
          </Button>
          <Button className="ml-2" variant="primary" onClick={ e => handleClose(e) }>
            Confirm
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSettingIcon