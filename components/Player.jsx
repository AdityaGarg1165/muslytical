import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import {FiFastForward} from 'react-icons/fi'

export default function Player({songs}) {
  let rand ;
  const playlist = []
  let index = 0; 
  const [song,setSong] = useState(songs[index].title)
  const [img,setImg] = useState(songs[index].img)
  let path = songs[index].path;
  const playref = useRef()
  const pauseref = useRef()
  let audio;
  // const [update,SetUpdate] = useState(null)
  let j = 0;
  const [time,setTime] = useState(0);
  useEffect(async()=>{
    const aud = await document.getElementById("audioElem")
    audio = await aud
    audio.src = path
    console.log(path)
    
    // console.clear()
    // audio.src = path
    
  },[])
  // useLayoutEffect(()=>{
    
    
    // },[])
    const backforward = ()=>{
      if(index === 0){
        
        const aud = document.getElementById("audioElem")
        index = 0;
        // audio.load()
        // path = songs[index].path
        console.log(index)
        setSong(songs[index].title)
        aud.src = path
        setImg(songs[index].img)
        aud.play()
      }
    }
    
    const fastforward = ()=>{
      if(index <= songs.length){
        const aud = document.getElementById("audioElem")
        
        index++;
        // audio.load()
        path = songs[index].path
        setSong(songs[index].title)
        setImg(songs[index].img)
        aud.src = path
        aud.play()
      }
    }
    
    // })
    const pause = ()=>{
      // if(!isPlaying){
      const aud = document.getElementById("audioElem")
      aud.play()
      pauseref.current.classList.add("invisible")
      playref.current.classList.remove("invisible")
      // }
    }
    const play = () => {
      // const audio = document.getElementById("audioElem")
      const aud = document.getElementById("audioElem")

      aud.pause()
      pauseref.current.classList.remove("invisible")
      playref.current.classList.add("invisible")
      // isPlaying = false
  }
  return (
    <div className='w-96 mt-56 h-96 ml-120' id="khota">
      <Script src='/main.js'></Script>
        <h1 className="title ml-36 text-xl mt-64 absolute">{song}</h1>
        <input type="range" max={"100"} className={styles.seekbar} name="" id="seekbar" />
        <button ref={pauseref} className='-ml-54 mt-80 absolute'><AiOutlinePlayCircle size={40} onClick={()=>{pause()}} id='pause'/></button>
        <img src={img} alt="" className='-mt-72 animate-spin w-56 h-56 ml-20 absolute rounded-full' />
        <FiFastForward className='ml-56 mt-1 cursor-pointer' onClick={fastforward} size={40}/>
        <FiFastForward onClick={backforward} className='ml-28 cursor-pointer rotate-180 -mt-10' size={40}/>
        <button className="-mt-10 ml-42 invisible absolute" ref={playref}><AiOutlinePauseCircle onClick={()=>{play()}} size={40}/></button>
        <audio id='audioElem'></audio>
        {songs && songs.map((item,i)=>(
            <div key={i} className={'mt-12'}>
                <div className='ml-32 -space-y-8 space-x-8'>
                    <button onClick={()=>{index = i;setImg(songs[index].img);const aud = document.getElementById("audioElem");aud.load();path = songs[index].path;console.log(path);aud.src = path;aud.play();setSong(songs[index].title);pause()}}><AiOutlinePlayCircle size={30} /></button>
                    <h1>{item.title}</h1>
                    <h1></h1>
                </div>
            </div>
        ))}
    </div>
  )
}
