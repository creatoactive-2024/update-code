import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedAdminRoute from "@/components/ProtectedAdminRoute";
import ProtectedDriverRoute from "@/components/ProtectedDriverRoute";

import CheckoutButton from '@/pages/Website/CheckoutButton';

import Home from '@/pages/Website/Home';
import Location from '@/pages/Website/Location';
import Services from '@/pages/Website/Services';
import AddonServices from '@/pages/Website/AddonServices';
import ContactUs from '@/pages/Website/ContactUs';
import Help from '@/pages/Website/Help';
import FAQ from '@/pages/Website/FAQ';
import ViewRates from '@/pages/Website/ViewRates';
import SignIn from '@/pages/Website/SignIn';
import ForgotPassword from '@/pages/Website/ForgotPassword';
import ResetPassword from '@/pages/Website/ResetPassword';
import PasswordUpdate from '@/pages/Website/PasswordUpdate';
import Registration from '@/pages/Website/Registration';
import Pricing from './pages/Website/Pricing';
import PaymentSuccessful from './pages/Website/PaymentSuccessful';
import PaymentReceipt from './pages/Website/PaymentReceipt';
import Checkout from './pages/Website/Checkout';
import About from './pages/Website/About';
import TandC from './pages/Website/Terms&Condition';

import MyBooking from '@/pages/CustomerDashboard/MyBooking';
import MyProfile from '@/pages/CustomerDashboard/MyProfile';



import DriverDashboard from '@/pages/DriverDashboard/DriverDashboard';
import DriverRegistration from '@/pages/DriverDashboard/DriverRegistration';
import DriverSignIn from '@/pages/DriverDashboard/SignIn';

import AdminLayout from '@/pages/AdminPanel/AdminLayout';
import AdminDashboard from '@/pages/AdminPanel/pages/Dashboard';
import Users from '@/pages/AdminPanel/pages/Users';
import Bookings from '@/pages/AdminPanel/pages/Bookings';
import Reports from '@/pages/AdminPanel/pages/Reports';
import Coupons from '@/pages/AdminPanel/pages/Coupons';
import AddNewBooking from './pages/AdminPanel/pages/AddNewBooking';
import AddNewDriver from './pages/AdminPanel/pages/AddNewDriver';
import AddNewSupervisor from './pages/AdminPanel/pages/AddNewSupervisor';
import SelectDriver from './pages/AdminPanel/pages/SelectDriver';
import AdDriverDashboard from './pages/AdminPanel/pages/AdDriverDashboard';
import SelectSupervisor from './pages/AdminPanel/pages/SelectSupervisor';
import AdminSignIn from './pages/AdminPanel/pages/SignIn';
import ProgressTask from './pages/DriverDashboard/ProgressTask';


const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/location' element={<Location />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    <Route path='/addonservices' element={<AddonServices />} />
    <Route path='/contact' element={<ContactUs />} />
    <Route path='/help' element={<Help />} />
    <Route path='/faq' element={<FAQ />} />
    <Route path='/rates' element={<ViewRates />} />
    <Route path='/signin' element={<SignIn />} />
    <Route path='/forgotpassword' element={<ForgotPassword />} />
    <Route path='/resetpassword' element={<ResetPassword />} />
    <Route path="/resetpassword/:token" element={<ResetPassword />} />
    <Route path='/passwordupdate' element={<PasswordUpdate />} />
    <Route path='/registration' element={<Registration />} />
    <Route path='/pricing' element={<Pricing/>} />
    <Route path='/paymentsuccessful' element={<PaymentSuccessful/>} />
    <Route path='/paymentreceipt' element={<PaymentReceipt/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/termsandCondition' element={<TandC/>} />

    <Route path='/checkoutstripe' element={<CheckoutButton/>} />

    
    <Route path='/mybooking' element={<MyBooking />} />
    <Route path='/myprofile' element={<MyProfile />} />

    <Route path='/driverregistration' element={<DriverRegistration />} />
    <Route path="/driver/signin" element={<DriverSignIn />} />

    <Route element={<ProtectedDriverRoute />}>
      <Route path='/dashboard' element={<DriverDashboard />} />
      <Route path='/progresstask' element={<ProgressTask />} />
    </Route>

    <Route path="/admin/signin" element={<AdminSignIn />} />


    {/* <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="driver-daily-report" element={<Reports />} />
      <Route path="coupon-management" element={<Coupons />} />
      <Route path="add-booking" element={<AddNewBooking />} />
      <Route path="add-driver" element={<AddNewDriver />} />
      <Route path="select-driver" element={<SelectDriver />} />
      <Route path="add-supervisor" element={<AddNewSupervisor/>} />
      <Route path="drivers-dashboard" element={<AdDriverDashboard/>} />
      <Route path="select-supervisor" element={<SelectSupervisor/>} />
    </Route> */}
    <Route element={<ProtectedAdminRoute />}>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="driver-daily-report" element={<Reports />} />
        <Route path="coupon-management" element={<Coupons />} />
        <Route path="add-booking" element={<AddNewBooking />} />
        <Route path="add-driver" element={<AddNewDriver />} />
        <Route path="select-driver" element={<SelectDriver />} />
        <Route path="add-supervisor" element={<AddNewSupervisor />} />
        <Route path="drivers-dashboard" element={<AdDriverDashboard />} />
        <Route path="select-supervisor" element={<SelectSupervisor />} />
      </Route>
    </Route>

  </Routes>
  
);

export default AppRoutes;