import React, {useState, useEffect} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Map from '../../components/Map/Map';
import './MapPage.css'
import firebase from 'firebase/app';
import 'firebase/database';
import {db} from '../../firebaseConfig';
import AddData from '../../components/AddData/AddData';
import { collection, getDoc } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import MapToolBar from '../../components/MapToolBar/MapToolBar';
import { CSSTransition } from 'react-transition-group';


function MapPage() {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
      setInProp(true);
      return () => setInProp(false); 
    }, []);
  
  return (
    <CSSTransition in={inProp} timeout={1000} classNames="slide">
      <div>
          <MapToolBar />

          <div className="mapPage">
            <Map />
            
        </div>

      </div>
    </CSSTransition>
  );
}
export default MapPage;