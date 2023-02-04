import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShowLog from './showLog';
import { useDispatch } from 'react-redux';
import { activeMenu, logout } from '../../../../../reducer/userReducer';
import { useNavigate } from 'react-router-dom'
import { logList } from '../../../../../query/log/logList';
import { Table } from 'antd';
import { BranchesOutlined } from '@ant-design/icons';
import Moment from 'react-moment';

const Log = (props) => {
  const [show, setShow] = useState(false);
  const [logInfo,setLogInfo] = useState([])
  const authtoken = localStorage.getItem('token')

  //active menu
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activePath = "contract";
  useEffect(() => {
      dispatch(activeMenu(activePath));
      loadLogtList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch]);
  //active menu

  const loadLogtList = () =>{
    logList({id:props.id},authtoken).then( (res) => {
      let i = 1;
      setLogInfo(
              res.data.map( (row) => (
                  {
                    key:row.log_id,
                    index:i++,
                    status:row.log_status,
                    create_by:row.create_by,
                    date:row.log_time,
                    engine:row.log_engine,
                    content:JSON.parse(row.log_detail)
                  })
              ));
    }).catch( err => {
      dispatch(logout())
      navigate("/");
    });
  }

  const handleClose = (e) => {
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
        sorter: (a, b) => b.index - a.index,
      },
      {
        title: 'Date', 
        width: '20%',
        render(text) {
          return (
            <Moment format="DD/MM/YYYY" >{text.date}</Moment>
          );
      }
      },
      {
        title: 'Time', 
        width: '20%',
        render(text) {
          return (
            <Moment format="HH:mm:ss" >{text.date}</Moment>
          );
      }
      },
      {
        title: 'Create & Update By', 
        width: '20%',
        render(text) {
          return (
            <>{text.create_by}</>
          );
      }
      },
      {
        title: 'Engine', 
        width: '30%',
        render: (text) =><>{text.engine.charAt(0).toUpperCase() + text.engine.slice(1)}</>,
      },
      {
        title: 'Log', 
        width: '5%',
        render: (text) =><><ShowLog logInfo={logInfo} indexKey={text.key} status={text.status} /></>,
      }
    ];
  return (
    <>
      <label  style={{padding:'0',margin:'0',width:'150px',cursor: 'pointer'}} onClick={handleShow}>Log</label>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header className="shadow-none" closeButton onClick={e => handleClose(e)}>
          <label><BranchesOutlined /> Transection Data</label>
        </Modal.Header>
        <Modal.Body>
        <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={logInfo} />
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

export default Log