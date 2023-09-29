import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from 'yup'

const validationSchema=Yup.object().shape({
  firstName:Yup.string().required('this feild is required'),
  phone:Yup.number().required('this feild is required') ,
  email:Yup.string().email('invalid email').required('this feild is required')
})
export default function Formm() {
 


  return (
    <div>
       <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        phone: '',
        email: '',
      }}

      onSubmit={(values) => {
       console.log(values);
      }}
      validationSchema={validationSchema}

      >
      {
        ({errors,values,handleChange,touched,onSubmit})=>(
          <Form>
            <TextField
            label='Name'
            name='firstName'
            fullWidth
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName && touched.firstName}
            helperText={errors.firstName}

            required></TextField>


            <TextField
            label='Phone'
            name='phone'
            fullWidth
            type='number'
            value={values.phone}
            onChange={handleChange}
            error={errors.phone && touched.phone}
            helperText={errors.phone}
            required></TextField>


            <TextField
            label='Email'
            name='email'
            fullWidth
            value={values.email}
            onChange={handleChange}
            error={errors.email && touched.email}
            helperText={errors.email}

            required></TextField>
            <Button type='submit' variant='contained'>Submit</Button>          
            </Form>
        )

      }
      </Formik>
    </div>
  )
}
