import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { contact } from "../../entities/schemes";

function CVSection() {
  const inputFieldTW = "rounded-sm p-1 bg-transparent";

  return (
    <>
      <Formik
        validationSchema={contact}
        initialValues={{
          name: "",
          email: "",
          message: "",
          phoneNumber: [],
        }}
        onSubmit={(values) => {
          values.name;
          values.email;
          values.phoneNumber;
          values.message;
        }}

        
        
        render={({ values }) => (
          <Form className=" flex flex-col p-4 bg-sky-200 rounded-md">
            <label htmlFor="name">Full Name</label>
            <Field
              className={inputFieldTW}
              id="name"
              name="name"
              placeholder="John Doe"
            />
            <ErrorMessage name="name" />

            <label htmlFor="message">Message</label>
            <Field
              className={inputFieldTW}
              id="message"
              name="message"
              placeholder="Short bit about yourself"
            />
            <ErrorMessage name="message" />

            <label htmlFor="email">email</label>
            <Field
              className={inputFieldTW}
              id="email"
              name="email"
              placeholder="John@acm.com"
            />
            <ErrorMessage name="email" />


            <label htmlFor="phoneNumber">phoneNumber</label>
            <FieldArray
              name="phoneNumber"
              render={(arrayHelpers) => (
                <div>
                  {values.phoneNumber.map((number, index) => (
                    <div key={index}>
              
                      <Field
                        className={inputFieldTW}
                        id={`phoneNumber${index}`}
                        name={`phoneNumber${index}`}
                        placeholder="009641234567"
                        type="phoneNumber"
                      />
                      <ErrorMessage name="phoneNumber" />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    +
                  </button>
                </div>
              )}
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </>
  );
}

export default CVSection;
