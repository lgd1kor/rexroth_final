import React, { useState } from 'react';
import './FeedbackButton.css';

const FeedbackButton = () => {
    // Manage button visibility state if needed
    const [visible, setVisible] = useState(true);

    return (
        <div className='feedback-button'>
            <dc-ui-button
      variant="secondary"
      size="small"
      type="button"
      align="center"
      icon="dc_feedback"
      hide-label="false"
      disabled="false"
    >
      feedback
    </dc-ui-button>
        </div>
    );
};

export default FeedbackButton;
