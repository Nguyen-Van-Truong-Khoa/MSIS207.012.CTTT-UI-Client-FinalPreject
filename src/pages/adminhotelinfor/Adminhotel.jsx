import "./adminhotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from '../../components/header/Header'
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

export const Adminhotel = () => {
  const location = useLocation();
  const [list, setList] = useState([]);
  const hotel = location.pathname.split("/")[3];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/find/${hotel}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" state= {'1'}/>
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
            <i 
              class="fa-solid fa-circle-xmark close"
              onClick={() => setOpen(false)}
            ></i>
            <i 
              class="fa-solid fa-circle-arrow-left arrow"
              onClick={() => handleMove("l")}
            ></i>
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} 
              alt="" 
              className="sliderImg" />
            </div>
            <i 
              class="fa-solid fa-circle-arrow-right arrow"
              onClick={() => handleMove("r")}
            ></i>
            </div>
          )}
          <div className="hotelWrapper">
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <i class="fa-solid fa-location-dot"></i>
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={hotel}/>}
    </div>
  );
};