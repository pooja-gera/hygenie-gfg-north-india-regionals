import { FaStar, FaSoap, FaWheelchair, FaBiohazard, FaBaby } from "react-icons/fa";
import { MdSanitizer, MdDry, MdEco } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { TbToiletPaper } from "react-icons/tb";
import { type Washroom } from "@/types/washroom";

export default function Card({ props }: { props: Washroom }) {
  const isSafe = props.isSafe ? "Safe" : "Not Safe";
  const isClean = props.isClean ? "Clean" : "Not Clean";
  const cleanclassName = props.isClean ? "clean" : "not-clean";
  const safeclassName = props.isSafe ? "safe" : "not-safe";
  const overall_rating = props.overall_rating;
  const title = props.title;
  const image = props?.user_photos?.[0] || "/img/public.jpg";
  return (
    <div className="decoration">
      <div className="search-result decoration__data result-card">
        <img src={image} alt="user photo" className="result-card__image" />
        <div className="result-card__rating">
          {" "}
          <div className="result-card__rating-row">
            {" "}
            <span><FaStar className="star-rating-icon"/></span>
            {overall_rating.toFixed(1)}
          </div>{" "}
        </div>
        <h1 className="decoration__title">{title}</h1>
        <div className="tabs">
          <div className={`tab ${safeclassName}`}> {isSafe} </div>
          <div className={`tab ${cleanclassName}`}> {isClean}</div>
        </div>
        <div className="amenities">
          <div>Amenities</div>
          <div className="amenities-icons amenities-icons-search-page">
          {props.amenities["soap"] && (
                <FaSoap className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["sanitizer"] && (
                <MdSanitizer className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["accessible"] && (
                <FaWheelchair className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["hand_dryer"] && (
                <MdDry className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["eco_friendly"] && (
                <MdEco className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["paper_towels"] && (
                <GiTowel className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["medical_waste_disposal"] && (
                <FaBiohazard className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["baby_changing_facilities"] && (
                <FaBaby className="washroom-amenities-icons-icon" />
              )}
              {props.amenities["sanitary_napking_disposal"] && (
                <TbToiletPaper className="washroom-amenities-icons-icon" />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
