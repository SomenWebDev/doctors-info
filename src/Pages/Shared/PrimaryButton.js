import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary uppercase bg-gradient-to-r from-cyan-500 to-blue-500">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
