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
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'A',
  }  
  var letraDataB = {
    url: '/img/B.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'B',
  }
  var letraDataC = {
    url: '/img/C.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'C',
  }
  var letraDataD = {
    url: '/img/D.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'D',
  }
  var letraDataE = {
    url: '/img/E.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'E',
  }
  var letraDataF = {
    url: '/img/F.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'F',
  }
  var letraDataG = {
    url: '/img/G.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'G',
  }
  var letraDataH = {
    url: '/img/H.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'H',
  }
  var letraDataI = {
    url: '/img/I.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'I',
  }
  var letraDataJ = {
    url: '/img/J.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'J',
  }
  var letraDataK = {
    url: '/img/K.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'K',
  }
  var letraDataL = {
    url: '/img/L.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'L',
  }
  var letraDataM = {
    url: '/img/M.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'M',
  }
  var letraDataN = {
    url: '/img/N.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'N',
  }
  var letraDataÑ = {
    url: '/img/Ñ.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'Ñ',
  }
  var letraDataO = {
    url: '/img/O.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'O',
  }
  var letraDataP = {
    url: '/img/P.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'P',
  }
  var letraDataQ = {
    url: '/img/Q.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'Q',
  }
  var letraDataR = {
    url: '/img/R.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'R',
  }
  var letraDataS = {
    url: '/img/S.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'S',
  }
  var letraDataT = {
    url: '/img/T.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'T',
  }
  var letraDataU = {
    url: '/img/U.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'U',
  }
  var letraDataV = {
    url: '/img/V.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'V',
  }
  var letraDataX = {
    url: '/img/X.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'X',
  }
  var letraDataY = {
    url: '/img/Y.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'Y',
  }
  var letraDataW = {
    url: '/img/W.png',
    descripcion: 'Pequeña descripcion de la letra',
    titulo: 'W',
  }
  var letraDataZ = {
    url: '/img/Z.png',
    descripcion: 'Pequeña descripcion de la letra',
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
