import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div class="diagonal-footer"> </div>
      <div className='footer-color'>
      <div className="footer-icons">
      <div>
       <dc-ui-button variant="secondary" size="small" type="button" hide-label="false" disabled="false"><dc-ui-icon name="dc_facebook_b" color="black" size="medium" ></dc-ui-icon></dc-ui-button>
      </div>
      <div>
       <dc-ui-button variant="secondary" size="small" type="button" hide-label="false" disabled="false"><dc-ui-icon name="dc_linkedin_b" color="black" size="medium" ></dc-ui-icon></dc-ui-button>
      </div>
      <div>
       <dc-ui-button variant="secondary" size="small" type="button" hide-label="false" disabled="false"><dc-ui-icon name="dc_youtube_b" color="black" size="medium" ></dc-ui-icon></dc-ui-button>
      </div>
      <div>
       <dc-ui-button variant="secondary" size="small" type="button" hide-label="false" disabled="false"><dc-ui-icon name="dc_twitter_b" color="black" size="medium" ></dc-ui-icon></dc-ui-button>
      </div>
      <div>
       <dc-ui-button variant="secondary" size="small" type="button" hide-label="false" disabled="false"><dc-ui-icon name="dc_instagram_b" color="black" size="medium" ></dc-ui-icon></dc-ui-button>
      </div>
      <div>
       <dc-ui-button variant="secondary" size="small" type="button" hide-label="false" disabled="false"><dc-ui-icon name="dc_xing_b" color="black" size="medium" ></dc-ui-icon></dc-ui-button>
      </div>
      </div>
      <br></br>
      <div>
      </div>
      <div className="footer-content" >
        <dc-ui-text className="footer-text" tag="span" variant="h6" color="inherit">
          &copy;Bosch Rexroth AG 2014-{currentYear}, all rights reserved.
        </dc-ui-text>
        <div className="footer-buttons">
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            imprint
          </dc-ui-select-button>
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            data protection notice
          </dc-ui-select-button>
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            legal Notice
          </dc-ui-select-button>
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            Certificates
          </dc-ui-select-button>
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            purchasing and logistics
          </dc-ui-select-button>
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            compliance
          </dc-ui-select-button>
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            product security
          </dc-ui-select-button>
          <dc-ui-select-button className="footer-button" size="small" type="button" align="center">
            cookie settings
          </dc-ui-select-button>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
