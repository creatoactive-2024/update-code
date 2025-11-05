import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
import Registration from '@/pages/Website/Registration';
import Pricing from './pages/Website/Pricing';
import PaymentSuccessful from './pages/Website/PaymentSuccessful';
import Checkout from './pages/Website/Checkout';
import About from './pages/Website/About';
import TandC from './pages/Website/Terms&Condition';

import MyBooking from '@/pages/CustomerDashboard/MyBooking';
import MyProfile from '@/pages/CustomerDashboard/MyProfile';



import DriverDashboard from '@/pages/DriverDashboard/DriverDashboard';
import DriverRegistration from '@/pages/DriverDashboard/DriverRegistration';

import AdminLayout from '@/pages/AdminPanel/AdminLayout';
import AdminDashboard from '@/pages/AdminPanel/pages/Dashboard';
import Users from '@/pages/AdminPanel/pages/Users';
import Bookings from '@/pages/AdminPanel/pages/Bookings';
import Reports from '@/pages/AdminPanel/pages/Reports';
import Coupons from '@/pages/AdminPanel/pages/Coupons';
import AddNewBooking from './pages/AdminPanel/pages/AddNewBooking';
import AddNewDriver from './pages/AdminPanel/pages/AddNewDriver';
import AddNewSupervisor from './pages/AdminPanel/pages/AddNewSupervisor';



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
    <Route path='/registration' element={<Registration />} />
    <Route path='/pricing' element={<Pricing/>} />
    <Route path='/paymentsuccessful' element={<PaymentSuccessful/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/termsandCondition' element={<TandC/>} />

    <Route path='/checkoutstripe' element={<CheckoutButton/>} />

    
    <Route path='/mybooking' element={<MyBooking />} />
    <Route path='/myprofile' element={<MyProfile />} />


    <Route path='/dashboard' element={<DriverDashboard />} />
    <Route path='/driverregistration' element={<DriverRegistration />} />


    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="reports" element={<Reports />} />
      <Route path="coupons" element={<Coupons />} />
      <Route path="add-booking" element={<AddNewBooking />} />
      <Route path="add-driver" element={<AddNewDriver />} />
      <Route path="add-supervisor" element={<AddNewSupervisor/>} />
    </Route>

  </Routes>
  
);

export default AppRoutes;