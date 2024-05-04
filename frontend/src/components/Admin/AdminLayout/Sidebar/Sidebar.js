import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const checkActive = (url) => {
    return location.pathname == url ? "active" : null
  }
  
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className={`nav-link collapsed ${checkActive("/admin")}`} to="/admin">
            <i className="bi bi-grid" />
            <span>Controle panel</span>
          </Link>
        </li>
        <li className="nav-heading">Gestion Utilisateurs</li>
        <li className="nav-item">
          <Link className={`nav-link collapsed ${checkActive("/admin/user-list")}`} to="/admin/user-list">
            <i className="bi bi-person" />
            <span>Listes</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link collapsed ${checkActive("/admin/orders")}`} to="/admin/orders">
            <i className="bi bi-question-circle" />
            <span>Reservations</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link collapsed ${checkActive("/admin/orders-inactive")}`} to="/admin/orders-inactive">
            <i className="bi bi-question-circle" />
            <span>Historiques</span>
          </Link>
        </li>
        <li className="nav-heading">Gestion Partennaires</li>
        <li className="nav-item">
          <Link className={`nav-link collapsed ${checkActive("/admin/partners")}`} to="/admin/partners">
            <i className="bi bi-person" />
            <span>Listes</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link collapsed ${checkActive("/admin/partners-request")}`} to="/admin/partners-request">
            <i className="bi bi-question-circle" />
            <span>Demandes</span>
          </Link>
        </li>
        <li className="nav-heading">Statistiques</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
