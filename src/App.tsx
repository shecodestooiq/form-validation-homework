import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import CVSection from './components/forms/CvSection'

interface MyFormValues {
  firstName: string;
}

function App() {
  return <CVSection />
}

export default App
