import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Login({ realUserName, realUserPassword }) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if(e.target.type === "text") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  return (
    <div className="container">
      <div className="enter_form">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputText1">Username</label>
            <input
              onChange={handleChange}
              type="text"
              value={userName}
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
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password" />
            <small
              id="textHelp"
              className="form-text text-muted">
                Don't have account?{" "}
                <Link to="/signup">Registration</Link>
            </small>
          </div>
          <div className="form-group form-check">
            
          </div>
          <button
            onClick={() => console.log("userName " + userName + ", " + "password " + password)}
            type="submit"
            className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    realUserName: user.username,
    realUserPassword: user.password
  }
}

export default Login;
