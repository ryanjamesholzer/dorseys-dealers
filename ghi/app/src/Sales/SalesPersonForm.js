import { useState } from "react";

function SalesPersonForm() {

    const noData = {
        name: "",
        employee_number: "",
    }

    const [salesPersonData, setSalesPersonData] = useState(noData);

    const handleChange = (event) => {
        setSalesPersonData({...salesPersonData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const salesPersonUrl = "http://localhost:8090/api/salespersons/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify({...salesPersonData}),
            headers: {"Content-Type": "application/json"},
        }
        const response = await fetch(salesPersonUrl, fetchConfig);
        if (response.ok) {
            const newSalesPerson = await response.json();
            setSalesPersonData(noData);
            alert(`Welcome to the Dorsey's team, ${newSalesPerson.name}!`);
        } else {
            alert("Something went wrong!");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Register a Sales Person</h1>
                <form onSubmit={handleSubmit} id="employee-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleChange} value={salesPersonData.name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleChange} value={salesPersonData.employee_number} placeholder="employee_number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                        <label htmlFor="employee_number">Employee Number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SalesPersonForm
