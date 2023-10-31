import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").max(20, "Name is too long"),
    phone: Yup.number().required("Phone is required"),
    email: Yup.string().email().required("Email is required"),
  });
  return (
    <div style={{ margin: "20px" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, values, handleChange }) => (
            <Form>
              <DialogTitle>Sign Up</DialogTitle>
              <DialogContent>
                <TextField
                  margin="dense"
                  id="name"
                  name="name"
                  label="Name"
                  type="string"
                  value={values.name}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  helperText={<ErrorMessage name="name" />}
                />
                <TextField
                  margin="dense"
                  InputProps={{
                    maxLength: 10,
                    startAdornment: (
                      <InputAdornment position="start">+964</InputAdornment>
                    ),
                  }}
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="number"
                  value={values.phone}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  helperText={<ErrorMessage name="phone" />}
                />
                <TextField
                  margin="dense"
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  helperText={<ErrorMessage name="email" />}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Sign-Up</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}