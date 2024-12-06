import React from "react";

const Icon: React.FC<{ icon: string; bg: string }> = ({ icon, bg }) => {
  const capitalizeFirstLetter = (val: string) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-4 rounded-full w-max" style={{ backgroundColor: bg }}>
        <img src={`social-icons/${icon}.svg`} alt={icon} />
      </div>
      <p className="text-xs">{capitalizeFirstLetter(icon)}</p>
    </div>
  );
};

export default Icon;
