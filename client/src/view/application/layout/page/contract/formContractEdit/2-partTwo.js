import React from 'react'

const PartTwo = () => {
  return (
    <>
        <div className="row">
            <div className="col-xl-3 col-md-6 d-flex align-items-center">
                <label className="label-custom">หนังสือสัญญาฉบับนี้ทำขึ้นระหว่าง</label>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="prefix" htmlFor="inputText">คำนำหน้า</label>
                    <select name="prefix" className="form-control shadow-none input-tabs1" autoComplete="off" autoFocus>
                        <option value=""></option>
                        <option value="Mr">นาย</option>
                        <option value="Mrs">นาง</option>
                        <option value="Miss">นางสาว</option>
                    </select>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_name" htmlFor="inputText">ชื่อ</label>
                    <input name="employer_name" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_surname"htmlFor="inputText">นามสกุล</label>
                    <input name="employer_surname"className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_age" htmlFor="inputText">อายุ(ปี)</label>
                    <input name="employer_age" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_personal_code"htmlFor="inputText">บัตรประจำตัวประชาชนเลขที่</label>
                    <input name="employer_personal_code"className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_house_number" htmlFor="inputText">ที่อยู่บ้านเลขที่</label>
                    <input name="employer_house_number" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_village_group" htmlFor="inputText">หมู่ที่</label>
                    <input name="employer_village_group" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_alley" htmlFor="inputText">ตรอก/ซอย</label>
                    <input name="employer_alley" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_road" htmlFor="inputText">ถนน</label>
                    <input name="employer_road" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_sub_district" htmlFor="inputText">ตำบล/แขวง</label>
                    <input name="employer_sub_district" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_district" htmlFor="inputText">อำเภอ/เขต</label>
                    <input name="employer_district" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-4 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_province" htmlFor="inputText">จังหวัด</label>
                    <input name="employer_province" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="employer_zip_code" htmlFor="inputText">รหัสไปรษณีย์</label>
                    <input name="employer_zip_code" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
                </div>
            </div>
        </div>
    </>  
  )
}

export default PartTwo