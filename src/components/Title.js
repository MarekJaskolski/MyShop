import React, { useState, useEffect } from "react";

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="header-text">
          {name} <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
