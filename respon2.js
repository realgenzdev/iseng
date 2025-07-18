import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  const [sisi, setSisi] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luas, setLuas] = useState('');

  const hitungLuasPermukaan = () => {
    const S = parseFloat(sisi);
    const T = parseFloat(tinggi);
    if (isNaN(S) || isNaN(T)) return;
    const Tsegitiga = Math.sqrt(Math.pow(0.5 * S, 2) + Math.pow(T, 2));
    const luasPermukaan = Math.pow(S, 2) + (4 * 0.5 * S * Tsegitiga);
    setLuas(luasPermukaan.toFixed(2));
  };

  return (
    <Container className="border p-3 mt-4" style={{ maxWidth: '700px' }}>
      <Row className="mb-3 align-items-center">
        <Col>
          <div className="border rounded text-center p-2">Judul Website</div>
        </Col>
        <Col xs="auto">
          <div className="border rounded-circle text-center" style={{ width: 60, height: 60, lineHeight: '60px' }}>Logo</div>
        </Col>
      </Row>

      <Row className="mb-3 justify-content-between text-center">
        <Col><Button variant="outline-dark" className="w-100">0098</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">PENDAFTARAN</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">INFORMASI</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">KONTAK KAMI</Button></Col>
      </Row>

      <div className="border p-3 mb-3">
        <div className="mb-2 fw-bold">Limas Segi Empat</div>
        <Form>
          <Form.Group className="mb-2 d-flex align-items-center">
            <Form.Label className="me-3 mb-0" style={{ minWidth: '100px' }}>Panjang Sisi</Form.Label>
            <Form.Control type="number" value={sisi} onChange={(e) => setSisi(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2 d-flex align-items-center">
            <Form.Label className="me-3 mb-0" style={{ minWidth: '100px' }}>Tinggi Limas</Form.Label>
            <Form.Control type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2 d-flex align-items-center">
            <Button variant="secondary" size="sm" onClick={hitungLuasPermukaan} className="me-3">Hitung</Button>
            <Form.Label className="me-3 mb-0" style={{ minWidth: '100px' }}>Luas Permukaan</Form.Label>
            <Form.Control type="text" readOnly value={luas} />
          </Form.Group>
        </Form>
      </div>

      <div className="text-center border-top pt-3">
        <p className="mb-0">Muhammad Fadhil@copyright 2025</p>
      </div>
    </Container>
  );
}

export default App;
