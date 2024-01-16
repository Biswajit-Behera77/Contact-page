
import styles from './Button.module.css';
function Button(props){
    const {isOutline ,icon ,text,...rest}=props
    return(
        <button {...rest} className={isOutline ? styles.Outline_btn : styles.primary_btn}>
        <div>
            {props.icon}
           {props.text}
        </div>
        </button>
    );
}

export default Button;