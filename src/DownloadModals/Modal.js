import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Modal.css';

export default function Modal({ selectedLanguage }) {
  const [names, setNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false); // Modal state
  const [checkedState, setCheckedState] = useState({}); // To keep track of checked checkboxes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://webapi.partcommunity.com/cadqualifier.asp?apikey=e66120f9d9624823884cac1bf290ea88');
        const xmlData = response.data;

        // Parse the XML data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const formatTags = xmlDoc.getElementsByTagName('format');

        const extractedNames = Array.from(formatTags).map((format, index) => {
          const nameTag = format.getElementsByTagName('name')[0];
          const versionTag = format.getElementsByTagName('version')[0];
          const cad = format.getAttribute('cad');

          const name = nameTag ? nameTag.textContent : '';
          const version = versionTag && versionTag.textContent ? versionTag.textContent : '';
          
          return { id: index, text: `${name} ${version} (${cad})`.trim() };
        });

        // Initialize checked state
        const initialCheckedState = extractedNames.reduce((acc, curr) => {
          acc[curr.id] = false; // Set all checkboxes to unchecked initially
          return acc;
        }, {});
        setCheckedState(initialCheckedState);

        // Update the state with the extracted names
        setNames(extractedNames);
        setFilteredNames(extractedNames); // Set filtered names initially
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedLanguage]);

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
      document.body.classList.add('disable-pointer-events');
    } else {
      document.body.classList.remove('active-modal');
      document.body.classList.remove('disable-pointer-events');
    }
  }, [modal]);

  const toggleModal = () => {
    setModal(prevModal => !prevModal);
  };

  const handleCheckboxChange = (id) => {
    setCheckedState(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getCheckedCount = () => {
    return Object.values(checkedState).filter(isChecked => isChecked).length;
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter names based on search term
    const filtered = names.filter(name => name.text.toLowerCase().includes(searchTerm));
    setFilteredNames(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <dc-ui-button variant="primary" size="small" type="button" align="center" icon="dc_download" onClick={toggleModal} style={{width: '150px',height: '60px',marginLeft:'-20px'}}>
          <dc-ui-text tag="span" variant="small-text" color="inherit" text-align="center">{selectedLanguage === 'english' ? 'Download' : 'Herunterladen'}</dc-ui-text>
      </dc-ui-button>
      {modal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <div className="input-and-close-container">
              <dc-ui-input-wrapper label="Filter" type="text" label-position="above" hide-label="true">
                <input type="text" placeholder="Filter..." value={searchTerm} onChange={handleSearchChange} />
              </dc-ui-input-wrapper>
              <dc-ui-button variant="link" size="small" type="button" align="center" icon="dc_close" className='modal-close-button' onClick={toggleModal}>
                {selectedLanguage === 'english' ? 'Close' : 'Schließen'}
              </dc-ui-button>
            </div>
            <div className='modal-list'>
              <ul className='modal-list-item'>
                {filteredNames.map(({ id, text }) => (
                  <dc-ui-checkbox key={id} label={text} style={{display: 'block',marginBottom: '10px'}}>
                    <input type="checkbox" checked={checkedState[id]} onChange={() => handleCheckboxChange(id)}/>
                  </dc-ui-checkbox>
                ))}
              </ul>
            </div>
            <div>
              <dc-ui-text tag="span" variant="text" color="inherit" text-align="center">{selectedLanguage === 'english' ? 'Selected' : 'Ausgewählt'} ({getCheckedCount()})
              <dc-ui-button variant="tertiary" size="small" type="button" align="center" icon="dc_download" onClick={toggleModal} style={{width: '150px',height: '30px',marginLeft:'100px'}}>
                <dc-ui-text tag="span" variant="small-text" color="inherit" text-align="center">{selectedLanguage === 'english' ? 'Download' : 'Herunterladen'}</dc-ui-text>
              </dc-ui-button></dc-ui-text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
