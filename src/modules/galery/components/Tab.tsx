export const GaleryTab = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`font-medium text-sm leading-5 md:text-base md:leading-6 cursor-pointer 
      rounded-[48px] border border-text/20 text-text py-1.5 px-3 flex items-center 
      ${active && "bg-primary/10 text-primary border-primary"}`}
  >
    {label}
  </div>
);
