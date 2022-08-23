import React from "react";
import "./loginPage.css";

const LoginPage = (e) => {
  const signUp = () => {
    switch (document.querySelector(".register").innerHTML) {
      case "Sign Up":
        document.querySelector(".register").innerHTML = "Login";
        document.querySelector(".email").style.display = "inline-block";
        document.querySelector(".confirmPassword").style.display =
          "inline-block";
        document.querySelector(".subBtn").value = "Sign Up";
        document.querySelector(".login div form h1").innerHTML = "Sign Up";
        break;
      case "Login":
        document.querySelector(".register").innerHTML = "Sign Up";
        document.querySelector(".email").style.display = "none";
        document.querySelector(".confirmPassword").style.display = "none";
        document.querySelector(".subBtn").value = "Login";
        document.querySelector(".login div form h1").innerHTML = "Login";
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="login">
        <div>
          <button
            onClick={signUp}
            className="register animate__shakeX animate__animated"
          >
            Sign Up
          </button>
          <form>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username"
              className="animate__animated animate__fadeInLeft"
            />
            <input
              type="email"
              placeholder="Email"
              className="email animate__animated animate__fadeInLeft"
            />
            <input
              type="password"
              placeholder="Password"
              className="animate__animated animate__fadeInLeft"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="confirmPassword animate__animated animate__fadeInLeft"
            />
            <input
              type="submit"
              value="Login"
              className="subBtn animate__animated animate__fadeInDown"
            />
            <h3>Social media</h3>
            <div className="socialMediaIcon">
              <i className="fa fa-facebook-official animate__shakeX animate__animated"></i>
              <i className="fa fa-instagram animate__shakeX animate__animated"></i>
              <i className="fa fa-whatsapp animate__shakeX animate__animated"></i>
              <i className="fa fa-telegram animate__shakeX animate__animated"></i>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
