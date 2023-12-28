import Card from "react-bootstrap/Card"
import Rating from '@mui/material/Rating';
import BestSeller from "../BestSeller/BestSeller";
import "./CardEle.css"
import { Link } from "react-router-dom";
import { ICourseDetails } from "../../utils/interface";
type CardProps = {
courses: ICourseDetails
}

function CardEle(props: CardProps) {
  let bestSeller;
  if(props.courses.isBestSeller) bestSeller=<BestSeller/>
  return ( 
    <Link to={`/coursedetails/${props.courses._id}`}>
       <Card style={{  }} className='card-item border-0 '>
      <Card.Img className="card-img" variant="top" src= {props.courses.thumbnail} />
      <Card.Body className='bodyText'>
        <Card.Title className='title'>{props.courses.title}</Card.Title>
        <Card.Text className='text'>{props.courses.author}</Card.Text>
        <Card.Text  className='text'>
        {
          <Rating  name="half-rating" defaultValue={props.courses.rating} precision={0.5}  readOnly/>
        }
        </Card.Text>
        <Card.Text  className='textPrice'>₹{props.courses.originalPrice}</Card.Text>
       {bestSeller}
 
      </Card.Body>
    </Card>

    </Link>
   
  )
}

export default CardEle;