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
                </div>
                <div className="categoria">
                    <img src="/img/meses/febrero.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/marzo.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/abril.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/mayo.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/junio.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/julio.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/agosto.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/septiembre.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/octubre.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/noviembre.png"></img>
                </div>
                <div className="categoria">
                    <img src="/img/meses/diciembre.png"></img>
                </div>
            </div>
        </div >
    )
}

export default Meses