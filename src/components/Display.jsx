import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Display = () => {
  const fetchedText = useSelector((state) => state.textGenerator.fetchedText);
  const status = useSelector((state) => state.textGenerator.status);
  const error = useSelector((state) => state.textGenerator.error);

  if (status === "pending") {
    return (
      <div className="bg-slate-500 flex items-center justify-center py-5 px-3 text-left rounded-lg w-full h-64">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-slate-500 text-left rounded-lg p-10  w-full">
      {fetchedText}
      {status === "error" && error}
    </div>
  );
};

export default Display;
