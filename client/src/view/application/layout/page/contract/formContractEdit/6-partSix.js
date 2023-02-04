import React from 'react'

const PartSix = ({setInstallmentAmount, installmentRow}) => {
  return (
    <><br/>
        <div className="row">
            <div className="col-xl-12 col-md-12">
                <br/>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>หมวดที่ 3 ค่าจ้างเหมาตามสัญญา</strong>
                </p> 
            </div>
        </div>
        <div className="row">
            <div className="col-xl-8 col-md-12 d-flex align-items-center">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1 การจ้างตามสัญญานี้ ผู้ว่าจ้างและผู้รับจ้างตกลงจ้างเหมา รามทั้งวัสดุสิ่งของสัมภาระ ค่าแรงงานรวมเป็นเงินทั้งสิ้น
                </p> 
            </div>
            <div className="col-xl-4 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section3_wage_total" htmlFor="inputText">ค่าแรงรวม(บาท)</label>
                    <input name="section3_wage_total" className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-7 col-md-12 d-flex align-items-center">
                <p>
                    ราคาค่าจ้างนี้รวมภาษีผูลค่าเพิ่มอัตราปัจจุบัน ในวันที่ทำสัญญานี้ ผู้ว่าจ้างตกลงชำระค่าจ้าง
                </p> 
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section3_wage_percent" htmlFor="inputText">ค่าจ้าง(%)</label>
                    <input name="section3_wage_percent" className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-2 col-md-6 d-flex align-items-center">
                <p>ให้กับผู้รับจ้าง</p> 
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 col-md-12 d-flex align-items-center">
                <p>เมื่อผู้ว่าจ้างลงนามในสัญญา และเพื่อเป็นค่าใช้จ่ายในการออกแบบ, เขียนแบบก่อสร้าง, บริการขออนุญาตก่อสร้าง, ขอมิเตอร์น้ำชั่วคราว, ขอมิเตอร์ไฟฟ้าชั่วคราว พร้อมทั้งสร้างบ้านพักคนงาน, ห้องน้ำคนงาน, สโตร์เก็บวัสดุ, สำนักงานชั่วคราว, ล้อมรั้วโครงการ เพื่อความพร้อมในงานก่อสร้าง ซึ่งถือเป็นส่วนหนึ่งของค่าจ้างเหมาก่อสร้างตามสัญญานี้ เป็นจำนวนเงิน</p> 
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section3_amount" htmlFor="inputText">จำนวนเงิน(บาท)</label>
                    <input name="section3_amount" className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-6 col-md-12 d-flex align-items-center">
                <p>แต่เนื่องจากลูกค้ามีการชำระเงินมาแล้วบางส่วน เป็นเงินจำนวน</p> 
            </div>
            <div className="col-xl-3 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section3_before_amount" htmlFor="inputText">จำนวนเงิน(บาท)</label>
                    <input name="section3_before_amount" className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-12 d-flex align-items-center">
                <p>จึงคงเหลือค่าจ้าง</p> 
            </div>
            <div className="col-xl-3 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section3_outstanding_percent" htmlFor="inputText">ค่าจ้าง(%)</label>
                    <input name="section3_outstanding_percent" className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-12 d-flex align-items-center">
                <p>ที่ให้ชำระเป็นเงินจำนวน</p> 
            </div>
            <div className="col-xl-3 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section3_outstanding_amount" htmlFor="inputText">จำนวนเงิน(บาท)</label>
                    <input name="section3_outstanding_amount" className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-4 col-md-12 d-flex align-items-center">
                <p>ส่วนที่เหลือตามสัญญา เป็นจำนวนเงิน</p> 
            </div>
            <div className="col-xl-8 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section3_balance" htmlFor="inputText">จำนวนเงิน(บาท)</label>
                    <input name="section3_balance" className="form-control shadow-none input-tabs4" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 col-md-12 d-flex align-items-center">
                <p>ให้ผู้ว่าจ้างชำระเป็นงวดๆ ตามข้อ 3.2 หากมีประกาศเปลี่ยนแปลงอัตราภาษีนี้ใหม่เพิ่มเติม ราคาค่าจ้างจะเพิ่มหรือลดตามสัดส่วนของภาษี</p> 
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-xl-7 col-md-12 d-flex align-items-center">
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2 ผู้ว่าจ้างตกลงจ่ายและผู้รับจ้างตกลงรับเงินค่าจ้าง โดยกำหนดการจ่ายเงินเป็นงวดๆ ดังนี้</p> 
            </div>
            <div className="col-xl-5 col-md-12 d-flex align-items-left">
                <div className="textOnInput mb-4">
                    <label name="section3_installment_amount" htmlFor="inputText">จำนวนงวด</label>
                    <input name="section3_installment_amount" className="form-control shadow-none input-tabs4" autoComplete="off"  onChange={(e) => setInstallmentAmount(e.target.value)}></input>
                </div>
            </div>
        </div>
        <table>
            <tbody id="installmentContent">
                {installmentRow}
            </tbody>
        </table>
        <br/>
        <div className="row">
            <div className="col-xl-12 col-md-12 d-flex align-items-center">
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การชำระเงินดังกล่าวข้างต้น ผู้ว่าจ้างจะต้องนำเงินไปชำระยังสถานที่ทำงานในเวลาทำการปกติของผู้รับจ้าง หรือ สถานที่ที่ผู้ว่าจ้างแจ้งให้ทางผู้รับจ้างไปรับ หากผู้ว่าจ้างชำระเงินเป็นเช็ค จะมีผลสมบูรณ์ก็ต่อเมื่อเช็คนั้นๆเรียกเก็บเงินเรียบร้อยแล้ว</p> 
            </div>
        </div>
    </>  
  )
}

export default PartSix