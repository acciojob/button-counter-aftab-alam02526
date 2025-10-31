import React, { useState } from "react";

funtion clickCounter{
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>{count}</p>
      <button onClick = {() => setCount(count + 1)}
    </div>
    );
}

export default clickCounter;
