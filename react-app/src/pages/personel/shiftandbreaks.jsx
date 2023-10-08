//TAMAMLANACAK
import { useState, useEffect } from "react";

function getEmployeeInfoUrl() {
  return `http://localhost:9092/shiftsandbreaks/shiftinfo?companyName=${localStorage.getItem("companyName")}`;
}

console.log(localStorage.getItem("companyName"))
function getshiftandbreaks() {
    return fetch(employeeInfoUrl).then((resp) => {
        return resp.json();
    })
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => console.log(err.message));
}


export function shiftandbreaks(){
    const [companyInfo, setCompanyInfo] = useState("");
    useEffect(() => {
        fetchCompanyInfo().then((data) => {
            console.log(data);
            setCompanyInfo(data)
        }).catch((err) => {
            console.log(err.message)
        });
    }, []);
    return (
            
    )
}