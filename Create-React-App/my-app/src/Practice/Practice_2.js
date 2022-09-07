import React, { useState, useEffect } from "react";

function A({ children }) {
  const [state, setState] = useState(0);
  console.log("A", state);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  return children;
}

function B() {
  console.log("B");
  return <C />;
}

function C() {
  console.log("C");
  return null;
}

function D() {
  console.log("D");
  return null;
}

function Practice_2() {
  console.log("App");
  return (
    <div>
      <A>
        <B />
      </A>
      <D />
    </div>
  );
}

export default Practice_2;

// A 0
// B
// C
// D
// A 1

/* Here even on state change of `A` parent component, child components will not re-render. When the parent state
   changes, parent component re-renders. But it still has the same children prop it got last time, 
   so React doesn’t visit that subtree. And as a result, child component doesn’t re-render.
  
  
  Thus there are two ways to 
  prevent child components from re-rendering.
    - wrapping them in `memeo`
    - passing them as `children` prop
 */
