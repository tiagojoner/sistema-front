import React, {useState} from 'react';
import './styles.css';

import api from '../../services/api';

export default function New({history}) {

    const [nome, setNome] = useState('');
    const id = 0;
    const idUsuarioAtualizacao = 0;
        
    async function handleSubmit(event) {
        event.preventDefault();

        var data;
        const Authorization = 'Bearer ' + localStorage.getItem('token');

        data = {
            id: id,
            idUsuarioAtualizacao: idUsuarioAtualizacao,
            nome: nome
        }
        
        JSON.stringify(data);

        await api.post('/perfil', data, {
            headers: {
                'Accept': 'Application/json',    
                Authorization,
                'Content-Type': 'Application/json'
            }
        })

        history.push('/dashboard');

    }

    return (
        <form onSubmit={handleSubmit}>

           <label htmlFor="nome">Perfil</label>
            <input 
                id="nome" 
                placeholder="Nome perfil" 
                value={nome} 
                onChange={event => setNome(event.target.value)}
            />

            <button type="submit" className="btn">CADASTRAR</button>

        </form>
    )
}