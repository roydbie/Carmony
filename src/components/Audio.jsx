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
        <button className='shadow-lg button-bg' onClick={() => handleAudio()}>{isPaused ? <div className='button-container'><Mute/>Zet geluid aan</div> : <div className='button-container'><MuteOff/>Zet geluid uit</div> } </button> 
    </Fragment>
    )
    }

const Mute = () => {
    return <svg className="MuteIcon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
}

const MuteOff = () => {
    return <svg className="MuteOff" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
    }