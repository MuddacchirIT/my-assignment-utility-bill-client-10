import { use } from "react";
import Card from "./Card";
const AllBillsPromise = fetch("http://localhost:3000/bills").then((res) =>
  res.json()
);
const AllBills = () => {
  const cards = use(AllBillsPromise);
  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 p-3 rounded-lg">
      {cards.map((card) => (
        <Card key={card._id} card={card}></Card>
      ))}
    </div>
  );
};

export default AllBills;
