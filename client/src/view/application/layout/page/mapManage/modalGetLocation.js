import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//replace a LongdoMap.js file
import { longdo, map, LongdoMap } from '../map/longdo-map/LongdoMap';
const ModalGetLocation = ({setGetLat, setGetlon, getLat, getLon}) => {
  const mapKey = process.env.REACT_APP_MAP_API;
  const [show, setShow] = useState(false);
  const [lat, setlat] = useState(getLat);
  const [lon, setlon] = useState(getLon);

  const initMap = () => {
    map.location({ lon:((getLon === "")?100.6534494:getLon), lat:((getLat === "")?13.764398:getLat) }, true);
    map.zoom(15, true);
    map.Layers.setBase(longdo.Layers.NORMAL);
    map.language('th')
    map.Event.bind('location', function() {
      var location = map.location();
      setlat(location.lat);
      setlon(location.lon);
    });
  }

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false)
  };

  const handleShow = () => setShow(true);

  const handleLocation = (e) => {
    e.preventDefault();
    setGetLat(lat);
    setGetlon(lon);
    setShow(false)
  }


  return (
    <>
    <div className="form-group">
      <Button variant="warning" onClick={handleShow}>
        Get Location
      </Button>
    </div>
      <Modal fullscreen={true}  show={show} onHide={handleClose}>
        <Modal.Body>
            <Form style={{height: '98%'}}>
              <Form.Group style={{height: '98%'}} controlId="exampleForm.ControlInput1">
                <Form.Label>Lat: {lat}</Form.Label>
                &nbsp;
                &nbsp;
                &nbsp;
                <Form.Label>Lon: {lon}</Form.Label>
                <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e => handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={ e => handleLocation(e) }>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalGetLocation