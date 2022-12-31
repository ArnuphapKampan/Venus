import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShowLog from './showLog';
import { Table } from 'antd';

const Log = () => {
  const [show, setShow] = useState(false);
  const [logInfo] = useState([
    {
      key:1,
      index:1,
      status:'create',
      date:'30/12/2022',
      content:{
                  "head":{
                    employer:'ประยวย หัวดคุด',
                    address:'145/8 กรุงเทพมหานคร',
                    date:'30/12/2022',
                  },
                  "detail":{
                    Installment:'1000'
                  }
               }
    },{
      key:2,
      index:2,
      status:'edit',
      date:'31/12/2022',
      content:{
                  "head":{
                    employer:'ประโวย หัวคิด',
                    address:'145/8 กรุงเทพมหานคร',
                    date:'31/12/2022',
                  },
                  "detail":{
                    Installment:'1000'
                  }
               }
    },{
      key:4,
      index:3,
      status:'edit',
      date:'31/12/2022',
      content:{
                  "head":{
                    employer:'ประโวย หัวคิด',
                    address:'145/8 กรุงเทพมหานคร หัวหมาก บางกะปิ',
                    date:'31/12/2022',
                  },
                  "detail":{
                    Installment:'5000'
                  }
               }
    }
  ])
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false)
  };
  const handleShow = () => setShow(true);

  const columns = [
      {
        title: '#',
        key: 'key',
        dataIndex: 'index',
        align: 'center',
        width: '5%',
      },
      {
        title: 'Transection Date', 
        dataIndex: 'date',
        width: '30%',
      },
      {
        title: 'Log', 
        width: '5%',
        render: (text) =><><ShowLog logInfo={logInfo} indexKey={text.key} status={text.status} /></>,
      }
    ];
  return (
    <>
      <label  style={{width:'150px',cursor: 'pointer'}}  variant="" onClick={handleShow}>Log</label>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header>
          Transection Data
        </Modal.Header>
        <Modal.Body>
        <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={logInfo} />
        </Modal.Body>
        <Modal.Footer className="shadow-none justify-content-end">
          <div className="shadow-none group"> 
          <Button className="shadow-none" variant="secondary" onClick={e => handleClose(e)}>
            Close
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Log