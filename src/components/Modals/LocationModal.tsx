import ModalWrapper from './ModalWrapper';
import { MapPin } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Nossa Loja">
      <div className="flex flex-col items-center text-center space-y-5">
        
        <div className="text-gray-700 space-y-1">
          <p className="font-serif text-lg text-black font-bold">Mayna Store</p>
          <p className="text-sm">Rua das Camélias 127</p>
          <p className="text-sm">Carambeí - PR, 84145-000</p>
        </div>

        <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col items-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Horário de Atendimento</p>
          <p className="text-sm text-gray-700">Segunda a Sexta: 10h às 19h</p>
          <p className="text-sm text-gray-700">Sábado: 10h às 17h</p>
        </div>

        <div className="w-full rounded-2xl overflow-hidden border border-black/10 relative pb-[50%] shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3223308357233!2d-50.11882141376262!3d-24.95514572080089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e823e65dec65c9%3A0x645936dfe7766c28!2sMayna%20Store!5e0!3m2!1spt-BR!2sbr!4v1780435722301!5m2!1spt-BR!2sbr" 
            className="absolute top-0 left-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a 
          href="https://maps.google.com/?q=Mayna+Store,Rua+das+Camélias+127,Carambeí"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-black hover:bg-gray-900 border border-transparent text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center space-x-2 group"
        >
          <MapPin className="w-4 h-4 text-white/70 group-hover:text-white" />
          <span>Abrir no App de Mapas</span>
        </a>

      </div>
    </ModalWrapper>
  );
}
