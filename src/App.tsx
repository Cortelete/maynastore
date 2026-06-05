import { useState } from 'react';
import { MapPin, Star, Users, ShoppingBag, Crown } from 'lucide-react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import CustomLink from './components/CustomLink';
import Footer from './components/Footer';

// Modals
import BuyModal from './components/Modals/BuyModal';
import LocationModal from './components/Modals/LocationModal';
import RatingModal from './components/Modals/RatingModal';
import DeveloperModal from './components/Modals/DeveloperModal';
import VipModal from './components/Modals/VipModal';
import ComingSoonModal from './components/Modals/ComingSoonModal';

import { WhatsAppIcon } from './components/Icons/WhatsAppIcon';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <Layout>
      <div className="w-full max-w-[360px] mx-auto bg-white/60 backdrop-blur-2xl border border-black/5 rounded-3xl p-4 sm:p-5 shadow-xl relative z-10 flex flex-col items-center group/card transition-all duration-500 hover:shadow-2xl">
        <Profile onLogoClick={() => {}} />
        
        <div className="w-full space-y-1.5 sm:space-y-2">
          <CustomLink 
            title="COMPRAR NO SITE" 
            icon={ShoppingBag} 
            onClick={() => setActiveModal('comingSoon')} 
            delay={0.3}
          />
          <CustomLink 
            title="CLUBE VIP" 
            icon={Crown} 
            onClick={() => setActiveModal('vip')} 
            delay={0.4}
          />
          <CustomLink 
            title="FALE CONOSCO" 
            icon={WhatsAppIcon} 
            onClick={() => setActiveModal('buy')} 
            delay={0.6}
          />
          <CustomLink 
            title="NOSSA LOJA FÍSICA" 
            icon={MapPin} 
            onClick={() => setActiveModal('location')} 
            delay={0.7}
          />
          <CustomLink 
            title="AVALIE SUA EXPERIÊNCIA" 
            icon={Star} 
            onClick={() => setActiveModal('rating')} 
            delay={0.8}
          />
        </div>
      </div>
      <div className="mt-2 sm:mt-3">
        <Footer onDevClick={() => setActiveModal('developer')} />
      </div>

      {/* Render Modals */}
      <BuyModal isOpen={activeModal === 'buy'} onClose={closeModal} />
      <LocationModal isOpen={activeModal === 'location'} onClose={closeModal} />
      <RatingModal isOpen={activeModal === 'rating'} onClose={closeModal} />
      <DeveloperModal isOpen={activeModal === 'developer'} onClose={closeModal} />
      <VipModal isOpen={activeModal === 'vip'} onClose={closeModal} />
      <ComingSoonModal isOpen={activeModal === 'comingSoon'} onClose={closeModal} />
    </Layout>
  );
}


