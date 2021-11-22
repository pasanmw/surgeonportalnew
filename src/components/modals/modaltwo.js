import React,  { useState ,forwardRef, useRef, useImperativeHandle}  from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

import DateTimeForm from '../../components/form/DateTimeForm'
import CreateIcon from '@mui/icons-material/Create';
import { Alert, Form, ButtonGroup, Navbar, Modal } from 'react-bootstrap';
import { borderRadius } from '@mui/system';
import Inputform from '../../components/form/Inputform';
import Table from 'react-bootstrap/Table';
import SignaturePad from 'react-signature-pad-wrapper'
import { fabClasses } from '@mui/material';



const Modaltwo = forwardRef((props,ref) => {


    const poiform=props.value;
    // newly created states form three 3  Specific pre operative instructions

    const [anaesthetic_Consultation_Required, setAnaesthetic_Consultation_Required] = useState(poiform.anaesthetic_Consultation_Required);
    const [preadmission_assessment_Required, setPreadmission_assessment_Required] = useState(poiform.preadmission_assessment_Required);
    const [pathology_tests_Required, setPathology_tests_Required] = useState(poiform.pathology_tests_Required);
    const [investigations_Required, setInvestigations_Required] = useState(poiform.investigations_Required);
    const [operating_theatre_advised_Reauired, setOperating_theatre_advised_Reauired] = useState(poiform.operating_theatre_advised_Reauired);
    const [operating_theatre_advised_DateTime, setOperating_theatre_advised_DateTime] = useState(new Date());
    const [specific_equipment_required, setSpecific_equipment_required] = useState(poiform.specific_equipment_required);

    const initialstate={
        preOpeFavouriteID:"",
        preOpeFavouriteName:"",
        anaesthetic_Consultation_Details: poiform.anaesthetic_Consultation_Details,
        preadmission_assessment_Details: poiform.preadmission_assessment_Details,
        pathology_tests_Details: poiform.pathology_tests_Details,
        investigations_Details: poiform.investigations_Details,
        drug_Orders_on_Admission: poiform.drug_Orders_on_Admission,
        specific_equipment_Details: poiform.specific_equipment_Details,
        anaesthetic_Consultation_Required:poiform.anaesthetic_Consultation_Required,
        preadmission_assessment_Required:poiform.preadmission_assessment_Required,
        pathology_tests_Required:poiform.pathology_tests_Required,
        investigations_Required:poiform.investigations_Required,
        operating_theatre_advised_Reauired:poiform.operating_theatre_advised_Reauired,
        operating_theatre_advised_DateTime:new Date(poiform.operating_theatre_advised_DateTime),
        specific_equipment_required:poiform.specific_equipment_required,

       
    };

    const [postdata, setpostdata] = useState(initialstate);

    // button  click function
 
    useImperativeHandle(ref,()=>({

        async savePreOpRefav(){
              
            postdata.anaesthetic_Consultation_Required=anaesthetic_Consultation_Required;
            postdata.preadmission_assessment_Required=preadmission_assessment_Required;
            postdata.pathology_tests_Required=pathology_tests_Required;
            postdata.investigations_Required=investigations_Required;
            postdata.operating_theatre_advised_Reauired=operating_theatre_advised_Reauired;
            postdata.specific_equipment_required=specific_equipment_required


              
              console.log(props.value,postdata);
  
             
           }
  
  
      }))


    const onChange = (name) => (e) => {
        setpostdata({ ...postdata, [name]: e.target.value })
    }


    return (
        <>
            <Card>
                <CardContent>

                    <Row>

                        <Col>
                            <h4><CreateIcon /> My Favourite Pre-Operative</h4>
                        </Col>
                    </Row>
                    <Form>
                        <Row className="mb-3">
                            <Inputform name="favouriteName" Label="Favourite Name" type="text" placeholder="Enter Value"
                                value={postdata.preOpeFavouriteName} onChange={onChange("preOpeFavouriteName")}
                            />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Anaesthetic Consultation Required?</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="anaesthetic_Consultation_Required"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={anaesthetic_Consultation_Required == true }
                                    onChange={(e) => { setAnaesthetic_Consultation_Required(true) }}

                                />

                                <Form.Check
                                    inline
                                    label="No"
                                    name="anaesthetic_Consultation_Required"
                                    type="radio"
                                    id="two"
                                    value="false"
                                    checked={anaesthetic_Consultation_Required == false }
                                    onChange={(e) => { setAnaesthetic_Consultation_Required(false) }}
                                />

                            </Form.Group>


                            {anaesthetic_Consultation_Required ? <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value"
                                value={postdata.anaesthetic_Consultation_Details} onChange={onChange("anaesthetic_Consultation_Details")}
                            /> : ""}

                            <Form.Group as={Col} controlId="g">
                            </Form.Group>

                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Pre Admission Assessment</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="preadmission_assessment_Required"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={preadmission_assessment_Required == true }
                                    onChange={(e) => { setPreadmission_assessment_Required(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="preadmission_assessment_Required"
                                    type="radio"
                                    id="two"
                                    value="false"
                                    checked={preadmission_assessment_Required == false }
                                    onChange={(e) => { setPreadmission_assessment_Required(false) }}
                                />
                            </Form.Group>

                            {preadmission_assessment_Required ? <Inputform name="preadmission_assessment_Details" Label="Please Specify" type="text" placeholder="Enter Value"
                                value={postdata.preadmission_assessment_Details} onChange={onChange("preadmission_assessment_Details")}
                            /> : ""}

                            <Form.Group as={Col} controlId="g">
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Pathology Tests Required</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="pathology_tests_Required"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={pathology_tests_Required == true }
                                    onChange={(e) => { setPathology_tests_Required(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="pathology_tests_Required"
                                    type="radio"
                                    id="two"
                                    value="false"
                                    checked={pathology_tests_Required == false }
                                    onChange={(e) => { setPathology_tests_Required(false) }}
                                />

                            </Form.Group>

                            {pathology_tests_Required ? <Inputform name="pathology_tests_Details" Label="Please Specify" type="text" placeholder="Enter Value"
                                value={postdata.pathology_tests_Details} onChange={onChange("pathology_tests_Details")}
                            /> : ""}

                            <Form.Group as={Col} controlId="g">
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Investigations Required</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="investigations_Required"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={investigations_Required == true }
                                    onChange={(e) => { setInvestigations_Required(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="investigations_Required"
                                    type="radio"
                                    id="two"
                                    value="true"
                                    checked={investigations_Required == false }
                                    onChange={(e) => { setInvestigations_Required(false) }}
                                />

                            </Form.Group>


                            {investigations_Required ? <Inputform name="investigations_Details" Label="Please Specify" type="text" placeholder="Enter Value"
                                value={postdata.investigations_Details} onChange={onChange("investigations_Details")}
                            /> : ""}


                            <Form.Group as={Col} controlId="g">
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Operation theatre advised (If "add on" or "urgent case")</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="operating_theatre_advised_Reauired"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={operating_theatre_advised_Reauired == true }

                                    onChange={(e) => { setOperating_theatre_advised_Reauired(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="operating_theatre_advised_Reauired"
                                    type="radio"
                                    id="two"
                                    value="true"
                                    checked={operating_theatre_advised_Reauired == false }

                                    onChange={(e) => { setOperating_theatre_advised_Reauired(false) }}
                                />

                            </Form.Group>


                            {operating_theatre_advised_Reauired ? <> <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} >Adviced date/ Time</Form.Label>
                                <DateTimeForm Label="Date of Birth" type="datetime" name="operating_theatre_advised_DateTime" value={setOperating_theatre_advised_DateTime} />
                            </Form.Group>
                                <Form.Group as={Col} controlId="g">
                                </Form.Group> </> : ""}

                        </Row>

                        <Row className="mb-3">

                            <Inputform name="plaesespecify" Label="Drug Orders On Admission (If possible please attavh drug chart or detail below)" type="text" placeholder="Enter Value" value={postdata.drug_Orders_on_Admission} onChange={onChange("drug_Orders_on_Admission")} />
                            <Form.Group as={Col} controlId="g">
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Specific Equipment required?</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="specific_equipment_required"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={specific_equipment_required == true }

                                    onChange={(e) => { setSpecific_equipment_required(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="specific_equipment_required"
                                    type="radio"
                                    id="two"
                                    value="false"
                                    checked={specific_equipment_required == false }

                                    onChange={(e) => { setSpecific_equipment_required(false) }}
                                />

                            </Form.Group>

                            {specific_equipment_required ? <Inputform name="investigations_Details" Label="Please Specify" type="text" placeholder="Enter Value"
                                value={postdata.specific_equipment_Details} onChange={onChange("specific_equipment_Details")}
                            /> : ""}

                        </Row>
                        <Row className="mb-3">

                            <Inputform name="doctor_id" Label="Doctor UUID " type="text" placeholder="Enter Value" value={postdata.doctor_id} onChange={onChange("doctor_id")} />

                        </Row>


                        <Row className="mb-3">


                            <Inputform name="doctor_id" Label="Used Count " type="text" placeholder="Enter Value" value={postdata.doctor_id} onChange={onChange("doctor_id")} />

                        </Row>







                        <Button variant="contained" >
                            Save
                        </Button>
                    </Form>



                </CardContent>

            </Card>
        </>
    )
})

export default Modaltwo
