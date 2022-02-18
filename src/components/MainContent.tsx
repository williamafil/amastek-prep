import clsx from "clsx";
import { useState } from "react";
import { Mock } from "../mock/mock";
import Drawer from "./Drawer";

interface Props {
  mockData: Mock[];
}

const MainContent = ({ mockData }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("mockData :>> ", mockData);

  const toggleDrawerHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <section className={clsx("flex-1", "mr-10 px-4 py-6")}>
        <h2>Main Content</h2>
        <table className="w-full border">
          <thead>
            <tr>
              <th className="py-2 w-24 border border-gray-700">STATUS</th>
              <th className="py-2 border border-gray-700">NAME</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => (
              <tr>
                <td className="py-2.5 text-center border border-gray-700">
                  <div
                    className={clsx(
                      "inline-block w-4 h-4 rounded-full",
                      item.status ? "bg-green-300" : "bg-gray-300",
                    )}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Drawer isOpen={isOpen} onToggle={toggleDrawerHandler} />
    </div>
  );
};

export default MainContent;
