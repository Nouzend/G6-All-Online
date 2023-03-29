import { Card, Col, Row, Button, Table } from "antd";
import { useState, useEffect } from "react";
import addToCart from "../Metha/function/addFunc";

function App() {
  const { Meta } = Card;
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/user!/products")
      .then((res) => res.json())
      .then((result) => {
        setproduct(result);
      });
  }, []);

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'product_name',
    },
    {
      title: 'Price',
      dataIndex: 'product_price',
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <Button type="primary" onClick={() => window.location.href = `/produc/${record.id}`} danger>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div class="justify-content-center text-center">
      <Row>
        {product.slice(7, 250).map((products) => (
          <Col key={products.id}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              onClick={() => window.location.href = `/produc/${products.id}`}
              cover={<img alt="example" src={products.image_product} />}
            >
              <Meta
                title={products.product_name}
                description={products.product_price}
              />
              <br />
              <Button type="primary" onClick={() => window.location.href = `/produc/${products.id}`} danger>
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <Table columns={columns} dataSource={product} />
      <hr />
    </div>
  );
}

export default App;
