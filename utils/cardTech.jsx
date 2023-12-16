export default function CardTech(props) {
  return (
    <div className="rounded-lg bg-base_col text-[#e8e8e8] duration-500 hover:bg-[#303030]">
      <div className="p-6 gap-1.5 flex flex-col justify-center items-center ">
        {" "}
        {props.icon}
        <p className="font-DM_sans font-semibold text-xs">{props.name}</p>
      </div>
    </div>
  );
}
