import React from "react";

export default function Button({
  name,
  onClick,
  className = "",
  icon,
  Href,
  Click,
}) {
  return (
    <button
      href={Href}
      className={`w-56 h-14 rounded-2xl flex gap-2 justify-center items-center ${className}`}
      onClick={onClick}
    >
      {name}
      {icon && <span className="text-xl mb-1">{icon}</span>}
    </button>
  );
}
