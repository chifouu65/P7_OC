import {useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Slider({slider}) {

    console.log(slider);
    const [current, setCurrent] = useState(1);
    const length = slider.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slider) || slider.length <= 0) {
        return null;
    } else {
        return (
               <>
                   <div className={'product__header__img'}>
                       {slider.map((slide, index) => {
                           return (
                               <div className={index === current ? 'slide active' : 'slide'}
                                    key={index}>
                                   {index === current && (
                                       <img src={slide} alt={'slide'} className={'slide__img'}/>
                                   )}
                               </div>
                           )
                       })}
                   </div>
                   <div className="slider__buttons">
                       <button className="slider__button slider__button--left" onClick={prevSlide}>
                           <FaChevronLeft />
                       </button>
                       <button className="slider__button slider__button--right" onClick={nextSlide}>
                           <FaChevronRight/>
                       </button>
                   </div>
               </>
        )
    }
}

export default Slider