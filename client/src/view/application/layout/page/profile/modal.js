import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { handlerPassword } from '../../../../../function/auth'
const ModalChangePassword = ({ userID, authtoken }) => {
  const [show, setShow] = useState(false);
  const [formData2,setFormData2] = useState({password: '',password2: ''});
  const { password, password2 } = formData2;

  const onChange = (e) =>{
    setFormData2({ ...formData2,[e.target.name]:e.target.value });
  }

  const handleClose = (e) => {
    e.preventDefault();
    setFormData2({password: '',password2: ''});
    setShow(false)
  };
  const handleShow = () => setShow(true);

  const handleChangePassword = (e) => {
    e.preventDefault();
    if(password === "" || password2 === ""){
        toast.warning('Require Password')
    }else if(password !== password2){
        toast.warning('Password is not match.')
    }else{
      let info = {
        id:userID,
        password:password
      }

      handlerPassword(info,authtoken).then((res) => {
        toast.success('Change password successfully');
        setShow(false)
      }).catch((err) => {
        console.log(err.message)
      })
    }
  };
  return (
    <>
    <div className="shadow-none form-group">
      <Button className="shadow-none" variant="primary" onClick={handleShow}>
        Change Password
      </Button>
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="shadow-none mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password . . ."
                autoFocus
                autoComplete="off"  
                required
                onChange={ e => onChange(e) }
              />
            </Form.Group>
            <Form.Group className="shadow-none mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                name="password2"
                placeholder="confirm password . . ."
                autoComplete="off"  
                required
                onChange={ e => onChange(e) }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="shadow-none" variant="secondary" onClick={e => handleClose(e)}>
            Close
          </Button>
          <Button className="shadow-none" variant="primary" onClick={ e => handleChangePassword(e) }>
            confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalChangePassword