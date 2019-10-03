import React, { useState, useMemo } from 'react';
import cameraImg from '../../assets/camera.svg';

import api from '../../services/api';

import './styles.css';

export default function New({ history }) {
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [techs, setTechs] = useState('');
  const [thumbnail, setThumbnail] = useState();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(evt) {
    evt.preventDefault();

    const data = new FormData();

    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    const response = await api.post('/spots', data, {
      headers: { user_id }
    });

    history.push('/dashboard');
  }

  return <form onSubmit={handleSubmit}>
    <label
      id={'thumbnail'}
      style={{ backgroundImage: `url(${preview})`}}
      className={preview ? 'has-thumbnail' : ''}
    >
      <input type={'file'} onChange={evt => setThumbnail(evt.target.files[0])}/>
      <img src={cameraImg} alt={'select image'}/>
    </label>

    <label htmlFor={'company'}>Empresa *</label>
    <input
      id={'company'}
      placeholder={'Sua empresa incrível'}
      value={company}
      onChange={evt => setCompany(evt.target.value)}
    />
    <label htmlFor={'techs'}>Tecnologias * <span>(separadas por vírgulas)</span></label>
    <input
      id={'techs'}
      placeholder={'Quais tecnologias usam?'}
      value={techs}
      onChange={evt => setTechs(evt.target.value)}
    />
    <label htmlFor={'preco'}>Preço *</label>
    <input
      id={'price'}
      placeholder={'Valor da diária'}
      value={price}
      onChange={evt => setPrice(evt.target.value)}
    />

    <button className={'btn'}>Cadastrar</button>
  </form>;
}