import styles from '../../styles/categorias.css';

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Saludos() {


    return (
        <div className="contenido">
            <h2 className="heading">Saludos</h2>
            <div className="categorias-grid">
                <div className="categoria">
                    <img src="/img/saludos/buenos_dias.jpg"></img>
                    <div className="contenido">
                        <p>
                            Representando la aparicion del sol.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/saludos/hola.jpg"></img>
                    <div className="contenido">
                        <p>
                            Una representacion algo militar.
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/saludos/buenas_tardes.jpg"></img>
                    <div className="contenido">
                        <p>
                            Representacion más a medio tiempo .
                        </p>
                    </div>
                </div>
                <div className="categoria">
                    <img src="/img/saludos/buenas_noches.jpg"></img>
                    <div className="contenido">
                        <p>
                            Una representacion donde se esconde el sol.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Saludos