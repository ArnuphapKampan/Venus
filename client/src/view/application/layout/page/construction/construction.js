import React, { useEffect, useState } from 'react'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import { Dropdown, Table } from 'antd';
import { MoreOutlined,PrinterOutlined,DownCircleFilled,BranchesOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';

import Log from './log';
const Construction = () => {
    const [constructionInfo] = useState([
      {
        key:1,
        index:1,
        employer:'ประยวย หัวดคุด',
        address:'145/8 กรุงเทพมหานคร',
        date:'31/12/2022',
      },{
        key:2,
        index:2,
        employer:'ประยวย หัวดคุด',
        address:'145/8 กรุงเทพมหานคร',
        date:'31/12/2022',
      },{
        key:3,
        index:3,
        employer:'ประยวย หัวดคุด',
        address:'145/8 กรุงเทพมหานคร',
        date:'31/12/2022',
      }
    ])
    //active menu
    const dispatch = useDispatch();
    const activePath = "construction";
    useEffect(() => {
        dispatch(activeMenu(activePath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu



    const columns = [
      {
        title: '#',
        key: 'key',
        dataIndex: 'index',
        align: 'center',
        width: '5%',
      },
      {
        title: 'Employer',
        dataIndex: 'employer',
        align: 'center',
        width: '35%',
      },
      {
        title: 'Address', 
        dataIndex: 'address',
        width: '30%',
      },
      {
        title: 'Date', 
        dataIndex: 'date',
        width: '20%',
      },
      {
        width: '10%',
        align: 'center',
        render: (text) =>{ 
          const items = [
            {
              key: '1',
              label: ('Contract Detail'),
              icon: <MoreOutlined />
            },
            {
              key: '2',
              label: ('Print Contract'),
              icon: <PrinterOutlined />
            },
            {
              key: '3',
              label: (<Log/>),
              icon: <BranchesOutlined />
            },
            {
              key: '4',
              label: ('Edit'),
              icon: <EditOutlined />
            },
            {
              key: '5',
              label: ('Delete'),
              icon: <DeleteOutlined />
            }
          ];
          return (
            <Dropdown menu={{ items }}style={{width:'100px'}} >
                <DownCircleFilled style={{fontSize:'20px',cursor: 'pointer',color:'#343a40'}} />
            </Dropdown>
          )
        },
      }
    ];
  return (
    <main>
    <div className="shadow-none container-fluid">
        <h1 className="shadow-none mt-4">Construction</h1>
        <Table style={{ overflowX: 'auto' }} columns={columns} dataSource={constructionInfo} />
    </div>
</main>
  )
}

export default Construction