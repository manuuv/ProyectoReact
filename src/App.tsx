import { useState } from "react";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { ComponentForm } from "./components/ComponentForm/ComponentForm";
import { AppProduct } from "./components/AppProduct/AppProduct";

export const App = () => {

    const [enableCounter, setEnableCounter] = useState(false);

  return (
    <>
        <div style = {{display: 'flex', flexDirection: 'column', gap: "2vh"}}>
        <MiPrimerComponent 
        text = {"Texto desde propiedades"} 
        color = "red" 
        fontSize={1.5} />

        {
            enableCounter && <ComponentCounter />
        }

        <button onClick = {() =>{
            setEnableCounter(!enableCounter);
        }}>Mostrar/Ocultar Counter</button>

        <ComponentUseEffect />
        
        <ComponentForm />

        <AppProduct></AppProduct>

        </div>
        
    
    </>
    
  )
}
