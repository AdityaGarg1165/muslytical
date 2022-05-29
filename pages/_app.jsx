import '../styles/globals.css'
import songs from '../data/songs'
import { useEffect,useState } from 'react';
import Navbar from './navbar';

function MyApp({ Component, pageProps }) {
  let currenttime;
  let [index,setIndex] = useState(0);
  let currentpath = songs[index].path;
  let currentsongimg = songs[index].img;
  let currentsong = songs[index].title;
  const update = ()=>{

    currentpath = songs[index].path;
    currentsongimg = songs[index].img;
    currentsong = songs[index].title;
  }
  return<>
  <Navbar/>
    <Component time={currenttime} update={update} index={index} indexsetter={setIndex} path={currentpath} img={currentsongimg} song={currentsong} {...pageProps} />
  </>
}

export default MyApp
