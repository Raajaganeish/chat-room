import React from "react";
import "./404.scss";
const ErrorPage = () => {
  return (
    <div className="errorPageContainer">
      <div className="errorContent">
        <img src="404-error.png" alt="" />
        <p>OOPS!</p>
      </div>
    </div>
  );
};

export default ErrorPage;
