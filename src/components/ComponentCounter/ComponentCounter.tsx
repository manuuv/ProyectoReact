import { useState } from "react"

export const ComponentCounter = () => {

    const [counter, setCounter] = useState<number> (0);

    const incrementarCounter = () => {
        setCounter((count) => count+1);
    }
    const decrementarCounter = () => {
        if(counter > 0) 
        setCounter((count) => count-1);
    }

  return (
    <div>
        <h2>valor de counter: {counter}</h2>
        <button onClick = {incrementarCounter}>Incremetar</button>
        <button onClick = {decrementarCounter}>Decrementar</button>
    </div>
  )
}
