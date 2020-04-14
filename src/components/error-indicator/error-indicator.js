import React from "react";

const ErrorIndicator = ({ error }) => {
    console.log(error);
    return (
        <div className="alert alert-danger" role="alert">
            Sorry, something went wrong!
        </div>
    );
};

export default ErrorIndicator;
