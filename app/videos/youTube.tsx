import React from 'react'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer(){
  return (
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer url={'https://youtu.be/Dp6lbdoprZ0'} controls={true}
      width={100}
      height={100}/>
    </div>
  )
}