import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CustomerForm from './Sales/CustomerForm';
import SalesPersonForm from './Sales/SalesPersonForm';
import SalesList from './Sales/SalesList';
import SaleForm from './Sales/SaleForm';
import TechnicianForm from './Service/TechnicianForm';
import AppointmentForm from './Service/AppointmentForm';
import AppointmentList from './Service/AppointmentList';
import AppointmentHistory from './Service/AppointmentHistory';
import AutomobilesList from './Inventory/AutomobilesList';
import AutomobileForm from './Inventory/AutomobileForm';
import ModelsList from './Inventory/ModelsList';
import ModelForm from './Inventory/ModelForm';
import ManufacturersList from './Inventory/ManufacturersList';
import ManufacturerForm from './Inventory/ManufacturerForm';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/models" element={<ModelsList />} />
          <Route path="/models/new" element={<ModelForm />} />
          <Route path="/automobiles" element={<AutomobilesList />} />
          <Route path="/automobiles/new" element={<AutomobileForm />} />
          <Route path="/sales" element={<SalesList />} />
          <Route path="/sales/new" element={<SaleForm />} />
          <Route path="/salesperson" element={<SalesPersonForm />} />
          <Route path="/customer" element={<CustomerForm />} />
          <Route path="/technician" element={<TechnicianForm />} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/appointments/history" element={<AppointmentHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
