import Letra from "../components/letra";
import styles from '../styles/letras.css';

export function meta (){
  return {
    title:'SignalCol - Señas Colombianas',
    descripcion: 'Señas colombianas'
  }
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

function Index() {
  //Mirar forma despues de hacerlo mejor
  var letraDataA = {
    url: '/img/A.png',
    descripcion: 'Se compone de usar la mano en forma de puño, sacando ligeramente el dedo pulgar',
    titulo: 'A',
  }  
  var letraDataB = {
    url: '/img/B.png',
    descripcion: 'Se compone de mostrar los 4 dedos y ocultar el dedo pulgar formando la forma de una B minuscula',
    titulo: 'B',
  }
  var letraDataC = {
    url: '/img/C.png',
    descripcion: 'Se compone de crear una curva con el dedo pulgar y el índice, dejando los demás dedos doblados hacia adentro.',
    titulo: 'C',
  }
  var letraDataD = {
    url: '/img/D.png',
    descripcion: 'Se compone de crear un círculo juntando el pulgar con los siguientes dedos índice, medio y anular y por último levantando el dedo meñique.',
    titulo: 'D',
  }
  var letraDataE = {
    url: '/img/E.png',
    descripcion: 'Se compone de flexionar todos los dedos hacia adentro dejando por fuera el pulgar.',
    titulo: 'E',
  }
  var letraDataF = {
    url: '/img/F.png',
    descripcion: 'Se compone de doblar hacia abajo el dedo meñique, anular, y medio, levantar el dedo índice juntándolo con el pulgar.',
    titulo: 'F',
  }
  var letraDataG = {
    url: '/img/G.png',
    descripcion: 'Se compone de doblar hacia adentro el dedo meñique, anular, y medio, levantar el dedo índice semiflexionado, y por último juntar el pulgar con el índice, creando una curva.',
    titulo: 'G',
  }
  var letraDataH = {
    url: '/img/H.png',
    descripcion: 'Se compone de doblar todos los dedos hacia adentro y dejar por fuera el índice y el medio juntos.',
    titulo: 'H',
  }
  var letraDataI = {
    url: '/img/I.png',
    descripcion: 'Se compone de doblar todos los dedos hacia adentro, y dejar hacia arriba el dedo meñique.',
    titulo: 'I',
  }
  var letraDataJ = {
    url: '/img/J.png',
    descripcion: 'Se compone de doblar todos los dedos hacia adentro, y dejar hacia arriba el dedo meñique posterior a esto realizar una forma de J con el dedo.',
    titulo: 'J',
  }
  var letraDataK = {
    url: '/img/K.png',
    descripcion: 'Se compone de levantar el índice, el medio, y juntar el pulgar en el centro de estos dos dedos, los demás es flexionarlos hacia abajo.',
    titulo: 'K',
  }
  var letraDataL = {
    url: '/img/L.png',
    descripcion: 'Se compone de ubicar el dedo índice hacia arriba y el pulgar hacia la izquierda.',
    titulo: 'L',
  }
  var letraDataM = {
    url: '/img/M.png',
    descripcion: 'Se compone de ubicar el dedo índice, medio y anular levantados mirando hacia abajo y juntar hacia dentro el pulgar con el meñique.',
    titulo: 'M',
  }
  var letraDataN = {
    url: '/img/N.png',
    descripcion: 'Se compone de ubicar el dedo índice y medio levantados mirando hacia abajo y juntar hacia dentro el pulgar con el meñique y el anular.',
    titulo: 'N',
  }
  var letraDataÑ = {
    url: '/img/Ñ.png',
    descripcion: 'Se compone de ubicar el dedo índice y medio levantados mirando hacia abajo y juntar hacia dentro el pulgar con el meñique y el anular, y por último girar de derecha a izquierda.',
    titulo: 'Ñ',
  }
  var letraDataO = {
    url: '/img/O.png',
    descripcion: 'Se compone de juntar todas las puntas de los dedos formando un círculo.',
    titulo: 'O',
  }
  var letraDataP = {
    url: '/img/P.png',
    descripcion: 'Se compone de realizar con el dedo medio un circulo y juntarlo con el dedo índice, dejar abierto el dedo pulgar, el dedo meñique y anular flexionarlo hacia abajo',
    titulo: 'P',
  }
  var letraDataQ = {
    url: '/img/Q.png',
    descripcion: 'Se compone de juntar todas las puntas de los dedos mirando hacia arriba.',
    titulo: 'Q',
  }
  var letraDataR = {
    url: '/img/R.png',
    descripcion: 'Se compone de entrelazar el dedo índice y medio y juntar las puntas de los dedos pulgar, meñique y anular.',
    titulo: 'R',
  }
  var letraDataS = {
    url: '/img/S.png',
    descripcion: 'Se compone de realizar con el dedo índice una forma de S manteniendo los dedos juntos y estirados.',
    titulo: 'S',
  }
  var letraDataT = {
    url: '/img/T.png',
    descripcion: 'Se compone de juntar el pulgar con el índice creando un triangulo entre ambos dejando hacia arriba los demás dedos.',
    titulo: 'T',
  }
  var letraDataU = {
    url: '/img/U.png',
    descripcion: 'Se compone de dejar hacia arriba el dedo meñique e índice y poner hacia abajo los dedos medio, anular y pulgar.',
    titulo: 'U',
  }
  var letraDataV = {
    url: '/img/V.png',
    descripcion: 'Se compone de dejar hacia arriba el dedo índice y medio y poner hacia abajo juntando las puntas del dedo meñique, anular y pulgar.',
    titulo: 'V',
  }
  var letraDataX = {
    url: '/img/X.png',
    descripcion: 'Se compone de cubrir el dedo pulgar con los dedos meñique, anular y medio y flexionar hacia arriba el dedo índice.',
    titulo: 'X',
  }
  var letraDataY = {
    url: '/img/Y.png',
    descripcion: 'Se compone de flexionar hacia abajo el dedo índice, medio y anular y dejar mirando hacia arriba el dedo meñique y pulgar.',
    titulo: 'Y',
  }
  var letraDataW = {
    url: '/img/W.png',
    descripcion: 'Se compone de dejar hacia arriba el dedo índice, medio y anular poner hacia abajo juntando las puntas del dedo meñique y pulgar.',
    titulo: 'W',
  }
  var letraDataZ = {
    url: '/img/Z.png',
    descripcion: 'Se compone de juntar el dedo índice y medio mirando hacia arriba, flexionar hacia abajo el dedo meñique y anular y poner por encima de estos el dedo pulgar.',
    titulo: 'Z',
  }

  return (
    <div>
      <main className="contenedor">
        <h2 className="heading">Abecedario<img src='/img/abecedario.gif' style={{ width: '60px', height: 'auto', borderRadius: '50%' }}></img> </h2>
          <div className="letras-grid">
            <Letra
              letra = {letraDataA}
              key={1}
            />
            <Letra
              letra = {letraDataB}
              key={2}
            />
            <Letra
              letra = {letraDataC}
              key={3}
            />
            <Letra
              letra = {letraDataD}
              key={4}
            />
            <Letra
              letra = {letraDataE}
              key={5}
            />
            <Letra
              letra = {letraDataF}
              key={6}
            />
            <Letra
              letra = {letraDataG}
              key={7}
            />
            <Letra
              letra = {letraDataH}
              key={8}
            />
            <Letra
              letra = {letraDataI}
              key={9}
            />
            <Letra
              letra = {letraDataJ}
              key={10}
            />
            <Letra
              letra = {letraDataK}
              key={11}
            />
            <Letra
              letra = {letraDataL}
              key={12}
            />
            <Letra
              letra = {letraDataM}
              key={13}
            />
            <Letra
              letra = {letraDataN}
              key={14}
            />  
            <Letra
              letra = {letraDataÑ}
              key={15}
            />  
            <Letra
              letra = {letraDataO}
              key={16}
            />  
            <Letra
              letra = {letraDataP}
              key={17}
            />  
            <Letra
              letra = {letraDataQ}
              key={18}
            />  
            <Letra
              letra = {letraDataR}
              key={19}
            />  
            <Letra
              letra = {letraDataS}
              key={20}
            />  
            <Letra
              letra = {letraDataT}
              key={21}
            />  
            <Letra
              letra = {letraDataU}
              key={22}
            />
            <Letra
              letra = {letraDataV}
              key={23}
            /> 
            <Letra
              letra = {letraDataW}
              key={24}
            /> 
            <Letra
              letra = {letraDataX}
              key={25}
            /> 
            <Letra
              letra = {letraDataY}
              key={26}
            /> 
            <Letra
              letra = {letraDataZ}
              key={27}
            />                                                                                                                                                                                                               
          </div>
      </main>
    </div>
  )
}

export default Index
