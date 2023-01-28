import React, {useState} from 'react'
import DatePicker from "react-datepicker";
const PartInstallment = (props) => {
    const [startDate,setStartDate] = useState(Date.now());
    const [stopDate,setStopDate] = useState(Date.now());
  return (
    <tr>
        <td>
            <div className="border pl-1 pr-1">
                <div className="row">
                    <div className="col-xl-1 col-md-6">
                        <div className="textOnInput mb-4">
                            <label name={`section3_installment${props.installment}`} htmlFor="inputText">งวดที่</label>
                            <input name={`section3_installment${props.installment}`} className="form-control shadow-none input-tabs4" autoComplete="off"  defaultValue={props.installment}></input>
                        </div> 
                    </div>
                    <div className="col-xl-2 col-md-6">
                        <div className="textOnInput mb-4">
                            <label name={`section3_payment${props.installment}`} htmlFor="inputText">ชำระร้อยละ</label>
                            <input name={`section3_payment${props.installment}`} className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                        </div> 
                    </div>
                    <div className="col-xl-2 col-md-6">
                        <div className="textOnInput mb-4">
                            <label name={`section3_amount${props.installment}`} htmlFor="inputText">เป็นจำนวนเงิน</label>
                            <input name={`section3_amount${props.installment}`} className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                        </div> 
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="textOnInput mb-4">
                            <label name={`section3_detail${props.installment}`} htmlFor="inputText">รายละเอียด</label>
                            <input name={`section3_detail${props.installment}`} className="form-control shadow-none input-tabs4" autoComplete="off" placeholder="เมื่อผู้รับจ้างได้ดำเนินการ.........แล้วเสร็จ" ></input>
                        </div> 
                    </div>
                    <div className="col-xl-2 col-md-6">
                        <div className="textOnInput mb-4">
                            <label name={`section3_startDate${props.installment}`} htmlFor="inputText">วันที่เริ่ม</label>
                            <DatePicker
                            className="form-control shadow-none input-tabs4" 
                            name={`section3_startDate${props.installment}`} 
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            />
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6">
                        <div className="textOnInput pb-1">
                            <label name={`section3_stopDate${props.installment}`} htmlFor="inputText">วันที่สิ้นสุด</label>
                            <DatePicker
                            className="form-control shadow-none input-tabs4"  
                            name={`section3_stopDate${props.installment}`}
                            dateFormat="dd/MM/yyyy"
                            selected={stopDate}
                            onChange={(date) => setStopDate(date)}
                            />
                        </div>
                    </div>
                </div>
            </div> 
        </td>
    </tr>
  )
}

export default PartInstallment