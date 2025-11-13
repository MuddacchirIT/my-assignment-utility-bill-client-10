import { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
const MyBills = () => {
  const { user } = use(AuthContext);
  const [myPaid, setMyPaid] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/payment?email=${user.email}`).then((res) =>
        res.json().then((data) => {
          console.log(data);
          setMyPaid(data);
        })
      );
    }
  }, [user?.email]);
  const handlePayBillsDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/payment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your bill has been deleted.",
                icon: "success",
              });
              const remainingPaidList = myPaid.filter(
                (onlyMe) => onlyMe._id !== _id
              );
              setMyPaid(remainingPaidList);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-[1600px] mx-auto my-10 h-[600px]">
      <h3 className="text-3xl font-semibold text-blue-700 my-5">
        Paid Bill (<span>{myPaid.length})</span>
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
              <th className="text-lg">States</th>
              <th className="text-lg">Done</th>
            </tr>
          </thead>
          <tbody>
            {myPaid.map((onlyMe, index) => (
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
                        {onlyMe.buyer_name}
                      </div>
                      <div className="text-sm opacity-50"></div>
                    </div>
                  </div>
                </td>
                <td>{onlyMe.buyer_email}</td>
                <td>{onlyMe.buyer_amount}</td>
                <td>Paid</td>

                <th>
                  <button
                    onClick={() => handlePayBillsDelete(onlyMe._id)}
                    className="btn btn-ghost btn-xs border-red-600"
                  >
                    Remove
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBills;
