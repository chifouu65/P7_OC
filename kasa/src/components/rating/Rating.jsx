import {FaStar} from "react-icons/fa";
import {useState} from "react";

const Rate = ({rating}) => {
    const [rate] = useState(rating);
    const Rating = () => {
        let stars = [];
       for (let i = 1; i <= 5; i++) {
            if (i <= rate) {
                stars.push(<FaStar color={'yellow'} key={i}/>)
            } else {
                stars.push(<FaStar key={i} color={'grey'}/>)
            }
        }
        return stars;
    }
    return (
        <div className={'star'}>
            {
                Rating()
            }
        </div>
    )
}

export default Rate;