import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PartOne = ({date, setDate}) => {

  return (
      <div className="row">
          <div className="col-xl-9 col-md-6"></div>
          <div className="col-xl-3 col-md-6 mb-2">
              
          <div className="textOnInput">
            <label name="document_number" htmlFor="inputText">สัญญาเลขที่</label>
            <label name="document_format" htmlFor="inputText"></label>
            <div className="input-group mb-3" name="frame-group">
            <select className="custom-select form-control shadow-none index-z-0" name="document_format">
                    <option defaultValue="CT">CT</option>
                    <option defaultValue="CTF">CTF</option>
                    <option defaultValue="CTS">CTS</option>
            </select>
            <input name="document_number" className="form-control shadow-none input-tabs1 index-z-0" autoComplete="off" defaultValue="AUTO"></input>
            </div>
          </div>

              {/* <div className="textOnInput">
                      <label name="document_number" htmlFor="inputText">สัญญาเลขที่</label>
                      <input name="document_number" className="form-control shadow-none input-tabs1" autoComplete="off" defaultValue="AUTO"></input>
              </div> */}
              <div className="textOnInput">
                      <label name="do_at" htmlFor="inputText">ทำที่</label>
                      <input name="do_at" className="form-control shadow-none input-tabs1" autoComplete="off"></input>
              </div>
              <div className="textOnInput date-picker-cus">
                      <label name="date" htmlFor="inputText">วันที่</label>
                      <DatePicker
                      name="date"
                      className="form-control shadow-none input-tabs1"  
                      dateFormat="dd/MM/yyyy"
                      selected={(date === undefined)?Date.now():new Date(date)}
                      showYearDropdown
                      scrollableMonthYearDropdown
                      onChange={(date) => setDate(date)}
                      />
              </div>
          </div>
      </div>
  )
}

export default PartOne