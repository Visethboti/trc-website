import EquipmentImportationPopup from "./EquipmentImportationPopup";
import EquipmentTypePopup from "./EquipmentTypePopup";
import FiberCablePopup from "./FiberCablePopup";
import FrequencyInterferencePopup from "./FrequencyInterferencePopup";
import InternetServicePopup from "./InternetServicePopup";
import QualifiedAgentPopup from "./QualifiedAgentPopup";
import SpectrumPopup from "./SpectrumPopup";
import TelecomNumberingPopup from "./TelecomNumberingPopup";
import TowerConstructionPopup from "./TowerConstructionPopup";
import networkImage from "src/asset/network-pattern.png";
import complaintImage from "src/asset/service-icons/Complaint.svg";
import fiberCableImage from "src/asset/service-icons/Fiber Cable.svg";
import importImage from "src/asset/service-icons/Import.svg";
import internetServiceImage from "src/asset/service-icons/ISP.svg";
import telecomNumberImage from "src/asset/service-icons/Numbering Permit.svg";
import qualifiedImage from "src/asset/service-icons/Qualified Agent.svg";
import spectrumImage from "src/asset/service-icons/Spectrum.svg";
import equipmentTypeImage from "src/asset/service-icons/TA Certificate.svg";
import towerImage from "src/asset/service-icons/Tower Construction Permit.svg";

const OperatorService = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-3 lg:gap-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3">
        <InternetServicePopup
          image={internetServiceImage}
          networkPattern={networkImage}
        />
        <SpectrumPopup image={spectrumImage} networkPattern={networkImage} />
      </div>
      <div className="grid grid-cols-1 gap-7 gap-x-14 md:grid-cols-2 md:gap-3">
        <TowerConstructionPopup
          image={towerImage}
          networkPattern={networkImage}
        />
        <FiberCablePopup
          image={fiberCableImage}
          networkPattern={networkImage}
        />
        <TelecomNumberingPopup
          image={telecomNumberImage}
          networkPattern={networkImage}
        />
        <EquipmentImportationPopup
          image={importImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="grid grid-cols-1 gap-8">
        <FrequencyInterferencePopup
          image={complaintImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 gap-x-14 md:grid-cols-2 md:gap-x-3">
        <EquipmentTypePopup
          image={equipmentTypeImage}
          networkPattern={networkImage}
        />
        <QualifiedAgentPopup
          image={qualifiedImage}
          networkPattern={networkImage}
        />
      </div>
    </div>
  );
};
export default OperatorService;
