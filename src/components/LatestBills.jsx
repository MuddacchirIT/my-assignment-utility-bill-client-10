import { use } from "react";
import Card from "./Card";
const LatestBills = ({ latestBillsPromise }) => {
  const cards = use(latestBillsPromise);
  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 p-3 rounded-lg">
      {cards.map((card) => (
        <Card key={card._id} card={card}></Card>
      ))}
    </div>
  );
};

export default LatestBills;
