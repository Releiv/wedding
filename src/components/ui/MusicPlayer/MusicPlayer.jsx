import { useState, useRef, useEffect } from 'react'
import styles from './MusicPlayer.module.css'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isVisible, setIsVisible] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {})
        setIsPlaying(true)
      }
      document.removeEventListener('click', playAudio)
      document.removeEventListener('touchstart', playAudio)
    }
    
    document.addEventListener('click', playAudio)
    document.addEventListener('touchstart', playAudio)
    
    return () => {
      document.removeEventListener('click', playAudio)
      document.removeEventListener('touchstart', playAudio)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/music/wedding.mp3" 
        loop 
        volume={volume}
        preload="auto"
      />
      
      {isVisible && (
        <div className={styles.musicPlayer}>
          <button 
            className={styles.playButton} 
            onClick={togglePlay}
            aria-label={isPlaying ? 'Пауза' : 'Включить музыку'}
          >
            {isPlaying ? '⏹' : '▶'}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
            aria-label="Громкость"
          />
          
          <button 
            className={styles.closeButton} 
            onClick={toggleVisibility}
            aria-label="Скрыть плеер"
          >
            ✕
          </button>
        </div>
      )}
      
      {!isVisible && (
        <button 
          className={styles.showButton} 
          onClick={toggleVisibility}
          aria-label="Показать плеер"
        >
          ♪
        </button>
      )}
    </>
  )
}