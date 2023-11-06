import './Toolbar.css';
import React, { useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaUserCircle, FaPlusCircle } from 'react-icons/fa';  // Importando iconos de ejemplo
import logo from '../../assets/icons/LogoLetrasSinFondo.png';
import { FaSearch } from 'react-icons/fa';
import plusIcon from '../../assets/icons/plus 1.png';
import { Link } from 'react-router-dom';
import UserDataOverlay from '../UserDataOverlay/UserDataOverlay';
import TuristaCardRutasContainer from '../TuristaCardRutasContainer/TuristaCardRutasContainer';

function Toolbar() {

  const [showCardRutasTurista, setShowCardRutasTurista] = useState(false);

  // Función para manejar el click en el botón
  const handleButtonClick = () => {
    setShowCardRutasTurista(true);
  };

  // Función para manejar el cierre del CardRutasTurista
  const handleCloseCard = () => {
    setShowCardRutasTurista(false);
  };

  return (
    <>
      <div className="toolbar">
        <Link to='/'>
          <img src={logo} alt="Logo" className='logo' />
        </Link>

        {/* <Link to='/mapPage'>
                <button className="btn-crear">
                    <img src={plusIcon} alt="Icono Crear" className="btn-icon" />
                    Crear
                </button>
      </Link> */}

        <div className='ToolBar-Buttons'>
          <button className="btn-crear" onClick={handleButtonClick}>Tus Rutas</button>
          {showCardRutasTurista && <TuristaCardRutasContainer onClose={handleCloseCard} />}
          <UserDataOverlay />
        </div>
      </div>
    </>
  );
}

export default Toolbar;