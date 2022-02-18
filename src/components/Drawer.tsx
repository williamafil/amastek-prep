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
    <aside className={clsx("relative bg-slate-100")}>
      <div
        onClick={onToggle}
        className={clsx(
          "cursor-pointer",
          "absolute top-6 -left-10 w-10 h-12 bg-red-200",
          "flex justify-center items-center",
        )}
      >
        x
      </div>

      <div
        className={clsx(
          "relative",
          "transition-all delay-500",
          !isOpen ? "w-0" : "w-[200px]",
        )}
      >
        <div
          className={clsx(
            "mt-2 p-2 transition-opacity duration-500 ease-out",
            !isOpen ? " opacity-0" : " opacity-100 delay-1000",
          )}
        >
          {/* <div className="absolute top-0 right-0 w-full h-full bg-green-100"> */}
          {/* <div className=" transition-opacity"> */}
          {!selectedItem && <p className="mt-2">目前資料量：{total}</p>}
          {selectedItem && (
            <div>
              <h2>{selectedItem.name}</h2>
              <div className="flex flex-col justify-center space-y-2">
                {selectedItem.items.map((pic) => (
                  <img src={pic} alt={selectedItem.name} />
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
