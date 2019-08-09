import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import UserList from "./UserList";
import Title from "./Title";

// http://localhost:5000/api/restricted/data

const RegForm = props => {
  //   console.log("RegForm props: ", props);
  const [users, setUsers] = useState([]);
  const { values, touched, errors, status } = props;

  useEffect(() => {
    if (status) {
      setUsers([...users, ...status.flat()]);
    }
  }, [status]);

  return (
    <div>
      <Title />
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <div>
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </div>
        <div>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
      </Form>
      <UserList users={users} />
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
    console.log("Axios Request");
    // axios
    //   .post("http://localhost:5000/api/register", values)
    //   .then(res => {
    //     // console.log("Response: ", res.data);
    //     setStatus(res.data);
    //     resetForm();
    //     setSubmitting(false);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     setSubmitting(false);
    //   });
    axios
      .get("http://localhost:5000/api/restricted/data", values)
      .then(res => {
        console.log("Response2: ", res.data);
        setStatus(res.data);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(RegForm);

export default FormikForm;
