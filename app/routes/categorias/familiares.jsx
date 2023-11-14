import styles from '../../styles/categorias.css';

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Familiares() {


    return (
        <div className="contenido">
            <h2 className="heading">Familiares</h2>
            <div className="categoria">
                <img src="/img/familiares/familia.png"></img>
                <div className="contenido">
                    <p>
                        Las manos con los índices y pulgares unidos, los demás
                        dedos extendidos y las palmas hacia adelante se tocan por
                        el dorso de los pulgares. Enseguida se separan y giran hacia
                        adelante hasta quedar con los bordes externos unidos y las
                        palmas hacia atrás.
                    </p>
                </div>
            </div>
            <div className="categorias-grid">
                <div className="categoria">
                    <img src="/img/familiares/papa.png"></img>
                    <div className="contenido">
                        <p>
                        (El bigote) La mano en ‘1’ desliza la yema del índice sobre parte de la zona del bigote. Este movimiento puede repetirse.  
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/mama.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘5’ con los dedos juntos, excepto el pulgar, apoya varias veces el borde externo sobre la parte superior del pecho, al lado contrario de la mano en movimiento. Los labios se aprietan y se separan. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/abuelo.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘Q’ toca con la punta de los dedos la mejilla. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/esposo.png"></img>
                    <div className="contenido">
                        <p>
                        (Colocar la argolla) La mano con las yemas de los dedos índice y pulgares enfrentados y los demás dedos recogidos (o extendidos) y la palma hacia abajo recorren el dedo anular de la mano contraria, desde la punta hasta la base.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/tio.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘1’ con la palma hacia adentro toca con la yema del índice, varias veces, la punta del índice de la mano contraria, que también se encuentra en ‘1’ y ligeramente inclinada.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/hijo.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘H’ con la palma hacia atrás y los dedos hacia adentro se coloca a la altura de la frente, enseguida se mueve hacia abajo y al finalizar el movimiento realiza una pequeña curva hacia adelante.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/hermano.png"></img>
                    <div className="contenido">
                        <p>
                        Las manos en ‘1’ con las palmas hacia abajo y los índices hacia adelante, uno muy cerca del otro, se unen y separan varias veces.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/primo.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘1’, con el índice flexionado, se coloca sobre la punta del índice de la mano contraria, que se encuentra en ‘1’ con la palma hacia abajo.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Familiares