// z3dre.js

export const getZ3dreValues = (result) => {
    return {
      PATH: result.index.path,
      LINEID: result.index.lineid,
      NB: result.index.NB,
      TYPE: result.index.line.values.TYPE.current,
      VERS: result.index.line.values.VERS.current,
      TYPE2: result.index.line.values.TYPE2.current,
      E: result.index.line.values.E.current,
      SIZE: result.index.line.values.SIZE.current,
      PO: result.index.line.values.PO.current,
      P: result.index.line.values.P.current,
      PPS: result.index.line.values.PPS.current,
      CS: result.index.line.values.CS.current,
      PR: result.index.line.values.PR.current,
      PF: result.index.line.values.PF.current,
      PMP: result.index.line.values.PMP.current,
      DV: result.index.line.values.DV.current,
      CEI: result.index.line.values.CEI.current,
      SM: result.index.line.values.SM.current
    };
  };
    
    export const getZ3dreMiDent = (selectedValues) => {
      return `{${selectedValues.PATH}},013 {LINEID=${selectedValues.LINEID}}  {NB=${selectedValues.NB}}
      {TYPE=${selectedValues.TYPE}},{VERS=${selectedValues.VERS}},{TYPE2=${selectedValues.TYPE2}},{E=${selectedValues.E}},
      {SIZE=${selectedValues.SIZE}},{PO=${selectedValues.PO}},{P=${selectedValues.P}},{PPS=${selectedValues.PPS}},
      {CS=${selectedValues.CS}},{PR=${selectedValues.PR}},{PF=${selectedValues.PF}},{PMP=${selectedValues.PMP}},{DV=${selectedValues.DV}},
      {CEI=${selectedValues.CEI}},{SM=${selectedValues.SM}},{PPATH=z3dree10_1x/parts/z3dree10_1x_asmtpl.prj}`
    };
    
    export const computeZ3dreTypecodeInfo = (selectedValues) => {
      // Extracting the required parts
      const TYPE = selectedValues.TYPE.split(':')[0];
      const VERS = selectedValues.VERS.split(':')[0];
      const TYPE2 = selectedValues.TYPE2.split(':')[0];
      const E = selectedValues.E.split(':')[0];
      const SIZE = selectedValues.SIZE.split(':')[0];
      const PO = selectedValues.PO.split(':')[0];
      const P = selectedValues.P.split(':')[0];
      const PPS = selectedValues.PPS.split(':')[0];
      const CS = selectedValues.CS.split(':')[0];
      const PR = selectedValues.PR.split(':')[0];
      const PF = selectedValues.PF.split(':')[0];
      const PMP = selectedValues.PMP.split(':')[0];
      const DV = selectedValues.DV.split(':')[0];
      const CEI = selectedValues.CEI.split(':')[0];
      const SM = selectedValues.SM.split(':')[0];
    
      // Constructing the result
      const part1 = `${TYPE}${VERS}${TYPE2}${E}${SIZE}${PO}${P}${PPS}${CS}`;
      const part2 = `${PR}${PF}${PMP}${DV}${CEI}${SM}`;
    
      return `${part1}/${part2}`;
    };
    
    
    export const generateZ3dreTabledata = (indexPath, renderRow) => {
      const PFImages = {
        'Y: Pilot oil supply for the directional valve from port P2, pilot oil return external for directional valve and Z3DRE(E)':"https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/proportional_high_response_and_servo_valves/proportional_press_control_valve/proportional_press_reducing_valves/pilot_operated/z3dree10_1x_asmtab.prj&previewPath=z3dre_y.png&width=500&height=500&rev=1722925551961",
        'XY: Pilot oil supply external for directional valve, pilot oil return external for directional valve and Z3DRE(E)':"https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/proportional_high_response_and_servo_valves/proportional_press_control_valve/proportional_press_reducing_valves/pilot_operated/z3dree10_1x_asmtab.prj&previewPath=z3dre_xy.png&width=500&height=500&rev=1722925551961",
        'L: Pilot oil supply for the directional valve from port P2, pilot oil return internal for directional valve and external for Z3DRE(E)': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/proportional_high_response_and_servo_valves/proportional_press_control_valve/proportional_press_reducing_valves/pilot_operated/z3dree10_1x_asmtab.prj&previewPath=z3dre_l.png&width=500&height=500&rev=1722925551961",
        'XL: Pilot oil supply external for directional valve, pilot oil return internal for directional valve and external for Z3DRE(E); Directional valve without pilot oil supply':"https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/proportional_high_response_and_servo_valves/proportional_press_control_valve/proportional_press_reducing_valves/pilot_operated/z3dree10_1x_asmtab.prj&previewPath=z3dre_xl.png&width=500&height=500&rev=1722925551961"

      };
    
      // Map each value with its image URL
      const PFValuesWithImages = indexPath.PF.values.map(value => ({
        ...value,
        imageUrl: PFImages[value.name]
      }));
      return (
        <tbody>
          {renderRow(indexPath.RNR.desc, indexPath.RNR.values, 'RNR', indexPath.RNR.Unit)}
          {renderRow(indexPath.MN.desc, indexPath.MN.values, 'MN', indexPath.MN.Unit)}
          {renderRow(indexPath.TYPE.desc, indexPath.TYPE.values, 'TYPE', indexPath.TYPE.Unit)}
          {renderRow(indexPath.VERS.desc, indexPath.VERS.values, 'VERS', indexPath.VERS.Unit)}
          {renderRow(indexPath.TYPE2.desc, indexPath.TYPE2.values, 'TYPE2', indexPath.TYPE2.Unit)}
          {renderRow(indexPath.E.desc, indexPath.E.values, 'E', indexPath.E.Unit)}
          {renderRow(indexPath.SIZE.desc, indexPath.SIZE.values, 'SIZE', indexPath.SIZE.Unit)}
          {renderRow(indexPath.PO.desc, indexPath.PO.values, 'PO', indexPath.PO.Unit)}
          {renderRow(indexPath.P.desc, indexPath.P.values, 'P', indexPath.P.Unit)}
          {renderRow(indexPath.PPS.desc, indexPath.PPS.values, 'PPS', indexPath.PPS.Unit)}
          {renderRow(indexPath.CS.desc, indexPath.CS.values, 'CS', indexPath.CS.Unit)}
          {renderRow(indexPath.PR.desc, indexPath.PR.values, 'PR', indexPath.PR.Unit)}
          {renderRow(indexPath.PF.desc, PFValuesWithImages, 'PF', indexPath.PF.Unit,1)}
          {renderRow(indexPath.PMP.desc, indexPath.PMP.values, 'PMP', indexPath.PMP.Unit)}
          {renderRow(indexPath.DV.desc, indexPath.DV.values, 'DV', indexPath.DV.Unit)}
          {renderRow(indexPath.CEI.desc, indexPath.CEI.values, 'CEI', indexPath.CEI.Unit)}
          {renderRow(indexPath.SM.desc, indexPath.SM.values, 'SM', indexPath.SM.Unit)}
        </tbody>
      );
    };
    
    export const generateAllPossibleTypecodesZ3dre = (indexPath) => {
      const combinations = [];
    
      // Helper function to generate combinations
      const generateCombinations = (acc, fields) => {
        if (fields.length === 0) {
          // Join the components with separators
          const part1 = `${acc.TYPE}${acc.VERS}${acc.TYPE2}${acc.E}${acc.SIZE}${acc.PO}${acc.P}${acc.PPS}${acc.CS}`;
          const part2 = `${acc.PR}${acc.PF}${acc.PMP}${acc.DV}${acc.CEI}${acc.SM}`;
  
          const formattedCode = `${part1}/${part2}`;
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
        { key: 'VERS', values: indexPath.VERS.values },
        { key: 'TYPE2', values: indexPath.TYPE2.values },
        { key: 'E', values: indexPath.E.values },
        { key: 'SIZE', values: indexPath.SIZE.values },
        { key: 'PO', values: indexPath.PO.values },
        { key: 'P', values: indexPath.P.values },
        { key: 'PPS', values: indexPath.PPS.values },
        { key: 'CS', values: indexPath.CS.values },
        { key: 'PR', values: indexPath.PR.values },
        { key: 'PF', values: indexPath.PF.values },
        { key: 'PMP', values: indexPath.PMP.values },
        { key: 'DV', values: indexPath.DV.values },
        { key: 'CEI', values: indexPath.CEI.values },
        { key: 'SM', values: indexPath.SM.values }
      ];
    
      // Start generating combinations
      generateCombinations({}, fields);
      console.log(combinations)
    
      return combinations;
    };
    