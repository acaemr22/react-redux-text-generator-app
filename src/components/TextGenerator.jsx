import React from "react";
import Display from "./Display";
import Controls from "./Controls";

const TextGenerator = () => {
  return (
    <section className="py-5 flex flex-col items-center justify-center gap-y-5">
      <Controls />
      <Display />
    </section>
  );
};

export default TextGenerator;
