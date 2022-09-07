// This is a React Quiz from BFE.dev

import React, { useState, useEffect, memo } from "react";

function A() {
  console.log("A");
  return <B />;
}

const B = memo(() => {
  console.log("B");
  return <C />;
});

function C() {
  console.log("C");
  return null;
}

function D() {
  console.log("D");
  return null;
}

function Practice_4() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  console.log("App");
  return (
    <div>
      <A state={state} />
      <D />
    </div>
  );
}

export default Practice_4;

// "App"   // first render before useEffect() worked
// "A"     // first render
// "B"     // first render
// "C"     // first render
// "D"     // first render
// "App"   // second render after useEffect() worked
// "A"     // second render -> no B because of memo() -> no C because no B
// "D"     // second render
