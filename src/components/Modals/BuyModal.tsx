import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { Send, ArrowRight } from 'lucide-react';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BuyModal({ isOpen, onClose }: BuyModalProps) {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('Dúvida sobre os looks');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `Olá! Meu nome é *${name}*.\n\n*Motivo do contato:* ${reason}\n\nGostaria de mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/554291191990?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Atendimento">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        
        <p className="text-[13px] text-gray-500 text-center mb-1">
          Como podemos ajudar você hoje?
        </p>

        <div className="space-y-1">
          <label className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-400 font-bold ml-1">Seu Nome</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] text-black focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
            placeholder="Como podemos te chamar?"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-400 font-bold ml-1">Motivo do Contato</label>
          <select 
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] text-black focus:outline-none focus:border-black transition-colors appearance-none"
          >
            <option value="Dúvida sobre os looks">Dúvida sobre looks</option>
            <option value="Comprar uma peça">Comprar uma peça</option>
            <option value="Informações sobre tamanhos">Informações de tamanho</option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>

        <button 
          type="submit"
          disabled={!name.trim()}
          className="w-full mt-2 bg-black hover:bg-gray-900 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 group"
        >
          <span className="text-[13px] tracking-widest uppercase">Iniciar Conversa</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
        </button>

      </form>
    </ModalWrapper>
  );
}
