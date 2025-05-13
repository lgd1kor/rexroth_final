import React, { useState } from 'react';
import './FloatingButton.css'; // Import the CSS file for styling

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for button visibility
  const [hoveredButton, setHoveredButton] = useState(null); // Track which button is hovered

  const handleMainButtonClick = () => {
    setIsOpen(!isOpen); // Toggle the button visibility on click
  };

  // Handlers for showing and hiding tooltips on hover
  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className="floating-button-container">
      {/* Additional buttons */}
      <button 
        className={`floating-button child-button ${isOpen ? 'visible' : ''}`}
        style={{ bottom: '250px' }} 
        onMouseEnter={() => handleMouseEnter('call')}
        onMouseLeave={handleMouseLeave}
      >
        <dc-ui-icon name="dc_call" color="white" size="large"></dc-ui-icon>
        {hoveredButton === 'call' && (
          <div className="tooltip"><dc-ui-text
          tag="span"
          variant="text"
          color="inherit"
          text-align="left"
        >
         Telephone
        </dc-ui-text></div>
        )}
      </button>

      <button 
        className={`floating-button child-button ${isOpen ? 'visible' : ''}`}
        style={{ bottom: '320px' }}
        onMouseEnter={() => handleMouseEnter('mail')}
        onMouseLeave={handleMouseLeave}
      >
        <dc-ui-icon name="dc_mail" color="white" size="large"></dc-ui-icon>
        {hoveredButton === 'mail' && (
          <div className="tooltip"><dc-ui-text
          tag="span"
          variant="text"
          color="inherit"
          text-align="left"
        >
         E-Mail
        </dc-ui-text></div>
        )}
      </button>

      <button 
        className={`floating-button child-button ${isOpen ? 'visible' : ''}`}
        style={{ bottom: '390px' }} 
        onMouseEnter={() => handleMouseEnter('document')}
        onMouseLeave={handleMouseLeave}
      >
        <dc-ui-icon name="dc_document" color="white" size="large"></dc-ui-icon>
        {hoveredButton === 'document' && (
          <div className="tooltip"><dc-ui-text
          tag="span"
          variant="text"
          color="inherit"
          text-align="left"
        >
         Contact Form
        </dc-ui-text></div>
        )}
      </button>

      <button 
        className={`floating-button child-button ${isOpen ? 'visible' : ''}`}
        style={{ bottom: '460px' }}
        onMouseEnter={() => handleMouseEnter('locator')}
        onMouseLeave={handleMouseLeave}
      >
        <dc-ui-icon name="dc_locator" color="white" size="large"></dc-ui-icon>
        {hoveredButton === 'locator' && (
          <div className="tooltip"><dc-ui-text
          tag="span"
          variant="text"
          color="inherit"
          text-align="left"
        >
         Contact Locator
        </dc-ui-text></div>
        )}
      </button>

      <button 
        className={`floating-button child-button ${isOpen ? 'visible' : ''}`}
        style={{ bottom: '530px' }}
        onMouseEnter={() => handleMouseEnter('message')}
        onMouseLeave={handleMouseLeave}
      >
        <dc-ui-icon name="dc_message" color="white" size="large"></dc-ui-icon>
        {hoveredButton === 'message' && (
          <div className="tooltip"><dc-ui-text
          tag="span"
          variant="text"
          color="inherit"
          text-align="left"
        >
         Chat
        </dc-ui-text></div>
        )}
      </button>

      {/* Main button */}
      <button className={`floating-button ${isOpen ? 'clicked' : ''}`}  onClick={handleMainButtonClick}>
        {isOpen ? <dc-ui-icon name="dc_close" color="white" size="large"></dc-ui-icon> : <dc-ui-icon name="dc_customerservice" color="white" size="large"></dc-ui-icon>}
      </button>
    </div>
  );
};

export default FloatingButton;
