import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { Propane } from '@mui/icons-material';


export default function FormPropsTextFields() {
    const [email, setEmail] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [label, setLabel] = useState('Required')

    const handleChange = (e) => {
        setEmail(e.target.value);
        setIsEmail(!e.target.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ));
        if (e.target.value && !e.target.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            setLabel('Please Provide A valid email address')
          } 
        else if(e.target.value) {
            setLabel('Thank you')
        }
        else {
            setLabel('Required')
        }
      };

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
                        />
                        <br />
                        <TextField
                            required
                            id="standard-required"
                            label={label}
                            variant="standard"
                            helperText="Email"
                            value={email}
                            error={isEmail}
                            onChange={handleChange}
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
                        />
                    </div>
                    <Button variant="text">Submit</Button>
                </Box>
            </CardContent>
        </Card>
    );
}
