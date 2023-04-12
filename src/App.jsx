import { useState } from "react"
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"

import styles from './global.css'

function App() {
  const [resultado, setResultado] = useState(0);

  const atualizaResultado = r => {
    setResultado(r)
  }

  return (
    <>
      <Formulario pegaResultado={atualizaResultado} />
      <Resultado resposta={resultado} />
    </>
  )
}

export default App
