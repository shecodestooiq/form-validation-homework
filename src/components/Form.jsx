import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Snackbar,
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import Alert from "@mui/material/Alert";

import BasicDatePicker from "./BasicDatePicker";

const validationSchema = Yup.object({
	name: Yup.string()
		.required("Name is required")
		.min(3, "Name must be at least 3 characters"),
	email: Yup.string()
		.required("Email is required")
		.email("Invalid email address"),
	message: Yup.string()
		.required("Message is required")
		.min(40, "Message must be at least 40 characters")
		.max(255, "Message cannot exceed 255 characters"),
	phoneNumber: Yup.string()
		.required("Phonenumber is required")
		.matches(/^\d+$/, "Phone number must be a valid number")
		.length(11, "Phone number must be 11 digits"),
	date: Yup.date()
		.min(new Date(), "Date must not be before today")
		.required("Start date is required"),
	additionalInfo: Yup.string()
		.min(10, "Message must be at least 10 characters")
		.max(100, "Message cannot exceed 100 characters"),
});

const initialValues = {
	name: "",
	email: "",
	message: "",
	phoneNumber: "",
	date: "",
	agree: false,
	additionalInfo: "",
};

const Form = () => {
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [formValues, setFormValues] = useState(null);
	const [selectedDate, setSelectedDate] = useState("");

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	function onSubmit(values) {
		setFormValues(values);
		setOpenSnackbar(true);
		// console.log(values);
	}

	const handleDateChange = (date) => {
		setSelectedDate(date);
		formik.setFieldValue("date", date);
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	return (
		<div className='formContainer'>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					label='Name'
					id='name'
					name='name'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
					variant='outlined'
					fullWidth
					margin='normal'
					helperText={
						formik.touched.name && formik.errors.name
					}
					error={
						formik.touched.name &&
						Boolean(formik.errors.name)
					}
					sx={{ fontFamily: "Helvetica Neue, sans-serif" }}
				/>

				<TextField
					label='Email'
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
					variant='outlined'
					fullWidth
					margin='normal'
					helperText={
						formik.touched.email && formik.errors.email
					}
					error={
						formik.touched.email &&
						Boolean(formik.errors.email)
					}
				/>

				<TextField
					label='Message'
					id='message'
					name='message'
					multiline
					rows={4}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.message}
					variant='outlined'
					fullWidth
					margin='normal'
					helperText={
						formik.touched.message && formik.errors.message
					}
					error={
						formik.touched.message &&
						Boolean(formik.errors.message)
					}
				/>

				<TextField
					label='Phone Number'
					id='phoneNumber'
					name='phoneNumber'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.phoneNumber}
					variant='outlined'
					fullWidth
					margin='normal'
					helperText={
						formik.touched.phoneNumber &&
						formik.errors.phoneNumber
					}
					error={
						formik.touched.phoneNumber &&
						Boolean(formik.errors.phoneNumber)
					}
				/>

				<BasicDatePicker
					name='date'
					label='Pick a Date'
					value={selectedDate}
					onChange={handleDateChange}
				/>

				<FormControlLabel
					control={
						<Checkbox
							id='agree'
							name='agree'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							checked={formik.values.agree}
						/>
					}
					label='Agree to terms'
				/>

				{formik.values.agree && (
					<TextField
						label='Additional Info'
						id='additionalInfo'
						name='additionalInfo'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.additionalInfo}
						variant='outlined'
						fullWidth
						margin='normal'
						helperText={
							formik.touched.additionalInfo &&
							formik.errors.additionalInfo
						}
						error={
							formik.touched.additionalInfo &&
							Boolean(formik.errors.additionalInfo)
						}
					/>
				)}

				<Button
					type='submit'
					variant='contained'
					color='primary'
					fullWidth
					sx={{
						mt: 2,
						backgroundColor: "#61A6AB",
						color: "white",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#AB3E5B",
						},
					}}
				>
					Submit
				</Button>
			</form>

			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				sx={{
					width: "95%",
					transform: "translateX(-10px)",
				}}
			>
				<Alert
					onClose={handleCloseSnackbar}
					icon={false}
					severity='success'
					sx={{
						maxWidth: "inherit",
						width: "100%",
						background: "#AB3E5B",
						color: "white",
					}}
				>
					<pre
						style={{
							whiteSpace: "pre-wrap",
						}}
					>
						{JSON.stringify(formValues, null, 2)}
					</pre>
				</Alert>
			</Snackbar>
		</div>
	);
};

export default Form;
