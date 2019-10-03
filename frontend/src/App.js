import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const response = await api.post('/sessions', { email });

    console.log(response);
  };

  return (
    <div className={'container'}>

      <img src={logo} alt={'airCnC'} />

      <div className={'content'}>
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
      </div>
    </div>
  );
}

export default App;
