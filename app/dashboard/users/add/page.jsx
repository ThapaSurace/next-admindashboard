import { addUser } from "@/app/libs/actions";

const AddUser = () => {
  return (
    <div className="bg-bgSoft p-5 mt-5 rounded-md">
      <form action={addUser}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
            required
          />
          <input
            type="phone"
            placeholder="phone"
            name="phone"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          >
            <option value={false}>Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select
            name="isActive"
            id="isActive"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          >
            <option value={true}>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input
            type="text"
            placeholder="address"
            name="address"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
            required
          />
        </div>

        <div>
          <button
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-md p-2 mt-8"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
