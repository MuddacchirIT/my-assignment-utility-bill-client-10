import MyLink from "./MyLink";
const Card = ({ card }) => {
  const { _id, category, amount, image, date } = card;
  return (
    <div className="card bg-base-100 shadow-md p-3 rounded-lg transform transition-transform duration-300 hover:-translate-y-2">
      <figure className="h-60 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="appCard" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <div className="card-actions justify-between pb-1">
          <span className="text-base font-bold">
            <span>TK. </span>
            {amount}
          </span>
          <span className="text-base font-semibold">{date}</span>
        </div>
        <MyLink to={`/billdetails/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center gap-3 bg-gray-500 text-white text-md px-5 py-2 rounded-full w-full font-semibold hover:bg-gray-600 transition-colors cursor-pointer"
          >
            View Details
          </button>
        </MyLink>
      </div>
    </div>
  );
};

export default Card;
