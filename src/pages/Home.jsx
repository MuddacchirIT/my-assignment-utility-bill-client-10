const Home = () => {
  return (
    <div>
      <div className="text-center space-y-10 mt-10">
        <h1 className="text-[#001931] text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent animate-[pulse_3s_infinite]">
            Toy
          </span>
          <span className="text-[#074f92]">Topia</span>
        </h1>
        <p className="text-lg text-[#00193190]">
          A vibrant and playful online marketplace for kids' toys, encouraging
          families to discover and support local toy sellers.. Users can log in,
          browse toys, view detailed info, and leave feedback or ratings for
          toys they want to buy for their kids.
        </p>
      </div>
      <div>
        <img className="w-90% mx-auto" src="" alt="" />
      </div>
      <div className="text-center space-y-5 my-15">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01182c] font-bold">
          Toy Topia Available Here
        </h2>
        <p className="text-md md:text-lg text-[#00193199]">
          Kids Toy Store Platform the Market developed by MuddacchirIT
        </p>
      </div>
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 p-3 rounded-lg"></div>
    </div>
  );
};
export default Home;
