import OperatorPopup from "./OperatorPopup";

const OperatorService = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <OperatorPopup />
          </div>
          <div className="flex h-[200px] w-[120px] flex-col items-center justify-center rounded-2xl border lg:h-[300px] lg:w-[150px] xl:h-[400px] xl:w-[250px] 2xl:w-[300px]">
            <img
              src="/src/asset/service/Spectrum.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-4/4 text-center text-xs">Spectrum License</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 gap-x-14 md:grid-cols-2 lg:gap-x-32">
          <div className="flex h-[85px] w-[160px] flex-row items-center justify-center rounded-2xl border lg:h-[125px] lg:w-[220px] xl:h-[180px] xl:w-[300px] 2xl:w-[350px]">
            <img
              src="/src/asset/service/Tower-Construction-Permit.png"
              alt="hello"
              className="mb-2 ml-2 size-[30px] rounded-lg"
              loading="lazy"
            />
            <span className="w-4/4 text-center">Tower Construction Permit</span>
          </div>
          <div className="flex h-[85px] w-[160px] flex-row items-center justify-center rounded-2xl border lg:h-[125px] lg:w-[220px] xl:h-[180px] xl:w-[300px] 2xl:w-[350px]">
            <img
              src="/src/asset/service/Fiber-Cable.png"
              alt="hello"
              className="mb-2 ml-2 size-[30px] rounded-lg"
              loading="lazy"
            />
            <span className="w-4/4 text-center text-xs">
              Fiber Cable Construction Permit
            </span>
          </div>
          <div className="flex h-[85px] w-[160px] flex-row items-center justify-center rounded-2xl border lg:h-[125px] lg:w-[220px] xl:mt-2 xl:h-[180px] xl:w-[300px] 2xl:w-[350px]">
            <img
              src="/src/asset/service/Numbering-Permit.png"
              alt="hello"
              className="mb-2 ml-2 size-[30px] rounded-lg"
              loading="lazy"
            />
            <span className="w-3/4 text-center text-xs">
              Telecom Numbering Permit
            </span>
          </div>
          <div className="flex h-[85px] w-[160px] flex-row items-center justify-center rounded-2xl border lg:h-[125px] lg:w-[220px] xl:mt-2 xl:h-[180px] xl:w-[300px] 2xl:w-[350px]">
            <img
              src="/src/asset/service/Import.png"
              alt="hello"
              className="mb-2 ml-2 size-[30px] rounded-lg"
              loading="lazy"
            />
            <span className="w-4/4 text-center text-xs">
              Equipment Importation & Distribution Permit
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex h-[200px] w-[120px] flex-col items-center justify-center rounded-2xl border md:h-[85px] md:w-[286px] md:flex-row lg:h-[125px] lg:w-[350px] xl:h-[180px] xl:w-[554px] 2xl:w-[653px]">
            <img
              src="/src/asset/service/Complaint.png"
              alt="hello"
              className="mb-2 ml-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-3/4 text-center text-xs">
              Frequency Interference Complaint
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 gap-x-14 md:grid-cols-2 lg:gap-x-32">
          <div className="flex h-[85px] w-[160px] flex-row items-center justify-center rounded-2xl border lg:h-[125px] lg:w-[220px] xl:h-[180px] xl:w-[300px] 2xl:w-[350px]">
            <img
              src="/src/asset/service/TA-Certificate.png"
              alt="hello"
              className="mb-2 ml-2 size-[30px] rounded-lg"
              loading="lazy"
            />
            <span className="w-4/4 text-center text-xs">
              Equipment Type Approvel Certificate
            </span>
          </div>
          <div className="flex h-[85px] w-[160px] flex-row items-center justify-center rounded-2xl border lg:h-[125px] lg:w-[220px] xl:h-[180px] xl:w-[300px] 2xl:w-[350px]">
            <img
              src="/src/asset/service/Qualified-Agent.png"
              alt="hello"
              className="mb-2 ml-2 size-[30px] rounded-lg"
              loading="lazy"
            />
            <span className="w-4/4 text-center text-xs">
              Qualified Agent Certificate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OperatorService;
