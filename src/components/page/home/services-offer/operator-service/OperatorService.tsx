import OperatorPopup from "./OperatorPopup";

const OperatorService = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-8">
          <OperatorPopup />
          <div className="flex h-[400px] w-[300px] flex-col items-center justify-center rounded-2xl border py-20">
            <img
              src="/src/asset/service/Spectrum.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span>Spectrum License</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex h-[180px] flex-row items-center justify-center space-x-7 rounded-2xl border">
            <img
              src="/src/asset/service/Tower-Construction-Permit.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-20 text-center">Tower Construction Permit</span>
          </div>
          <div className="flex h-[180px] flex-row items-center justify-center space-x-7 rounded-2xl border py-20">
            <img
              src="/src/asset/service/Fiber-Cable.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-20 text-center">
              Fiber Cable Construction Permit
            </span>
          </div>
          <div className="flex h-[180px] flex-row items-center justify-center space-x-7 rounded-2xl border py-20">
            <img
              src="/src/asset/service/Numbering-Permit.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-20 text-center">Telecom Numbering Permit</span>
          </div>
          <div className="flex h-[180px] flex-row items-center justify-center space-x-7 rounded-2xl border py-20">
            <img
              src="/src/asset/service/Import.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-20 text-center">
              Equipment Importation & Distribution Permit
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex h-[180px] flex-row items-center justify-center space-x-7 rounded-2xl border py-20">
            <img
              src="/src/asset/service/Complaint.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span>Frequency Interference Complaint</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex h-[180px] flex-row items-center justify-center space-x-7 rounded-2xl border py-20">
            <img
              src="/src/asset/service/TA-Certificate.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-20 text-center">
              Equipment Type Approvel Certificate
            </span>
          </div>
          <div className="flex h-[180px] flex-row items-center justify-center space-x-7 rounded-2xl border py-20">
            <img
              src="/src/asset/service/Qualified-Agent.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span className="w-20 text-center">
              Qualified Agent Certificate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OperatorService;
