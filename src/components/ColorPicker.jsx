import { useState } from "react";
const ColorPicker = () => {
  const [color, setColor] = useState("#ec4d09");
  function handleChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className="flex flex-col justify-center items-center bg-blue-200 h-screen">
      <h1 className="lg:text-[50px] md:text-[50px] text-[30px] font-serif font-semibold">Color Picker</h1>
      <div
        style={{ backgroundColor: color }}
        className="lg:w-[800px] lg:h-[500px] md:w-[500px] md:h-[500px] w-[300px] h-[300px] flex justify-center items-center rounded-[15px] transition-colors duration-100 border-2 border-white"
      >
        <h1 className="lg:text-[30px] md:text-[30px] text-[20px] text-white text-shadow-sm text-shadow-black">
          Color code: {color}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2">
        <h2 className="text-[20px]">Adjust Here: </h2>
        <input value={color}
          className="w-[80px] h-[40px]"
          type="color"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
