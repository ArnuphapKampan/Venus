import React, { useEffect, useState } from 'react'
//active menu
import { activeMenu, logout } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { Dropdown, Table } from 'antd';
import { PrinterOutlined,DownCircleFilled,BranchesOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { contractLists } from '../../../../../query/contract/contractList';
import Moment from 'react-moment';

import Log from './log';
const ContractList = () => {
    const [contractInfo,setContractInfo] = useState([]);
    const authtoken = localStorage.getItem('token')

    //active menu
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activePath = "contract";
    useEffect(() => {
        dispatch(activeMenu(activePath));
        loadContractList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu

    
    const loadContractList = () =>{
      contractLists(authtoken).then( (res) => {
        let i = 1;
        setContractInfo(
                res.data.map( (row) => (
                    {
                        key: row.id,
                        index: i++,
                        document_number: row.document,
                        employer: JSON.parse(row.detail).employer_name+" "+JSON.parse(row.detail).employer_surname,
                        date: row.create_date,
                    })
                ));
      }).catch( err => {
        dispatch(logout())
        navigate("/");
      });
    }



    const columns = [
      {
        title: '#',
        key: 'key',
        dataIndex: 'index',
        align: 'center',
        width: '5%',
      },
      {
        title: 'Document Number', 
        dataIndex: 'document_number',
      },
      {
        title: 'Employer',
        dataIndex: 'employer',
        align: 'center',
      },
      {
        title: 'Date', 
        render(text) {
          return (
            <Moment format="DD/MM/YYYY HH:mm:ss" >{text.date}</Moment>
          );
        }
      },
      {
        width: '10%',
        align: 'center',
        render: (text) =>{ 
          const items = [
            {
              key: '1',
              label: (<NavLink className="shadow-none nav-link" to={`contractEdit/${text.key}`} >Edit</NavLink>),
              icon: <EditOutlined />
            },
            {
              key: '2',
              label: (<Log id={text.key} />),
              icon: <BranchesOutlined />
            },
            // {
            //   key: '3',
            //   label: ('Contract Detail'),
            //   icon: <MoreOutlined />
            // },
            {
              key: '3',
              label: (<NavLink className="shadow-none nav-link" to="../../../pdf/contractFormPDF" target="_blank">Print Contract</NavLink>),
              icon: <PrinterOutlined />,
            },
            {
              key: '4',
              label: ('Delete'),
              icon: <DeleteOutlined />
            }
          ];

          return (
            <Dropdown menu={{ items }} style={{width:'100px'}} >
                <DownCircleFilled style={{fontSize:'20px',cursor: 'pointer',color:'#343a40'}} />
            </Dropdown>
          )
        },
      }
    ];
  return (
    <main>
        <div className="shadow-none container-fluid">
            <h3 className="shadow-none mt-4">Building Contract</h3>
            <NavLink className="shadow-none nav-link" align="right" to="contractCreate/" ><button type="button" className="shadow-none btn btn-success" name="btn-register" > <i className="	fas fa-plus"></i> New Contract</button></NavLink>
            <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={contractInfo} />
        </div>
    </main>
  )
}

export default ContractList