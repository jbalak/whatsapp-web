import { useEffect } from "react";

const Status = () => {
  let ctr = 0;
  useEffect(() => {
    console.log("status", ++ctr);
  });

  return <h1>status</h1>;
};

export default Status;
