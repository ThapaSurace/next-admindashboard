import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed mt-4">
      <div className="px-5 py-6 mb-5 relative bg-gradient-to-t from-[#182237] to-[#253352] rounded-md">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <Image
            className="object-contain opacity-[0.2]"
            src="/astronaut.png"
            alt=""
            fill
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-textSoft text-sm font-[500]">
            Takes 4 minutes to learn
          </span>
          <p className="text-textSoft text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-2 flex items-center gap-2 w-fit bg-[#5d57c9] text-white border-none rounded-md">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="px-5 py-6 mb-5 relative bg-gradient-to-t from-[#182237] to-[#253352] rounded-md">
        <div className="flex flex-col gap-2">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-textSoft text-sm font-[500]">
            Boost your productivity
          </span>
          <p className="text-textSoft text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-2 flex items-center gap-2 w-fit bg-[#5d57c9] text-white border-none rounded-md">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
