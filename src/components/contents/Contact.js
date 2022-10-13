import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { text } from '@fortawesome/fontawesome-svg-core';

export default function FormPropsTextFields() {
    const [textValues, settextValues] = useState({name: "", email: "", text: ""})
    const [isEmail, setIsEmail] = useState(false)
    const [label, setLabel] = useState('Required')

    const handleChange = (e) => {
        settextValues({ ...textValues, [e.target.name]: e.target.value });
        if (e.target.name === "email") {
            setIsEmail(!e.target.value.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              ));
            if (e.target.value && !e.target.value.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )) {
                setLabel('Please enter a valid email address')
              } 
            else if(e.target.value) {
                setLabel('Valid')
            }
            else {
                setLabel('Required')
                setIsEmail(false)
            }
        }
       
      };
    
    const submit = (e) => {
        e.preventDefault();
        console.log(textValues)
        if(textValues.name && textValues.email && textValues.text) {
            alert('i got pressed!')
        } 
        else {
            alert('Please complete all fields')
        }
    }

    return (
        <Card>
            <CardContent>
                <Box
                    align="center"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            variant="standard"
                            helperText="Name"
                            name="name"
                            onChange={handleChange}
                        />
                        <br />
                        <TextField
                            required
                            id="standard-required"
                            label={label}
                            variant="standard"
                            helperText="Email"
                            value={textValues.email}
                            error={isEmail}
                            onChange={handleChange}
                            name="email"
                        />
                        <br />
                        <TextField
                            required
                            id="standard-multiline-static"
                            label="Required"
                            multiline
                            rows={4}
                            variant="standard"
                            helperText="Message"
                            onChange={handleChange}
                            name="text"
                        />
                    </div>
                    <Button variant="text" onClick={submit}>Submit</Button>
                </Box>
            </CardContent>
        </Card>
    );
}
