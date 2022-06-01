import React, { useState, useEffect } from 'react'
import { Visualizer } from './Visualizer'
import * as p5 from 'react-p5'
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';



let currentSound;
  const _p5 = new window.p5()
  console.log(_p5)

function App() {
  const [audio, setAudio] = useState('')
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(200, 200).parent(canvasParentRef)
  }
  
  useEffect(() => {
    preload()
  },[audio])
  
  const draw = (p5) => {
    p5.background(255, 130, 20)
    p5.ellipse(100, 100, 100)
    p5.ellipse(300, 100, 100)
  }
  
  const preload = () => {
    currentSound = _p5.loadSound(audio)
  }
  
   const mouseClicked = () => {
            if (currentSound.isPlaying()) {
                if (currentSound){
                    currentSound.pause()
                }
            } else {
                currentSound.play()
            }
        }

  
  return (
    <>
     <div>
      <input type="file" name="file" accept="audio/*" onChange={(event) => setAudio(event.target.files[0])}/>
      <button onClick={() => currentSound.play()}> Submit </button>
      {audio ? 'there is audio' : 'we no have that'}
    </div>
    <Sketch setup={setup} draw={draw} preload={preload} mouseClicked={mouseClicked} />
    </>
    )
  
}

export default App