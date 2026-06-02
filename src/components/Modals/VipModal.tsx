import ModalWrapper from './ModalWrapper';
import { Send, Sparkles, Users } from 'lucide-react';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VipModal({ isOpen, onClose }: VipModalProps) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Grupo VIP">
      <div className="flex flex-col items-center py-2 space-y-5">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-[#25D366]/10 rounded-full mb-1">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#25D366]" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-black">
            Clube de Vantagens
          </h3>
          <p className="text-[13px] sm:text-sm text-gray-600 max-w-[250px] sm:max-w-[280px] mx-auto leading-relaxed">
            Entre para nosso grupo exclusivo no WhatsApp e receba em primeira mão nossas coleções, ofertas e novidades.
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-1" />

        <a 
          href="https://chat.whatsapp.com/Crx5RRujgGRKCoTZuMg9gm?s=sw&p=i&mlu=4&ilr=0"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full relative overflow-hidden bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 sm:py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 group"
        >
          <div className="absolute inset-0 bg-white/20 -translate-x-full animate-[shimmer_2.5s_infinite] skew-x-12" />
          <Sparkles className="w-4 h-4" />
          <span>Participar Agora</span>
        </a>

      </div>
    </ModalWrapper>
  );
}
