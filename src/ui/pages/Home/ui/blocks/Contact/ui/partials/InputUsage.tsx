import { AppButton, FormikAppTextField } from '@/ui/modules/components'
import { Box, useTheme } from '@mui/material'
import { Form, Formik, FormikHelpers, useFormikContext } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { WhatButton } from './component';

interface SubmitValues {
  name: string;
  email: string;
  message: string;
  service: string;
}

const data = [
  { text: "Web & Mobile Development", value: "web_mobile" },
  { text: "Software Maintenance", value: "software_maintenance" },
  { text: "Graphic Design", value: "graphic_design" },
  { text: "UI/UX Design", value: "ui_ux_design" },
  { text: "Software Consultancy", value: "software_consultancy" },
  { text: "Third party contacts", value: "third_party_contacts" },
];

const InputSchema = Yup.object().shape({
  service: Yup.string().required("Please choose a service you want us to help you with"),
  name: Yup.string().required("Please provide us your name"),
  email: Yup.string().email("Please enter a valid email").required("please provide us your Email"),
  message: Yup.string().required("What do you need?")
});

export const SendButton = () => {
  const { isValid, dirty, isSubmitting } = useFormikContext();
  const theme = useTheme();
  return (
    <AppButton 
      type="submit"
      // disabled={!isValid || !dirty || isSubmitting}
      // isLoading={isSubmitting}
    sx={{border:`1px solid ${theme.accordion.accordionTextColor}`, borderRadius:'25px', marginTop:'24px', cursor:'pointer', marginLeft:'15px',  backgroundColor: (theme) => theme.contact.contactBtn, color: (theme) => theme.palette.background.default,
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'transparent ',
      color:  (theme) => theme.contact.contactBtn,
    },}}>SEND</AppButton>
  );
};

export default function InputUsage() {

  const initialValues = {
    name: "",
    email: "",
    message: "",
    service: "",
  }
  const handleSubmit = (
    values: SubmitValues,
    { setSubmitting }: FormikHelpers<SubmitValues>
  ) => {
    // setSubmitting(true);
    console.log("values", values);
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
      <Box
          sx={{
            display: 'grid',
            gap: '15px',
            gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, [100,100,100])'],
            marginBottom: '25px',
            width: '100%',
          }}
        >
          {data.map((item, index) => (
            <WhatButton text={item.text} key={index} value={item.text} />
          ))}
        </Box>
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
          multiline
          rows={4}
        />
        <Box sx={{width:'100%', display:'flex', alignItems:'flex-end',justifyContent:'flex-end'}}>
          <SendButton />
        </Box>
      </Form>
    </Formik>
  </Box>
  )
}
