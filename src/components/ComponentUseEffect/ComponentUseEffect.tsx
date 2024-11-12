import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {

    const [state, setState] = useState(false);

    useEffect(() => {
        console.log('first')
    },[])

  return (
    <div>
        <p>{state ? "Es True" : "Es False"}</p>
    
        <button onClick={() => {
            setState(!state)
        }}>
            Cambiar Estado
        </button>

    </div>
  )
}
