import { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { Instagram, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const [name, setName] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `Olá! Meu nome é *${name}*.\n\nVi o link da *Mayna Store* e quero um site igual!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5541988710303?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Desenvolvedor">
      <div className="flex flex-col items-center py-2 space-y-4">
        
        <div className="text-center space-y-1">
          <div className="inline-flex items-center justify-center p-2.5 bg-black/5 rounded-full mb-1">
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
            InteligenciArte.IA
          </h3>
          <p className="text-[12px] sm:text-sm text-gray-600 max-w-[250px] mx-auto">
            Criamos experiências digitais únicas e luxuosas para marcas que desejam se destacar.
          </p>
        </div>

        <a 
          href="https://www.instagram.com/inteligenciarte.ia/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-[1px] rounded-xl hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center justify-center space-x-2 bg-white py-2.5 rounded-xl w-full h-full">
            <Instagram className="w-4 h-4 text-black" />
            <span className="text-[13px] sm:text-sm text-black font-medium">Siga no Instagram</span>
          </div>
        </a>

        <div className="w-full h-px bg-black/10 relative my-1">
          <span className="absolute left-1/2 -top-2.5 w-8 -ml-4 bg-white text-center text-[10px] sm:text-xs text-gray-400 font-serif italic">ou</span>
        </div>

        <form onSubmit={handleWhatsApp} className="w-full flex flex-col space-y-3">
          <p className="text-[13px] sm:text-sm font-medium text-black text-center">
            Quer um site incrível como esse? Fale comigo! 🚀
          </p>
          
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] sm:text-sm text-black focus:outline-none focus:border-black/30 transition-colors placeholder:text-gray-400"
            placeholder="Qual o seu nome?"
          />
          
          <button 
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 group"
          >
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span className="text-[13px] sm:text-sm">Falar no WhatsApp</span>
          </button>
        </form>

      </div>
    </ModalWrapper>
  );
}
