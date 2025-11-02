import React, { useState } from "react";

function clickCounter () {
  const [count, setCount] = useState(0);

  return(
    <div>
      <p> Button clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)} > CLick me </button>
    </div>
    );
}

export default clickCounter;
