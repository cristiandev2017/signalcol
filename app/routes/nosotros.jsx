import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Pagina informativa y educativa de lengua de señas'
  }
}


export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
    <h2 className="heading">Nosotros</h2>

    <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros"/>

        <div>
            <p>SignalCol viene del juego de palabras de "Signal" que es señal y "COL" de colombia como un software que permita mejorar la comunicación y entender un poco la comunidad con discapacidad auditiva.</p>
            <h4>Objetivo</h4>
            <p>El principal objetivo de la aplicación es hacer mas inclusivo y general el lenguaje de señas, para que todas las personas lo conozcan, es un aplicativo totalmente exponencial es decir que va a tener mejoras al ritmo de su evolucion y se integraran archivos visuales y herramientas didacticas para un mejor uso del usuario final.</p>
        </div>
    </div>
</main>
  )
}

export default Nosotros
