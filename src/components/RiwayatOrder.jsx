// src/components/Review.js
import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";

const RiwayatOrder = () => {
  return (
    <Row className="mb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Body>
            <Row>
              <Col md={8}>
                <Card.Title>
                  <i className="fa fa-user mb-2"></i>
                </Card.Title>
                <Card.Title>
                  <i className="fa fa-building mb-2"></i>
                </Card.Title>
                <Card.Text>
                  <i className="fa fa-star mb-2"></i> /5
                </Card.Text>
                <Card.Subtitle className=" text-muted">Order ID: </Card.Subtitle>
              </Col>
            </Row>
            <Row className="mb-1">
              <Col md={8}>
                <Card.Text>
                  <strong>Deskripsi:</strong> <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nesciunt quidem ducimus quasi possimus mollitia cumque, magnam eum laudantium consectetur similique ea suscipit dignissimos voluptates dolorem nisi! Ullam
                  facilis rerum facere libero neque quod accusamus deleniti quos cum mollitia, dolor non earum laboriosam vitae temporibus maiores magni. Iste, sunt odit!
                </Card.Text>
              </Col>
              <Col md={4} className="text-center ">
                <Image src="\src\assets\img\testimonial\people-1.jpg" fluid />
              </Col>
            </Row>
            <Card.Footer>{/* <small className="text-muted">Created at: {new Date(review.createdAt).toLocaleDateString()}</small> */}</Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RiwayatOrder;
