import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({item}) => {
  return (
    <div className="flex gap-2 bg-bgSoft p-5 rounded-md cursor-pointer hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-4">
        <span className="">{item.title}</span>
        <span className="font-bold text-lg">{item.number}</span>
        <span className="text-sm font-light">
          <span className="text-green-600 tracking-wider">
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  )
}

export default Card