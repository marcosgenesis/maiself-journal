import { Header } from "@/components/Header";
import React from "react";

const LayoutHomePage: React.FC = ({ children }) => {
  return (
    <div className='flex items-center justify-center'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default LayoutHomePage;
