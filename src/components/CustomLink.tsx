import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface CustomLinkProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  onClick?: () => void;
  href?: string;
  delay?: number;
  brandColor?: string;
}

export default function CustomLink({ title, subtitle, icon: Icon, onClick, href, delay = 0, brandColor }: CustomLinkProps) {
  const content = (
    <div className="flex items-center w-full px-3 py-2 sm:px-4 sm:py-2.5 relative z-10">
      <div className="flex-shrink-0 mr-3">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black/70 group-hover:text-black transition-colors" strokeWidth={1.5} />
      </div>
      <div className="flex-1 text-center pr-7 sm:pr-8 /* offset icon width to center text exactly */">
        <h3 className="font-sans font-medium text-[11px] sm:text-[13px] tracking-wide text-black transition-colors uppercase">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[9px] sm:text-[10px] text-gray-600 mt-[1px] uppercase tracking-wider">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  const containerClasses = "group relative w-full block overflow-hidden rounded-xl bg-white/80 border border-black/10 transition-all duration-300 shadow-sm outline-none";
  
  // Custom border/glow depending on if brandColor is passed
  const hoverStyles = { boxShadow: '0 4px 15px -4px rgba(0,0,0,0.1)' };

  const BackgroundGlow = () => (
    <>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${brandColor ? brandColor : 'from-black/5 to-transparent'} mix-blend-overlay`} />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-[150%] animate-[shimmer_3s_infinite] group-hover:animate-[shimmer_1.5s_infinite]" />
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, type: "spring", stiffness: 100, damping: 15 },
    whileHover: { scale: 1.02, y: -2, ...hoverStyles },
    whileTap: { scale: 0.98 }
  };

  if (href) {
    return (
      <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
        {...motionProps}
      >
        <BackgroundGlow />
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      onClick={onClick}
      className={containerClasses}
      {...motionProps}
    >
      <BackgroundGlow />
      {content}
    </motion.button>
  );
}
