import React, {useState}from 'react'
import { useForm } from 'react-hook-form'
import  {AppBar,Toolbar, InputAdornment, Typography, Container, TextField, Button, CssBaseline, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullname: yup.string().required("please enter your name"),
  address: yup.string().required("please enter your address"),
  email: yup.string().required("Please enter your email").email(),
});


const App = () =>{

  const useStyles = makeStyles((theme)=>({
    LoginForm : {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "60%",
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: "90%"
      }
    },
    subBtn: {
      width: "90%"
    },
    wrapper:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh"
    },
    form :{
      
    }

  }))

  const classes = useStyles()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data, e) =>{
    console.log(data)
   
    e.target.reset()
  }
  console.log(errors)
  return(
    <>
      <CssBaseline />

      <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6">MENU</Typography>
          </Toolbar>
      </AppBar>

      <Container className={classes.wrapper}>

     
      <Typography variant="h3" gutterBottom align="center">Welcome</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.LoginForm} autoComplete="off">
            
              <TextField variant="outlined" label="Fullname"
                name="fullName" 
                type="text" 
                {...register("fullname")}
                helperText={errors.fullname?.message}
                error = {errors.fullname? true : false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                />
          
                <TextField variant="outlined" label="Email"
                name="email" 
                type="email" 
                {...register("email")}
                helperText={errors.email?.message}
                error = {errors.email? true : false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
                />  
                <TextField variant="outlined" label="Address"
                name="address" 
                type="text" 
                {...register("address")}
                helperText={errors.address?.message}
                error = {errors.address? true : false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                />             

         <Button type="submit" variant="contained" color="secondary" className={classes.subBtn}>Sign up</Button>
      </form>
      </Container>
    </>
  )
}

export default App