import React, {useState, useMemo} from 'react';
import './styles.css';
import camera from '../../assets/camera.svg';
import api from '../../services/api';

export default function New({history}) {

    const [nome, setNome] = useState('');
    const id = useState(0);
    const idUsuarioAtualizacao = useState(0);
        
    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const token = localStorage.getItem('token');

        data.append('id', id);
        data.append('idUsuarioAtualizacao', idUsuarioAtualizacao);
        data.append('nome', nome);
        

        await api.post('/perfil', data, {
            headers: {token}
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