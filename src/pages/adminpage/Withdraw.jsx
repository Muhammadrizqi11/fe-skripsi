import React, { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumb, Table, Button } from "react-bootstrap";
import withAuth from "../../hoc/withAuth";
import AddWithdraw from "../../components/AddWithdraw";

const Withdraw = () => {
  const [withdraws, setWithdraws] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // useEffect(() => {
  //   getWithdraws();
  // }, []);

  // const getWithdraws = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_API_URL}/withdraws`);
  //     setWithdraws(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       if (error.response) {
  //         if (error.response.data) {
  //           console.error("Internal Server Error: ", error.response.data);
  //         } else {
  //           console.error(`Error ${error.response.status}: ${error.response.data}`);
  //         }
  //       } else if (error.request) {
  //         console.error("No response received: ", error.request);
  //       } else {
  //         console.error("Error in setting up request: ", error.message);
  //       }
  //     } else {
  //       console.error("Unexpected error: ", error);
  //     }
  //   }
  // };

  const handleAddShow = () => setShowAddModal(true);
  const handleAddClose = () => setShowAddModal(false);

  // const deleteWithdraw = async (id) => {
  //   try {
  //     await axios.delete(`${import.meta.env.VITE_API_URL}/withdraw/${id}`);
  //     getWithdraws();
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       if (error.response) {
  //         if (error.response.data) {
  //           console.error("Internal Server Error: ", error.response.data);
  //         } else {
  //           console.error(`Error ${error.response.status}: ${error.response.data}`);
  //         }
  //       } else if (error.request) {
  //         console.error("No response received: ", error.request);
  //       } else {
  //         console.error("Error in setting up request: ", error.message);
  //       }
  //     } else {
  //       console.error("Unexpected error: ", error);
  //     }
  //   }
  // };

  return (
    <div>
      <div className="pagetitle">
        <h4>Withdraw Requests</h4>
        <Breadcrumb>
          <Breadcrumb.Item href="#" style={{ textDecoration: "none" }}>
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Withdraw Requests</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div style={{ backgroundColor: "#ffffff", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", padding: "16px", borderRadius: "6px" }}>
        <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
          <h5 className="fw-bold">Daftar Withdraw</h5>
          <Button className="btn btn-outline-light" onClick={handleAddShow}>
            <i className="fa-solid fa-plus fa-fade me-2"></i>Buat Withdraw Baru
          </Button>
        </div>
        <Table hover size="min-vh-200 mt-5">
          <thead>
            <tr className="fw-bold">
              <th>Request By</th>
              <th>Amount</th>
              <th>Bank</th>
              <th>Account Number</th>
              <th>Status</th>
              <th>Request On</th>
            </tr>
          </thead>
          <tbody>
            {withdraws.map((withdraw, index) => (
              <tr key={index}>
                <td>{withdraw.requestBy}</td>
                <td>{withdraw.amount}</td>
                <td>{withdraw.bank}</td>
                <td>{withdraw.accountNumber}</td>
                <td>{withdraw.status}</td>
                <td>{withdraw.requestOn}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <AddWithdraw show={showAddModal} handleClose={handleAddClose} />
    </div>
  );
};

export default withAuth(Withdraw);
