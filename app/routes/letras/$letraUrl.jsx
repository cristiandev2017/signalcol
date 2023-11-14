import React, { Fragment } from 'react'
import { useLoaderData } from '@remix-run/react';

export async function loader({params}){

  const { letraUrl } = params
  
  console.log(letraUrl);

  return letraUrl;
}

 function LetraInfo() {

  const letra = useLoaderData()

  let contenido;
  let url;

  switch (letra) {
    case 'A':
      contenido = <p>Se compone de usar la mano en forma de puño, sacando ligeramente el dedo pulgar</p>;
      url =  <img src='/img/A.png'></img> ;  
      break;
    case 'B':
      contenido = <p>Se compone de mostrar los 4 dedos y ocultar el dedo pulgar formando la forma de una B minuscula.</p>;
      url =  <img src='/img/B.png'></img>;
      break;
    case 'C':
      contenido = <p>Se compone de crear una curva con el dedo pulgar y el índice, dejando los demás dedos doblados hacia adentro.</p>;
      url =  <img src='/img/C.png'></img>;
      break;
    case 'D':
      contenido = <p>Se compone de crear un círculo juntando el pulgar con los siguientes dedos índice, medio y anular y por último levantando el dedo meñique.</p>;
      url =  <img src='/img/D.png'></img>;
      break;
    case 'E':
      contenido = <p>Se compone de flexionar todos los dedos hacia adentro dejando por fuera el pulgar.</p>;
      url =  <img src='/img/E.png'></img>;
      break;
    case 'F':
      contenido = <p>Se compone de doblar hacia abajo el dedo meñique, anular, y medio, levantar el dedo índice juntándolo con el pulgar.</p>;
      url =  <img src='/img/F.png'></img>;
      break;
    case 'G':
      contenido = <p>Se compone de doblar hacia adentro el dedo meñique, anular, y medio, levantar el dedo índice semiflexionado, y por último juntar el pulgar con el índice, creando una curva.</p>;
      url =  <img src='/img/G.png'></img>;
      break;
    case 'H':
      contenido = <p>Se compone de doblar todos los dedos hacia adentro y dejar por fuera el índice y el medio juntos.</p>;
      url =  <img src='/img/H.png'></img>;
      break;
    case 'I':
      contenido = <p>Se compone de doblar todos los dedos hacia adentro, y dejar hacia arriba el dedo meñique.</p>;
      url =  <img src='/img/I.png'></img>;
      break;
    case 'J':
      contenido = <p>Se compone de doblar todos los dedos hacia adentro, y dejar hacia arriba el dedo meñique posterior a esto realizar una forma de J con el dedo.</p>;
      url =  <img src='/img/J.png'></img>;
      break;
    case 'K':
      contenido = <p>Se compone de levantar el índice, el medio, y juntar el pulgar en el centro de estos dos dedos, los demás es flexionarlos hacia abajo.</p>;
      url =  <img src='/img/K.png'></img>;
      break;
    case 'L':
      contenido = <p>Se compone de ubicar el dedo índice hacia arriba y el pulgar hacia la izquierda.</p>;
      url =  <img src='/img/L.png'></img>;
      break;
    case 'M':
      contenido = <p>Se compone de ubicar el dedo índice, medio y anular levantados mirando hacia abajo y juntar hacia dentro el pulgar con el meñique.</p>;
      url =  <img src='/img/M.png'></img>;
      break;
    case 'N':
        contenido = <p>Se compone de ubicar el dedo índice y medio levantados mirando hacia abajo y juntar hacia dentro el pulgar con el meñique y el anular.</p>;
        url =  <img src='/img/N.png'></img>;
        break;
    case 'Ñ':
      contenido = <p>Se compone de ubicar el dedo índice y medio levantados mirando hacia abajo y juntar hacia dentro el pulgar con el meñique y el anular, y por último girar de derecha a izquierda.</p>;
      url =  <img src='/img/Ñ.png'></img>;
      break;
    case 'O':
      contenido = <p>Se compone de juntar todas las puntas de los dedos formando un círculo.</p>;
      url =  <img src='/img/O.png'></img>;
      break;
    case 'P':
      contenido = <p>Se compone de realizar con el dedo medio un circulo y juntarlo con el dedo índice, dejar abierto el dedo pulgar, el dedo meñique y anular flexionarlo hacia abajo.</p>;
      url =  <img src='/img/P.png'></img>;
      break;
    case 'Q':
      contenido = <p>Se compone de juntar todas las puntas de los dedos mirando hacia arriba.</p>;
      url =  <img src='/img/Q.png'></img>;
      break;
    case 'R':
      contenido = <p>Se compone de entrelazar el dedo índice y medio y juntar las puntas de los dedos pulgar, meñique y anular.</p>;
      url =  <img src='/img/R.png'></img>;
      break;
    case 'S':
      contenido = <p>Se compone de realizar con el dedo índice una forma de S manteniendo los dedos juntos y estirados.</p>;
      url =  <img src='/img/S.png'></img>;
      break;
    case 'T':
      contenido = <p>Se compone de juntar el pulgar con el índice creando un triangulo entre ambos dejando hacia arriba los demás dedos.</p>;
      url =  <img src='/img/T.png'></img>;
      break;
    case 'U':
      contenido = <p>Se compone de dejar hacia arriba el dedo meñique e índice y poner hacia abajo los dedos medio, anular y pulgar.</p>;
      url =  <img src='/img/U.png'></img>;
      break;
    case 'V':
      contenido = <p>Se compone de dejar hacia arriba el dedo índice y medio y poner hacia abajo juntando las puntas del dedo meñique, anular y pulgar.</p>;
      url =  <img src='/img/V.png'></img>;
      break;
    case 'W':
      contenido = <p>Se compone de dejar hacia arriba el dedo índice, medio y anular poner hacia abajo juntando las puntas del dedo meñique y pulgar.</p>;
      url =  <img src='/img/W.png'></img>;
      break;
    case 'X':
      contenido = <p>Se compone de cubrir el dedo pulgar con los dedos meñique, anular y medio y flexionar hacia arriba el dedo índice.</p>;
      url =  <img src='/img/X.png'></img>;
      break;
    case 'Y':
      contenido = <p>Se compone de flexionar hacia abajo el dedo índice, medio y anular y dejar mirando hacia arriba el dedo meñique y pulgar.</p>;
      url =  <img src='/img/Y.png'></img>;
      break;
    case 'Z':
      contenido = <p>Se compone de juntar el dedo índice y medio mirando hacia arriba, flexionar hacia abajo el dedo meñique y anular y poner por encima de estos el dedo pulgar.</p>;
      url =  <img src='/img/Z.png'></img>;
      break;
    
    // Agrega más casos según las letras que necesites manejar
    default:
      contenido = <p>Breve descripcion del texto</p>;
      url =  <img src='/img/abecedario.gif'></img> ;  

  }

  return (
    <Fragment>
    <div className="heading">
      <h1>Letra {letra}</h1>     
    </div>
    <div className='textcenter'>
    {url}
    {contenido}
    </div>
    </Fragment>
  )
}

export default LetraInfo;
