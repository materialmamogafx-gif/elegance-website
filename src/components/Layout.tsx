import { motion } from 'motion/react';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[#FDF8F8]">
      {/* Decorative blurred backgrounds */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-rose-100 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-50 rounded-full blur-[100px] opacity-70 pointer-events-none z-0"></div>
      
      <Navbar />
      <main className="flex-grow relative z-10">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
