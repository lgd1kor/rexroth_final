const generateUrl = (filepath, selectedLanguage) => {
    const params = {
      apikey: 'e66120f9d9624823884cac1bf290ea88',
      language: selectedLanguage,
      eol: '1',
      plm: 'true',
      includeunclassifiedbycountry: 'false',
      enablePreviewPerLine: 'true',
      path: filepath,
      includecrossref: 'true',
    };
    
    const queryString = new URLSearchParams(params).toString();
    return `https://webapi.partcommunity.com/service/table/vertical?${queryString}`;
  };

export default generateUrl