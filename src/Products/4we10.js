// we10.js

export const get4We10hValues = (result) => {
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
      R1M_C_VGS_DXX_SOL_VOT: result.index.line.values.R1M_C_VGS_DXX_SOL_VOT.current,
      R1M_C_VGS_DXX_ACT_EME: result.index.line.values.R1M_C_VGS_DXX_ACT_EME.current,
      R1M_C_VGS_DXX_CON_ELE: result.index.line.values.R1M_C_VGS_DXX_CON_ELE.current,
      R1M_C_VGS_DXX_SWI_TYP: result.index.line.values.R1M_C_VGS_DXX_SWI_TYP.current,
      R1M_C_VGS_DXX_SWI_MON: result.index.line.values.R1M_C_VGS_DXX_SWI_MON.current,
      R1M_C_VGS_DXX_SWI_POW: result.index.line.values.R1M_C_VGS_DXX_SWI_POW.current,
      R1M_C_VGS_DXX_SEA_MAT: result.index.line.values.R1M_C_VGS_DXX_SEA_MAT.current
    };
  };
  
  export const get4We10hMiDent = (selectedValues) => {
    return `{${selectedValues.PATH}},013 {LINEID=${selectedValues.LINEID}} 
            {NB=${selectedValues.NB},{R1M_C_VGS_DXX_POR_NUM=${selectedValues.R1M_C_VGS_DXX_POR_NUM}},{R1M_C_VGS_DXX_UNI_TYP=${selectedValues.R1M_C_VGS_DXX_UNI_TYP}},
            {R1M_C_VGS_DXX_ACT_TYP=${selectedValues.R1M_C_VGS_DXX_ACT_TYP}},{R1M_C_VGS_DXX_UNI_SIZ=${selectedValues.R1M_C_VGS_DXX_UNI_SIZ}},
            {R1M_C_VGS_DXX_SYM_SPO=${selectedValues.R1M_C_VGS_DXX_SYM_SPO}},{R1M_C_VGS_DXX_UNI_SER=${selectedValues.R1M_C_VGS_DXX_UNI_SER}},
            {R1M_C_VGS_DXX_SOL_TYP=${selectedValues.R1M_C_VGS_DXX_SOL_TYP}},{R1M_C_VGS_DXX_SOL_ACD=${selectedValues.R1M_C_VGS_DXX_SOL_ACD}},
            {R1M_C_VGS_DXX_SOL_VOT=${selectedValues.R1M_C_VGS_DXX_SOL_VOT}},{R1M_C_VGS_DXX_ACT_EME=${selectedValues.R1M_C_VGS_DXX_ACT_EME}},
            {R1M_C_VGS_DXX_CON_ELE=${selectedValues.R1M_C_VGS_DXX_CON_ELE}},{R1M_C_VGS_DXX_SWI_TYP=${selectedValues.R1M_C_VGS_DXX_SWI_TYP}},
            {R1M_C_VGS_DXX_SEA_MAT=${selectedValues.R1M_C_VGS_DXX_SEA_MAT}}`;
  };
  
  export const compute4We10hTypecodeInfo = (selectedValues) => {
    return `${selectedValues.R1M_C_VGS_DXX_POR_NUM.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_UNI_TYP.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_ACT_TYP.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_UNI_SIZ.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_SYM_SPO.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_UNI_SER.split(':')[0]}/${selectedValues.R1M_C_VGS_DXX_SOL_TYP.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_SOL_ACD.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_SOL_VOT.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_ACT_EME.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_CON_ELE.split(':')[0]}${selectedValues.R1M_C_VGS_DXX_SWI_TYP.split(':')[0]}/${selectedValues.R1M_C_VGS_DXX_SEA_MAT.split(':')[0]}`;
  };
  
  export const generate4We10hTabledata = (indexPath, renderRow) => {
    const R1M_C_VGS_DXX_SYM_SPOImages = {
      'A: A': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=a.png&width=500&height=500&rev=1722925551961",
      'A1-: A1-': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=a1.png&width=500&height=500&rev=1722925551961",
      'B: B': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=b.png&width=500&height=500&rev=1722925551961",
      'C: C': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=c.png&width=500&height=500&rev=1722925551961",
      'D: D': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=d.png&width=500&height=500&rev=1722925551961",
      'E: E': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=e.png&width=500&height=500&rev=1722925551961",
      'EA: EA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ea.png&width=500&height=500&rev=1722925551961",
      'EB: EB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=eb.png&width=500&height=500&rev=1722925551961",
      'E171-: E171-': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=e171.png&width=500&height=500&rev=1722925551961",
      'E171A: E171A': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=e171a.png&width=500&height=500&rev=1722925551961",
      'E171B: E171B': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=e171b.png&width=500&height=500&rev=1722925551961",
      'G: G': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=g.png&width=500&height=500&rev=1722925551961",
      'GA: GA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ga.png&width=500&height=500&rev=1722925551961",
      'GB: GB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=gb.png&width=500&height=500&rev=1722925551961",
      'H: H': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=h.png&width=500&height=500&rev=1722925551961",
      'HA: HA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ha.png&width=500&height=500&rev=1722925551961",
      'HB: HB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=hb.png&width=500&height=500&rev=1722925551961",
      'J: J': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=j.png&width=500&height=500&rev=1722925551961",
      'JA: JA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ja.png&width=500&height=500&rev=1722925551961",
      'JB: JB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=jb.png&width=500&height=500&rev=1722925551961",
      'J2-: J2-': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=j2.png&width=500&height=500&rev=1722925551961",
      'J2A: J2A': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=j2a.png&width=500&height=500&rev=1722925551961",
      'J2B: J2B': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=j2b.png&width=500&height=500&rev=1722925551961",
      'L: L': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=l.png&width=500&height=500&rev=1722925551961",
      'LA: LA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=la.png&width=500&height=500&rev=1722925551961",
      'LB: LB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=lb.png&width=500&height=500&rev=1722925551961",
      'M: M': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=m.png&width=500&height=500&rev=1722925551961",
      'MA: MA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ma.png&width=500&height=500&rev=1722925551961",
      'MB: MB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=mb.png&width=500&height=500&rev=1722925551961",
      'T: T': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=t.png&width=500&height=500&rev=1722925551961",
      'TA: TA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ta.png&width=500&height=500&rev=1722925551961",
      'TB: TB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=tb.png&width=500&height=500&rev=1722925551961",
      'U: U': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=u.png&width=500&height=500&rev=1722925551961",
      'UA: UA': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ua.png&width=500&height=500&rev=1722925551961",
      'UB: UB': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=ub.png&width=500&height=500&rev=1722925551961",
      'Y: Y': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=y.png&width=500&height=500&rev=1722925551961",
      'Y11-: Y11-': "https://boschrexroth.partcommunity.com/3d-cad-models/FileService/CatalogImage?dataPath=bosch_rexroth_mcd/industrial_hydraulics/pool/on_off_valves/directional_valves/directional_spool_valves/direct_operated/we_10_h/we_10_h_asmtab.prj&previewPath=y11.png&width=500&height=500&rev=1722925551961"
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
        {renderRow(indexPath.R1M_C_VGS_DXX_SOL_TYP.desc, indexPath.R1M_C_VGS_DXX_SOL_TYP.values, 'R1M_C_VGS_DXX_SOL_TYP', indexPath.R1M_C_VGS_DXX_SOL_TYP.Unit,0)}
        {renderRow(indexPath.R1M_C_VGS_DXX_SOL_ACD.desc, indexPath.R1M_C_VGS_DXX_SOL_ACD.values, 'R1M_C_VGS_DXX_SOL_ACD', indexPath.R1M_C_VGS_DXX_SOL_ACD.Unit,0)}
        {renderRow(indexPath.R1M_C_VGS_DXX_SOL_VOT.desc, indexPath.R1M_C_VGS_DXX_SOL_VOT.values, 'R1M_C_VGS_DXX_SOL_VOT', indexPath.R1M_C_VGS_DXX_SOL_VOT.Unit,0)}
        {renderRow(indexPath.R1M_C_VGS_DXX_ACT_EME.desc, indexPath.R1M_C_VGS_DXX_ACT_EME.values, 'R1M_C_VGS_DXX_ACT_EME', indexPath.R1M_C_VGS_DXX_ACT_EME.Unit,0)}
        {renderRow(indexPath.R1M_C_VGS_DXX_CON_ELE.desc, indexPath.R1M_C_VGS_DXX_CON_ELE.values, 'R1M_C_VGS_DXX_CON_ELE', indexPath.R1M_C_VGS_DXX_CON_ELE.Unit,0)}
        {renderRow(indexPath.R1M_C_VGS_DXX_SWI_TYP.desc, indexPath.R1M_C_VGS_DXX_SWI_TYP.values, 'R1M_C_VGS_DXX_SWI_TYP', indexPath.R1M_C_VGS_DXX_SWI_TYP.Unit,0)}
        {renderRow(indexPath.R1M_C_VGS_DXX_SEA_MAT.desc, indexPath.R1M_C_VGS_DXX_SEA_MAT.values, 'R1M_C_VGS_DXX_SEA_MAT', indexPath.R1M_C_VGS_DXX_SEA_MAT.Unit,0)}
      </tbody>
    );
  };
  
  export const generateAllPossibleTypecodes4We10h = (indexPath) => {
    const combinations = [];
  
    // Helper function to generate combinations
    const generateCombinations = (acc, fields) => {
      if (fields.length === 0) {
        // Join the components with separators
        const formattedCode = `${acc.R1M_C_VGS_DXX_POR_NUM}${acc.R1M_C_VGS_DXX_UNI_TYP}${acc.R1M_C_VGS_DXX_ACT_TYP}${acc.R1M_C_VGS_DXX_UNI_SIZ}${acc.R1M_C_VGS_DXX_SYM_SPO}${acc.R1M_C_VGS_DXX_UNI_SER}/${acc.R1M_C_VGS_DXX_SOL_TYP}${acc.R1M_C_VGS_DXX_SOL_ACD}${acc.R1M_C_VGS_DXX_SOL_VOT}${acc.R1M_C_VGS_DXX_ACT_EME}${acc.R1M_C_VGS_DXX_CON_ELE}${acc.R1M_C_VGS_DXX_SWI_TYP}/${acc.R1M_C_VGS_DXX_SEA_MAT}`;
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
      { key: 'R1M_C_VGS_DXX_SOL_TYP', values: indexPath.R1M_C_VGS_DXX_SOL_TYP.values },
      { key: 'R1M_C_VGS_DXX_SOL_ACD', values: indexPath.R1M_C_VGS_DXX_SOL_ACD.values },
      { key: 'R1M_C_VGS_DXX_SOL_VOT', values: indexPath.R1M_C_VGS_DXX_SOL_VOT.values },
      { key: 'R1M_C_VGS_DXX_ACT_EME', values: indexPath.R1M_C_VGS_DXX_ACT_EME.values },
      { key: 'R1M_C_VGS_DXX_CON_ELE', values: indexPath.R1M_C_VGS_DXX_CON_ELE.values },
      { key: 'R1M_C_VGS_DXX_SWI_TYP', values: indexPath.R1M_C_VGS_DXX_SWI_TYP.values },
      { key: 'R1M_C_VGS_DXX_SEA_MAT', values: indexPath.R1M_C_VGS_DXX_SEA_MAT.values }
    ];
  
    // Start generating combinations
    generateCombinations({}, fields);
    console.log(combinations)
    return combinations;
  };
  