import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import avtar from "@/app/assets/zoro.jpg";
import { fetchUsers } from "@/app/libs/data";
import { deleteUser } from "@/app/libs/actions";

const Users = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {users,count} = await fetchUsers(q, page);

  return (
    <div className="bg-bgSoft p-5 rounded-md mt-5">
      <div className="flex justify-between items-center">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="px-4 py-2 border-none rounded-md text-white bg-blue-900 hover:bg-blue-950">
            Add
          </button>
        </Link>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <td className="p-[10px] font-bold">Name</td>
            <td className="p-[10px] font-bold">Email</td>
            <td className="p-[10px] font-bold">Created At</td>
            <td className="p-[10px] font-bold">Role</td>
            <td className="p-[10px] font-bold">Status</td>
            <td className="p-[10px] font-bold">Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="p-[10px]">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8">
                  <Image
                    src={user.img || avtar}
                    alt={user.username}
                    fill
                    className="rounded-full object-cover object-center"
                  />
                  </div>
                  <span className="text-sm font-light">{user.username}</span>
                </div>
              </td>
              <td className="p-[10px] text-sm font-light">{user.email}</td>
              <td className="p-[10px] text-sm font-light">{user.createdAt?.toString().slice(4, 16)}</td>
              <td className="p-[10px] text-sm font-light">{
                user.isAdmin === true ? "Admin" : "Client"
              }</td>
              <td className="p-[10px] text-sm font-light">{
                user.isActive === true ? "active" : "inactive"
              }</td>
              <td className="p-[10px] text-sm font-light">
                <div className="flex gap-3">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className="px-3 py-2 rounded-md text-white border-none bg-teal-600 hover:bg-teal-800">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user._id)} />
                    <button className="px-3 py-2 rounded-md text-white border-none bg-red-600 hover:bg-red-700">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
};

export default Users;
