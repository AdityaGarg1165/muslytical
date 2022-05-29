import React from "react"
import Player from '../components/Player'
import Script from 'next/script'
import songs from '../data/songs'
import List from '../components/List'

export default function index({song,path,update,time,index,indexsetter}) {
  return (
    <div>
      <Player path={path} song={song} songs={songs} update={update} indexsetter={indexsetter} index={index} time={time}/>
      {/* <List songslist={songs} /> */}
    </div>
  )
}

