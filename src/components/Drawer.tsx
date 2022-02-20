import clsx from "clsx";
import { Mock } from "../mock/mock";

interface NewMock extends Mock {
  id: number;
}
interface Props {
  isOpen: boolean;
  onToggle: () => void;
  selectedItem: NewMock | null | undefined;
  total: number;
}

const Drawer = ({ isOpen, onToggle, selectedItem, total }: Props) => {
  return (
    <aside className={clsx("relative bg-slate-200")}>
      <div
        onClick={onToggle}
        className={clsx(
          "cursor-pointer",
          "relative right-4 top-11 w-0 h-12 rounded-tl-md rounded-bl-md",
          "flex flex-col justify-center items-center space-y-1",
        )}
      >
        <div
          className={clsx(
            "fixed w-8 h-10 bg-slate-200 space-y-1",
            "flex flex-col justify-center items-center",
            "rounded-tl-md rounded-bl-md",
          )}
        >
          <div className="w-6 h-[1px] bg-black"></div>
          <div className="w-6 h-[1px] bg-black"></div>
          <div className="w-6 h-[1px] bg-black"></div>
        </div>
      </div>

      <div
        className={clsx(
          "transition-all delay-500 overflow-hidden",
          !isOpen ? "w-0" : "w-[200px]",
        )}
      >
        <div
          className={clsx(
            "fixed top-20 w-[200px]",
            "mt-2 p-2 transition-opacity delay-500 ease-out",
            !isOpen ? " opacity-0" : " opacity-100 delay-1000",
          )}
        >
          {!selectedItem && <p className="mt-2">目前資料量：{total}</p>}

          {selectedItem && (
            <div>
              <h2>{selectedItem.name}</h2>
              <div className="flex flex-col justify-center space-y-2">
                {selectedItem.items.map((pic) => (
                  <img key={pic} src={pic} alt={selectedItem.name} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
