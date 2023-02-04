import React from 'react'

const PartFour = () => {
  return (
    <><br/>
        <div className="row">
            <div className="col-xl-12 col-md-12">
                <br/>
                <p style={{textAlign:'justify'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>หมวดที่ 1 วัตถุประสงค์ของสัญญา</strong>
                </p> 
            </div>
        </div>
        <div className="row">
            <div className="col-xl-8 col-md-6 d-flex align-items-center">
                <label className="label-custom">ผู้ว่าจ้างตกลงจ้างและผู้รับจ้างตกลงรับจ้างทำการก่อสร้างบ้านพักอาศัยแบบ</label>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_residential_house"htmlFor="inputText">แบบบ้านพักอาศัย</label>
                    <input name="section1_residential_house"className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 col-md-12 d-flex align-items-center">
                <label className="label-custom">ซึ่งตั้งอยู่บนที่ดินของผู้ว่าจ้าง หรือ ที่ดินที่ผู้ว่าจ้างได้รับความยินยอมจากเจ้าของให้ทำการก่อสร้าง ซึ่งที่ดินดังกล่าวเป็นที่ดินโฉนดเลขที่</label>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_deed_no" htmlFor="inputText">โฉนดเลขที่</label>
                    <input name="section1_deed_no" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_area" htmlFor="inputText">ระวาง</label>
                    <input name="section1_area" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_land_number" htmlFor="inputText">เลขที่ดิน</label>
                    <input name="section1_land_number" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_page_area" htmlFor="inputText">หน้าสำรวจ</label>
                    <input name="section1_page_area" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_sub_district" htmlFor="inputText">ตำบล/แขวง</label>
                    <input name="section1_sub_district" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_district" htmlFor="inputText">อำเภอ/เขต</label>
                    <input name="section1_district" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="section1_province" htmlFor="inputText">จังหวัด</label>
                    <input name="section1_province" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex align-items-center">
                <label className="label-custom">และมีเนื้อที่ประมาณ</label>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-4 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section1_ri" htmlFor="inputText">ไร่</label>
                    <input name="section1_ri" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-4 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section1_ngan" htmlFor="inputText">งาน</label>
                    <input name="section1_ngan" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-4 col-md-12">
                <div className="textOnInput mb-4">
                    <label name="section1_tarang_wa" htmlFor="inputText">ตารางวา</label>
                    <input name="section1_tarang_wa" className="form-control shadow-none input-tabs2" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 col-md-12 d-flex align-items-center">
                <p style={{textAlign:'justify'}}>โดยมีเอกสารแนบท้าย คือ รายละเอียดอาคาร, เอกสารเสนอราคา, รายการวัสดุก่อสร้าง
                    และบัญชีแสดงปริมาณวัสดุและราคา ที่ใช้ในการก่อสร้าง ถือเป็นส่วนหนึ่งของสัญญานี้ ซึ้งต่อไปจะเรียกว่า <strong>"งานที่จ้าง"</strong>
                </p>
            </div>
        </div>
    </>  
  )
}

export default PartFour