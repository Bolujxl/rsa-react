import "./Button.css";
import leftarrow from "./assets/leftarrow.svg";

function Button(props){

    const buttonText = props.buttonText;
    const btnIcon = props.btnIcon;

    return(
        <button className="btn">
            {buttonText}
            {btnIcon ? (
                 <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                     {btnIcon}
                 </span>
            ) : (
                 <img src={leftarrow} alt="icon" />
            )}
        </button>
    )
}

export default Button;