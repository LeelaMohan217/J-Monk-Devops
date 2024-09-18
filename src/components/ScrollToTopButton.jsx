import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Importing the Lucide icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-10 right-10">
          <button
            onClick={scrollToTop}
            className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-800 transition-all"
          >
            <ArrowUp size={20} color="white" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
