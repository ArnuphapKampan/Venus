import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
import { BranchesOutlined } from '@ant-design/icons';

const ShowLog = ({logInfo, indexKey, status}) => {
  const [show, setShow] = useState(false);
  const [newJSON,setNewJSON] = useState({});
  const [oldJSON,setOldJSON] = useState({});
  
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false)
  };
  const handleShow = () => {
    const index = logInfo.findIndex((index) => index.key === indexKey);

    setNewJSON(logInfo[index].content);
    setOldJSON((logInfo[index].status === 'create')?logInfo[index].content:logInfo[index-1].content);
    setShow(true);
  }
  
  const newStyles = {
    variables: {
      light: {
        codeFoldGutterBackground: "#6F767E",
        codeFoldBackground: "#E2E4E5"
      }
    }
  };
  return (
    <>
    <div className="shadow-none form-group mr-1">
      <Button  className={`shadow-none btn btn-sm btn-block ${(status === 'create')?'btn-outline-success':'btn-outline-danger'}`} variant="" onClick={handleShow}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Button>
    </div>
      <Modal fullscreen={true} show={show} onHide={handleClose}>
        <Modal.Header className="shadow-none" closeButton onClick={e => handleClose(e)}>
          <label><BranchesOutlined /> Transection Log</label>
        </Modal.Header>
        <Modal.Body>
        <ReactDiffViewer
          oldValue={JSON.stringify(oldJSON, undefined, 4)}
          newValue={JSON.stringify(newJSON, undefined, 4)}
          splitView={true}
          compareMethod={DiffMethod.WORDS}
          styles={newStyles}
          leftTitle="Old Transection"
          rightTitle="New Transection"
          // renderContent={highlightSyntax}
        />
        </Modal.Body>
        {/* <Modal.Footer className="shadow-none justify-content-end">
          <div className="shadow-none group"> 
          <Button className="shadow-none" variant="secondary" onClick={e => handleClose(e)}>
            Close
          </Button>
          </div>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ShowLog