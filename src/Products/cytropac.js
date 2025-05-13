// cytropac.js

//getting current values from api
export const getCytropacValues = (result) => {
  return {
    PATH: result.index.path,
    LINEID: result.index.lineid,
    NB: result.index.NB,
    TYPE: result.index.line.values.TYP.current,
    CS: result.index.line.values.CS.current,
    TS: result.index.line.values.TS.current,
    DR: result.index.line.values.DR.current,
    PC: result.index.line.values.PC.current,
    PM: result.index.line.values.PM.current,
    OP: result.index.line.values.OP.current,
    ST: result.index.line.values.ST.current,
    CT: result.index.line.values.CT.current,
    FL: result.index.line.values.FL.current,
    COL: result.index.line.values.COL.current,
    FD: result.index.line.values.FD.current
  };
};

// export const  getEnteredTypecode= (enteredTypecode) => {
//   if (enteredTypecode === '') {
//     // Handle empty typecode case
//     return {
//       TYPE: '',
//       CS: '',
//       TS: '',
//       DR: '',
//       PC: '',
//       PM: '',
//       OP: '',
//       ST: '',
//       CT: '',
//       FL: '',
//       COL: '',
//     };
//   }
//   const parts = enteredTypecode.split('-')[1].split('/');
//   return {
//     TYPE: enteredTypecode.split('-')[0],
//     CS: parts[0],
//     TS: parts[1],
//     DR: parts[2].substring(0, 2),
//     PC: parts[2].substring(2, 3), 
//     PM: parts[2].substring(3),    
//     OP: parts[3],
//     ST: parts[4],
//     CT: parts[5],
//     FL: parts[6],
//     COL: parts[7],
//   };
// };

// export const createMidentWithNewTypecode = (selectedValues,parsedValues) =>{
//   return `{${selectedValues.PATH}},013 {LINEID=${selectedValues.LINEID}} {NB=${selectedValues.NB}},
//           {TYP=${parsedValues.TYPE}},{CS=${parsedValues.CS}},{TS=${parsedValues.TS}},{DR=${parsedValues.DR}},
//           {PC=${parsedValues.PC}},{PM=${parsedValues.PM}},{OP=${parsedValues.OP}},{ST=${parsedValues.ST}},
//           {CT=${parsedValues.CT}},{FL=${parsedValues.FL}},{COL=${parsedValues.COL}},{FD=${parsedValues.FD}},
//           {PPATH=cytropac_asmtpl.prj},{BAH005=380},{AAF726=8.3},{AAB456=4000},{BAD915=AC},{AAC830=20},{BAC676=G1},
//           {AAN523=Plug-in connection},{AAG402=1},{AAQ326=https://www.boschrexroth.com/ics/cat/?cat=Industrial-Hydraulics-Catalog&p=p943945},
//           {AAJ413=G1},{BAI539=},{BAB706=}`;
// }

//converting the static mident into dynamic mident
export const getCytropacMiDent = (selectedValues) => {
  return `{${selectedValues.PATH}},013 {LINEID=${selectedValues.LINEID}} {NB=${selectedValues.NB}},
          {TYP=${selectedValues.TYPE}},{CS=${selectedValues.CS}},{TS=${selectedValues.TS}},{DR=${selectedValues.DR}},
          {PC=${selectedValues.PC}},{PM=${selectedValues.PM}},{OP=${selectedValues.OP}},{ST=${selectedValues.ST}},
          {CT=${selectedValues.CT}},{FL=${selectedValues.FL}},{COL=${selectedValues.COL}},{FD=${selectedValues.FD}},
          {PPATH=cytropac_asmtpl.prj},{BAH005=380},{AAF726=8.3},{AAB456=4000},{BAD915=AC},{AAC830=20},{BAC676=G1},
          {AAN523=Plug-in connection},{AAG402=1},{AAQ326=https://www.boschrexroth.com/ics/cat/?cat=Industrial-Hydraulics-Catalog&p=p943945},
          {AAJ413=G1},{BAI539=},{BAB706=}`;
};

//generating the typecode dynamically
export const computeCytropacTypecodeInfo = (selectedValues) => {
  return `${selectedValues.TYPE.split(':')[0]}-${selectedValues.CS.split(':')[0]}/${selectedValues.TS.split(':')[0]}/${selectedValues.DR}${selectedValues.PC}${selectedValues.PM}/${selectedValues.OP.split(':')[0]}/${selectedValues.ST}/${selectedValues.CT}/${selectedValues.FL.split(':')[0]}/${selectedValues.COL.split(':')[0]}`;
};

//generating the tabledata with images/graphs
export const generateCytropacTabledata = (indexPath, renderRow) => {
  const pcImages = {
    '1: 1.5': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd%2Findustrial_hydraulics%2Fpool%2Fpower_units%2Fstd_power_units%2Fcytropac_asmtab.prj&previewPath=1.5kw.png&width=500&height=500&rev=1722925551961",
    '2: 2.2': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd%2Findustrial_hydraulics%2Fpool%2Fpower_units%2Fstd_power_units%2Fcytropac_asmtab.prj&previewPath=2.2kw.png&width=500&height=500&rev=1722925551961",
    '3: 3.0': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd%2Findustrial_hydraulics%2Fpool%2Fpower_units%2Fstd_power_units%2Fcytropac_asmtab.prj&previewPath=3.0kw.png&width=500&height=500&rev=1722925551961",
    '4: 4.0': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd%2Findustrial_hydraulics%2Fpool%2Fpower_units%2Fstd_power_units%2Fcytropac_asmtab.prj&previewPath=4.0kw.png&width=500&height=500&rev=1722925551961"
  };

  const pcValuesWithImages = indexPath.PC.values.map(value => ({
    ...value,
    imageUrl: pcImages[value.name] || null,
  }));

  return (
    <tbody>
      {renderRow(indexPath.RNR.desc, indexPath.RNR.values, 'RNR', indexPath.RNR.Unit,0)}
      {renderRow(indexPath.MN.desc, indexPath.MN.values, 'MN', indexPath.MN.Unit,0)}
      {renderRow(indexPath.TYP.desc, indexPath.TYP.values, 'TYP', indexPath.TYP.Unit,0)}
      {renderRow(indexPath.CS.desc, indexPath.CS.values, 'CS', indexPath.CS.Unit,0)}
      {renderRow(indexPath.TS.desc, indexPath.TS.values, 'TS', indexPath.TS.Unit,0)}
      {renderRow(indexPath.DR.desc, indexPath.DR.values, 'DR', indexPath.DR.Unit,0)}
      {renderRow(indexPath.PC.desc, pcValuesWithImages, 'PC', indexPath.PC.Unit,1)}
      {renderRow(indexPath.PM.desc, indexPath.PM.values, 'PM', indexPath.PM.Unit,0)}
      {renderRow(indexPath.OP.desc, indexPath.OP.values, 'OP', indexPath.OP.Unit,0)}
      {renderRow(indexPath.ST.desc, indexPath.ST.values, 'ST', indexPath.ST.Unit,0)}
      {renderRow(indexPath.CT.desc, indexPath.CT.values, 'CT', indexPath.CT.Unit,0)}
      {renderRow(indexPath.FL.desc, indexPath.FL.values, 'FL', indexPath.FL.Unit,0)}
      {renderRow(indexPath.COL.desc, indexPath.COL.values, 'COL', indexPath.COL.Unit,0)}
      {renderRow(indexPath.FD.desc, indexPath.FD.values, 'FD', indexPath.FD.Unit,0)}
    </tbody>
  );
};

//dynamically generating all possible typecodes
export const generateAllPossibleTypecodesCytropac = (indexPath) => {
  const combinations = [];

  // Helper function to generate combinations
  const generateCombinations = (acc, fields) => {
    if (fields.length === 0) {
      // Join the components with separators
      const formattedCode = `${acc.TYPE}-${acc.CS}/${acc.TS}/${acc.DR}${acc.PC}${acc.PM}/${acc.OP}/${acc.ST}/${acc.CT}/${acc.FL}/${acc.COL}`;
      combinations.push(formattedCode);
      return;
    }

    const [field, ...restFields] = fields;
    field.values.forEach(value => {
      generateCombinations({
        ...acc,
        [field.key]: value.value.split(':')[0] // Extract short code before colon
      }, restFields);
    });
  };

  // Extracting relevant fields and initializing the fields array
  const fields = [
    { key: 'TYPE', values: indexPath.TYP.values },
    { key: 'CS', values: indexPath.CS.values },
    { key: 'TS', values: indexPath.TS.values },
    { key: 'DR', values: indexPath.DR.values },
    { key: 'PC', values: indexPath.PC.values },
    { key: 'PM', values: indexPath.PM.values },
    { key: 'OP', values: indexPath.OP.values },
    { key: 'ST', values: indexPath.ST.values },
    { key: 'CT', values: indexPath.CT.values },
    { key: 'FL', values: indexPath.FL.values },
    { key: 'COL', values: indexPath.COL.values }
  ];

  // Start generating combinations
  generateCombinations({}, fields);

  return combinations;
};
