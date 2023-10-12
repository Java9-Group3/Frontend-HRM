import { getShiftAndBreakInfo } from "../../api/Api";
import { useState, useEffect } from "react";

export function ShiftAndBreakInfo() {
    const token = window.localStorage.getItem("token");
    const defaultPersonel = {
      name: "",
      surname: "",
      jobShift: "",
      jobBreak: "",
      token: token,
    };
    const [dataShiftAndBreak, setDataShiftAndBreak] = useState({ ...defaultPersonel });
  
    useEffect(() => {
        getShiftAndBreakInfo(token).then((data) => setDataShiftAndBreak({ ...data, token: token }));
    }, []);
  
    return (
      <section className="personal-info">
        <h1>Shift And Break Information</h1>
        <div>
          <p>
            <strong>Name:</strong> {dataShiftAndBreak.name}
          </p>
          <p>
            <strong>Surname:</strong> {dataShiftAndBreak.surname}
          </p>
          <p>
            <strong>Job Shift:</strong> {dataShiftAndBreak.jobShift}
          </p>
          <p>
            <strong>Job Break:</strong> {dataShiftAndBreak.jobBreak}
          </p>
        </div>
      </section>
    );
  }