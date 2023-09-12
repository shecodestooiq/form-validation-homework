# Form Validation Task

Dear students,

Please use your ReactJS skills to Build a web application that allows users to submit data through a form. Utilize Formik and Yup for form management and validation, Material UI for the UI components, and integrate with a public API to submit the form data.

## Task Instructions

Please follow the steps below to complete the task:

1. Create a form with the following fields:
   Name (text input)
   Email (text input with email validation)
   Message (textarea)
   Phone number
   Use Formik to manage the form state and handle form submissions.
   Implement Yup schema validation to ensure that:
   Name is required and should be at least 3 characters long.
   Email is required and should be a valid email address.
   Message is required and should have 40 min characters and 255 max characters.
   Phone number should be a number that is valid in iraq.
2. Use Material UI to style and layout your form components.
   Ensure the form is visually appealing, user-friendly, and responsive.
3. Display the Submitted Data:
   - Create a section in your application that displays the data submitted through the form. Use a GET request to fetch this data from the API endpoint provided below.
4. Use these api endpoints to make your requests

   a. GET All User Info Records

   Endpoint: https://x8ki-letl-twmt.n7.xano.io/api:q7jBokrt/userinfo
   Description: This endpoint allows you to retrieve all user information records from the database.
   HTTP Method: GET
   Parameters: None

   b. POST Add User Info Record

   Endpoint: https://x8ki-letl-twmt.n7.xano.io/api:q7jBokrt/userinfo
   Description: This endpoint allows you to add a new user information record to the database.
   HTTP Method: POST
   Parameters: JSON body containing the user information data to be added.

   c. DELETE User Info Record

   Endpoint: https://x8ki-letl-twmt.n7.xano.io/api:q7jBokrt/userinfo/{userinfo_id}
   Description: This endpoint allows you to delete a specific user information record identified by {userinfo_id}.
   HTTP Method: DELETE
   Parameters: userinfo_id path parameter indicating the ID of the user information record to delete.

   d. GET Single User Info Record

   Endpoint: https://x8ki-letl-twmt.n7.xano.io/api:q7jBokrt/userinfo/{userinfo_id}
   Description: This endpoint allows you to retrieve information for a single user information record identified by {userinfo_id}.
   HTTP Method: GET
   Parameters: userinfo_id path parameter indicating the ID of the user information record to retrieve.

   e. POST Edit User Info Record

   Endpoint: https://x8ki-letl-twmt.n7.xano.io/api:q7jBokrt/userinfo/{userinfo_id}
   Description: This endpoint allows you to update or modify information for a single user information record identified by {userinfo_id}.
   HTTP Method: POST
   Parameters: userinfo_id path parameter indicating the ID of the user information record to update. JSON body containing updated user information data.

Please note that you will need to replace `{userinfo_id}` with the actual ID of the user information you want to interact with when making requests to the corresponding endpoints. Additionally, ensure that you provide the necessary data in the request body when required.

You can also read the api documentation => https://x8ki-letl-twmt.n7.xano.io/api:q7jBokrt .

5. Extra Tasks (Optional) - Edit and Delete Functionality
   a... Implement Edit Functionality
   Extend the form to allow users to edit existing data by fetching the data from the API using a GET request and populating the form fields. Implement a button or action to trigger the edit mode, allowing users to make changes and submit updates
   b... Implement Delete Functionality
   Add a "Delete" button or action next to each data entry in the displayed list. When clicked, prompt the user with a confirmation dialog, and upon confirmation, send a DELETE request to remove the data from the API.

Please feel free to reach out if you have any questions or need further assistance.
