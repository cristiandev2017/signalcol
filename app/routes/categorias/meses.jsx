import styles from '../../styles/categorias.css';

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Meses() {


    return (
        <div className="contenido">
            <h2 className="heading">Meses del Año</h2>
            <div className="categorias-grid">
                <div className="categoria">
                    <img src="/img/meses/enero.png"></img>
                    <div className="contenido">
                        <p>
                        (La ‘E’, letra inicial de la palabra) La mano en ‘E’ realiza movimientos cortos hacia los lados.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/febrero.png"></img>
                    <div className="contenido">
                        <p>
                        (La ‘F’, letra inicial de la palabra) La mano en ‘F’ realiza movimientos cortos hacia los lados. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/marzo.png"></img>
                    <div className="contenido">
                        <p>
                        Se realiza la ‘Z’ del alfabeto manual. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/abril.png"></img>
                    <div className="contenido">
                        <p>
                        Las manos en ‘5’ con las palmas enfrentadas y el borde externo hacia adelante tocan alternadamente con el dedo medio la palma de la mano contraria. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/mayo.png"></img>
                    <div className="contenido">
                        <p>
                        Las manos en ‘5’ o con los dedos ligeramente flexionados, excepto el pulgar, los bordes externos hacia adelante y las palmas enfrentadas se tocan varias veces por las bases de las manos. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/junio.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘H’ con los dedos apoyados a un lado de la nariz se mueve hacia abajo al tiempo que adoptan la configuración ‘N’.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/julio.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘L’ apoya el borde interno del dedo índice a un lado de la nariz e inmediatamente se mueve hacia adelante hasta quedar con la palma hacia adelante. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/agosto.png"></img>
                    <div className="contenido">
                        <p>
                        (La ‘A’, letra inicial de la palabra) La mano en ‘A’ con la palma hacia adelante realiza pequeños movimientos hacia los lados.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/septiembre.png"></img>
                    <div className="contenido">
                        <p>
                        (La ‘S’, letra inicial de la palabra) La mano en ‘1’ dibuja frente a la cara la letra ‘S’.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/octubre.png"></img>
                    <div className="contenido">
                        <p>
                        (La ‘O’, letra inicial de la palabra) La mano en ‘O’ con la palma hacia adentro y el borde externo hacia adelante, realiza pequeños círculos hacia los lados.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/noviembre.png"></img>
                    <div className="contenido">
                        <p>
                        La mano en ‘H’ toca con la punta de los dedos un lado del cuello. Este movimiento se repite. 
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/meses/diciembre.png"></img>
                    <div className="contenido">
                        <p>
                        Las manos en ‘5’ con los dedos juntos excepto el pulgar, unidas por sus palmas y el borde externo hacia adelante, giran simultáneamente hacia adelante hasta que el borde externo queda hacia abajo
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Meses