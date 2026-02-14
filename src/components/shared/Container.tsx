import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={` w-[90%] max-w-360 mx-auto  ${className} `}>
      {children}
    </div>
  );
};

export default Container;
