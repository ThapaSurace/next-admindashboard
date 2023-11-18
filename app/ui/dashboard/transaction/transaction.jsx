import Image from "next/image";

const Transaction = () => {
  return (
    <div>
      <div className="mt-2 bg-bgSoft p-2 rounded-md">
        <h1 className="mb-4 text-xl font-extralight">Latest transaction</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-white uppercase">Name</th>
                <th className="text-white uppercase">Status</th>
                <th className="text-white uppercase">Date</th>
                <th className="text-white uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="p-[10px]">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={25}
                      height={25}
                      className="rounded-full"
                    />

                    <div className="text-sm font-light">Hart Hagerty</div>
                  </div>
                </td>
                <td className="p-[10px] text-sm font-light">pending</td>
                <td className="p-[10px] text-sm font-light">11/12/2023</td>
                <td className="p-[10px] text-sm font-light">$1000</td>
              </tr>
              <tr>
                <td className="p-[10px]">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={25}
                      height={25}
                      className="rounded-full"
                    />

                    <div className="text-sm font-light">Hart Hagerty</div>
                  </div>
                </td>
                <td className="p-[10px] text-sm font-light">pending</td>
                <td className="p-[10px] text-sm font-light">11/12/2023</td>
                <td className="p-[10px] text-sm font-light">$1000</td>
              </tr>
              <tr>
                <td className="p-[10px]">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={25}
                      height={25}
                      className="rounded-full"
                    />
                    <div className="text-sm font-light">Hart Hagerty</div>
                  </div>
                </td>
                <td className="p-[10px] text-sm font-light">pending</td>
                <td className="p-[10px] text-sm font-light">11/12/2023</td>
                <td className="p-[10px] text-sm font-light">$1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
