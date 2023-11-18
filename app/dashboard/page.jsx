import Card from "../ui/dashboard/card/card";
import Transaction from "../ui/dashboard/transaction/transaction";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import { cards } from "../libs/data";

const Dashbaord = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-[3] flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5 mt-5">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashbaord;
