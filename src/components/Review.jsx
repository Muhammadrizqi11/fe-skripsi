import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import UploadCloudinary from "./UploadCloudinary";

const ReviewModal = ({ show, handleClose, handleSave }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = () => {
    const review = { comment, rating, image };
    handleSave(review);
    handleClose();
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formComment">
            <Form.Label>Komentar</Form.Label>
            <Form.Control type="text" placeholder="Masukkan komentar" value={comment} onChange={handleCommentChange} />
          </Form.Group>

          <Form.Group controlId="formRating" className="mt-3">
            <Form.Label>Rating</Form.Label>
            {/* <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" value={rating} /> */}
          </Form.Group>

          <Form.Group className="mb-3 mt-5" controlId="formImage">
            <Form.Label>Gambar </Form.Label>
            {image ? <Image src={image} alt={image} rounded style={{ height: "64px", width: "64px", objectFit: "cover" }} /> : <UploadCloudinary onUpload={(url) => setImage(url)} />}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Simpan Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
