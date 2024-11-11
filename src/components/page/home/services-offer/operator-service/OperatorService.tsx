import EquipmentImportationPopup from "./EquipmentImportationPopup";
import EquipmentTypePopup from "./EquipmentTypePopup";
import FiberCablePopup from "./FiberCablePopup";
import FrequencyInterferencePopup from "./FrequencyInterferencePopup";
import InternetServicePopup from "./InternetServicePopup";
import QualifiedAgentPopup from "./QualifiedAgentPopup";
import SpectrumPopup from "./SpectrumPopup";
import TelecomNumberingPopup from "./TelecomNumberingPopup";
import TowerConstructionPopup from "./TowerConstructionPopup";

const OperatorService = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-3 lg:gap-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3">
        <InternetServicePopup />
        <SpectrumPopup />
      </div>
      <div className="grid grid-cols-1 gap-7 gap-x-14 md:grid-cols-2 md:gap-3">
        <TowerConstructionPopup />
        <FiberCablePopup />
        <TelecomNumberingPopup />
        <EquipmentImportationPopup />
      </div>
      <div className="grid grid-cols-1 gap-8">
        <FrequencyInterferencePopup />
      </div>
      <div className="grid grid-cols-1 gap-8 gap-x-14 md:grid-cols-2 md:gap-x-3">
        <EquipmentTypePopup />
        <QualifiedAgentPopup />
      </div>
    </div>
  );
};
export default OperatorService;
