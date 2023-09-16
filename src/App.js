import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import {Formik , Form  } from 'formik';

function App() {
  const validationSchema = Yup.object().shape({
    name : Yup.string()
    .min(3,' too short')
    .max(16, 'too long')
    .required('name is required'),
    email : Yup.string()
    .email('invalid email')
    .required('email is required'),
    message :  Yup.string()
    .min(40,' too short')
    .max(255, 'too long')
    .required('message is required'),
    phone :  Yup.string()
    .matches(
      /^(((?:\+|00)964)|(0)*)7\d{9}$/gm,
      "Telephone number is invalid"
    )
    .required('number is required'),
  })
  return(
<div> 
  <Formik
  initialValues={{
    name:"",
    email:"",
    message:"",
    phone :""
  }}
  onSubmit={(values)=> console.log(values)}
  validationSchema={validationSchema}
  >
    {({values , errors , touched , handleChange})=> (
      <Form>
        <TextField 
        label="Name"
        name='name'
        margin='dense'
        variant='outlined'
        fullWidth
        helperText={errors.name}
        value={values.name}
        onChange={handleChange}
        error={errors.name && touched.name}
        required
        />
        <TextField
         label="Email"
         name='email'
         margin='dense'
         variant='outlined'
         fullWidth
         helperText={errors.email}
         value={values.email}
         onChange={handleChange}
         error={errors.email && touched.email}
         required
        />
        <TextField  label="Message"
        name='message'
        margin='dense'
        variant='outlined'
        fullWidth
        helperText={errors.message}
        value={values.message}
        onChange={handleChange}
        error={errors.message && touched.message}
        required
        />
        <TextField 
         label="Phone Number"
         name='phone'
         margin='dense'
         variant='outlined'
         fullWidth
         helperText={errors.phone}
         value={values.phone}
         onChange={handleChange}
         error={errors.phone && touched.phone}
         required
        />
        <Button variant="contained" fullWidth type='submit'>Submit</Button>

      </Form>
    )}
  </Formik>


  </div>
  ) 
  
}

export default App;
