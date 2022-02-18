import clsx from "clsx";
import { useState } from "react";
import { Mock } from "../mock/mock";
import Drawer from "./Drawer";

// TODO:
// [X] 1. 加入 checkbox
// [X] 1. disable checkbox if item.status is false
// [X] 1. if checkbox is checked, bg of sibling element is altered
// [X] 2. 加入 click event, 紀錄選取 id
// [X] 2. 加入 double click event & open drawer
// [X] 3. 如果 !item.status checkbox disabled
// [X] 4. filter selected (id), return selected object
// [X] 5. if !selected, show mockData.length

interface Props {
  mockData: Mock[];
}

const MainContent = ({ mockData }: Props) => {
  const newMockData = mockData.map((item, idx) => {
    return { id: idx, ...item };
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleDrawerHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const selectHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelected((e.target as Element).id); // SOLVE: Property 'id' does not exist on type 'EventTarget'.
  };

  const onDoubleClickHandler = (e: React.MouseEvent<HTMLLabelElement>) => {
    console.log("點擊兩次: ", e.target);

    if (!selected) return;
    if (!isOpen) setIsOpen(true);
  };

  const selectedItem = selected
    ? newMockData.find((item) => item.id === Number(selected))
    : null;

  return (
    <div className="flex">
      <section className={clsx("flex-1", "mr-10 px-4 py-6")}>
        <h2># Main Content</h2>

        <div>
          {/* THEAD */}
          <section className="w-full border flex">
            <div className="w-24 px-4 py-2 border-r">STATUS</div>
            <div className="px-4 py-2 flex-1">NAME</div>
          </section>
          {/* TBODY */}
          {newMockData.map((item) => (
            <div key={item.id}>
              <label
                htmlFor={item.id.toString()}
                onDoubleClick={item.status ? onDoubleClickHandler : () => {}}
              >
                <input
                  name="users"
                  id={item.id.toString()}
                  title="users"
                  type="radio"
                  className="sr-only peer"
                  disabled={!item.status}
                  onClick={selectHandler}
                />
                <section
                  className={clsx(
                    "w-full border-l border-r border-b flex",
                    "peer-checked:bg-gray-100",
                  )}
                >
                  <div
                    data-id={item.id.toString()}
                    className="w-24 px-4 py-1 border-r text-center"
                  >
                    <div
                      className={clsx(
                        "inline-block w-4 h-4 rounded-full",
                        item.status ? "bg-green-300" : "bg-gray-300",
                      )}
                    />
                  </div>
                  <div
                    data-id={item.id.toString()}
                    className="px-4 py-1 flex-1"
                  >
                    {item.name}
                  </div>
                </section>
              </label>
            </div>
          ))}
        </div>
      </section>

      <Drawer
        isOpen={isOpen}
        onToggle={toggleDrawerHandler}
        selectedItem={selectedItem}
        total={newMockData.length}
      />
    </div>
  );
};

export default MainContent;
