import React, { useState, useEffect } from 'react';
import Preview3DApi from './Preview3D/Preview3DApi';
import WebViewer3D from './Preview3D/WebViewer3D';
import Preview2DApi from './Preview2D/Preview2DApi';
import generateUrl from './ProductsAPIData/ProductDataAPI'
import Modal from './DownloadModals/Modal';
import Footer from './Footer/Footer';
import FloatingButton from './FloatingButton/FloatingButton'; 
import FeedbackButton from './FeedbackButton/FeedbackButton';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import './FinalCall.css'

import { getCytropacValues, getCytropacMiDent, computeCytropacTypecodeInfo, generateCytropacTabledata, generateAllPossibleTypecodesCytropac } from './Products/cytropac';
import { getCytroboxValues, getCytroboxMiDent, computeCytroboxTypecodeInfo, generateCytroboxTabledata, generateAllPossibleTypecodesCytrobox } from './Products/cytrobox';
import { get4We10hValues, get4We10hMiDent, compute4We10hTypecodeInfo, generateAllPossibleTypecodes4We10h, generate4We10hTabledata } from './Products/4we10';
import { get4WehValues, get4WehMiDent, compute4WehTypecodeInfo, generate4WehTabledata, generateAllPossibleTypecodes4Weh } from './Products/4weh';
import { getZ3dreValues, getZ3dreMiDent, computeZ3dreTypecodeInfo, generateAllPossibleTypecodesZ3dre, generateZ3dreTabledata } from './Products/z3dre';

import { defineCustomElements } from '@boschrexroth/nextgen-web-ui-toolkit-react';
defineCustomElements();

const TableDataApi = ({ initialFilepath }) => {
  const [data, setData] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [miDent, setMiDent] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedValues, setSelectedValues] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [typecodeInfo, setTypecodeInfo] = useState('');
  const [filepath, setFilepath] = useState(initialFilepath);
  const [prefix, setPrefix] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidTypecode, setIsValidTypecode] = useState(false);
  const [messageTimeout, setMessageTimeout] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentTypeCode, setCurrentTypeCode] = useState('');
  const [visibleImages, setVisibleImages] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (scrollPosition > currentScrollPos) {
      // Scrolling up
      setHideHeader(false);
    } else if (scrollPosition < currentScrollPos) {
      // Scrolling down
      setHideHeader(true);
    }
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  

  const handleApiData = (data) => {
    setApiData(data);
  };

// render row for fetch the data for each row dynamically
  const renderRow = (label, values, fieldName, units, button) => {
    const selectedValue = selectedValues[fieldName];
    const selectedImageUrl = values.find(value => value.value === selectedValue)?.imageUrl;
    const isImageVisible = visibleImages[fieldName];
  
    const handleDropdownChange = (e) => {
      const newValue = e.target.value;
      handleChange(fieldName, newValue);
    };
  
    const toggleImageVisibility = () => {
      setVisibleImages((prevVisibleImages) => {
        return { ...prevVisibleImages, [fieldName]: !prevVisibleImages[fieldName] };
      });
    };
  
    return (
      <tr key={fieldName}>
        <td>{label}</td>
        <td style={{ whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: '500px', position: 'relative' }}>
          {values.length === 1 ? (
            values[0].name
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <dc-ui-dropdown-wrapper style={{ flex: '1', whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: '450px' }}>
                  <select onChange={handleDropdownChange} style={{ whiteSpace: 'normal', wordWrap: 'break-word', width: '100%' }}>
                    {values.map((item, index) => (
                      <option key={index} value={item.value}>{item.name}</option>
                    ))}
                  </select>
                </dc-ui-dropdown-wrapper>
                {button === 1 && (
                  <dc-ui-button variant="light" size="small" onClick={toggleImageVisibility} style={{ marginLeft: '10px' }}>
                    {isImageVisible ? (
                      <dc-ui-icon name="dc_eye_hide" color="black" size="small" />
                    ) : (
                      <dc-ui-icon name="dc_eye" color="black" size="small" />
                    )}
                  </dc-ui-button>
                )}
              </div>
              {isImageVisible && selectedImageUrl && (
                <div style={{ marginTop: '10px' }}>
                  <img src={selectedImageUrl} alt={`${label} - ${selectedValue}`} style={{ width: '400px', height: '400px' }}/>
                </div>
              )}
            </>
          )}
        </td>
        <td>{units}</td>
      </tr>
    );
  };
  
  
//fetching the data using path of the api for multiple products
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const url = generateUrl(filepath, selectedLanguage);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        // console.log(result);
        const { NN } = result.index;
        if (NN === 'CytroBox') {
          const values = getCytroboxValues(result);
          setSelectedValues(values);
          setTypecodeInfo(computeCytroboxTypecodeInfo(values));
        } else if (NN === 'CytroPac') {
          const values = getCytropacValues(result);
          setSelectedValues(values);
          setTypecodeInfo(computeCytropacTypecodeInfo(values));
        } else if (NN === 'WE 10.../H') {
          const values = get4We10hValues(result);
          setSelectedValues(values);
          setTypecodeInfo(compute4We10hTypecodeInfo(values));
        }else if (NN === 'WEH/WH-1X') {
          const values = get4WehValues(result);
          setSelectedValues(values);
          setTypecodeInfo(compute4WehTypecodeInfo(values));
        } else if (NN === 'Z3DREE 10') {
          const values = getZ3dreValues(result);
          setSelectedValues(values);
          setTypecodeInfo(computeZ3dreTypecodeInfo(values));
        }
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };
    fetchData();
  }, [selectedLanguage, filepath]);

  useEffect(() => {
    updateMiDent();
  }, [selectedValues, data]);

  const updateMiDent = () => {
    // If newMiDent is not set, use the other conditions
    if (data && data.index) {
        switch(data.index.NN) {
            case 'CytroBox':
                setMiDent(getCytroboxMiDent(selectedValues));
                break;
            case 'CytroPac':
                setMiDent(getCytropacMiDent(selectedValues));
                break;
            case 'WE 10.../H':
                setMiDent(get4We10hMiDent(selectedValues));
                break;
            case 'WEH/WH-1X':
                setMiDent(get4WehMiDent(selectedValues));
                break;
            case 'Z3DREE 10':
                setMiDent(getZ3dreMiDent(selectedValues));
                break;
            default:
                // Optionally, handle cases where data.index.NN doesn't match any known type
                console.warn('Unknown index type:', data.index.NN);
        }
    }
};


  const handleChange = (field, value) => {
    setSelectedValues((prevValues) => {
      const newValues = { ...prevValues, [field]: value };
      const { NN } = data?.index || {};
      if (NN === 'CytroBox') {
        setTypecodeInfo(computeCytroboxTypecodeInfo(newValues));
      } else if (NN === 'CytroPac') {
        setTypecodeInfo(computeCytropacTypecodeInfo(newValues));
      } else if (NN === 'WE 10.../H') {
        setTypecodeInfo(compute4We10hTypecodeInfo(newValues));
      } else if (NN === 'WEH/WH-1X') {
        setTypecodeInfo(compute4WehTypecodeInfo(newValues));
      } else if (NN === 'Z3DREE 10') {
        setTypecodeInfo(computeZ3dreTypecodeInfo(newValues));
      }

      return newValues;
    });
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handlePrefixChange = (event) => {
    const newPrefix = event.target.value;
    setPrefix(newPrefix);
  };

  const validateEnteredTypecode = (enteredTypecode,typecodes,typecodePrefix) => {
    if(typecodes.includes(enteredTypecode)){
      setErrorMessage('');
      setIsValidTypecode(true);
      setTypecodeInfo(enteredTypecode);
      return true;
    } else {
      setErrorMessage(selectedLanguage === 'english' ? `ENTERED ${typecodePrefix.toUpperCase()} TYPE CODE IS INVALID` : `EINGEGEBENER ${typecodePrefix.toUpperCase()} TYPENSCHLÜSSEL IST UNGÜLTIG`);
      setIsValidTypecode(false);
      return false;
  }
  }

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  
  
  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      const enteredTypecode = prefix.trim().toUpperCase();
      // console.log(enteredTypecode);
      if (enteredTypecode==='CYTROBOX'){
        setFilepath('bosch_rexroth_mcd/industrial_hydraulics/power_units/std_power_units/cytrobox_asmtab.prj')
      } else if (enteredTypecode==='CYTROPAC'){
        setFilepath('bosch_rexroth_mcd/industrial_hydraulics/power_units/std_power_units/cytropac_asmtab.prj')
      } else if (enteredTypecode==='WE10'){
        setFilepath('bosch_rexroth_mcd/industrial_hydraulics/valves/directional_valves/direct_on_off_valves/we_10_h_asmtab.prj')
      } else if (enteredTypecode==='WEH'){
        setFilepath('bosch_rexroth_mcd/industrial_hydraulics/valves/directional_valves/direct_on_off_valves/weh_wh_1x_asmtab.prj')
      } else if (enteredTypecode==='Z3DRE'){
        setFilepath('bosch_rexroth_mcd/industrial_hydraulics/valves/pressure_valves/press_reducing_valves_proportional/z3dree10_1x_asmtab.prj')
      }else{
        const isCytrobox = enteredTypecode.startsWith('CYTROBOX');
        const isCytropac = enteredTypecode.startsWith('CYTROPAC');
        const isWe10h = enteredTypecode.includes('WE10');
        const isWeh = enteredTypecode.includes('WEH');
        const isZ3dre = enteredTypecode.includes('Z3DRE');
        setCurrentTypeCode(enteredTypecode);
        if (isCytrobox) {
          const filepath = 'bosch_rexroth_mcd/industrial_hydraulics/power_units/std_power_units/cytrobox_asmtab.prj'
          const url = generateUrl(filepath, selectedLanguage);
          const response = await fetch(url);
          const result = await response.json();
          const typecodePrefix='CytroBox'
          const typecodes = generateAllPossibleTypecodesCytrobox(result.index.line.values);
          console.log(typecodes)
          console.log(typecodePrefix)
          const valid_result = validateEnteredTypecode(enteredTypecode, typecodes, typecodePrefix);
          if (result.index.NN === typecodePrefix) {
          } else {
              setErrorMessage(selectedLanguage === 'english' ? `ENTERED ${typecodePrefix.toUpperCase()} TYPE CODE IS INVALID` : `EINGEGEBENER ${typecodePrefix.toUpperCase()} TYPENSCHLÜSSEL IST UNGÜLTIG`);
              setIsValidTypecode(false);
          }
          if (valid_result){
            setFilepath(filepath);
          }
        } else if (isCytropac) {
          const filepath = 'bosch_rexroth_mcd/industrial_hydraulics/power_units/std_power_units/cytropac_asmtab.prj'
          const url = generateUrl(filepath, selectedLanguage);
          const response = await fetch(url);
          const result = await response.json();
          const typecodePrefix='CytroPac'
          const typecodes = generateAllPossibleTypecodesCytropac(result.index.line.values);
          console.log(typecodes)
          console.log(typecodePrefix)
          const valid_result = validateEnteredTypecode(enteredTypecode, typecodes, typecodePrefix);
          if (result.index.NN === typecodePrefix) {
          } else {
              setErrorMessage(selectedLanguage === 'english' ? `ENTERED ${typecodePrefix.toUpperCase()} TYPE CODE IS INVALID` : `EINGEGEBENER ${typecodePrefix.toUpperCase()} TYPENSCHLÜSSEL IST UNGÜLTIG`);
              setIsValidTypecode(false);
          }
          if (valid_result){
            setFilepath(filepath);
          }
        } else if (isWe10h) {
          const filepath = 'bosch_rexroth_mcd/industrial_hydraulics/valves/directional_valves/direct_on_off_valves/we_10_h_asmtab.prj'
          const url = generateUrl(filepath, selectedLanguage);
          const response = await fetch(url);
          const result = await response.json();
          const typecodePrefix='WE 10.../H'
          const typecodes = generateAllPossibleTypecodes4We10h(result.index.line.values);
          console.log(typecodes)
          console.log(typecodePrefix)
          const valid_result = validateEnteredTypecode(enteredTypecode, typecodes, typecodePrefix);
          if (result.index.NN === typecodePrefix) {
          } else {
              setErrorMessage(selectedLanguage === 'english' ? `ENTERED ${typecodePrefix.toUpperCase()} TYPE CODE IS INVALID` : `EINGEGEBENER ${typecodePrefix.toUpperCase()} TYPENSCHLÜSSEL IST UNGÜLTIG`);
              setIsValidTypecode(false);
          }
          if (valid_result){
            setFilepath(filepath);
          }
        } else if (isWeh) {
          const filepath = 'bosch_rexroth_mcd/industrial_hydraulics/valves/directional_valves/direct_on_off_valves/weh_wh_1x_asmtab.prj'
          const url = generateUrl(filepath, selectedLanguage);
          const response = await fetch(url);
          const result = await response.json();
          const typecodePrefix='WEH/WH-1X'
          const typecodes = generateAllPossibleTypecodes4Weh(result.index.line.values);
          console.log(typecodes)
          console.log(typecodePrefix)
          const valid_result = validateEnteredTypecode(enteredTypecode, typecodes, typecodePrefix);
          if (result.index.NN === typecodePrefix) {
          } else {
              setErrorMessage(selectedLanguage === 'english' ? `ENTERED ${typecodePrefix.toUpperCase()} TYPE CODE IS INVALID` : `EINGEGEBENER ${typecodePrefix.toUpperCase()} TYPENSCHLÜSSEL IST UNGÜLTIG`);
              setIsValidTypecode(false);
          }
          if (valid_result){
            setFilepath(filepath);
          }
        } else if (isZ3dre) {
          const filepath = 'bosch_rexroth_mcd/industrial_hydraulics/valves/pressure_valves/press_reducing_valves_proportional/z3dree10_1x_asmtab.prj'
          const url = generateUrl(filepath, selectedLanguage);
          const response = await fetch(url);
          const result = await response.json();
          const typecodePrefix='Z3DREE 10'
          const typecodes = generateAllPossibleTypecodesZ3dre(result.index.line.values);
          console.log(typecodes)
          console.log(typecodePrefix)
          const valid_result = validateEnteredTypecode(enteredTypecode, typecodes, typecodePrefix);
          if (result.index.NN === typecodePrefix) {
          } else {
              setErrorMessage(selectedLanguage === 'english' ? `ENTERED ${typecodePrefix.toUpperCase()} TYPE CODE IS INVALID` : `EINGEGEBENER ${typecodePrefix.toUpperCase()} TYPENSCHLÜSSEL IST UNGÜLTIG`);
              setIsValidTypecode(false);
          }
          if (valid_result){
            setFilepath(filepath);
          }
        } else {
          setErrorMessage(selectedLanguage==='english'?'ENTERED TEXT IS INVALID':'EINGEGEBENER TEXT IST UNGÜLTIG');
          setIsValidTypecode(false);
        }
      }
    }
    // Clear previous timeout if exists
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
  
    // Set a new timeout to clear messages after 5 seconds
    const timeoutId = setTimeout(() => {
      setErrorMessage('');
      setIsValidTypecode(false);
    }, 5000);
  
    setMessageTimeout(timeoutId);
  };
  
  if (!data) {
    return ''
  }

  const indexPath = data.index.line.values;
  
  const { NN } = data.index;
  const Tabledata = NN === 'CytroBox'
    ? generateCytroboxTabledata(indexPath,renderRow)
    : NN === 'CytroPac'
    ? generateCytropacTabledata(indexPath,renderRow)
    : NN === 'WE 10.../H'
    ? generate4We10hTabledata(indexPath,renderRow)
    : NN === 'WEH/WH-1X'
    ? generate4WehTabledata(indexPath,renderRow)
    : NN === 'Z3DREE 10'
    ? generateZ3dreTabledata(indexPath,renderRow)
    : null;
    
  const HeaderName = data.index.NT + ' ' + data.index.NN;

  return (
    <div>
      <div style={{paddingTop: '15vh'}}>
        <div className={`header-section ${hideHeader ? 'hidden' : ''}`}>
        <div style={{ backgroundColor: "#ffffff" , paddingRight: "1%"}}>
          <div style={{ width: "15%", marginLeft: "auto", display: "block", backgroundColor: "#ffffff" }}>
            <dc-ui-dropdown-wrapper>
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="english">English(en)</option>
                <option value="german">German(de)</option>
              </select>
            </dc-ui-dropdown-wrapper>
          </div>
        </div>
        <div style={{ backgroundColor: "#ffffff", display: "flex", alignItems: "center" }}>
          <dc-ui-image src="boschrexrothlogo.png" alt="Bosch Rexroth Logo" style={{ height: "4%", width: "8%", marginLeft: "2%", paddingTop: "0.5%", paddingBottom: "0.5%" }} />
          <dc-ui-button variant="link" size="small" type="submit" style={{ marginLeft: "auto", paddingTop: "0.8%" }}>
            <dc-ui-icon name="dc_customerservice" size="small" align="center" /><br />
            {selectedLanguage === 'english' ? 'Contact' : 'Kontakt'}
          </dc-ui-button>
          <dc-ui-button variant="link" size="small" type="submit" style={{ paddingTop: "0.8%" }}>
            <dc-ui-icon name="dc_user" size="small" align="center" /><br />
            {selectedLanguage === 'english' ? 'myrexroth' : 'myrexroth'}
          </dc-ui-button>
          <dc-ui-button variant="link" size="small" type="submit" style={{ paddingTop: "0.8%" }}>
            <dc-ui-icon name="dc_cart" size="small" align="center" /><br />
            {selectedLanguage === 'english' ? 'shopping cart' : 'Warenkorb'}
          </dc-ui-button>
        </div>
        </div>
        <div style={{ background: "linear-gradient(to bottom, #cad6dd, white)", display: "flex", alignItems: "center", height: "10vh", padding: "0 1%" }}>
          <dc-ui-text variant="h4" color="inherit" weight="bold" text-align="left"
            style={{ marginLeft: "1%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: "1" }}>
            {HeaderName}
          </dc-ui-text>
          <dc-ui-button variant="secondary" size="small" type="submit" style={{ marginLeft: "auto" }}>
          {selectedLanguage === 'english' ? 'Consultation request' : 'Beratungsanfrage'}
          </dc-ui-button>
        </div>
         <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
        <div style={{ display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', backgroundColor: '#FFFFFF' }}>
          <div style={{ backgroundColor: '#a3bac8', padding: '0.5%', textAlign: 'center', marginRight: '2%' }}>
            <dc-ui-text tag="span" variant="h5" color="darkBlue02" weight="normal" text-align="center">
            {selectedLanguage === 'english' ? 'Type code' : 'Typschlüssel'}
            </dc-ui-text>
          </div>
          <div style={{ marginRight: '2%'}}>
            {isEditing ? (
              <dc-ui-text tag="span" variant="h5" color="inherit" weight="bold" text-align="center" style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                <dc-ui-input-wrapper label-position="left" hide-label="true" style={{ width: '160%' }}>
                  <input type="text" placeholder="search..." value={prefix} onChange={handlePrefixChange} onKeyDown={handleKeyDown}  />
                </dc-ui-input-wrapper>
              </dc-ui-text>
            ) : (
              <dc-ui-text tag="span" variant="h5" color="inherit" weight="bold" text-align="center">
                {typecodeInfo}
              </dc-ui-text>
            )}
          </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '100px', position: 'relative' }}>
          <dc-ui-button variant="link" size="small" type="button" onClick={handleEditClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <dc-ui-icon name="dc_edit" size="small" align="center" />
          </dc-ui-button>

          {showTooltip && (
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '110%', 
              transform: 'translateY(-50%)', 
              padding: '5px 10px', 
              backgroundColor: '#002b49',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '14px',
              whiteSpace: 'nowrap',
              display: 'flex', 
              alignItems: 'center' 
            }}>
              <dc-ui-icon name="dc_info" size="small" align="center" style={{ marginRight: '5px' }} />
              <dc-ui-text tag="span" variant="small-text" color="white" weight="normal" text-align="center">
                {selectedLanguage === 'english' ? 'To validate the current product type code or to search a new product, please click here.' : 'Um den aktuellen Produkttypenschlüssel zu überprüfen oder ein neues Produkt Suchen, klicken Sie bitte hier'}
              </dc-ui-text>
            </div>
          )}

          {errorMessage ? (
            <dc-ui-text tag="span" variant="strong-text" color="red02" weight="bold" text-align="center" style={{ marginLeft: '10px' }}>
              {errorMessage}
            </dc-ui-text>
          ) : (
            isValidTypecode && (
              <dc-ui-text tag="span" variant="strong-text" color="green02" weight="bold" text-align="center" style={{ marginLeft: '10px' }}>
                {selectedLanguage === 'english' ? 'ENTERED TYPE CODE IS VALID' : 'EINGEGEBENER TYPENSCHLÜSSEL IST GÜLTIG'}
              </dc-ui-text>
            )
          )}
        </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '1320px', display: 'flex', alignItems: 'flex-start', paddingLeft: '1%', paddingRight: '1%' }}>
          <div style={{ flex: 1, marginLeft: '1.5%'}}>
              <center>
                <h3>{selectedLanguage==='english'?'Product Views':'Produktansichten'}</h3>
                <dc-ui-tab-navigation variant="light" selected-tab="0" >
                  <dc-ui-tab-navigation-item label="3D">
                    <Preview3DApi miDent={miDent} onDataFetch={handleApiData} />
                    <WebViewer3D apiData={apiData} />
                  </dc-ui-tab-navigation-item>
                  <dc-ui-tab-navigation-item label="2D">
                      <Preview2DApi filepath = {filepath} miDent={miDent}/>
                  </dc-ui-tab-navigation-item>
                </dc-ui-tab-navigation>
              </center>
              <div style={{ marginLeft: '40%', paddingTop: '5%' }}>
                <Modal selectedLanguage={selectedLanguage}/>
              </div>
            </div>
            <div style={{ flex: 1 , marginLeft: '3vh'}}>
              <center>
                <h3>{selectedLanguage === 'english' ? 'Product Details' : 'Produktdetails'}</h3>
              </center>
              <div style={{ marginRight: '0vh', marginLeft: 'auto', width: '65vh', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', padding: '1vh' }}>
                <dc-ui-table>
                  <table>
                    {Tabledata}
                  </table>
                </dc-ui-table>
              </div>
            </div>
          </div>
        </div>
        <FloatingButton />
        <FeedbackButton />
        <ScrollToTop />
        </div>
        <Footer />
    </div>
  );
};

export default TableDataApi;

