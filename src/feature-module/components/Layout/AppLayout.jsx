import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const AppLayout = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-container">
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
