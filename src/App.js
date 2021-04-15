import firebase from "./firebase";
import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
        },
      }
    );
  };
   onSignInSubmit = (event) => {
    event.preventDefault();
    this.setUpRecaptcha();
    const phoneNumber = "+916260007334";
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
            console.log("user is signed in");
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };


  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="row justify-cintent-center align-items-center">
          <div className="col-sm-6 text-left">
            <h2>Phone Login</h2>
            <form onSubmit={this.onSignInSubmit}>
              <div id="recaptcha-container"></div>
              <div className="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input type="number" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

