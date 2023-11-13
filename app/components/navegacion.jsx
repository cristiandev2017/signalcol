import { Link, useLocation } from '@remix-run/react';
import { useState } from 'react';

function Navegacion() {
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Inicio
      </Link>
      <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''}>
        Nosotros
      </Link>
      <div className="submenu">
        <span onClick={toggleSubMenu} className="submenu-toggle">
          Categoria
        </span>
        {showSubMenu && (
          <div className="submenu-content">
            <Link to="/categorias/familiares">Familiares</Link>
            <Link to="/categorias/meses">Meses del año</Link>
            <Link to="/categorias/saludos">Saludos</Link>
          </div>
        )}
      </div>
      <Link to="/creapalabra" className={location.pathname === '/creapalabra' ? 'active' : ''}>
        Creemos palabras
      </Link>
    </nav>
  );
}

export default Navegacion;

