import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
function ContactForm(){
 
function onSubmit(event){
    event.preventDefault();
console.log("name",event.target[0].value);
console.log("email",event.target[1].value);
console.log("text",event.target[2].value);
}

return(
<section className={styles.container}>
<div className={styles.contact_form}>
    <div className={styles.top_btn}>
    <Button text="SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
        <Button
         text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} />
    </div>
    <Button
    isOutline={true} 
    text="VIA EMAIL FORM" icon={<AiFillMail fontSize="24px"/>} />

    <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" rows="10"/>
        </div>

        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        </div>

        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea  name="text" />
        </div>
        <div style={{
            display:"flex",
            justifyContent:"center",
        }}>
        <Button text="SUBMIT"  />
        </div>
    </form>
    </div>
    <div className="{styles.contact_image}">
        <img src="/images/mainlogo.jpg" alt="contact iamge" />
    </div>
</section>
);

}

export default ContactForm;