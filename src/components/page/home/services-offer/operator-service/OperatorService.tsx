import OperatorPopup from "./OperatorPopup";

const OperatorService = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-3 lg:gap-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3">
        <div>
          <OperatorPopup />
        </div>
        <div className="min-w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[194px] lg:h-[240px] xl:h-[300px]">
          <img
            src="/src/asset/service/Spectrum.png"
            alt="Spectrum"
            className="mb-2 size-14 rounded-lg"
            loading="lazy"
          />
          <span className="w-4/4 text-center text-xs">Spectrum License</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 gap-x-14 md:grid-cols-2 md:gap-3">
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:h-[140px]">
          <img
            src="/src/asset/service/Tower-Construction-Permit.png"
            alt="Tower Construction"
            className="mb-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <span className="w-3/4 text-center">Tower Construction Permit</span>
        </div>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:h-[140px]">
          <img
            src="/src/asset/service/Fiber-Cable.png"
            alt="Fiber Cable"
            className="mb-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <span className="w-3/4 text-center text-xs">
            Fiber Cable Construction Permit
          </span>
        </div>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:mt-2 xl:h-[140px]">
          <img
            src="/src/asset/service/Numbering-Permit.png"
            alt="Numbering Permit"
            className="mb-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <span className="w-3/4 text-center text-xs">
            Telecom Numbering Permit
          </span>
        </div>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:mt-2 xl:h-[140px]">
          <img
            src="/src/asset/service/Import.png"
            alt="Import"
            className="mb-2 ml-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <span className="w-3/4 text-center text-xs">
            Equipment Importation & Distribution Permit
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[85px] md:w-[306px] md:flex-row lg:h-[110px] lg:w-[378px] xl:h-[140px] xl:w-[586px] 2xl:w-[680px]">
          <img
            src="/src/asset/service/Complaint.png"
            alt="Complaint"
            className="mb-2 ml-2 size-14 rounded-lg"
            loading="lazy"
          />
          <span className="w-3/5 text-center text-xs">
            Frequency Interference Complaint
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 gap-x-14 md:grid-cols-2 md:gap-x-3">
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:h-[140px]">
          <img
            src="/src/asset/service/TA-Certificate.png"
            alt="TA Certificate"
            className="mb-2 ml-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <span className="w-3/4 text-center text-xs">
            Equipment Type Approvel Certificate
          </span>
        </div>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:h-[140px]">
          <img
            src="/src/asset/service/Qualified-Agent.png"
            alt="Qualified"
            className="mb-2 ml-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <span className="w-3/4 text-center text-xs">
            Qualified Agent Certificate
          </span>
        </div>
      </div>
    </div>
  );
};
export default OperatorService;
