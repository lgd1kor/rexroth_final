import React from 'react';
import FinalCall from './FinalCall';

const App = () => {
  const initialFilepath = 'bosch_rexroth_mcd/industrial_hydraulics/power_units/std_power_units/cytropac_asmtab.prj'; // Default initial filepath
  // const initialFilepath = 'bosch_rexroth_mcd/industrial_hydraulics/valves/directional_valves/direct_on_off_valves/we_10_h_asmtab.prj'; // Default initial filepath
  // const initialFilepath = 'bosch_rexroth_mcd/industrial_hydraulics/valves/directional_valves/direct_on_off_valves/weh_wh_1x_asmtab.prj';
  // const initialFilepath = 'bosch_rexroth_mcd/industrial_hydraulics/valves/pressure_valves/press_reducing_valves_proportional/z3dree10_1x_asmtab.prj';

  return (
    <div>
      <FinalCall initialFilepath={initialFilepath} />
    </div>
  );
};

export default App;
