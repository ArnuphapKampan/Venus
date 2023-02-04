import React, { useEffect, useState } from 'react'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import './contract.css';
import PartOne from './formContract/1-partOne';
import PartTwo from './formContract/2-partTwo';
import PartThree from './formContract/3-partThree';
import PartFour from './formContract/4-partFour';
import PartFive from './formContract/5-partFive';
import PartSix from './formContract/6-partSix';
import PartInstallment from './formContract/partInstallment';
import PartSeven from './formContract/7-partSeven';
import PartEight from './formContract/8-partEight';
import PartNine from './formContract/9-partNine';
import PartTen from './formContract/10-partTen';
import PartEleven from './formContract/11-partEleven';
import PartTwelve from './formContract/12-partTwelve';

import { useNavigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { toast } from 'react-toastify';
//Functions
import { contractHandler } from '../../../../../function/contract'
const ContractCreate = () => {
    const [installmentAmount,setInstallmentAmount] = useState(0);
    const [currentTab, setCurrentTab] = useState(1);
    const authtoken = localStorage.getItem('token')

    //active menu
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activePath = "contract";
    useEffect(() => {
        dispatch(activeMenu(activePath));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu

    const onSubmitData = async (e) => {
      e.preventDefault();
      await validation('save');

      let installmentRows = document.getElementById('installmentContent').rows;       
      let installmentDetail = [];
      for (let i = 0; i < installmentRows.length; i++) {
        const info = {
          'installment':installmentRows[i].cells[0].children[0].getElementsByTagName('input')[0].value,
          'payment':installmentRows[i].cells[0].children[0].getElementsByTagName('input')[1].value,
          'amount':installmentRows[i].cells[0].children[0].getElementsByTagName('input')[2].value,
          'detail':installmentRows[i].cells[0].children[0].getElementsByTagName('input')[3].value,
          'startDate':date2dash(installmentRows[i].cells[0].children[0].getElementsByTagName('input')[4].value),
          'stopDate':date2dash(installmentRows[i].cells[0].children[0].getElementsByTagName('input')[5].value),
          'installmentStatusENG':(installmentRows.length === i+1)?'last':(i === 0)?'first':'',
          'installmentStatusTH':(installmentRows.length === i+1)?'งวดสุดท้าย':(i === 0)?'งวดแรก':'',
        }
        installmentDetail.push(info) 
      }

      const detail = {
        detail:{
          document_number:document.getElementsByName('document_number')[1].value,
          do_at:document.getElementsByName('do_at')[1].value,
          date:date2dash(document.getElementsByName('date')[1].value),
          prefix:document.getElementsByName('prefix')[1].value,
          employer_name:document.getElementsByName('employer_name')[1].value,
          employer_surname:document.getElementsByName('employer_surname')[1].value,
          employer_age:document.getElementsByName('employer_age')[1].value,
          employer_personal_code:document.getElementsByName('employer_personal_code')[1].value,
          employer_house_number:document.getElementsByName('employer_house_number')[1].value,
          employer_village_group:document.getElementsByName('employer_village_group')[1].value,
          employer_alley:document.getElementsByName('employer_alley')[1].value,
          employer_road:document.getElementsByName('employer_road')[1].value,
          employer_sub_district:document.getElementsByName('employer_sub_district')[1].value,
          employer_district:document.getElementsByName('employer_district')[1].value,
          employer_province:document.getElementsByName('employer_province')[1].value,
          employer_zip_code:document.getElementsByName('employer_zip_code')[1].value,

          contractor_company:document.getElementsByName('contractor_company')[1].value,
          contractor_company_number:document.getElementsByName('contractor_company_number')[1].value,
          contractor_company_by:document.getElementsByName('contractor_company_by')[1].value,
          contractor_office_number:document.getElementsByName('contractor_office_number')[1].value,
          contractor_village_group:document.getElementsByName('contractor_village_group')[1].value,
          contractor_alley:document.getElementsByName('contractor_alley')[1].value,
          contractor_road:document.getElementsByName('contractor_road')[1].value,
          contractor_sub_district:document.getElementsByName('contractor_sub_district')[1].value,
          contractor_district:document.getElementsByName('contractor_district')[1].value,
          contractor_province:document.getElementsByName('contractor_province')[1].value,
          contractor_zip_code:document.getElementsByName('contractor_zip_code')[1].value,
          create_date:new Date().getTime()/1000,
          update_date:new Date().getTime()/1000,
        },
        section_1:{
          section1_residential_house:document.getElementsByName('section1_residential_house')[1].value,
          section1_deed_no:document.getElementsByName('section1_deed_no')[1].value,
          section1_area:document.getElementsByName('section1_area')[1].value,
          section1_land_number:document.getElementsByName('section1_land_number')[1].value,
          section1_page_area:document.getElementsByName('section1_page_area')[1].value,
          section1_sub_district:document.getElementsByName('section1_sub_district')[1].value,
          section1_district:document.getElementsByName('section1_district')[1].value,
          section1_province:document.getElementsByName('section1_province')[1].value,
          section1_ri:document.getElementsByName('section1_ri')[1].value,
          section1_ngan:document.getElementsByName('section1_ngan')[1].value,
          section1_tarang_wa:document.getElementsByName('section1_tarang_wa')[1].value,
        },
        section_2:{
          section2_assign_agency:document.getElementsByName('section2_assign_agency')[1].value,
          section2_assign_contract:document.getElementsByName('section2_assign_contract')[1].value,
        },
        section_3:{
          section3_wage_total:document.getElementsByName('section3_wage_total')[1].value,
          section3_wage_percent:document.getElementsByName('section3_wage_percent')[1].value,
          section3_amount:document.getElementsByName('section3_amount')[1].value,
          section3_before_amount:document.getElementsByName('section3_before_amount')[1].value,
          section3_outstanding_percent:document.getElementsByName('section3_outstanding_percent')[1].value,
          section3_outstanding_amount:document.getElementsByName('section3_outstanding_amount')[1].value,
          section3_balance:document.getElementsByName('section3_balance')[1].value,
          section3_installment_amount:document.getElementsByName('section3_installment_amount')[1].value,
        },
        section_4:{
          section4_expense_amount:document.getElementsByName('section4_expense_amount')[1].value,
        },
        installment:installmentDetail
       }

       const idLoading = toast.loading("Please wait...")
       insertContract(detail,idLoading);
    }

    const insertContract = (detail,idLoading) => {
      const URL    =  document.URL;
      const status = "create";
      const engine = "create contract";
      const info = {
        detail:detail,
        url: URL,
        status: status,
        engine: engine
      }
      contractHandler(info,authtoken).then(res =>{
        setTimeout(function(){
        toast.update(idLoading, {
          render: res.data,
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
        navigate("/application/contract/");
        }, 1500); 
      }).catch(err => {
        toast.update(idLoading, {
          render: err.response.data.msg,
          type: toast.TYPE.ERROR,
          autoClose: 5000,
          closeButton: true,
          isLoading: false
       });
      })
    }

    function date2dash(date) {
      var d = date.split("/");
      return d[2] + "-" + d[1] + "-" + d[0];
  }
  
    const validation = (check="") => {
      return new Promise((resolve, reject) => {
        let valid = [];
        let invalid = [];
        let inputs = document.getElementsByClassName(`input-tabs${currentTab}`);
        for(let keyInput in inputs) {
            let valueInput = inputs[keyInput].value;
            let nameInput = inputs[keyInput].name;
          
          if(valueInput !== undefined && valueInput !== null && (check === 'next' || check === 'save')){
              if(valueInput.trim() === ""){
                  document.getElementsByName(`${nameInput}`)[0].classList.remove("text-success")
                  document.getElementsByName(`${nameInput}`)[1].classList.remove("is-valid")
                  document.getElementsByName(`${nameInput}`)[0].classList.add("text-danger")
                  document.getElementsByName(`${nameInput}`)[1].classList.add("is-invalid")
                  invalid.push(nameInput);
              }else if(valueInput !== ""){
                  document.getElementsByName(`${nameInput}`)[0].classList.remove("text-danger")
                  document.getElementsByName(`${nameInput}`)[1].classList.remove("is-invalid")
                  document.getElementsByName(`${nameInput}`)[0].classList.add("text-success")
                  document.getElementsByName(`${nameInput}`)[1].classList.add("is-valid")
                  valid.push(nameInput);
            }
          }
        }

        if(invalid.length > 0 && (check === 'next' || check === 'save')){
          toast.error("Fill input required");
          return false;
        }else{
          if(check === 'next'){
            setCurrentTab(currentTab + 1)
          }else if(check === 'prev'){
            setCurrentTab(currentTab - 1)
          }else if(check === 'save'){
            resolve();
          }
        }
      });
    }


    const installment = [];
    for (let i = 0; i < installmentAmount; i++) {
        installment.push(<PartInstallment key={i} installment={i+1} final={installmentAmount} />);
    }

  return (
    <main>
        <div className="shadow-none container-fluid">
            <h3 className="shadow-none mt-4">สัญญาก่อสร้าง</h3>
            <div className="border p-2">
              <Tabs activeKey={currentTab} id="tabs" className="mb-3" justify>
                <Tab eventKey={1} title="รายละเอียด" disabled={currentTab !== 1}>
                    <PartOne/>
                    <PartTwo/>
                    <PartThree/>
                    <div className="row justify-content-end mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={2} title="หมวดที่ 1" disabled={currentTab !== 2}>
                    <PartFour/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={3} title="หมวดที่ 2" disabled={currentTab !== 3}>
                    <PartFive/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={4} title="หมวดที่ 3" disabled={currentTab !== 4}>
                    <PartSix setInstallmentAmount={setInstallmentAmount} installmentRow={installment} />
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={5} title="หมวดที่ 4" disabled={currentTab !== 5}>
                    <PartSeven/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={6} title="หมวดที่ 5" disabled={currentTab !== 6}>
                    <PartEight/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={7} title="หมวดที่ 6" disabled={currentTab !== 7}>
                    <PartNine/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={8} title="หมวดที่ 7" disabled={currentTab !== 8}>
                    <PartTen/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={9} title="หมวดที่ 8" disabled={currentTab !== 9}>
                    <PartEleven/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} type="submit" onClick={() => validation('next')}>Next</button>
                    </div>
                </Tab>
                <Tab eventKey={10} title="หมวดที่ 9" disabled={currentTab !== 10}>
                    <PartTwelve/>
                    <div className="row justify-content-between mt-3">
                      <button className="shadow-none btn btn-info m-3" style={{width:'15%'}} onClick={() => validation('prev')}>Prev</button>
                      <button className="shadow-none btn btn-success m-3" style={{width:'15%'}} onClick={(e)=>onSubmitData(e)} type="submit">SAVE</button>
                    </div>
                </Tab>
              </Tabs>
            </div>
        </div>
    </main>
  )
}

export default ContractCreate