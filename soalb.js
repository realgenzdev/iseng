import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Pastikan sudah mengimpor Bootstrap CSS
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  const [jariJari, setJariJari] = useState('');  // Menyimpan panjang jari-jari
  const [tinggi, setTinggi] = useState('');  // Menyimpan tinggi tabung
  const [luas, setLuas] = useState('');  // Menyimpan hasil luas permukaan

  // Fungsi untuk menghitung luas permukaan tabung
  const hitungLuasPermukaan = () => {
    const r = parseFloat(jariJari);  // Menghitung jari-jari
    const t = parseFloat(tinggi);  // Menghitung tinggi
    if (isNaN(r) || isNaN(t)) return;  // Validasi input angka

    // Rumus luas permukaan tabung: 2 * π * r * (r + t)
    const luasPermukaan = (2 * Math.PI * r * (r + t)).toFixed(2);
    setLuas(luasPermukaan);  // Menyimpan hasil perhitungan luas permukaan
  };

  return (
    <Container className="border p-3 mt-4" style={{ maxWidth: '700px' }}>
      {/* Navbar dengan Logo di Kiri */}
      <Row className="mb-3 align-items-center">
        <Col xs="auto">
          <div className="border rounded-circle text-center" style={{ width: 60, height: 60, lineHeight: '60px' }}>Logo</div>
        </Col>
        <Col>
          <div className="text-center">
            <div className="fw-bold">Judul Website</div>
          </div>
        </Col>
      </Row>

      {/* Navbar Menu */}
      <Row className="mb-3 justify-content-between text-center">
        <Col><Button variant="outline-dark" className="w-100">NIM</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">HOME</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">ABOUT</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">CONTACT US</Button></Col>
      </Row>

      {/* Form untuk menghitung luas permukaan tabung */}
      <div className="border p-3 mb-3">
        <div className="mb-2 fw-bold">Tabung</div>
        <Form>
          {/* Input untuk panjang jari-jari */}
          <Form.Group className="mb-2 d-flex align-items-center">
            <Form.Label className="me-3 mb-0" style={{ minWidth: '150px' }}>Panjang Jari-Jari</Form.Label>
            <Form.Control type="number" value={jariJari} onChange={(e) => setJariJari(e.target.value)} />
          </Form.Group>
          {/* Input untuk tinggi tabung */}
          <Form.Group className="mb-2 d-flex align-items-center">
            <Form.Label className="me-3 mb-0" style={{ minWidth: '150px' }}>Tinggi Tabung</Form.Label>
            <Form.Control type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} />
          </Form.Group>
          {/* Tombol untuk menghitung luas permukaan */}
          <Form.Group className="mb-2 d-flex align-items-center">
            <Button variant="secondary" size="sm" onClick={hitungLuasPermukaan} className="me-3">Hitung</Button>
            <Form.Label className="me-3 mb-0" style={{ minWidth: '150px' }}>Luas Permukaan</Form.Label>
            <Form.Control type="text" readOnly value={luas} />
          </Form.Group>
        </Form>
      </div>

      {/* Footer */}
      <div className="text-center border-top pt-3">
        <p className="mb-0">Nama @copyright 2025</p>
      </div>
    </Container>
  );
}

export default App;