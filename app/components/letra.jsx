
import {Link} from '@remix-run/react'
export default function Letra({letra}) {

  const {url, descripcion, titulo } =letra
  return (
    <div className="letra">
     <img src={url} alt={`Imagen letra ${titulo}`}></img>   
      <div className="contenido">
        <h3>
        <center>
          {titulo}
        </center>
        </h3>
        <p className="descripcion">
          {descripcion}
        </p>
        <Link className='enlace'
         to={`/letras/${titulo}`}
        > Ver Letra</Link>
      </div>
    </div>  
    )
}


