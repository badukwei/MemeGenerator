import React from 'react';
import Draggable from "react-draggable";


const Main = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImg: 'http://i.imgflip.com/1bij.jpg'
  });

  console.log('effect ran');

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  const getMemeImg = () => {
    const randomNumber = Math.floor((Math.random() * allMemes.length));
    const memeUrl = allMemes[randomNumber].url;
    console.log(memeUrl);
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImg: memeUrl
      }
    });
  }

  const handlechange = (event) => {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          className='form__input'
          name='topText'
          value={meme.topText}
          onChange={handlechange}
        />
        <input
          type='text'
          placeholder='Bottom text'
          className='form__input'
          name='bottomText'
          value={meme.bottomText}
          onChange={handlechange}
        />
        <button onClick={getMemeImg} className='form__button'>Get a new meme image 🖼</button>
      </div>
      <div className='meme'>
        <img
          src={meme.randomImg}
          alt='meme'
          className='meme__img'
        />
        <Draggable positionOffset={{ x: '-50%', y: '-50%' }}>
          <h2 className='meme__text top'>{meme.topText}</h2>
        </Draggable>
        <Draggable positionOffset={{ x: '-50%', y: '-50%' }}>
          <h2 className='meme__text bottom'>{meme.bottomText}</h2>
        </Draggable>
      </div>
    </main>
  )
}

export default Main