import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { Sparkles, ArrowRight, Instagram } from 'lucide-react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const [name, setName] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `Olá! Meu nome é *${name}*.\n\nVi o link da *Mayná Store* e quero um site igual!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5541988710303?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Criador">
      <div className="flex flex-col items-center py-4 space-y-5">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-full border border-gray-100 mb-2">
            <Sparkles className="w-5 h-5 text-black" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wider text-black">
            InteligenciArte.IA
          </h3>
          <p className="text-[13px] text-gray-500 max-w-[240px] mx-auto leading-relaxed">
            Criamos experiências digitais elegantes para marcas exclusivas.
          </p>
        </div>

        <a 
          href="https://www.instagram.com/inteligenciarte.ia/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-black/20 text-black py-3 rounded-xl hover:bg-gray-50 transition-all font-medium text-[13px]"
        >
          <Instagram className="w-4 h-4" strokeWidth={1.5} />
          <span>Instagram</span>
        </a>

        <div className="w-4 h-px bg-gray-200 my-2" />

        <form onSubmit={handleWhatsApp} className="w-full flex flex-col space-y-3">
          <p className="text-[13px] text-gray-600 text-center mb-1">
            Ter um site como este? Fale comigo.
          </p>
          
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] text-black focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
            placeholder="Seu nome"
          />
          
          <button 
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 group"
          >
            <span className="text-[13px] tracking-widest uppercase">Contato</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        </form>

      </div>
    </ModalWrapper>
  );
}
