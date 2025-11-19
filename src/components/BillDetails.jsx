import { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
const BillDetails = () => {
  const card = useLoaderData();
  const {
    _id: billID,
    title,
    category,
    amount,
    image,
    location,
    date,
    description,
    company_email,
  } = card;
  const payModalRef = useRef(null);
  const { user } = use(AuthContext);
  const [billPaid, setBillPaid] = useState([]);

  useEffect(() => {
    fetch(`https://my-assignment-utility-bill-server-1.vercel.app`)
      .then((res) => res.json())
      .then((data) => {
        console.log("paid info", data);
        setBillPaid(data);
      });
  }, [billID]);

  const handlePayBills = () => {
    payModalRef.current.showModal();
  };
  const handlePaySubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const amount = e.target.amount.value;
    console.log(billID, name, email, amount);
    const nowPay = {
      id: billID,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      buyer_amount: amount,
    };
    fetch("https://my-assignment-utility-bill-server-1.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(nowPay),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          payModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bill has been paid",
            showConfirmButton: false,
            timer: 1500,
          });
          nowPay._id = data.insertedId;
          const newPayment = [...billPaid, nowPay];
          setBillPaid(newPayment);
        }
      });
  };

  return (
    <div>
      <div className="flex justify-start items-center space-x-30 max-w-[1600px] mx-auto mt-15">
        <figure className="overflow-hidden w-3/5 rounded-xl shadow-lg">
          <img
            className="w-full h-[460px] object-cover"
            src={image}
            alt="card"
          />
        </figure>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            TK. <span className="text-blue-600">{amount}</span>
          </h2>
          <h3 className="text-xl font-semibold"></h3>
          <div className="flex justify-center space-x-20">
            <div className="flex justify-center gap-2.5">
              <div className="mb-10">
                <h2 className="text-3xl font-bold">{title}</h2>
              </div>
            </div>
            <div className="flex justify-center gap-2.5">
              <div>
                <h2 className="text-3xl font-bold">{location}</h2>
              </div>
            </div>
            <div className=" gap-2.5">
              <div>
                <h2 className="text-xl font-bold">{date}</h2>
              </div>
              <div>
                <h2 className="text-3xl font-bold">{company_email}</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handlePayBills}
              className="bg-purple-500 text-white w-40/100 py-2 rounded-md font-semibold cursor-pointer"
            >
              I want to pay this bill
            </button>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              ref={payModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                  <form onSubmit={handlePaySubmit}>
                    <fieldset className="fieldset">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="input"
                        readOnly
                        defaultValue={user?.displayName}
                      />
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        readOnly
                        defaultValue={user?.email}
                      />
                      <label className="label">Amount</label>
                      <input
                        type="text"
                        name="amount"
                        className="input"
                        readOnly
                        defaultValue={amount}
                      />
                      <button className="btn btn-neutral mt-4">
                        Pay your bill
                      </button>
                    </fieldset>
                  </form>
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto py-6">
        <h2 className="text-3xl font-bold text-[#06223b]">{category}</h2>
        <p className="text-lg mt-3 text-[#001931]">{description}</p>
      </div>
      <div className="max-w-[1600px] mx-auto my-10 h-[600px]">
        <h3 className="text-3xl font-semibold text-blue-700 my-5">
          Paid Bill (<span>{billPaid.length})</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-lg">SL</th>
                <th className="text-lg">Name</th>
                <th className="text-lg">Email</th>
                <th className="text-lg">Amount</th>
                <th className="text-lg">Done</th>
              </tr>
            </thead>
            <tbody>
              {billPaid.map((paid, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-md">
                          {paid.buyer_name}
                        </div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>{paid.buyer_email}</td>
                  <td>{paid.buyer_amount}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
