import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FaqComponent from "../components/FaqComponent";

const SyaratPage = () => {
  return (
    <div className="syaratketen-page">
      <div className="syaratketen min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">Abadikan Momen Berhargamu Bersama Kami</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>Berikut adalah Syarat dan ketentuan yang harus di taati bersama</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Reservasi dan Pembayaran</h4>
              <ul>
                <li>Semua reservasi harus dilakukan minimal 1 hari sebelum tanggal pemotretan.</li>
                <li>Pembayaran penuh harus dibayarkan pada saat reservasi.</li>
                <li>Pembatalan reservasi tidak akan mendapatkan pengembalian dana</li>
              </ul>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Kehadiran dan Ketepatan Waktu</h4>
              <ul>
                <li>Pelanggan diharapkan datang tepat waktu sesuai jadwal yang telah disepakati.</li>
                <li>Keterlambatan dapat menyebabkan pengurangan waktu pemotretan atau pembatalan sesi tanpa pengembalian dana.</li>
              </ul>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Kepuasan Pelanggan</h4>
              <ul>
                <li>Studio berkomitmen untuk memberikan layanan terbaik kepada pelanggan. Jika ada keluhan atau ketidakpuasan, harap segera hubungi manajemen studio untuk penyelesaian.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratPage;
