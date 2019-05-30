import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../imports/ui/App";
import { BrowserRouter } from "react-router-dom";
import "../imports/startup/accounts-config";

Meteor.startup(() => {
  render(
    <div className="oisp-buddy">
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>,
    document.getElementById("react-target")
  );
});
