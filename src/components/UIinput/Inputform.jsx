import { Form,Col,Row } from "react-bootstrap"

export default function Inputform(props) {



    //width
   var width='';

   switch (props.width) {
       case '1':
           width='w-25';
           break;
           case '2':
            width='w-50';
            break;
            case '3':
           width='w-75';
           break;
       default:
           width=props.width;
           break;
   }


    return (

        <Form.Group as={Col} controlId={props.name}>
        <Form.Label> {props.Label}</Form.Label>
       <Form.Control  type={props.type} placeholder={props.placeholder}  value={props.value} onChange={props.onChange} />
       </Form.Group>
 
            //<Form.Group as={Row} className="mb-3"  controlId={props.name}>
            //<Form.Label  column sm={2}>
           // {props.Label}
   //     </Form.Label>
     //  <Col md={10}>
    //  <Form.Control className={width} type={props.type} placeholder={props.placeholder} />
    //  </Col>
  // </Form.Group>
        
    )
}
