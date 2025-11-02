import React, { useState } from "react";

funtion clickCounter () {
  const [count, setCount] = useState(0);

  return(
    <div>
      <p> Button clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)} > CLick me </button>
    </div>
    );
}

export default clickCounter;
