export const GaleryTab = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={`font-medium text-sm leading-5 md:text-base md:leading-6 cursor-pointer
      rounded-[48px] border border-text/20 text-text py-1.5 px-3 flex items-center
      transition-colors duration-200
      ${active ? "bg-primary/10 text-primary border-primary" : "hover:border-primary/40 hover:text-primary/70"}`}
  >
    {label}
  </button>
);
