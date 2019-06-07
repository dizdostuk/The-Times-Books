import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";
import { registerUser } from "../actions";

function Registration({ registerAccount }) {
  const [userObj, setUserObj] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: ""
  });

  
  const handleChange = (e) => {
    let obj = {
      ...userObj
    };
    obj[e.target.name] = e.target.value;
    
    setUserObj(obj);
  }
  return (
    <div className="container">
      <div className="enter_form">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputText1">Username</label>
            <input
              onChange={handleChange}
              type="text"
              name="userName"
              value={userObj.userName}
              className="form-control"
              id="exampleInputText1"
              aria-describedby="textHelp"
              placeholder="Enter username" />
            <small
              id="textHelp"
              className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={userObj.password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputText3">First Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              value={userObj.firstName}
              className="form-control"
              id="exampleInputText3"
              aria-describedby="textHelp"
              placeholder="Enter your first name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputText4">Last Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              value={userObj.lastName}
              className="form-control"
              id="exampleInputText4"
              aria-describedby="textHelp"
              placeholder="Enter your last name" />
            <small
              id="textHelp"
              className="form-text text-muted">
                Already have account?{" "}
                <Link to="/login">Login</Link>
            </small>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              registerAccount(userObj);
            }}
            type="submit"
            className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerAccount: (obj) => dispatch(registerUser(obj))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Registration);