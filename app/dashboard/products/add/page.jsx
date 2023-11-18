import { addProduct } from "@/app/libs/actions"


const AddProducts = () => {
  return (
    <div className="bg-bgSoft p-5 mt-5 rounded-md">
      <form action={addProduct}>
        <div className=" grid grid-cols-2 gap-4">
        <input type="text" placeholder="title" name="title" required className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]" />
        <select className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]" name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]" required />
        <input type="number" placeholder="stock" name="stock" className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]" required />
        <input type="text" placeholder="color" name="color" className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]" />
        <input type="text" placeholder="size" name="size" className="p-4 border-none focus:outline-none rounded-md bg-[#151c2c]" />
   
        </div>
        <textarea
          required
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
          className="p-4 border-none focus:outline-none rounded-md my-4 w-full bg-[#151c2c]"
        ></textarea>
        <div>
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-md p-2" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProducts