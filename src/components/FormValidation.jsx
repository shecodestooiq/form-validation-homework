import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .min(40, "Must be at least 40 characters")
    .max(255, "Too long..")
    .required("Required"),
  phone: Yup.string()
    .min(11, "Must be an Iraqi number")
    .max(15, "Invalid number")
    .required("Required"),
  date: Yup.date().required("Required"),
});

const FormValidation = () => {
  const [successMsg, setSuccessMsg] = React.useState("");
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          phone: "",
          date: new Date(),
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          setSuccessMsg("Submitted Successfully!");
        }}
        validationSchema={validationSchema}
      >
        {({ values, touched, errors, handleChange, setFieldValue }) => (
          <Form className="App">
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              margin="dense"
              value={values.name}
              onChange={handleChange}
              error={errors.name && touched.name}
              required
              helperText={errors.name}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              margin="dense"
              value={values.email}
              onChange={handleChange}
              error={errors.email && touched.email}
              required
              helperText={errors.email}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              variant="outlined"
              margin="dense"
              rows={4}
              value={values.message}
              onChange={handleChange}
              error={errors.message && touched.message}
              required
              helperText={errors.message}
              min="40"
              max="255"
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="number"
              variant="outlined"
              margin="dense"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone && touched.phone}
              required
              helperText={errors.phone}
              min="11"
              max="16"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DemoItem>
                  <DatePicker
                    textField={(props) => <TextField {...props} />}
                    helperText={errors.date}
                    error={errors.date && touched.date}
                    variant="outlined"
                    required
                    value={dayjs(values.date)}
                    onChange={(date) => setFieldValue("date", date.$d)}
                    disablePast
                    name="date"
                    margin="dense"
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>

            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{ marginTop: "30px" }}
            >
              Submit
            </Button>
            <p style={{ color: "green" }}>{successMsg}</p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormValidation;
