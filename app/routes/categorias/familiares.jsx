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
                        Familia es una seña que involucra un simbolo de union.
                    </p>
                </div>
            </div>
            <div className="categorias-grid">
                <div className="categoria">
                    <img src="/img/familiares/papa.png"></img>
                    <div className="contenido">
                        <p>
                            Tiene un aroma al bigote que los representaba.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/mama.png"></img>
                    <div className="contenido">
                        <p>
                            Es una seña sutil al amor maternal de la madre.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/abuelo.png"></img>
                    <div className="contenido">
                        <p>
                            Un pequeño gesto a a las marcas de los años.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/esposo.png"></img>
                    <div className="contenido">
                        <p>
                            Se referencia con el anillo de compromiso.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/tio.png"></img>
                    <div className="contenido">
                        <p>
                            La mejor forma con su inicial "T" se hace un movimiento vertical.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/hijo.png"></img>
                    <div className="contenido">
                        <p>
                            Una referencia de la "H" y un guiño a como vinimos al mundo.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/hermano.png"></img>
                    <div className="contenido">
                        <p>
                            Una representacion de semejantes y unidos.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/familiares/primo.png"></img>
                    <div className="contenido">
                        <p>
                            Una referencia algo confusa pero que da indicios de union.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Familiares