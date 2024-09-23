// ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import throttle from "lodash/throttle";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll event handler to improve performance
  const toggleVisibility = throttle(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, 200); // Adjust the throttle delay as needed

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      toggleVisibility.cancel(); // Cancel any pending throttled calls
    };
  }, [toggleVisibility]);

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={scrollToTop}
            className="bg-red-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-red-800 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} sm:size={20} color="white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal-root")
  );
};

export default ScrollToTopButton;
