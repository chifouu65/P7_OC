import {FaStar} from "react-icons/fa";
import {useState} from "react";

const Rate = ({rating}) => {
    const [rate] = useState(rating);
    const Rating = () => {
        let stars = [];
       for (let i = 1; i <= 5; i++) {
            if (i <= rate) {
                stars.push(<FaStar className={'star'} key={i}/>)
            } else {
                stars.push(<FaStar className={'star-x'} key={i}/>)
            }
        }
        return stars;
    }
    return (
        <div className={'stars'}>
            {
                Rating()
            }
        </div>
    )
}

export default Rate;