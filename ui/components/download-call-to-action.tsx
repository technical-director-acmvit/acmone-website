import type { NextPage } from "next";

export type DownloadCallToActionType = {
  className?: string;
};

const DownloadCallToAction: NextPage<DownloadCallToActionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-8 text-center text-white font-dm-sans ${className}`}
    >
      <div className="flex flex-row justify-start w-full px-0 pb-2 box-border">
        <h1 className="flex-1 relative font-medium text-inherit">
          Download the APK now!
        </h1>
      </div>
      <div className="flex flex-row justify-center py-0 px-8 box-border bg-white rounded-full shadow-lg">
        <button className="flex flex-row justify-start items-center relative h-14 w-56 shadow-md rounded-3xl bg-white">
          <div className="hidden"></div>
          <h2 className="relative flex-1 text-lg font-bold text-center leading-6 z-10">
            Download
          </h2>
        </button>
      </div>
      <div className="flex flex-col items-start gap-2 w-52">
        <div className="flex flex-row justify-start w-full px-2.5 pb-1 box-border">
          <div className="flex-1 relative leading-8 font-medium">
            Version : 1.0.0xx
          </div>
        </div>
        <div className="relative leading-8 font-medium">
          For IOS and ANDROID
        </div>
      </div>
    </div>
  );
};

export default DownloadCallToAction;
