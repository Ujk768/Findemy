import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import BestSeller from "../BestSeller/BestSeller";
import "./CardEle.css";
import { Link } from "react-router-dom";
import { ICourseDetails } from "../../utils/interface";
type CardProps = {
  courses: ICourseDetails;
};

function CardEle(props: CardProps) {
  let bestSeller;
  if (props.courses.isBestSeller) bestSeller = <BestSeller />;
  return (
    <Link to={`/coursedetails/${props.courses._id}`}>
      <div className="card-item">
        <img
          className="card-img"
          alt="course_description"
          src={props.courses.thumbnail}
        />
        <div>
          <p className="fw-550">{props.courses.title}</p>
          <p>{props.courses.author}</p>
          <div>
            {
              <Rating
                name="half-rating"
                defaultValue={props.courses.rating}
                precision={0.5}
                readOnly
              />
            }
          </div>
          <p className="fw-550">₹{props.courses.originalPrice}</p>
          {bestSeller}
        </div>
      </div>
    </Link>
  );
}

export default CardEle;
