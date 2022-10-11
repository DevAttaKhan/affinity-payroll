import React, { useState ,useEffect} from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";
// import Avatar from "../Avatar/Index";
import Portal from "../Portal/Portal";
import Button from "../Button/Index";
import attendanceData from '../../data/attendanceDB.json';

const AttendanceConfigTable = () => {
  const [empAttendance, setEmpAttendance] = useState({});
  const [popupState, setPopupState] = useState(false);

  const columns = [
    { path: "id", lable: "S.NO" },
    {
      path: "name",
      lable: "Name",
      // content: (emp) => (
      //   <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
      // ),
    },
    {
      path: "dept",
      lable: "Department",
    },
    {
      path: "date",
      lable: "Date",
    },
    {
      path: "timeIn",
      lable: "Time In",
    },
    {
      path: "timeOut",
      lable: "Time Out",
    },

    {
      path: "edit",
      lable: "Edit",
      content: (emp) => (
        <button onClick={() => handleClick(emp)}>
          <EditeIcon width={16} />
        </button>
      ),
    },
  ];

  const [attState, setAttState] = useState([]);
  let tableData = [];

  useEffect(() => {
    if (attendanceData.length > 0) {
      // eslint-disable-next-line
      tableData = attendanceData.map(dataItem => {
        const { id, name, department,dept, designation, date, timeOut,timeIn} = dataItem;
        return { id, name, department,dept, designation, date, timeOut,timeIn} 

      });
      setAttState(tableData)
    }
    // eslint-disable-next-line
  }, [attendanceData])


  function handleClick(emp) {
    setEmpAttendance(emp);
    setPopupState(true);
  }
  return (
    <>
      <CardContainer title="Attandance List">
      {attState.length > 0 ? (<Table data={attState} columns={columns} />
      ) : (<></>)}
      </CardContainer>

      {popupState && (
        <Portal>
          <div className="overlay" onClick={() => setPopupState(false)}></div>
          <div className="modal w-25">
            <div className="mb-3 fs-6 ">
              <span className="me-4">Name:</span>
              <span>{empAttendance.name}</span>
            </div>
            <div className="mb-3 fs-6">
              <span className="me-4">Department:</span>
              <span>{empAttendance.department}</span>
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Date:</span>
              <input type="date" className="form-control d-inline" />
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Time In:</span>
              <input type="time" className="form-control d-inline" />
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Time Out:</span>
              <input type="time" className="form-control d-inline" />
            </div>
            <Button btnText="Update" onClick={() => setPopupState(false)} />
          </div>
        </Portal>
      )}
    </>
  );
};

export default AttendanceConfigTable;
