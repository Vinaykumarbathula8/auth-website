import React, { useState } from "react";

export function Tabs({ children, defaultValue, className }) {
  const [value, setValue] = useState(defaultValue);
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child) =>
        child.type === TabsList ? React.cloneElement(child, { value, setValue }) : null
      )}
      {childrenArray.map((child) =>
        child.type === TabsContent && child.props.value === value ? child : null
      )}
    </div>
  );
}

export function TabsList({ children, value, setValue, className }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { selectedValue: value, setValue })
      )}
    </div>
  );
}

export function TabsTrigger({ children, value, selectedValue, setValue }) {
  return (
    <button
      onClick={() => setValue(value)}
      className={`py-2 px-4 text-center border-b-2 ${
        selectedValue === value ? "border-blue-500 font-semibold" : "border-transparent"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div>{children}</div>;
}
