import { Col, Row, Form } from 'react-bootstrap';

function AddForm() {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Product Name</Form.Label>
        <Form.Control placeholder='Enter your product name' />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>Brand</Form.Label>
          <Form.Control placeholder='Enter brand name' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Ram/Rom</Form.Label>
          <Form.Control placeholder='Zip code' />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId='formGridState'>
        <Form.Label>Tags</Form.Label>
        <Form.Select defaultValue='Choose...'>
          <option>Search and Select</option>
          <option value='Best Value'>Best Value</option>
          <option value='Best Performance'>Best Performance</option>
          <option value='Best Camera'>Best Camera</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Price</Form.Label>
        <Form.Control type='number' placeholder='Enter your product price' />
      </Form.Group>
    </Form>
  );
}

export default AddForm;
