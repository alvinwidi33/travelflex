import Navbar from "../components/Navbar";
import florence from "../images/florence.png";
import location from "../images/location.svg";
import calendar from "../images/calendar.svg";
import search from "../images/search.svg";
import Rome from "../images/Rome.png";
import Barcelona from "../images/Barcelona.png";
import London from "../images/London.png";
import Austria from "../images/Austria.png";
import Paris from "../images/Paris.png";
import Destination from "../images/Destination.png";
import Clock from "../images/clock.svg";
import hand from "../images/hand.png";
import GooglePlay from "../images/googleplay.svg";
import AppStore from "../images/appstore.svg";
import beach from "../images/beach.png";
import x from "../images/x.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";

function Home() {
    const topDestinations = [
      { image: Rome, title: "Rome", description: "50 places" },
      { image: Barcelona, title: "Barcelona", description: "40 places" },
      { image: London, title: "London", description: "60 places" },
      { image: Austria, title: "Austria", description: "30 places" },
      { image: Paris, title: "Paris", description: "70 places" },
    ];
    const bundle = [
      {
        image: Destination,
        title: "Jakarta Itinerary",
        date: "10 Des - 13 Des",
        price: "15,000,000",
      },
      {
        image: Destination,
        title: "Jakarta Itinerary",
        date: "10 Des - 13 Des",
        price: "15,000,000",
      },
      {
        image: Destination,
        title: "Jakarta Itinerary",
        date: "10 Des - 13 Des",
        price: "15,000,000",
      },

    ];
  return (
    <div>
      <Navbar />
      <div className="min-w-full mt-16">
        <div className="relative">
          <img src={florence} alt="Florence" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
            <p className="font-poppins font-semibold text-4xl text-white">
              Let’s enjoy the beautiful world
            </p>
            <p className="font-poppins font-normal text-xl text-white mt-2">
              Enjoy your vacation and cherish your dream with low budget
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-[-80px] w-[884px] h-[80px] bg-white z-40 shadow-md rounded-2xl mx-auto flex items-center justify-center transform -translate-y-1/2">
            <div className="inline-flex space-x-8">
              <div className="inline-flex space-x-3">
                <img src={location} className="w-8 h-8 mr-2" />
                <div className="inline-grid font-poppins text-base">
                  <p className="font-semibold">Location</p>
                  <p className="font-normal">Where are you going</p>
                </div>
              </div>
              <div className="inline-flex space-x-3">
                <img src={calendar} className="w-8 h-8 mr-2" />
                <div className="inline-grid ml-1 font-poppins text-base">
                  <p className="font-semibold">Date Start</p>
                  <p className="font-normal">Select your date</p>
                </div>
              </div>
              <div className="inline-flex space-x-3">
                <img src={calendar} className="w-8 h-8 mr-2" />
                <div className="inline-grid ml-1 font-poppins text-base">
                  <p className="font-semibold">Date End</p>
                  <p className="font-normal">Select your date</p>
                </div>
              </div>
              <div className="inline-flex space-x-3">
                <button className="flex items-center bg-primary text-white font-poppins font-semibold px-7 py-0 rounded-full shadow-sm shadow-primary">
                  <img src={search} alt="Search" className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <h2 className="text-4xl font-poppins font-semibold text-black text-center">
            Top Destinations
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-20 px-5 py-7 font-poppins text-xl">
            {topDestinations.map((destination, index) => (
              <div key={index} className="inline-grid space-y-2">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-40 w-auto rounded-lg"
                />
                <div className="inline-grid">
                  <p className="text-center font-semibold">
                    {destination.title}
                  </p>
                  <p className="text-center text-base text-description">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-full bg-secondary h-auto pt-12 mt-12 pb-12">
          <h2 className="text-4xl font-poppins font-semibold text-black text-center">
            Plan Your Next Trip
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-16 px-20 py-2">
            {bundle.map((item, index) => (
              <div
                key={index}
                className="w-[320px] bg-white rounded-2xl shadow-lg p-4 font-poppins"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center mt-2">
                  <img src={Clock} className="mr-1" />
                  {item.date}
                </p>
                <p className="text-lg font-semibold text-primary mt-3">
                  Rp. {item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <div className="w-4 h-4 bg-description rounded-full"></div>
            <div className="w-4 h-4 bg-description rounded-full"></div>
          </div>
        </div>
        <h2 className="text-4xl font-poppins font-semibold text-black text-center mt-12">
          Our App
        </h2>

        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 px-12 py-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={hand}
              alt="App Screenshot"
              className="max-w-xs md:max-w-md lg:max-w-sm"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-medium mb-7 leading-tight">
              Easy and Perfect Solution for Your Travelling Experience
            </h2>
            <p className="text-gray-600 text-2xl md:text-lg leading-relaxed">
              Young adults travellers but don’t have enough budget? We introduce
              <span className="font-bold text-black"> TravelFlex</span> as a solution
              for your traveling problems. Find us on Google Play or AppStore
            </p>
            <div className="inline-flex mt-10 space-x-3">
              <img src={GooglePlay} />
              <img src={AppStore}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;