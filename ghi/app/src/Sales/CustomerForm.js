import { useState } from "react";

function CustomerForm() {

    const noData = {
        name: "",
        address: "",
        phone_number: "",
    }

    const [customerData, setCustomerData] = useState(noData)

    const handleChange = (event) => {
        setCustomerData({...customerData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const customerUrl = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify({...customerData}),
            headers: {"Content-Type": "application.json"}
        }
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();
            setCustomerData(noData);
            alert(`Welcome to the Dorsey family, ${newCustomer.name}!`);
        } else {
            alert("Something went wrong creating customer!");
        }
    }

    return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Register a Customer</h1>
            <form onSubmit={handleSubmit} id="customer-form">
              <div className="form-floating mb-3">
                <input onChange={handleChange} value={customerData.name} placeholder="Enter your full name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleChange} value={customerData.address} placeholder="Enter your address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleChange} value={customerData.phone_number} placeholder="Enter your phone number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="city">Phone</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        </div>
    )
}

export default CustomerForm;
