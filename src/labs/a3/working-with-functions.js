import React from "react";
import Es5Functions from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import ParenthesisParameters from "./function-parenthesis-and-parameters";

function WorkingWithFunctions() {
    return(
       <div>
          <h2>Working With Functions</h2>
          <Es5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <ParenthesisParameters/>
       </div>
    );
 }
 export default WorkingWithFunctions