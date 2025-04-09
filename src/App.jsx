import { useState } from "react"
import Contador from "./components/Contador"
import Controles from "./components/Controles"
import Props from "./components/Props"
import InputTexto from "./components/InputTexto"

function App() {
	const [contador, setContador] = useState(0)

	const nombre = "Charles"  
	const apellido = "Chuez"

  return (
    <>
       <Props nombre={nombre} apellido={apellido}/>
	   <hr/>
	   <Contador contador={contador}/>
	   <Controles setContador={setContador}/>
	   <hr/>
	   <InputTexto/>
    </>
  )
}

export default App