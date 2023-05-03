import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required(),

    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values", values);

    try {
      const response = await fetch(
        `https://arcappproject.pythonanywhere.com/user/enquiry_form`,
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      console.log("Contact form submitted:", data);
      resetForm();
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <>
      <div className=" text-black w-[100%] flex  justify-center items-center">
        <div className="shadow-2xl  p-20 mb-10 ">
          <h1 className="text-3xl font-bold mb-4 font-karla">Contact Us</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="font-karla ">
                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium mb-2 ">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    className={` border border-black  px-10 form-input ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    className="text-red-500 mt-1"
                    component="div"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium mb-2">
                    Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    className={` border px-10 border-black form-input ${
                      errors.name && touched.name ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    className="text-red-500 mt-1"
                    component="div"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="number" className="block font-medium mb-2">
                    Number
                  </label>
                  <Field
                    id="number"
                    name="number"
                    className={` border border-black px-10 form-input ${
                      errors.number && touched.number ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="number"
                    className="text-red-500 mt-1"
                    component="div"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block font-medium mb-2">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className={`px-10 border-black border form-input ${
                      errors.message && touched.message ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    className="text-red-500 mt-1"
                    component="div"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
