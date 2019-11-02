import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Dashboard() {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const Authorization = 'Bearer ' + localStorage.getItem('token');
            const response = await api.get('/perfil', {
                headers: {
                    'Accept': 'Application/json',    
                     Authorization,
                    'Content-Type': 'Application/json'
                }
            });

            setSpots(response.data);
        }
        loadSpots();
    }, []);

    return (
        <>
          
            <ul className="spot-list">

                {spots.map(spot => (
                    <li key={spot.id}>

                        <strong>{spot.nome}: </strong>
                        
                    </li>
                ))}

            </ul>
            <Link to="/new">
                <button className="btn">Cadastrar novo spot</button>
            </Link>
            
        </>
    )
}