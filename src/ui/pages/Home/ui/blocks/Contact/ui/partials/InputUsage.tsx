import { AppButton, FormikAppTextField } from '@/ui/modules/components'
import { Box, TextField, useTheme } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

const InputSchema = Yup.object().shape({
  name: Yup.string().required("Please provide us your name"),
  email: Yup.string().email("Please enter a valid email").required(),
  message: Yup.string().required("What do you need?")
});

export default function InputUsage() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  }
  const handleSubmit = () => {
    setLoading(true);
  }

  return (
  <Box
    sx={{ 
      '& > :not(style)': { 
        m: 1, 
        display:'flex',
        flexDirection:'column',
        width:'100%'
      },
      marginTop: "50px", 
    }}
  >
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={InputSchema}
    >
      <Form>
        <FormikAppTextField
          type="name"
          name="name"
          label="Name" 
        />
        <FormikAppTextField
          type="email"
          name="email"
          label="Email" 
        />
        <FormikAppTextField
          type="message"
          name="message"
          label="Message" 
        />
        <Box sx={{width:'100%', display:'flex', alignItems:'flex-end',justifyContent:'flex-end'}}>
          <AppButton 
           isLoading={loading}
           sx={{border:`1px solid ${theme.accordion.accordionTextColor}`, borderRadius:'25px', marginTop:'24px', cursor:'pointer', marginLeft:'15px',  backgroundColor: (theme) => theme.contact.contactBtn, color: (theme) => theme.palette.background.default,
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: 'transparent ',
              color:  (theme) => theme.contact.contactBtn,
            },}}>SEND</AppButton>
          </Box>
      </Form>
    </Formik>
  </Box>
  )
}
