import React, { useRef, useState } from 'react'
import muziek from '../achtergrondmuziek.mp3'
import './home.css';
import mute from '../images/mute.png';
import speaker from '../images/speaker.png';

export const Home = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    let audioRef = useRef(null);
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
    <div className="background">
        <h2>Home Page</h2>
        <audio autoPlay ref={audioRef}  >
            <source src={muziek} type='audio/mp3'></source>
        </audio>
        <iframe src="https://olafwempe.com/mp3/silence/silence.mp3" type="audio/mp3" allow="autoplay" id="audio" style={{display:'none'}}></iframe>
    <button className="shadow-lg button-bg" onClick={() => muteAudio()}>{ isMuted ? <div className='button-container'><img className='icon' src={mute}/>Klik om het geluid aan te zetten</div> : <div className='button-container'><img className='icon' src={speaker}/>Klik om het geluid uit te zetten</div> }</button>
        
        <button className='shadow-lg button-bg' onClick={() => handleAudio()}>{isPaused ? <div className='button-container'><img className='icon' src={mute}/>Klik om liedje verder te spelen</div> : <div className='button-container'><img className='icon' src={speaker}/> Klik om het liedje te pauzeren</div> } </button> 
    </div>
    )
    }

