import { TextField } from "@mui/material";
import { width } from "@mui/system";
import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';
import Col from 'react-bootstrap/Col';

function BMI({ setbmi, setinfo, setpWeight, setpheight }) {

  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();


  useEffect(() => {
    if (height && weight) {
      handleBmi();
    }

  }, [height, weight])

  const handleBmi = () => {
    setpWeight(weight);
    setpheight(height);
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    setbmi(val);

    if (val < 18.5) {
      setInfo("Under Weight");
      setinfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
      setinfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
      setinfo("Overweight");
    } else {
      setInfo("Obese");
      setinfo("Obese");
    }
  };
  return (

    <>
      <Form.Group as={Col} controlId="g">
        <Form.Label as={Col} > Height</Form.Label>
        <TextField
          onChange={(e) => setHeight(e.target.value)}
          placeholder="height in cm"
          label="height in cm"
          InputProps={{
            inputProps: {
              type: 'number',
              min: 1, max: 1000
            }
          }}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="g">
        <Form.Label as={Col} > Weight</Form.Label>

        <TextField
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight in kg"
          label="Weight in kg"
          InputProps={{
            inputProps: {
              max: 1000, min: 1
            }
          }}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="g">
        <Form.Label as={Col} > BMI</Form.Label>

        Value:{bmi}

      </Form.Group>
      <Form.Group as={Col} controlId="g">
        <Form.Label as={Col} > Type</Form.Label>


        {info && info == "Healthy" ? <Button variant="contained" size="large" color="success" startIcon={<GppGoodIcon />}  >
          {info}
        </Button> : info ?
          <Button variant="contained" size="large" color="error" startIcon={<GppBadIcon />}  >
            {info}
          </Button> : ""}



      </Form.Group>


    </>


  );
};


export default BMI
