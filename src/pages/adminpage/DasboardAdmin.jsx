import React from "react";
import { Navigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import HeaderAdmin from "../../components/HeaderAdmin";

const DashboardAdmin = ({ children }) => {
  return (
    <div>
      <HeaderAdmin />
      <SideBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Beranda</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <TableauViz />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardAdmin;
