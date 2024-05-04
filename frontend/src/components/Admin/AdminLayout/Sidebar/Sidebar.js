import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/admin">
            <i className="bi bi-grid" />
            <span>Controle panel</span>
          </Link>
        </li>
        <li className="nav-heading">Gestion Utilisateurs</li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/user-list">
            <i className="bi bi-person" />
            <span>Listes</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/orders">
            <i className="bi bi-question-circle" />
            <span>Reservations</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/orders-inactive">
            <i className="bi bi-question-circle" />
            <span>Historiques</span>
          </Link>
        </li>
        <li className="nav-heading">Gestion Partennaires</li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/partners">
            <i className="bi bi-person" />
            <span>Listes</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/partners-request">
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
