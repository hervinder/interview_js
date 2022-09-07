import React, { useState, useEffect, memo } from "react";
import ReactDOM from "react-dom";
import Practice_2 from "./Practice_2";

/* 
Whenever component re-renders, does it mean that React re-renders the real DOM each time? 
No, React only updates the part of the UI that changed. 
A render is scheduled by React each time the state of a component is modified. 
For example, updating state via the setState hook will not happen immediately but React will execute it at the best possible moment.

But calling the render function has some side-effects even if the real DOM is not re-rendered:
    - the code inside the function is executed each time, which can be time-consuming depending on its content
    - the diffing algorithm is executed for each component to be able to determine if the UI needs to be updated
*/

function A() {
  console.log("A");
  return <B />;
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

/* 
Each state change in the parent component triggers a re-rendering of the child 
components even if they did not receive any props.

We can prevent children components from this needless rendering but wraping them
inside `React.memo`. They then child won't render on state change of parent. They 
will re-render only when props passed to them change. Even after wrapping in `memo`
they will always render on change of their internal state.

However when child component re-renders then its parent component is not re-rendered.
*/

function Practice_3() {
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

export default Practice_3;

/* Ans:
"App"
"A"
"B"
"C"
"D"
"App"
"A"
"B"
"C"
"D"
 */
