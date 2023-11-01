import React from "react";
import { TextField } from "@mui/material";

function BasicDatePicker({
	value,
	onChange,
	...otherProps
}) {
	const configDatePicker = {
		...otherProps,
		type: "date",
		variant: "outlined",
		fullWidth: true,
		InputLabelProps: {
			shrink: true,
		},
		value: value || "",
		onChange: (e) => {
			if (onChange) {
				onChange(e.target.value);
			}
		},
	};

	return (
		<div>
			<TextField {...configDatePicker} />
		</div>
	);
}

export default BasicDatePicker;
