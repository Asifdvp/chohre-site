const CountCard = ({ count, text }: { count?: number; text: string }) => {
  return (
    <div className="bg-white py-6 md:py-8  px-2 border-b-[#00CBFF]/12 border-r-[#00CBFF]/12 border-solid text-center ">
      {" "}
      <p className="text-[16px] font-bold leading-6 text-primary  md:text-2xl md:mb-1  md:leading-8 text-center">
        {count}
        <span className="text-primary">+</span>
      </p>
      <p className="text-sm font-medium leading-5 md:text-base md:leading-6 text-black/80 text-center">
        {text}
      </p>
    </div>
  );
};

export default CountCard;
