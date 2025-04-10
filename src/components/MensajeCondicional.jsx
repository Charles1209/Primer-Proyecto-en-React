import React, {useState} from 'react'

const MensajeCondicional = () => {
	
	const [mensaje, setMensaje] = useState('')

  return (
	<div>
		<input
			type='text'
			placeholder='Escribe un mensaje'
			value={mensaje}
			onChange={(e)=>setMensaje(e.target.value)}
		/>
		{mensaje ? <p>Tu mensaje es: {mensaje}</p> : <p>No hay mensjae aún.</p>}
		{
			mensaje && <button
				onClick={
					()=>{alert(`Mensaje Enviado: ${mensaje}`)}
				}
			>
				Enviar
			</button>
		}
	</div>
  )
}

export default MensajeCondicional
