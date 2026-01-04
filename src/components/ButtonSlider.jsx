import { memo, useEffect, useState } from "react";

export const ButtonSlider = memo(function ButtonSlider({ text1, text2, btnChange }) {
  const [active, setActive] = useState(false);

  useEffect(() => btnChange(active), [active]);

  return (
    <div className="border-1 h-10 w-[13rem] rounded-3xl relative items-center flex justify-between font-medium">
      <div
        className={`absolute bg-blue-950 h-full transition-all duration-300 left-0 z-0 w-[40%] rounded-3xl text-white/50 ${
          active && "left-21 w-[60%]"
        }`}
      ></div>

      <div
        className={`flex w-[40%] justify-center relative z-10 cursor-pointer transition-all duration-300 ${
          !active && "text-white"
        }`}
        onClick={() => setActive(false)}
      >
        {text1}
      </div>

      <div
        className={`flex justify-center w-[60%] relative z-10 cursor-pointer transition-all duration-300 ${
          active && "text-white"
        }`}
        onClick={() => setActive(true)}
      >
        {text2}
      </div>
    </div>
  );
})
