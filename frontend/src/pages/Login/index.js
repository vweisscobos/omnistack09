import React, { useState } from 'react';
import api from "../../services/api";

export default function Login({ history }) {

  const [email, setEmail] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('./dashboard');
  };

  return <>
    <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.</p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL</label>
      <input
        id={'email'}
        type={'email'}
        placeholder={'Seu melhor e-mail'}
        value={email}
        onChange={evt => setEmail(evt.target.value)}
      />

      <button className={'btn'}>Entrar</button>
    </form>
  </>;
}