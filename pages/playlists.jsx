import React from 'react'
import Player from '../components/Player'
import songs from '../data/songs'
export default function Playlists({song,path,update,time,index,indexsetter}) {
  return (
    <div>
        <Player path={path} song={song} songs={songs} update={update} indexsetter={indexsetter} index={index} time={time}/>
    </div>
  )
}
