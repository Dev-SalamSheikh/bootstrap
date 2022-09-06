import { Button, Modal, Row, Col } from 'react-bootstrap';
import AddForm from '../form/AddForm';

function InputModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Row>
            <Col>
              <AddForm />
            </Col>
          </Row> */}
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Publish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InputModal;
