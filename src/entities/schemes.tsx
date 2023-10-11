import * as yup from "yup";


export const contact = yup.object({
    name: yup.string()
      .max(26, "Name is too long")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Name is too short")
      .required("Required"),
      /// password
    email: yup.string().email("Invalid Email").required("Required"),
    phoneNumber: yup.array(yup.number()).min(13).max(13),
    message: yup.string().min(40).max(255),
    

  });   
