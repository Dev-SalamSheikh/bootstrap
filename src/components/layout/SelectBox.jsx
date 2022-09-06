import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function SelectBox() {
  return (
    <Form.Select as={Col} className='select-box'>
      <option>All products</option>
      <option value='Best value'>Best value</option>
      <option value='Best Performance'>Best Performance</option>
      <option value='Best Camera'>Best Camera</option>
    </Form.Select>
  );
}

export default SelectBox;
