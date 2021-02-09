
import {Button} from 'react-bootstrap';
import './Style.css';


function Button_component()
{
  return(
    <div className="main_div">
      
      {/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button> */}


      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="outline-link">Link</Button>



        
    
    </div>
  );

}

export default Button_component;