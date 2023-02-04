import React from 'react'

const PartTwo = () => {
  return (
    <>
        <div className="row">
            <div className="col-xl-6 col-md-6 d-flex align-items-center">
                    <label htmlFor="inputText">ซึ่งต่อไปในหนังสือสัญญาฉบับนี้จะเรียกว่า <strong>"ผู้ว่าจ้าง"</strong> ฝ่ายหนึ่ง กับบริษัท</label>
            </div>
            <div className="col-xl-6 col-md-6">
                <div className="row">
                    <div className="col-xl-10 col-md-10 textOnInput2 mb-4">
                        <label name="contractor_company" htmlFor="inputText">บริษัท</label>
                        <input name="contractor_company" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                    </div>
                    <div className="col-xl-2 col-md-2 d-flex align-items-center">
                        <label htmlFor="inputText">จำกัด</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-4 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_company_number" htmlFor="inputText">ทะเบียนนิติบุคคล เลขที่</label>
                    <input name="contractor_company_number" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-8 col-md-6">
                <div className="row">
                    <div className="col-xl-8 col-md-6 textOnInput2 mb-4">
                        <label name="contractor_company_by" htmlFor="inputText">โดย</label>
                        <input name="contractor_company_by" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex align-items-center">
                        <label htmlFor="inputText">กรรมการผู้มีอำนาจทำการแทน</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_office_number" htmlFor="inputText">สำนักงานเลขที่</label>
                    <input name="contractor_office_number" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_village_group" htmlFor="inputText">หมู่ที่</label>
                    <input name="contractor_village_group" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_alley" htmlFor="inputText">ตรอก/ซอย</label>
                    <input name="contractor_alley" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_road" htmlFor="inputText">ถนน</label>
                    <input name="contractor_road" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_sub_district" htmlFor="inputText">ตำบล/แขวง</label>
                    <input name="contractor_sub_district" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_district" htmlFor="inputText">อำเภอ/เขต</label>
                    <input name="contractor_district" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_province" htmlFor="inputText">จังหวัด</label>
                    <input name="contractor_province" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="textOnInput mb-4">
                    <label name="contractor_zip_code" htmlFor="inputText">รหัสไปรษณีย์</label>
                    <input name="contractor_zip_code" className="form-control shadow-none input-tabs1" autoComplete="off" ></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 col-md-12">
                <br/>
                <p style={{textAlign:'justify'}}>ซึ่งต่อไปในสัญญานี้จะเรียกว่า <strong>"ผู้รับจ้าง"</strong> อีกฝ่ายหนึ่ง<br/>
                        <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โดยที่ผู้ว่าจ้างมีความประสงค์จะว่าจ้างผู้มีความรู้ความสามารถ ความชำนาญ และประสบการณ์ใน
                    ด้านการก่อสร้างบ้านพักอาศัยให้กับผู้ว่าจ้าง และ โดยที่ผู้รับจ้างเป็นผู้มีความสามารถ ความชำนาญ และ
                    ประสบการณ์ ในด้านดังกล่าว และประสงค์จะรับจ้างดำเนินการดังกล่าว ทั้งสองฝ่ายจึงได้ตกลงทำสัญญา
                    จ้างเหมาก่อสร้างกัน โดยมีข้อความดังต่อไปนี้
                </p>   
            </div>
        </div>
    </>  
  )
}

export default PartTwo