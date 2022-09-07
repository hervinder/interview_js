import React, { useEffect, useState } from "react";

function Practice_5() {
  const [state, setState] = useState(0);
  console.log(state);

  useEffect(() => {
    setState((state) => state + 1);
  }, []);

  useEffect(() => {
    console.log(state);
    setTimeout(() => {
      console.log(state);
    }, 100);
  }, []);

  return null;
}

export default Practice_5;
