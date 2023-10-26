import React, { useContext } from "react";
import { UserContext } from "../App";

const CompC = () => {
  const contextValue = useContext(UserContext);

  return (
    <div>
      <h2>Component C</h2>
      {contextValue}
    </div>
  );
};

export default CompC;
