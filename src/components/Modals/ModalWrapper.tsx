import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  maxWidth?: string;
}

export default function ModalWrapper({ isOpen, onClose, children, title, maxWidth = "max-w-md" }: ModalWrapperProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className={`pointer-events-auto w-full ${maxWidth} bg-white border border-black/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative`}
            >
              {/* Animated top border line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              
              {/* Header */}
              <div className="flex items-center justify-between p-5 pb-2">
                {title ? (
                  <h2 className="font-serif text-xl sm:text-2xl text-black font-bold tracking-wide">
                    {title}
                  </h2>
                ) : <div />}
                
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-black/50 hover:text-black transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 pt-3 overflow-y-auto custom-scrollbar text-black">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
