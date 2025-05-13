// 4weh.js

export const get4WehValues = (result) => {
    return {
      PATH: result.index.path,
      LINEID: result.index.lineid,
      NB: result.index.NB,
      R1M_C_VGS_DXX_POR_NUM: result.index.line.values.R1M_C_VGS_DXX_POR_NUM.current,
      R1M_C_VGS_DXX_UNI_TYP: result.index.line.values.R1M_C_VGS_DXX_UNI_TYP.current,
      R1M_C_VGS_DXX_ACT_TYP: result.index.line.values.R1M_C_VGS_DXX_ACT_TYP.current,
      R1M_C_VGS_DXX_UNI_SIZ: result.index.line.values.R1M_C_VGS_DXX_UNI_SIZ.current,
      R1M_C_VGS_DXX_SYM_SPO: result.index.line.values.R1M_C_VGS_DXX_SYM_SPO.current,
      R1M_C_VGS_DXX_UNI_SER: result.index.line.values.R1M_C_VGS_DXX_UNI_SER.current,
      R1M_C_VGS_DXX_SOL_TYP: result.index.line.values.R1M_C_VGS_DXX_SOL_TYP.current,
      R1M_C_VGS_DXX_SOL_ACD: result.index.line.values.R1M_C_VGS_DXX_SOL_ACD.current,
      R1M_C_VGS_DXX_VAL_PIL: result.index.line.values.R1M_C_VGS_DXX_VAL_PIL.current,
      R1M_C_VGS_DXX_SOL_VOT: result.index.line.values.R1M_C_VGS_DXX_SOL_VOT.current,
      R1M_C_VGS_DXX_ACT_EME: result.index.line.values.R1M_C_VGS_DXX_ACT_EME.current,
      R1M_C_VGS_DXX_CON_ELE: result.index.line.values.R1M_C_VGS_DXX_CON_ELE.current,
      R1M_C_VGS_DXX_FLO_COT: result.index.line.values.R1M_C_VGS_DXX_FLO_COT.current,
      R1M_C_VGS_DXX_ORI_POS: result.index.line.values.R1M_C_VGS_DXX_ORI_POS.current
    };
  };
    
    export const get4WehMiDent = (selectedValues) => {
      return `{${selectedValues.PATH}},013 {LINEID=${selectedValues.LINEID}}  {NB=${selectedValues.NB}},{R1M_C_VGS_DXX_POR_NUM=${selectedValues.R1M_C_VGS_DXX_POR_NUM}},
      {R1M_C_VGS_DXX_UNI_TYP=${selectedValues.R1M_C_VGS_DXX_UNI_TYP}},{R1M_C_VGS_DXX_ACT_TYP=${selectedValues.R1M_C_VGS_DXX_ACT_TYP}},
      {R1M_C_VGS_DXX_UNI_SIZ=${selectedValues.R1M_C_VGS_DXX_UNI_SIZ}},{R1M_C_VGS_DXX_SYM_SPO=${selectedValues.R1M_C_VGS_DXX_SYM_SPO}},
      {R1M_C_VGS_DXX_UNI_SER=${selectedValues.R1M_C_VGS_DXX_UNI_SER}},{R1M_C_VGS_DXX_VAL_PIL=${selectedValues.R1M_C_VGS_DXX_VAL_PIL}},
      {R1M_C_VGS_DXX_SOL_TYP=${selectedValues.R1M_C_VGS_DXX_SOL_TYP}},{R1M_C_VGS_DXX_SOL_ACD=${selectedValues.R1M_C_VGS_DXX_SOL_ACD}},
      {R1M_C_VGS_DXX_SOL_VOT=${selectedValues.R1M_C_VGS_DXX_SOL_VOT}},{R1M_C_VGS_DXX_ACT_EME=${selectedValues.R1M_C_VGS_DXX_ACT_EME}},
      {R1M_C_VGS_DXX_CON_ELE=${selectedValues.R1M_C_VGS_DXX_CON_ELE}},{R1M_C_VGS_DXX_FLO_COT=${selectedValues.R1M_C_VGS_DXX_FLO_COT}},
      {R1M_C_VGS_DXX_ORI_POS=${selectedValues.R1M_C_VGS_DXX_ORI_POS}},{PPATH=weh_wh_1x/parts/weh_wh_1x_asmtpl.prj};`
    };
    
    export const compute4WehTypecodeInfo = (selectedValues) => {
      // Extracting the required parts
      const R1M_C_VGS_DXX_POR_NUM = selectedValues.R1M_C_VGS_DXX_POR_NUM.split(':')[0];
      const R1M_C_VGS_DXX_UNI_TYP = selectedValues.R1M_C_VGS_DXX_UNI_TYP.split(':')[0];
      const R1M_C_VGS_DXX_ACT_TYP = selectedValues.R1M_C_VGS_DXX_ACT_TYP.split(':')[0];
      const R1M_C_VGS_DXX_UNI_SIZ = selectedValues.R1M_C_VGS_DXX_UNI_SIZ.split(':')[0];
      const R1M_C_VGS_DXX_SYM_SPO = selectedValues.R1M_C_VGS_DXX_SYM_SPO.split(':')[0];
      const R1M_C_VGS_DXX_UNI_SER = selectedValues.R1M_C_VGS_DXX_UNI_SER.split(':')[0];
      const R1M_C_VGS_DXX_VAL_PIL = selectedValues.R1M_C_VGS_DXX_VAL_PIL.split(':')[0];
      const R1M_C_VGS_DXX_SOL_TYP = selectedValues.R1M_C_VGS_DXX_SOL_TYP.split(':')[0];
      const R1M_C_VGS_DXX_SOL_ACD = selectedValues.R1M_C_VGS_DXX_SOL_ACD.split(':')[0];
      const R1M_C_VGS_DXX_SOL_VOT = selectedValues.R1M_C_VGS_DXX_SOL_VOT.split(':')[0];
      const R1M_C_VGS_DXX_ACT_EME = selectedValues.R1M_C_VGS_DXX_ACT_EME.split(':')[0];
      const R1M_C_VGS_DXX_FLO_COT = selectedValues.R1M_C_VGS_DXX_FLO_COT.split(':')[0];
      const R1M_C_VGS_DXX_CON_ELE = selectedValues.R1M_C_VGS_DXX_CON_ELE.split(':')[0];
      const R1M_C_VGS_DXX_ORI_POS = selectedValues.R1M_C_VGS_DXX_ORI_POS.split(':')[0];
    
      // Constructing the result
      const part1 = `${R1M_C_VGS_DXX_POR_NUM}${R1M_C_VGS_DXX_UNI_TYP}${R1M_C_VGS_DXX_ACT_TYP}${R1M_C_VGS_DXX_UNI_SIZ}${R1M_C_VGS_DXX_SYM_SPO}${R1M_C_VGS_DXX_UNI_SER}`;
      const part2 = `${R1M_C_VGS_DXX_VAL_PIL}${R1M_C_VGS_DXX_SOL_TYP}${R1M_C_VGS_DXX_SOL_ACD}${R1M_C_VGS_DXX_SOL_VOT}${R1M_C_VGS_DXX_ACT_EME}${R1M_C_VGS_DXX_FLO_COT}${R1M_C_VGS_DXX_CON_ELE}`;
      const part3 = R1M_C_VGS_DXX_ORI_POS ? `/${R1M_C_VGS_DXX_ORI_POS}10` : '';
    
      return `${part1}/${part2}${part3}`;
    };
    
    
    export const generate4WehTabledata = (indexPath, renderRow) => {
      const R1M_C_VGS_DXX_SYM_SPOImages = {
        'D: D': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_d.png&width=500&height=500&rev=1722925551961",
        'Y31-: Y31-': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_y31.png&width=500&height=500&rev=1722925551961",
        'E: E': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_e.png&width=500&height=500&rev=1722925551961",
        'EA: EA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_ea.png&width=500&height=500&rev=1722925551961",
        'EB: EB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_eb.png&width=500&height=500&rev=1722925551961",
        'E42-: E42-': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_e42.png&width=500&height=500&rev=1722925551961",
        'G: G': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_g.png&width=500&height=500&rev=1722925551961",
        'GA: GA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_ga.png&width=500&height=500&rev=1722925551961",
        'GB: GB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_gb.png&width=500&height=500&rev=1722925551961",
        'J: J': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_j.png&width=500&height=500&rev=1722925551961",
        'JA: JA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_ja.png&width=500&height=500&rev=1722925551961",
        'JB: JB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_jb.png&width=500&height=500&rev=1722925551961",
        'L: L': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_l.png&width=500&height=500&rev=1722925551961",
        'LA: LA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_lx_la.png&width=500&height=500&rev=1722925551961",
        'LB: LB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_lx_lb.png&width=500&height=500&rev=1722925551961",
        'U: U': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_u.png&width=500&height=500&rev=1722925551961",
        'UA: UA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_ua.png&width=500&height=500&rev=1722925551961",
        'UB: UB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/pilot_operated/weh_wh_1x_asmtab.prj&previewPath=weh_wh_1x_ub.png&width=500&height=500&rev=1722925551961",
      
      };
    
      // Map each value with its image URL
      const R1M_C_VGS_DXX_SYM_SPOValuesWithImages = indexPath.R1M_C_VGS_DXX_SYM_SPO.values.map(value => ({
        ...value,
        imageUrl: R1M_C_VGS_DXX_SYM_SPOImages[value.name]
      }));
      return (
        <tbody>
          {renderRow(indexPath.RNR.desc, indexPath.RNR.values, 'RNR', indexPath.RNR.Unit)}
          {renderRow(indexPath.MN.desc, indexPath.MN.values, 'MN', indexPath.MN.Unit)}
          {renderRow(indexPath.R1M_C_VGS_DXX_POR_NUM.desc, indexPath.R1M_C_VGS_DXX_POR_NUM.values, 'R1M_C_VGS_DXX_POR_NUM', indexPath.R1M_C_VGS_DXX_POR_NUM.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_UNI_TYP.desc, indexPath.R1M_C_VGS_DXX_UNI_TYP.values, 'R1M_C_VGS_DXX_UNI_TYP', indexPath.R1M_C_VGS_DXX_UNI_TYP.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_ACT_TYP.desc, indexPath.R1M_C_VGS_DXX_ACT_TYP.values, 'R1M_C_VGS_DXX_ACT_TYP', indexPath.R1M_C_VGS_DXX_ACT_TYP.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_UNI_SIZ.desc, indexPath.R1M_C_VGS_DXX_UNI_SIZ.values, 'R1M_C_VGS_DXX_UNI_SIZ', indexPath.R1M_C_VGS_DXX_UNI_SIZ.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_SYM_SPO.desc, R1M_C_VGS_DXX_SYM_SPOValuesWithImages, 'R1M_C_VGS_DXX_SYM_SPO', indexPath.R1M_C_VGS_DXX_SYM_SPO.Unit,1)}
          {renderRow(indexPath.R1M_C_VGS_DXX_UNI_SER.desc, indexPath.R1M_C_VGS_DXX_UNI_SER.values, 'R1M_C_VGS_DXX_UNI_SER', indexPath.R1M_C_VGS_DXX_UNI_SER.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_VAL_PIL.desc, indexPath.R1M_C_VGS_DXX_VAL_PIL.values, 'R1M_C_VGS_DXX_VAL_PIL', indexPath.R1M_C_VGS_DXX_VAL_PIL.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_SOL_TYP.desc, indexPath.R1M_C_VGS_DXX_SOL_TYP.values, 'R1M_C_VGS_DXX_SOL_TYP', indexPath.R1M_C_VGS_DXX_SOL_TYP.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_SOL_ACD.desc, indexPath.R1M_C_VGS_DXX_SOL_ACD.values, 'R1M_C_VGS_DXX_SOL_ACD', indexPath.R1M_C_VGS_DXX_SOL_ACD.Unit,0)}
          {renderRow(indexPath.R1M_C_VGS_DXX_SOL_VOT.desc, indexPath.R1M_C_VGS_DXX_SOL_VOT.values, 'R1M_C_VGS_DXX_SOL_VOT', indexPath.R1M_C_VGS_DXX_SOL_VOT.Unit)}
          {renderRow(indexPath.R1M_C_VGS_DXX_ACT_EME.desc, indexPath.R1M_C_VGS_DXX_ACT_EME.values, 'R1M_C_VGS_DXX_ACT_EME', indexPath.R1M_C_VGS_DXX_ACT_EME.Unit)}
          {renderRow(indexPath.R1M_C_VGS_DXX_FLO_COT.desc, indexPath.R1M_C_VGS_DXX_FLO_COT.values, 'R1M_C_VGS_DXX_FLO_COT', indexPath.R1M_C_VGS_DXX_FLO_COT.Unit)}
          {renderRow(indexPath.R1M_C_VGS_DXX_CON_ELE.desc, indexPath.R1M_C_VGS_DXX_CON_ELE.values, 'R1M_C_VGS_DXX_CON_ELE', indexPath.R1M_C_VGS_DXX_CON_ELE.Unit)}
          {renderRow(indexPath.R1M_C_VGS_DXX_ORI_POS.desc, indexPath.R1M_C_VGS_DXX_ORI_POS.values, 'R1M_C_VGS_DXX_ORI_POS', indexPath.R1M_C_VGS_DXX_ORI_POS.Unit)}
        </tbody>
      );
    };
    
    export const generateAllPossibleTypecodes4Weh = (indexPath) => {
      const combinations = [];
    
      // Helper function to generate combinations
      const generateCombinations = (acc, fields) => {
        if (fields.length === 0) {
          // Join the components with separators
          const part1 = `${acc.R1M_C_VGS_DXX_POR_NUM}${acc.R1M_C_VGS_DXX_UNI_TYP}${acc.R1M_C_VGS_DXX_ACT_TYP}${acc.R1M_C_VGS_DXX_UNI_SIZ}${acc.R1M_C_VGS_DXX_SYM_SPO}${acc.R1M_C_VGS_DXX_UNI_SER}`;
          const part2 = `${acc.R1M_C_VGS_DXX_VAL_PIL}${acc.R1M_C_VGS_DXX_SOL_TYP}${acc.R1M_C_VGS_DXX_SOL_ACD}${acc.R1M_C_VGS_DXX_SOL_VOT}${acc.R1M_C_VGS_DXX_ACT_EME}${acc.R1M_C_VGS_DXX_FLO_COT}${acc.R1M_C_VGS_DXX_CON_ELE}`;
          const part3 = acc.R1M_C_VGS_DXX_ORI_POS ? `/${acc.R1M_C_VGS_DXX_ORI_POS}10` : '';
  
          const formattedCode = `${part1}/${part2}${part3}`;
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
        { key: 'R1M_C_VGS_DXX_POR_NUM', values: indexPath.R1M_C_VGS_DXX_POR_NUM.values },
        { key: 'R1M_C_VGS_DXX_UNI_TYP', values: indexPath.R1M_C_VGS_DXX_UNI_TYP.values },
        { key: 'R1M_C_VGS_DXX_ACT_TYP', values: indexPath.R1M_C_VGS_DXX_ACT_TYP.values },
        { key: 'R1M_C_VGS_DXX_UNI_SIZ', values: indexPath.R1M_C_VGS_DXX_UNI_SIZ.values },
        { key: 'R1M_C_VGS_DXX_SYM_SPO', values: indexPath.R1M_C_VGS_DXX_SYM_SPO.values },
        { key: 'R1M_C_VGS_DXX_UNI_SER', values: indexPath.R1M_C_VGS_DXX_UNI_SER.values },
        { key: 'R1M_C_VGS_DXX_VAL_PIL', values: indexPath.R1M_C_VGS_DXX_VAL_PIL.values },
        { key: 'R1M_C_VGS_DXX_SOL_TYP', values: indexPath.R1M_C_VGS_DXX_SOL_TYP.values },
        { key: 'R1M_C_VGS_DXX_SOL_ACD', values: indexPath.R1M_C_VGS_DXX_SOL_ACD.values },
        { key: 'R1M_C_VGS_DXX_SOL_VOT', values: indexPath.R1M_C_VGS_DXX_SOL_VOT.values },
        { key: 'R1M_C_VGS_DXX_ACT_EME', values: indexPath.R1M_C_VGS_DXX_ACT_EME.values },
        { key: 'R1M_C_VGS_DXX_FLO_COT', values: indexPath.R1M_C_VGS_DXX_FLO_COT.values },
        { key: 'R1M_C_VGS_DXX_CON_ELE', values: indexPath.R1M_C_VGS_DXX_CON_ELE.values },
        { key: 'R1M_C_VGS_DXX_ORI_POS', values: indexPath.R1M_C_VGS_DXX_ORI_POS.values }
      ];
    
      // Start generating combinations
      generateCombinations({}, fields);
    
      return combinations;
    };
    