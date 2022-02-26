import React from 'react'
import '../../css/signup.css'
import {TextField, Paper, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio, Button} from '@mui/material'
export default function SignUp(props) {
  return (
    <div className='box'>
      <Paper elevation={5} sx={{height:'30rem', width:'40rem', textAlign:'center'}}>
      <div className='category'>
        <div className='item-1' >
          <div>

            <TextField id="standard-basic" label="Name" variant="standard" onChange={props.updateName} error={props.signUpErr}/>
            <br/>
            <TextField id="standard-basic" label="Organization" variant="standard" onChange={props.updateOrg} error={props.signUpErr}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={props.updateEmail} error={props.signUpErr} />
            <br/>
            <TextField id="standard-basic" label="Address" variant="standard" onChange={props.updateAddress} error={props.signUpErr}/>
            <br/>
            <TextField id="standard-basic" label="Zip Code" variant="standard" onChange={props.updateZipcode} error={props.signUpErr} />
            <br/>
            <TextField id="standard-basic" label="State" variant="standard" onChange={props.updateState} error={props.signUpErr}/>
          </div>
        </div>
        <div className='item-2'>
          <div>
            <TextField id="standard-basic" label="Username" variant="standard" onChange={props.updateUsername} error={props.signUpErr}/>
            <br/>
            <TextField id="standard-basic" type='password' label="Password" variant="standard" onChange={props.updatePassword} error={props.signUpErr}/>
            <br/>

            <FormControl>
              <div className='form'>
                <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Buyer"
                    name="radio-buttons-group"
                    onChange={props.updateRole}
                  >
                    <FormControlLabel value="buyer" control={<Radio />} label="Buyer" labelPlacement="start" />
                    <FormControlLabel value="seller" control={<Radio />} label="Seller" labelPlacement="start" />
                  </RadioGroup>
              </div>
              </FormControl>
              <br/>
              <Button variant="contained" onClick={props.onSignup}>Sign up</Button>
          </div>
        </div>
      </div>
      </Paper>
    </div>
  )
}

