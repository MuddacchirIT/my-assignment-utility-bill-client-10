const Card = ({ card }) => {
  const { title, category, location, image, date } = card;
  return (
    <div className="card bg-base-100 shadow-md p-3 rounded-lg transform transition-transform duration-300 hover:-translate-y-2">
      <figure className="h-60 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="appCard" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <button className="btn text-base font-semibold">{date}</button>
          <button className="btn">
            <span className="text-base font-semibold">{location}</span>
            <span className="text-base font-semibold">{category}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
