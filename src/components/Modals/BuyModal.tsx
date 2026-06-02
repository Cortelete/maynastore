import { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { Send } from 'lucide-react';

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
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        
        <p className="text-xs sm:text-sm text-gray-600 text-center mb-1">
          Preencha as informações abaixo para falarmos pelo WhatsApp.
        </p>

        <div className="space-y-1">
          <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">Seu Nome</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-black focus:outline-none focus:border-black/30 focus:bg-white transition-colors placeholder:text-gray-400"
            placeholder="Como podemos te chamar?"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">Motivo do Contato</label>
          <select 
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-black focus:outline-none focus:border-black/30 focus:bg-white transition-colors appearance-none"
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
          className="w-full mt-2 bg-black text-white font-medium py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <span>Iniciar Atendimento</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

      </form>
    </ModalWrapper>
  );
}
