import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Loader2 } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-sm bg-white/90 backdrop-blur-xl border border-white/40 overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Elegant Header Background */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gray-50/50 border-b border-black/5" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
            </button>

            <div className="relative pt-12 pb-8 px-6 flex flex-col items-center text-center">
              <div className="mb-6 relative">
                <Loader2 className="w-8 h-8 text-black animate-spin" strokeWidth={1} />
              </div>

              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2 tracking-wide">
                Em Breve
              </h2>
              
              <div className="w-12 h-px bg-black/20 mb-4" />
              
              <p className="text-gray-600 text-[14px] leading-relaxed max-w-[260px]">
                Estamos preparando uma experiência online incrível para você. Aguarde as novidades!
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="mt-8 bg-black hover:bg-gray-900 text-white py-3 rounded-xl transition-all flex items-center justify-center space-x-2 group w-full"
              >
                <span className="text-[13px] tracking-widest uppercase font-medium">Entendi</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
