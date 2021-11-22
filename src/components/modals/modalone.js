import React, { useState ,forwardRef, useRef, useImperativeHandle} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';



import CreateIcon from '@mui/icons-material/Create';
import { Alert, Form, ButtonGroup, Navbar, Modal } from 'react-bootstrap';
import { borderRadius } from '@mui/system';
import Inputform from '../../components/form/Inputform';
import Table from 'react-bootstrap/Table';
import SignaturePad from 'react-signature-pad-wrapper'
import { fabClasses } from '@mui/material';

import axios from 'axios';
import { SERVER } from '../../config';


const Modalone = forwardRef((props,ref) => {

    const rfaform=props.value;
    // newly created states form two 2 Admission Details
    const [proposed_Admission_DateTime, setProposed_Admission_DateTime] = useState(new Date());
    const [proposed_Procedure_DateTime, setProposed_Procedure_DateTime] = useState(new Date());
    const [type_Of_Admission, setType_Of_Admission] = useState(rfaform.type_Of_Admission);
    const [postOp_HDU_Required, setPostOp_HDU_Required] = useState(rfaform.postOp_HDU_Required);
    const [postOp_ICU_Required, setPostOp_ICU_Required] = useState(rfaform.postOp_ICU_Required);
       

    const [pre_Admission_Clinic_Required, setPre_Admission_Clinic_Required] = useState(rfaform.pre_Admission_Clinic_Required);
    const [referrals_Required, setReferrals_Required] = useState(rfaform.referrals_Required);
    const [patient_BariatricEquipmentRequired, setPatient_BariatricEquipmentRequired] = useState(false);

    const initialstate={

        admissionFavouriteId: "",
        admissionFavouriteName: "",
        doctor_id: rfaform.doctor_id,
        provisional_Diagnosis: rfaform.provisional_Diagnosis,
        proposed_Admission_DateTime: new Date(rfaform.proposed_Admission_DateTime),
        proposed_Procedure_DateTime: new Date(rfaform.proposed_Procedure_DateTime),
        estimated_Days_of_Stay: rfaform.estimated_Days_of_Stay,
        type_Of_Admission: rfaform.type_Of_Admission,
        estimated_Operating_Hours: rfaform.estimated_Operating_Hours,
        estimated_Operating_Minutes: rfaform.estimated_Operating_Minutes,
        postOp_HDU_Required: rfaform.postOp_HDU_Required,
        postOp_ICU_Required: rfaform.postOp_ICU_Required,
        anaesthesia_Type: rfaform.anaesthesia_Type,
        pre_Admission_Clinic_Required: rfaform.pre_Admission_Clinic_Required,
        referrals_Required: rfaform.referrals_Required,
        referrals_Details: "",
        special_Admission_Instructions: rfaform.special_Admission_Instructions,
        patients_Past_History: "",
        patients_Allergies: "",
        patients_Current_Medications: "",
        patient_Weight: "",
        patient_Height: "",
        patient_BMI: "",
        patient_BariatricEquipmentRequired: false


    };

    const [postdata, setpostdata] = useState(initialstate);

    useImperativeHandle(ref,()=>({


      async saveadmFav(){
          postdata.type_Of_Admission=type_Of_Admission;
          postdata.postOp_HDU_Required=postOp_HDU_Required;
          postdata.postOp_ICU_Required=postOp_ICU_Required;
          postdata.pre_Admission_Clinic_Required=pre_Admission_Clinic_Required;
          postdata.patient_BariatricEquipmentRequired=patient_BariatricEquipmentRequired

            console.log(props.value,postdata);

            try {
                const config={
                  headers:{
                      "Content-Type":"application/json"
                  }
              };
                const data=await axios.post(`${SERVER}/AdmissionFavourite`,postdata,config) ;
                console.log(data);
            
                if(data.data){
                  //alert("success");
                //  setsubmitstate(!submitstate);
                 // window.location.reload();  //add mannual refresh
                 console.log("success");
                  
              }
              } catch (error) {
                console.log(error);
              }
         }


    }))
   

    const onChange = (name) => (e) => {
        setpostdata({ ...postdata, [name]: e.target.value })
    }

    //https://localhost:44342/api/AdmissionFavourite
    //https://localhost:44342/api/AdmissionFavourite/docid?id=string
    //https://localhost:44342/api/AdmissionFavourite/id?id=ad1234

    return (
        <>
            <Card>
                <CardContent>

                    <Row>

                        <Col>
                            <h4><CreateIcon /> My Favourite Admission</h4>
                        </Col>
                    </Row>
                    <Form>

                        <Row className="mb-3">
                            <Inputform name="admissionFavouriteName" Label="Admission Favourite Name" type="text" placeholder="Enter Value"
                                value={postdata.admissionFavouriteName} onChange={onChange("admissionFavouriteName")}
                            />
                        </Row>
                        <Row className="mb-3">
                            <Inputform name="provisional_Diagnosis" Label="Provisional Diagnosis" type="text" placeholder="Enter Value"
                                value={postdata.provisional_Diagnosis} onChange={onChange("provisional_Diagnosis")}
                            />
                        </Row>

                        <Row className="mb-3">
                            <Inputform name="estimated_Days_of_Stay" Label="Estimated Days" type="text" placeholder="Enter Value"
                                value={postdata.estimated_Days_of_Stay} onChange={onChange("estimated_Days_of_Stay")}
                            />
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Type Of Admission</Form.Label>
                                <Form.Check
                                    inline
                                    label="Day Stay"
                                    name="type_Of_Admission"
                                    type="radio"
                                    id="one"
                                    value="DayStay"
                                    checked={type_Of_Admission == "DayStay" }
                                    onChange={(e) => { setType_Of_Admission(e.target.value) }}
                                />
                                <Form.Check
                                    inline
                                    label="Overnight"
                                    name="type_Of_Admission"
                                    type="radio"
                                    value="Overnight"
                                    id="two"
                                    checked={type_Of_Admission == "Overnight" }
                                    onChange={(e) => { setType_Of_Admission(e.target.value) }}
                                />

                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > HDU required Post-Op?</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="HDU"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={postOp_HDU_Required == true }
                                    onChange={(e) => { setPostOp_HDU_Required(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="HDU"
                                    type="radio"
                                    id="two"
                                    value="false"
                                    checked={postOp_HDU_Required == false }
                                    onChange={(e) => { setPostOp_HDU_Required(false) }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Inputform name="estimated_Operating_Hours" Label="Estimated Operation Hours" type="text" placeholder="Enter Value" value={postdata.estimated_Operating_Hours} onChange={onChange("estimated_Operating_Hours")} />
                            <Inputform name="estimated_Operating_Minutes" Label="Estimated Operation Minutes" type="text" placeholder="Enter Value" value={postdata.estimated_Operating_Minutes} onChange={onChange("estimated_Operating_Minutes")} />


                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > ICU required Post-Op?</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="icu"
                                    type="radio"
                                    id="one"
                                    
                                    checked={postOp_ICU_Required == true}
                                    onChange={(e) => { setPostOp_ICU_Required(true) }}
                                />

                                <Form.Check
                                    inline
                                    label="No"
                                    name="icu"
                                    type="radio"
                                    id="two"
                            
                                    checked={postOp_ICU_Required == false }
                                    onChange={(e) => { setPostOp_ICU_Required(false) }}
                                />

                            </Form.Group>

                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Type of Anaesthetic</Form.Label>
                                <Form.Check
                                    inline
                                    label="LA"
                                    name="LA"
                                    type="checkbox"
                                    id="one"
                                />
                                <Form.Check
                                    inline
                                    label="GA"
                                    name="GA"
                                    type="checkbox"
                                    id="two"
                                />

                            </Form.Group>
                            <Form.Group as={Col} controlId="g">
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Pre Admission Clinic?</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="pre_Admission_Clinic_Required"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={pre_Admission_Clinic_Required == true }
                                    onChange={(e) => { setPre_Admission_Clinic_Required(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="pre_Admission_Clinic_Required"
                                    type="radio"
                                    id="two"
                                    value="false"
                                    checked={pre_Admission_Clinic_Required == false }
                                    onChange={(e) => { setPre_Admission_Clinic_Required(false) }}
                                />

                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="g">
                                <Form.Label as={Col} > Referrals Required?</Form.Label>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="Referrals_Required"
                                    type="radio"
                                    id="one"
                                    value="true"
                                    checked={referrals_Required == true }
                                    onChange={(e) => { setReferrals_Required(true) }}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="Referrals_Required"
                                    type="radio"
                                    id="two"
                                    value="false"
                                    checked={referrals_Required == false }
                                    onChange={(e) => { setReferrals_Required(false) }}
                                />

                            </Form.Group>

                            {referrals_Required ? <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value"
                                value={postdata.referrals_Details} onChange={onChange("referrals_Details")}
                            /> : ""}

                            <Form.Group as={Col} controlId="g">
                            </Form.Group>

                        </Row>


                        <Row className="mb-3">


                            <Inputform name="specialadmininstructions" Label="Special Admission Instructions" type="text" placeholder="Enter Value" value={postdata.special_Admission_Instructions} onChange={onChange("special_Admission_Instructions")} />

                        </Row>

                        <Row className="mb-3">


                            <Inputform name="doctor_id" Label="Doctor UUID " type="text" placeholder="Enter Value" value={postdata.doctor_id} onChange={onChange("doctor_id")} />

                        </Row>





                    </Form>



                </CardContent>

            </Card>
        </>
    )
})

export default Modalone
