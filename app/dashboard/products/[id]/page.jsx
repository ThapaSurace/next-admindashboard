import Image from "next/image";
import avtar from "@/app/assets/zoro.jpg";
import { fetchProduct } from "@/app/libs/data";
import { updateProduct } from "@/app/libs/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  console.log(product);
  return (
    <div className="flex gap-10 bg-bgSoft rounded-md p-5 mt-5">
      <div className="flex-[1]">
        <div className="w-full h-56">
          <Image
            src={avtar}
            alt=""
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="mt-4 text-lg font-bold text-center">{product.title}</div>
      </div>
      <div className="flex-[3]">
        <form action={updateProduct} className="flex flex-col gap-5">
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          />
          <label>Cat</label>
          <select
            name="cat"
            id="cat"
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
            className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-md p-2 mt-4"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
