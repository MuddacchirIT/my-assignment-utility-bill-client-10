import LatestBills from "../components/LatestBills";
const latestBillsPromise = fetch(
  "https://my-assignment-utility-bill-server-1.vercel.app/latest-bills"
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <div className="text-center space-y-10 mt-10">
        <h1 className="text-[#001931] text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent animate-[pulse_3s_infinite]">
            Utility
          </span>
          <span className="text-[#074f92]"> Bills</span>
        </h1>
        <p className="text-lg text-[#00193190]">
          A utility bill is a monthly statement detailing the cost of essential
          services like water, gas, and electricity, and can also include other
          services such as sewage, trash collection, and internet. It includes
          your personal information, account number, usage details, the amount
          owed, and the payment due date. Paying these bills on time is
          important to avoid penalties or service interruptions.
        </p>
      </div>
      <div>
        <img className="w-90% mx-auto" src="" alt="" />
      </div>
      <div className="text-center space-y-5 my-15">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01182c] font-bold">
          Online Utility Bills Payment System
        </h2>
        <p className="text-md md:text-lg text-[#00193199]">
          Utility bills payment the online syetem developed by MuddacchirIT
        </p>
      </div>
      <div>
        <LatestBills latestBillsPromise={latestBillsPromise}></LatestBills>
      </div>
    </div>
  );
};
export default Home;
