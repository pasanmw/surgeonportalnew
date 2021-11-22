
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import React,{useState} from "react"
import { Form,Col,Row } from "react-bootstrap"
import { ContactsTwoTone } from '@mui/icons-material';


export default function DateTimeForm(props) {

  const [value, setValue] = useState(props.pvalue? new Date(props.pvalue):"");
  
  const [disablevalue, setDisablevalue] = useState(props.hide? props.hide:false);

  // var disablevalue =true;
   

    const handleChange = (newValue) => {
     setValue(newValue);
       props.value(newValue)
    };


    // if(props.pvalue){
    //   console.log(props.pvalue)
    
    // }
  
    return (
      
           
                     <LocalizationProvider dateAdapter={DateAdapter}>

         
<Stack spacing={3}>
{props.type==='date' && 
  <DesktopDatePicker
  label="select date"
  inputFormat="dd/MM/yyyy"
  value={value}
  onChange={handleChange}
  disabled={disablevalue}
  renderInput={(params) => <TextField {...params} />}
/>
  }

{props.type==='mobile' && 
 <MobileDatePicker
 label="select date"
 inputFormat="dd/MM/yyyy"
 value={value}
 disabled={disablevalue}
 onChange={handleChange}
 renderInput={(params) => <TextField {...params} />}
/>
  }


{props.type==='time' && 
  <TimePicker
  label="select Time"
  value={value}
  disabled={disablevalue}
  onChange={handleChange}
  renderInput={(params) => <TextField {...params} />}
/>
  }
  
  {props.type==='datetime' && 
  <DateTimePicker
  label="select Date Time"
  value={value}
  disabled={disablevalue}
  onChange={handleChange}
  renderInput={(params) => <TextField {...params} />}
/>
  }
  
</Stack>
</LocalizationProvider>
                   
           

    );
}
