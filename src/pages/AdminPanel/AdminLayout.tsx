import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './scss/admin.scss';


interface AdminLayoutProps {}

const AdminLayout: React.FC<AdminLayoutProps> = () => {
  return (
    <div className="admin-layout d-flex">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="admin-main flex-grow-1 d-flex flex-column">
        {/* Topbar */}
        <header className="admin-topbar">
          <Topbar />
        </header>

        {/* Nested routes will render here */}
        <main className="admin-content flex-grow-1 p-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
