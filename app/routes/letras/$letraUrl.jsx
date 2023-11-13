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
      contenido = <p>La letra A se compone de usar la mano en forma de puño, sacando ligeramente el dedo pulgar</p>;
      url =  <img src='/img/A.png'></img> ;  
      break;
    case 'B':
      contenido = <p>La letra B se compone de mostrar los 4 dedos y ocultar el dedo pulgar formando la forma de una B minuscula.</p>;
      url =  <img src='/img/B.png'></img>;
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
