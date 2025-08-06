import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-36 h-36 border-[0.6rem] border-[#f7f0e0] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg text-[#f7f0e0]">Loading .... </p>
      </div>
    </div>
  );
};

export default LoadingPage;
