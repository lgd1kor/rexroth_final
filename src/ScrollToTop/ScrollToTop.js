import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Include your styling here

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const toggleVisibility = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    // Show the button after scrolling down
    if (scrollPosition > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Detect when the button reaches a stopping point (fixed at bottom 100px)
    const maxScrollPosition = bodyHeight - windowHeight - 100;

    if (scrollPosition >= maxScrollPosition) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isAtBottom ? 'stopped' : ''}`}>
      {isVisible && (
        <dc-ui-button
          variant="secondary"
          size="large"
          type="button"
          hide-label="false"
          disabled="false"
          onClick={scrollToTop}
          className="scroll-to-top-button"
        >
          <dc-ui-icon name="dc_up_double" color="black" size="large" />
        </dc-ui-button>
      )}
    </div>
  );
};

export default ScrollToTop;
