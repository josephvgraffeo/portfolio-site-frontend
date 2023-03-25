import { useState, useRef, useEffect } from 'react';
import musicFile from '../assets/music/nmwi-sapph-trm.mp3';

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const defaultVolume = 0.05

    useEffect(() => {
        audioRef.current.volume = defaultVolume;
    }, [defaultVolume]);

    const handlePlay = () => {
        setIsPlaying(true);
        audioRef.current.play();
    };

    const handlePause = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    };

    const handleVolumeChange = (event) => {
        audioRef.current.volume = event.target.value;
    }

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src={musicFile} type="audio/mpeg" />
            </audio>
            {isPlaying ? (
                <button onClick={handlePause}>Pause</button>
            ) : (
                <button onClick={handlePlay}>Play</button>
            )}
            {isPlaying ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input style={{ width: "75%" }} type="range" min="0" max="0.5" step="0.01" defaultValue={defaultVolume} onChange={handleVolumeChange} id="volume" />
                </div>
            ) : (
                null
            )}

        </div>
    );
};
