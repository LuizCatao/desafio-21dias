import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

const NOTIFICATIONS = [
  { name: "Bruno L. de Campinas/SP", plan: "Plano Premium" },
  { name: "Rafael S. de Fortaleza/CE", plan: "Plano Base" },
  { name: "Enzo K. de Florianópolis/SC", plan: "Plano Premium" },
  { name: "João P. de São Paulo/SP", plan: "Plano Premium" },
  { name: "Vinícius T. de Natal/RN", plan: "Plano Base" },
  { name: "Artur P. de Contagem/MG", plan: "Plano Premium" },
  { name: "Fernando S. de Penápolis/SP", plan: "Plano Base" },
  { name: "Hiago F. do Rio de Janeiro/RJ", plan: "Plano Premium" },
];

export function NotificationPopups() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        }, 600);
      }, 5000);
    };

    const initialTimer = setTimeout(showNotification, 3000);
    const interval = setInterval(showNotification, 13000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const notif = NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed top-14 right-3 z-50 pointer-events-none sm:top-16 sm:right-4 max-w-[260px] sm:max-w-[300px]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.92 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-[#111] border border-primary/50 shadow-[0_0_14px_rgba(57,255,20,0.12)] rounded-lg p-3 flex items-center gap-3"
            data-testid="notification-popup"
          >
            <div className="bg-primary/10 p-1.5 rounded-full border border-primary/30 shrink-0">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white leading-tight truncate">
                {notif.name}
              </p>
              <p className="text-xs text-primary font-bold mt-0.5">
                comprou o {notif.plan}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
