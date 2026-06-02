import { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RatingModal({ isOpen, onClose }: RatingModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRating = (rate: number) => {
    setRating(rate);
    if (rate === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJyWXsXeYj6JQRKGx25982WWQ', '_blank');
      onClose();
    } else {
      setShowFeedback(true);
    }
  };

  // Reset state when modal is closed
  if (!isOpen && (rating !== 0 || showFeedback)) {
    setTimeout(() => {
      setRating(0);
      setShowFeedback(false);
      setFeedback('');
    }, 300);
  }

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Avalie nossa Loja">
      <AnimatePresence mode="wait">
        {!showFeedback ? (
          <motion.div 
            key="stars"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col items-center py-4"
          >
            <p className="text-gray-600 text-sm md:text-base text-center mb-6">
              Como foi sua experiência com a Mayna Store?
            </p>
            
            <div className="flex space-x-1 sm:space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => handleRating(star)}
                  className="p-1 transition-transform hover:scale-110 focus:outline-none"
                >
                  <Star 
                    className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-200 ${
                      (hoveredRating || rating) >= star 
                        ? 'fill-yellow-400 text-yellow-500 drop-shadow-sm' 
                        : 'text-gray-300'
                    }`} 
                    strokeWidth={1}
                  />
                </button>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-4 uppercase tracking-widest font-bold">
              {(hoveredRating || rating) > 0 ? `${hoveredRating || rating} Estrela${(hoveredRating || rating) > 1 ? 's' : ''}` : 'Selecione as estrelas'}
            </p>
          </motion.div>
        ) : (
          <motion.form 
            key="feedback"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            action="https://formsubmit.co/maynastoree@gmail.com"
            method="POST"
            className="flex flex-col space-y-3 pt-2"
          >
            <input type="hidden" name="_subject" value={`Feedback Mayna Store - ${rating} Estrelas`} />
            <input type="hidden" name="Estrelas" value={rating} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />
            
            <p className="text-gray-600 text-[13px] sm:text-sm text-center mb-1">
              Pedimos desculpas se não atendemos todas as suas expectativas. Como podemos melhorar?
            </p>
            
            <textarea 
              name="Mensagem"
              required
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black/30 focus:bg-white transition-colors placeholder:text-gray-400 custom-scrollbar resize-none text-[13px] sm:text-sm"
              placeholder="Deixe seu comentário ou sugestão..."
            />
            
            <button 
              type="submit"
              disabled={!feedback.trim()}
              className="w-full bg-black text-white font-medium py-2.5 rounded-xl transition-all disabled:opacity-50"
            >
              Enviar Feedback
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </ModalWrapper>
  );
}
