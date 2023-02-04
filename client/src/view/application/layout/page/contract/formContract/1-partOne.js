import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PartOne = () => {

    const [startDate,setStartDate] = useState(Date.now());

  return (
      <div className="row">
          <div className="col-xl-9 col-md-6"></div>
          <div className="col-xl-3 col-md-6 mb-2">
              <div className="textOnInput">
                      <label name="document_number" htmlFor="inputText">สัญญาเลขที่</label>
                      <input name="document_number" className="form-control shadow-none input-tabs1" autoComplete="off" defaultValue="AUTO"></input>
              </div>
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
                      selected={startDate}
                      showYearDropdown
                      scrollableMonthYearDropdown
                      onChange={(date) => setStartDate(date)}
                      />
              </div>
          </div>
      </div>
  )
}

export default PartOne