import Image from "next/image";
import avtar from "@/app/assets/zoro.jpg";
import { fetchUser } from "@/app/libs/data";
import { updateUser } from "@/app/libs/actions";

const SingleUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="flex gap-10 bg-bgSoft rounded-md p-5 mt-5">
      <div className="flex-[1]">
        <div className="w-full h-56">
          <Image
            src={avtar}
            alt="/"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="mt-4 text-lg font-bold text-center">Zoro</div>
      </div>
      <div className="flex-[3]">
        <form action={updateUser} className="flex flex-col gap-5">
          <input type="hidden" name="id" value={user?.id} />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder={user.address}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          >
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          >
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-md p-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
