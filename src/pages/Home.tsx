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
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Home() {
  const { ref: subRef, inView: subInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
   const { ref: appRef, inView: appInView } = useInView({
     triggerOnce: true,
     threshold: 0.2,
   });
     const { ref: tripRef, inView: tripInView } = useInView({
       triggerOnce: true,
       threshold: 0.2,
     });
  const TypingAnimation = () => {
    const fullText = "Let’s enjoy the beautiful world";
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const typingInterval = setTimeout(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setDisplayedText("");
            setCurrentIndex(0);
          }, 2000);
        }
      }, 100);

      return () => clearTimeout(typingInterval);
    }, [currentIndex]);

    return <>{displayedText}</>;
  };
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
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 2.4, ease: "easeInOut" },
        },
      };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="overflow-x-hidden"
    >
      <Navbar />
      <div className="min-w-full mt-16">
        <div className="relative h-auto">
          <img
            src={florence}
            alt="Florence"
            className="w-full max-h-[calc(100vh-4rem)] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center p-4">
            <motion.p className="font-poppins font-semibold text-2xl md:text-4xl text-white text-center">
              <TypingAnimation />
              <span className="text-primary">|</span>
            </motion.p>
            <p className="font-poppins font-normal text-sm md:text-xl text-white mt-2 text-center">
              Enjoy your vacation and cherish your dream with low budget
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-[-80px] md:bottom-[-60px] lg:bottom-[-40px] max-w-[90%] md:max-w-[884px] h-auto bg-white z-40 shadow-md rounded-2xl mx-auto p-4 flex flex-wrap md:flex-nowrap items-center justify-center gap-4 transform translate-y-1/2 md:translate-y-0">
            <div className="flex items-center space-x-3 flex-1 min-w-[160px]">
              <img src={location} className="w-6 h-6 md:w-8 md:h-8" />
              <div className="font-poppins text-sm md:text-base">
                <p className="font-semibold">Location</p>
                <p className="font-normal text-gray-500">Where are you going</p>
              </div>
            </div>
            {/* Date Start */}
            <div className="flex items-center space-x-3 flex-1 min-w-[160px]">
              <img src={calendar} className="w-6 h-6 md:w-8 md:h-8" />
              <div className="font-poppins text-sm md:text-base">
                <p className="font-semibold">Date Start</p>
                <p className="font-normal text-gray-500">Select your date</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 flex-1 min-w-[160px]">
              <img src={calendar} className="w-6 h-6 md:w-8 md:h-8" />
              <div className="font-poppins text-sm md:text-base">
                <p className="font-semibold">Date End</p>
                <p className="font-normal text-gray-500">Select your date</p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-0">
              <button className="flex items-center bg-primary text-white font-poppins font-semibold px-5 md:px-7 py-2 rounded-full shadow-sm shadow-primary">
                <img
                  src={search}
                  alt="Search"
                  className="w-4 h-4 md:w-5 md:h-5 mr-2"
                />
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-poppins font-semibold text-black text-center">
              Top Destinations
            </h2>
          </motion.div>
          <div className="mt-12 flex flex-wrap justify-center gap-20 px-5 py-7 font-poppins text-xl">
            {topDestinations.map((destination, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="inline-grid space-y-2"
                >
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
                </motion.div>
              );
            })}
          </div>
          <div className="min-w-full bg-secondary h-auto pt-12 mt-12 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              animate={tripInView ? { opacity: 1, y: 0 } : {}}
              ref={tripRef}
            >
              <h2 className="text-4xl font-poppins font-semibold text-black text-center">
                Plan Your Next Trip
              </h2>
            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center gap-16 px-20 py-2">
              {bundle.map((item, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.32,
                });

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  </motion.div>
                );
              })}
            </div>
            <div className="flex justify-center items-center gap-8 mt-8">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <div className="w-4 h-4 bg-description rounded-full"></div>
              <div className="w-4 h-4 bg-description rounded-full"></div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            animate={appInView ? { opacity: 1, y: 0 } : {}}
            ref={appRef}
          >
            <h2 className="mt-10 text-4xl font-poppins font-semibold text-black text-center">
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
                  Young adults travellers but don’t have enough budget? We
                  introduce
                  <span className="font-bold text-black"> TravelFlex</span> as a
                  solution for your traveling problems. Find us on Google Play
                  or AppStore
                </p>
                <div className="inline-flex mt-10 space-x-3">
                  <img src={GooglePlay} />
                  <img src={AppStore} />
                </div>
              </div>
            </section>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            animate={subInView ? { opacity: 1, y: 0 } : {}}
            ref={subRef}
            className="flex flex-col md:flex-row items-center bg-white rounded-3xl border border-description mx-10 my-12"
          >
            <div className="w-full md:w-1/2">
              <img
                src={beach}
                alt="Beach"
                className="rounded-tl-3xl rounded-bl-3xl w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 text-center md:text-left">
              <h2 className="text-4xl font-medium text-center font-poppins text-black mb-4">
                Get special offer and informations for your next travel
              </h2>
              <p className="text-gray-500 mb-6 text-2xl text-center">
                Subscribe to see secret details prices drop the moment you sign
                up
              </p>
              <div className="flex justify-center md:justify-start space-x-3 mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-3/4 md:w-2/3 px-4 py-2 rounded-full focus:outline-none border-none shadow-md font-poppins"
                />
                <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-md shadow-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Home;