import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import avtar from "@/app/assets/zoro.jpg";
import { fetchProducts } from "@/app/libs/data";
import { deleteProduct } from "@/app/libs/actions";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <div className="bg-bgSoft p-5 rounded-md mt-5">
      <div className="flex justify-between items-center">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="px-4 py-2 border-none rounded-md text-white bg-blue-900 hover:bg-blue-950">
            Add
          </button>
        </Link>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <td className="p-[10px] font-bold">Title</td>
            <td className="p-[10px] font-bold">Description</td>
            <td className="p-[10px] font-bold">Price</td>
            <td className="p-[10px] font-bold">Created At</td>
            <td className="p-[10px] font-bold">Stock</td>
            <td className="p-[10px] font-bold">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="p-[10px]">
                <div className="flex items-center gap-3">
                  <Image
                    src={avtar}
                    alt=""
                    className="rounded-full object-cover object-center w-8 h-8"
                  />
                  <span className="text-sm font-light">
                    {product.title.length > 20
                      ? `${product.title.substring(0, 20)}...`
                      : product.title}
                  </span>
                </div>
              </td>
              <td className="p-[10px] text-sm font-light">
                {product.desc.length > 40
                  ? `${product.desc.substring(0, 40)}...`
                  : product.desc}
              </td>
              <td className="p-[10px] text-sm font-light">${product.price}</td>
              <td className="p-[10px] text-sm font-light">
                {product.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-[10px] text-sm font-light">{product.stock}</td>
              <td className="p-[10px] text-sm font-light">
                <div className="flex gap-3">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="px-3 py-2 rounded-md text-white border-none bg-teal-600 hover:bg-teal-800">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
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

export default Products;
