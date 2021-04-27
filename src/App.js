import React, {useState}from 'react'
import formField from './static'
import { useForm } from 'react-hook-form'
import  {AppBar,Toolbar, InputAdornment, Typography, Container, TextField, Button, CssBaseline, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
});


const App = () =>{

  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) =>{
    console.log(data)
    
  }
  
  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
         {formField.inputs.map((input, key) => {
          return(
            <div key={key}>
            <p>
              <label>{input.label}</label>
            </p>
            <p>
              <input 
                name={input.name} 
                type={input.type} 
                {...register(input.name)}
                />
                {errors[input.name]?.message}
            </p>
            
            </div>
          )
         })}
         <button type="submit">Sign in</button>
      </form>
    </>
  )
}

export default App