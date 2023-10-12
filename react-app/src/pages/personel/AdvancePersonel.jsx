import { useState } from "react";

function advancePersonelMethod(employeeData) {
    const token = window.localStorage.getItem("token");
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeData),
    };
    return fetch(`http://localhost:9093/api/v1/advance/createAdvance/${token}`, options)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error("Server Error");
            }
            console.log(resp);
            return resp.json();
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err.message);
        });
}



// =============Sayfa Componentleri============
export function AdvancePersonel() {
    // const navigate= useNavigate();

    const [employeeData, setEmployeeData] = useState({
        token: localStorage.getItem("token"),
        description: "",
        amount: "",
        currency: "",
    });

    function handleChange(e) {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    }

    function advanceSaveSubmit(e) {
        e.preventDefault();
        advancePersonelMethod(employeeData).then((data) => {
            if (data) {
                console.log(data);
            }
        });
    }
    return (
        <>
            <h2>Avans Talep Et</h2>
            <form onSubmit={advanceSaveSubmit}>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={employeeData.amount}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={employeeData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Currency:</label>
                    <input
                        type="text"
                        name="currency"
                        value={employeeData.currency}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
