import React, { useState, useMemo } from 'react';
import cameraImg from '../../assets/camera.svg';

import './styles.css';

export default function New() {
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [techs, setTechs] = useState('');
  const [thumbnail, setThumbnail] = useState();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function handleSubmit() {

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
  </form>;
}