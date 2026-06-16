import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

const NOTIFICATIONS = [
  "Bruno L. de Campinas/SP comprou o Plano Premium",
  "Rafael S. de Fortaleza/CE comprou o Plano Base",
  "Enzo K. de Florianópolis/SC comprou o Plano Premium",
  "João P. de São Paulo/SP comprou o Plano Premium",
  "Vinícius T. de Natal/RN comprou o Plano Base"
];

export function NotificationPopups() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cycleNotifications = () => {
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        }, 500); // Wait for exit animation
      }, 4000); // Show for 4 seconds
    };

    // Initial delay
    const initialTimer = setTimeout(cycleNotifications, 2000);
    
    // Continuous cycle
    const intervalTimer = setInterval(cycleNotifications, 6000); // 4s visible + 2s hidden

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const currentNotification = NOTIFICATIONS[currentIndex];
  const isPremium = currentNotification.includes("Premium");

  return (
    <div className="fixed bottom-4 left-4 z-50 w-full max-w-[320px] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-card border border-primary/40 shadow-[0_0_15px_rgba(57,255,20,0.1)] rounded-lg p-3 flex items-center gap-3"
            data-testid="notification-popup"
          >
            <div className="bg-primary/10 p-2 rounded-full border border-primary/30">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-white leading-tight">
                {currentNotification.split(" comprou ")[0]}
              </p>
              <p className="text-xs text-primary font-semibold mt-0.5">
                comprou o {currentNotification.split(" comprou ")[1]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
