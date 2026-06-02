import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProfileProps {
  onLogoClick: () => void;
}

export default function Profile({ onLogoClick }: ProfileProps) {
  const [imageError, setImageError] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  const handleLogoClick = () => {
    setAnimateLogo(true);
    // After animation finishes, open modal
    setTimeout(() => {
      onLogoClick();
      // Reset animation slightly after modal opens so it's ready when closed
      setTimeout(() => setAnimateLogo(false), 300);
    }, 600);
  };

  return (
    <div className="flex flex-col items-center text-center w-full mb-1 sm:mb-2 z-10">
      <motion.button
        onClick={handleLogoClick}
        whileHover={{ scale: 1.05 }}
        animate={animateLogo ? { scale: 1.5, rotateY: 720, zIndex: 50, opacity: 0 } : { scale: 1, rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2 mx-auto outline-none focus-visible:ring-black/50"
        aria-label="Sobre Nós"
      >
        {!imageError ? (
          <img 
            src="/logo.png" 
            alt="Mayna Store Logo" 
            onError={() => setImageError(true)}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-black/50 text-xs p-2">
            <span className="font-serif text-3xl font-bold mb-1">M</span>
          </div>
        )}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-28 sm:w-36 mb-1"
      >
        <img 
          src="/logofonte.png" 
          alt="Mayna Store" 
          className="w-full h-auto object-contain"
          onError={(e) => {
            // Fallback if image not found
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<h1 class="font-serif text-2xl font-bold text-black tracking-wider">Mayna Store</h1>';
          }}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center space-y-0.5"
      >
        <p className="tracking-wide text-black text-[11px] sm:text-xs font-medium">Looks versáteis e cheios de estilo 🤍</p>
        <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Enviamos para todo o Brasil</p>
      </motion.div>
    </div>
  );
}
