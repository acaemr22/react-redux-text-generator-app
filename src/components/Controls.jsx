import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchText } from "../features/textGeneratorSlice";

const Controls = () => {
  const [paragraphNum, setParagraphNum] = useState(4);
  const [include, setInclude] = useState("text");
  const dispatch = useDispatch();
  const status = useSelector((state) => state.textGenerator.status);

  useEffect(() => {
    dispatch(fetchText({ paragraphNum, include }));
  }, [paragraphNum, include]);

  return (
    <div className="text-black text-center flex-row flex items-center justify-center gap-10">
      <div className="flex flex-col gap-y-1">
        <h3 className="text-white text-left">Paragraphs</h3>
        <input
          type="number"
          className="text-center appearance-none text-lg h-9 rounded-md outline-none"
          value={paragraphNum}
          onWheel={() => false}
          onChange={(e) =>
            setParagraphNum(
              Number(e.target.value) >= 0 ? Number(e.target.value) : 0
            )
          }
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-white text-left">Include HTML</h3>
        <select
          name="select-html"
          id=""
          className="h-9 rounded-sm outline-none"
          onChange={(e) => setInclude(e.target.value)}
          value={include}
        >
          <option className="p-1" value="html">
            Yes
          </option>
          <option className="p-1" value="text">
            No
          </option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
