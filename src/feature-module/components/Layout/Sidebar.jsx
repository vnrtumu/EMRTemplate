import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuItems from '../../../core/data/menuItems';

const Sidebar = () => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (label) => {
    setExpandedMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (path) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const renderSubmenuItems = (children) => {
    return children.map((child) => {
      if (child.type === 'submenu-two') {
        return (
          <li key={child.label} className="submenu submenu-two">
            <a href="#/" onClick={(e) => { e.preventDefault(); toggleSubmenu(child.label); }}>
              {child.label}<span className="menu-arrow inside-submenu"></span>
            </a>
            <ul style={{ display: expandedMenus[child.label] ? 'block' : 'none' }}>
              {child.children.map(sub => (
                <li key={sub.label}>
                  <Link to={sub.path} className={isActive(sub.path) ? 'active' : ''}>{sub.label}</Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      return (
        <li key={child.label}>
          <Link to={child.path} className={isActive(child.path) ? 'active' : ''}>{child.label}</Link>
        </li>
      );
    });
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-logo">
        <div>
          <Link to="/" className="logo logo-normal">
            <img src="/assets/img/logo.svg" alt="Logo" />
          </Link>
          <Link to="/" className="logo-small">
            <img src="/assets/img/logo-small.svg" alt="Logo" />
          </Link>
          <Link to="/" className="dark-logo">
            <img src="/assets/img/logo-dark.svg" alt="Logo" />
          </Link>
        </div>
        <button className="sidenav-toggle-btn btn border-0 p-0 active" id="toggle_btn">
          <i className="ti ti-arrow-bar-to-left"></i>
        </button>
        <button className="sidebar-close">
          <i className="ti ti-x align-middle"></i>
        </button>
      </div>
      <div className="sidebar-inner" data-simplebar>
        <div id="sidebar-menu" className="sidebar-menu">
          <ul role="menu" aria-label="Main navigation menu">
            {menuItems.map((item) => {
              if (item.type === 'menuTitle') {
                return <li key={item.title} className="menu-title" aria-disabled="true"><span>{item.title}</span></li>;
              }
              if (item.type === 'submenu') {
                return (
                  <li key={item.label} className="submenu">
                    <a href="#/" onClick={(e) => { e.preventDefault(); toggleSubmenu(item.label); }} className={isActive(item.path) ? 'active' : ''}>
                      <i className={`ti ${item.icon}`}></i><span>{item.label}</span>
                      <span className="menu-arrow"></span>
                    </a>
                    <ul style={{ display: expandedMenus[item.label] ? 'block' : 'none' }}>
                      {renderSubmenuItems(item.children)}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <Link to={item.path} className={isActive(item.path) ? 'active' : ''}>
                    <i className={`ti ${item.icon}`}></i><span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
