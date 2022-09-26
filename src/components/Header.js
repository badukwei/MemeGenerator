import React from 'react';
import trollFace from '../images/troll-face.png'

const Header = () => {
  return(
    <header className='header'>
        <img
          src={trollFace}
          alt='troll-face'
          className='header__img'
        />
        <h1 className='header__title'>Meme Generator</h1>
        <h3 className='header__subtitle'>Create your own meme</h3>
    </header>
  )
}

export default Header