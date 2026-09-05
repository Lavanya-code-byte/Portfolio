import { useEffect, useRef, useState } from "react";
import gymnopedie from "../assets/gymnopedie.mp3";
import { soundoff, soundon } from "../assets/icons";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Lazy initialize the audio element
  if (!audioRef.current) {
    audioRef.current = new Audio(gymnopedie);
    audioRef.current.loop = true;
    // Set a clearly audible volume level
    audioRef.current.volume = 0.6;
  }

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Sync playback state with state change
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio playback failed or was blocked by the browser autoplay policy:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleSound = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center select-none">
      {/* Floating Glassmorphic Sound Button */}
      <div 
        onClick={toggleSound}
        className="w-12 h-12 rounded-full backdrop-blur-md bg-black/45 border border-white/15 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 hover:border-cyan-400/40 relative group"
      >
        {/* Glow Ring Pulse Animation when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-25" />
        )}
        
        {/* Sound Toggle Icon */}
        <img 
          src={!isPlaying ? soundoff : soundon} 
          alt="Sound Toggle" 
          className="w-6 h-6 object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Subtle Premium Soundwave Visualizer beside the button when playing */}
      {isPlaying && (
        <div className="flex items-end gap-[2px] h-3 ml-2.5 bg-black/30 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-sm animate-fadeIn">
          <span className="w-[1.5px] bg-cyan-400 rounded-full animate-visualizer-bar h-[80%]" style={{ animationDelay: "0.1s", animationDuration: "0.8s" }} />
          <span className="w-[1.5px] bg-cyan-400 rounded-full animate-visualizer-bar h-[50%]" style={{ animationDelay: "0.4s", animationDuration: "1.2s" }} />
          <span className="w-[1.5px] bg-cyan-400 rounded-full animate-visualizer-bar h-[90%]" style={{ animationDelay: "0.2s", animationDuration: "1.0s" }} />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
