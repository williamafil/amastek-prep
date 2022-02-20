import React from "react";
import Aside from "./Aside";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <aside>
        <Aside />
      </aside>
      <main className="flex-1">
        <Header />
        <div className="ml-[120px] mt-[80px]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
