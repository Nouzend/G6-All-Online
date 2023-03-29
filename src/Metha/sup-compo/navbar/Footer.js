import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f1f1f1", padding: "50px 0" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h3 style={{ fontWeight: "bold", color: "#333" }}>About Us</h3>
            <p style={{ fontSize: "14px", color: "#333" }}>
              "Unleash Your Coding Potential with React JS: Join Our Student
              Group Today!"
            </p>
          </Col>
          <Col md={4}>
            <h3 style={{ fontWeight: "bold", color: "#333" }}>Contact Us</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ fontSize: "14px", color: "#333" }}>
                Email: G2TEAM5@Gosoft.co.th
              </li>
              <li style={{ fontSize: "14px", color: "#333" }}>
                Phone: (123) 111-11-11-111
              </li>
              <li style={{ fontSize: "14px", color: "#333" }}>
                Address: ซอยแจ้งวัฒนะ 28 ต.บางตลาด อ.ปากเกร็ด จ.นนทบุรี
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 style={{ fontWeight: "bold", color: "#333" }}>Follow Us</h3>
            <p style={{ fontSize: "14px", color: "#333" }}>
                เราขอเชิญคุณเข้าร่วมกลุ่มผู้ที่ชื่นชอบ React JS
              ของเราที่หลงใหลในการสร้างเว็บแอปพลิเคชันที่ยอดเยี่ยม
              หากคุณสนใจที่จะเรียนรู้และทำงานกับหนึ่งในไลบรารีส่วนหน้ายอดนิยม
              กลุ่มของเราเหมาะสำหรับคุณ!
              เราพบกันเป็นประจำเพื่อหารือเกี่ยวกับแนวโน้มล่าสุด แบ่งปันความรู้
              และทำงานร่วมกันในโครงการที่น่าตื่นเต้น เมื่อเข้าร่วมกับเรา
              คุณจะมีโอกาสขยายทักษะการเขียนโค้ด สร้างเครือข่ายกับเพื่อนนักเรียน
              และสนุกไปกับมัน
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
