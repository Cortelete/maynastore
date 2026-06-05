import ModalWrapper from './ModalWrapper';
import { ArrowRight, Crown } from 'lucide-react';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VipModal({ isOpen, onClose }: VipModalProps) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Clube VIP">
      <div className="flex flex-col items-center py-4 space-y-6">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-gray-50 border border-gray-100 rounded-full">
            <Crown className="w-6 h-6 text-black" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide text-black">
            Clube de Vantagens
          </h3>
          <p className="text-[13px] text-gray-500 max-w-[260px] mx-auto leading-relaxed">
            Entre para nossa lista exclusiva e receba em primeira mão nossas coleções, peças únicas e novidades.
          </p>
        </div>

        <div className="w-12 h-px bg-gray-200" />

        <a 
          href="https://chat.whatsapp.com/Crx5RRujgGRKCoTZuMg9gm?s=sw&p=i&mlu=4&ilr=0"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full relative overflow-hidden bg-black hover:bg-gray-900 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center space-x-2 group"
        >
          <div className="absolute inset-0 bg-white/10 -translate-x-full animate-[shimmer_3s_infinite] skew-x-12" />
          <span className="text-[13px] tracking-widest uppercase">Participar Agora</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
        </a>

      </div>
    </ModalWrapper>
  );
}
