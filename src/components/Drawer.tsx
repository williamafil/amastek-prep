import clsx from "clsx";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const Drawer = ({ isOpen, onToggle }: Props) => {
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
      <h3
        className={clsx(
          "transition-all",
          "overflow-hidden",
          !isOpen ? "w-0" : "w-[200px]",
        )}
      >
        drawer
      </h3>
    </aside>
  );
};

export default Drawer;
