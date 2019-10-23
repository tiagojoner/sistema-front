import React, {useState} from 'react';
import api from '../../services/api';
//import Teste from './teste';

export default function Login({ history }) {

    const [login, setUser] = useState('');
    const [senha, setPass] = useState('');

    async function handleSubmit(event) {
        event.preventDefault(); // não da refres na tela

        const response = await api.post('/auth', { login, senha })

        const { token } = response.data;

        //    console.log(_id);

        localStorage.setItem('token', token); //guarda token na storage do browser.

        history.push('teste.js');
        //console.log(token);

    }

    return (
        <>
            <p>
                Acesso ao sistema de <strong>agenda</strong> e <strong>notificações</strong> da escola <strong>TI4GO</strong>
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Usuário</label>
                <input
                    type="text"
                    name="user"
                    placeholder="Usuário"
                    value={login}
                    onChange={event => setUser(event.target.value)}
                />
                <label htmlFor="pass">Senha</label>
                <input
                    type="text"
                    name="pass"
                    placeholder="Senha"
                    value={senha}
                    onChange={event => setPass(event.target.value)}
                />
                <button className="btn" type="submit">
                    Entrar
                </button>

            </form>
        </>
    )
}