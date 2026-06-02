import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] w-full relative overflow-hidden bg-brand-white text-brand-black selection:bg-brand-black selection:text-brand-white">
      {/* Animated Gradient Background */}
      <div 
        className="fixed inset-0 z-0 animate-gradient opacity-80"
        style={{
          background: 'linear-gradient(-45deg, #ffffff, #f5f5f5, #eaeaea, #fcfcfc)',
          backgroundSize: '400% 400%'
        }}
      />
      
      {/* Grid pattern overlay for minimal texture */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-xl mx-auto px-4 min-h-[100dvh] py-3 sm:py-4 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
