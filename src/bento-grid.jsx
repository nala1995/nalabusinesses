// src/ui/bento-grid.jsx
import React from "react";

export const BentoGrid = ({ children, className }) => {
  return <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>{children}</div>;
};

export const BentoGridItem = ({ title, description, header, className, icon }) => {
  return (
    <div className={`p-4 border rounded-lg ${className}`}>
      {icon && <div className="mb-2">{icon}</div>}
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      {header && <div className="mt-2 text-black">{header}</div>}
      {description && <p className="mt-2 text-sm text-black">{description}</p>}
    </div>
  );
};
