import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  onDevClick: () => void;
}

export default function Footer({ onDevClick }: FooterProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="pb-2 w-full flex flex-col items-center justify-center text-center z-10"
    >
      <button 
        onClick={onDevClick}
        className="group flex flex-col items-center"
      >
        <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mb-1 border-b border-transparent group-hover:border-black/20 transition-colors">Créditos</span>
        <div className="flex items-center space-x-1.5 text-xs text-gray-600 group-hover:text-black transition-colors duration-300">
          <span>Desenvolvido por</span>
          <span className="font-serif italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-black">
            InteligenciArte.IA
          </span>
          <Sparkles className="w-3 h-3 text-black/50 group-hover:text-black group-hover:animate-spin transition-all" />
        </div>
      </button>
    </motion.div>
  );
}
