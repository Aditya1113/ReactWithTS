import React, { useContext } from "react";
import { UserContext } from "../App";
import CompB from "./CompB";

const CompA = () => {
  return (
    <div>
      <h2>Comp A</h2>
      <CompB />
    </div>
  );
};

export default CompA;
