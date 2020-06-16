import React, { useRef, useState, useEffect, Fragment } from 'react'
import muziek from '../achtergrondmuziek.mp3'
import './home.css';
import mute from '../images/mute.png';
import speaker from '../images/speaker.png';

export const Audio = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    let audioRef = useRef(null);
    useEffect(() => {
        audioRef.current.onplay = () => {
            setIsPaused(false);
        }
    },[audioRef])
    const muteAudio = () => {
        
        audioRef.current.muted = !isAudioMuted();
        setIsMuted(isAudioMuted());
    }

    const playAudio = () => {
        audioRef.current.play();
    }
    
    const pauseAudio = () => {
        audioRef.current.pause();
    }

    const isAudioMuted = () => {
        
        return audioRef.current.muted;
    }

    const isAudioPaused = () => {
        return audioRef.current.paused;
    }

    const handleAudio = () => {
       
        if(isAudioPaused()) {
            playAudio();
            
        } else {
            pauseAudio();
        }
        setIsPaused(isAudioPaused());
    }
  
    return (
    <Fragment >
       
        <audio autoPlay ref={audioRef}  >
            <source src={muziek} type='audio/mpeg'></source>
        </audio>
        <iframe src="https://olafwempe.com/mp3/silence/silence.mp3" type="audio/mpeg" allow="autoplay" id="audio" style={{display:'none'}}></iframe>
    {//<button className="shadow-lg button-bg" onClick={() => muteAudio()}>{ isMuted ? <div className='button-container'><img className='icon' src={mute}/>Klik om het geluid aan te zetten</div> : <div className='button-container'><img className='icon' src={speaker}/>Klik om het geluid uit te zetten</div> }</button>
}   
        <button className='shadow-lg button-bg' onClick={() => handleAudio()}>{isPaused ? <div className='button-container'><img className='icon' src={mute}/>zet Geluid aan</div> : <div className='button-container'><img className='icon' src={speaker}/>Zet geluid uit</div> } </button> 
    </Fragment>
    )
    }

