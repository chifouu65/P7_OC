import {useState} from "react";
import './disclosure.css';
import {BsChevronDown, BsChevronUp} from "react-icons/bs";

function Disclosure({content, title,styleText}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={'disc_container'}>
        <button
            className={'disc_title'}
            onClick={() => setOpen(!open)}
        >
            <span>{title}</span>
            {open ? <BsChevronUp/> : <BsChevronDown/> }
        </button>
        {open && <div style={styleText} className={'disc_text'}>{content}</div>}
        </div>
    );

}

export default Disclosure;