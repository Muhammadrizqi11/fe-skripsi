import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const AddWithdraw = ({ show, handleClose, getWithdraws }) => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/withdraws`, {
        bank,
        accountNumber,
        accountName,
        amount,
      });
      handleClose();
      getWithdraws();
    } catch (error) {
      console.error("Error adding withdraw: ", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="mt-4">
      <Modal.Header closeButton>
        <Modal.Title>Buat Withdraw Baru</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Bank</Form.Label>
            <Form.Control type="text" placeholder="Enter bank name" value={bank} onChange={(e) => setBank(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Account Number</Form.Label>
            <Form.Control type="text" placeholder="Enter account number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Account Name</Form.Label>
            <Form.Control type="text" placeholder="Enter account name" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Tambah Withdraw
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddWithdraw;
