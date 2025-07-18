import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function App() {
  const [sisi, setSisi] = useState('');
  const [luas, setLuas] = useState('');

  const hitungLuas = () => {
    const s = parseFloat(sisi);
    if (!isNaN(s)) {
      setLuas(6 * s * s);
    }
  };

  return (
    <Container className="border p-3 mt-4" style={{ maxWidth: '700px' }}>
      {/* Header Judul & Logo */}
      <Row className="mb-3 align-items-center">
        <Col>
          <div className="border rounded text-center py-2">Judul Website</div>
        </Col>
        <Col xs="auto">
          <div
            className="border rounded-circle text-center"
            style={{
              width: 60,
              height: 60,
              lineHeight: '60px',
              fontWeight: 'bold',
            }}
          >
            Logo
          </div>
        </Col>
      </Row>

      {/* Menu Navbar */}
      <Row className="mb-3 text-center">
        <Col><Button variant="outline-dark" className="w-100">NIM</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">HOME</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">ABOUT</Button></Col>
        <Col><Button variant="outline-dark" className="w-100">CONTACT US</Button></Col>
      </Row>

      {/* Form Kubus */}
      <div className="border p-3 mb-3">
        <h5 className="fw-bold">Kubus</h5>
        <Form>
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm="3">
              Panjang Sisi
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="number"
                value={sisi}
                onChange={(e) => setSisi(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 align-items-center">
            <Col sm="3">
              <Button variant="secondary" onClick={hitungLuas}>Hitung</Button>
            </Col>
            <Form.Label column sm="3">Luas Permukaan</Form.Label>
            <Col sm="4">
              <Form.Control type="text" value={luas} readOnly />
            </Col>
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