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
    <div className="grid h-full auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
      <div className="col-start-1 row-span-2">
        <InternetServicePopup
          image={internetServiceImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="col-start-1 row-span-2 md:col-start-2">
        <SpectrumPopup image={spectrumImage} networkPattern={networkImage} />
      </div>

      <div className="col-start-1 row-span-2 h-full md:col-span-2 md:row-span-1">
        <FrequencyInterferencePopup
          image={complaintImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="col-start-2 row-start-1 md:col-start-3">
        <TowerConstructionPopup
          image={towerImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="col-start-2 row-start-2 md:col-start-4 md:row-start-1">
        <FiberCablePopup
          image={fiberCableImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="col-start-2 row-start-3 md:col-start-3 md:row-start-2">
        <TelecomNumberingPopup
          image={telecomNumberImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="col-start-2 row-start-4 md:col-start-4 md:row-start-2">
        <EquipmentImportationPopup
          image={importImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="col-start-2 row-start-5 md:col-start-3 md:row-start-3">
        <EquipmentTypePopup
          image={equipmentTypeImage}
          networkPattern={networkImage}
        />
      </div>
      <div className="col-start-2 row-start-6 md:col-start-4 md:row-start-3">
        <QualifiedAgentPopup
          image={qualifiedImage}
          networkPattern={networkImage}
        />
      </div>
    </div>
  );
};
export default OperatorService;
