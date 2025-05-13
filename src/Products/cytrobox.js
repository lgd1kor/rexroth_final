// cytrobox.js

export const getCytroboxValues = (result) => {
  return {
    PATH: result.index.path,
    LINEID: result.index.lineid,
    NB: result.index.NB,
    TYPE: result.index.line.values.TYPE.current,
    V: result.index.line.values.V.current,
    CF: result.index.line.values.CF.current,
    CC: result.index.line.values.CC.current,
    C: result.index.line.values.C.current,
    MPG1: result.index.line.values.MPG1.current,
    CD1: result.index.line.values.CD1.current,
    MPG2: result.index.line.values.MPG2.current,
    CD2: result.index.line.values.CD2.current,
    OC: result.index.line.values.OC.current,
    OT: result.index.line.values.OT.current,
    ST: result.index.line.values.ST.current
  };
};

export const getCytroboxMiDent = (selectedValues) => {
  return `{${selectedValues.PATH}},013 {LINEID=${selectedValues.LINEID}} {NB=${selectedValues.NB}},
          {TYPE=${selectedValues.TYPE}},{V=${selectedValues.V}},{CF=${selectedValues.CF}},{CC=${selectedValues.CC}},
          {C=${selectedValues.C}},{MPG1=${selectedValues.MPG1}},{CD1=${selectedValues.CD1}},{MPG2=${selectedValues.MPG2}},
          {CD2=${selectedValues.CD2}},{OC=${selectedValues.OC}},{OT=${selectedValues.OT}},{ST=${selectedValues.ST}},`;
};

export const computeCytroboxTypecodeInfo = (selectedValues) => {
  return `${selectedValues.TYPE.split(':')[0]}-${selectedValues.V}/${selectedValues.CF.split(':')[0]}${selectedValues.CC.split(':')[0]}${selectedValues.C.split(':')[0]}/${selectedValues.MPG1}${selectedValues.CD1}/${selectedValues.MPG2.split(':')[0]}${selectedValues.CD2.split(':')[0]}/${selectedValues.OC}${selectedValues.OT}/${selectedValues.ST}`;
};

export const generateCytroboxTabledata = (indexPath, renderRow) => {
  return (
    <tbody>
      {renderRow(indexPath.RNR.desc, indexPath.RNR.values, 'RNR', indexPath.RNR.Unit)}
      {renderRow(indexPath.MN.desc, indexPath.MN.values, 'MN', indexPath.MN.Unit)}
      {renderRow(indexPath.TYPE.desc, indexPath.TYPE.values, 'TYPE', indexPath.TYPE.Unit)}
      {renderRow(indexPath.V.desc, indexPath.V.values, 'V', indexPath.V.Unit)}
      {renderRow(indexPath.CF.desc, indexPath.CF.values, 'CF', indexPath.CF.Unit)}
      {renderRow(indexPath.CC.desc, indexPath.CC.values, 'CC', indexPath.CC.Unit)}
      {renderRow(indexPath.C.desc, indexPath.C.values, 'C', indexPath.C.Unit)}
      {renderRow(indexPath.MPG1.desc, indexPath.MPG1.values, 'MPG1', indexPath.MPG1.Unit)}
      {renderRow(indexPath.CD1.desc, indexPath.CD1.values, 'CD1', indexPath.CD1.Unit)}
      {renderRow(indexPath.MPG2.desc, indexPath.MPG2.values, 'MPG2', indexPath.MPG2.Unit)}
      {renderRow(indexPath.CD2.desc, indexPath.CD2.values, 'CD2', indexPath.CD2.Unit)}
      {renderRow(indexPath.OC.desc, indexPath.OC.values, 'OC', indexPath.OC.Unit)}
      {renderRow(indexPath.OT.desc, indexPath.OT.values, 'OT', indexPath.OT.Unit)}
      {renderRow(indexPath.ST.desc, indexPath.ST.values, 'ST', indexPath.ST.Unit)}
    </tbody>
  );
};

export const generateAllPossibleTypecodesCytrobox = (indexPath) => {
  const combinations = [];

  // Helper function to generate combinations
  const generateCombinations = (acc, fields) => {
    if (fields.length === 0) {
      // Join the components with separators
      const formattedCode = `${acc.TYPE}-${acc.V}/${acc.CF}${acc.CC}${acc.C}/${acc.MPG1}${acc.CD1}/${acc.MPG2}${acc.CD2}/${acc.OC}${acc.OT}/${acc.ST}`;
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
    { key: 'TYPE', values: indexPath.TYPE.values },
    { key: 'V', values: indexPath.V.values },
    { key: 'CF', values: indexPath.CF.values },
    { key: 'CC', values: indexPath.CC.values },
    { key: 'C', values: indexPath.C.values },
    { key: 'MPG1', values: indexPath.MPG1.values },
    { key: 'CD1', values: indexPath.CD1.values },
    { key: 'MPG2', values: indexPath.MPG2.values },
    { key: 'CD2', values: indexPath.CD2.values },
    { key: 'OC', values: indexPath.OC.values },
    { key: 'OT', values: indexPath.OT.values },
    { key: 'ST', values: indexPath.ST.values }
  ];

  // Start generating combinations
  generateCombinations({}, fields);

  return combinations;
};
