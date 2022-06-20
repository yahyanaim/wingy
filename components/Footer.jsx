import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={
            styles.container
        }>
            <div className={
                styles.item
            }>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt=""/>
            </div>
            <div className={
                styles.item
            }>
                <div className={
                    styles.card
                }>
                    <h2 className={
                        styles.motto
                    }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                </div>
                <div className={
                    styles.card
                }>
                    <h1 className={
                        styles.title
                    }>FIND THE BEST RESTAURANTS HERE</h1>
                    <p className={
                        styles.text
                    }>
                        Qu Riyad
                        <br/>
                        Safi
                        <br/>
                        06 00 00 00 00
                    </p>
                    <p className={
                        styles.text
                    }>
                        Qu Riyad
                        <br/>
                        Safi
                        <br/>
                        06 00 00 00 00
                    </p>
                    <p className={
                        styles.text
                    }>
                        Qu Riyad
                        <br/>
                        Safi
                        <br/>
                        06 00 00 00 00
                    </p>
                    <p className={
                        styles.text
                    }>
                        Qu Riyad
                        <br/>
                        Safi
                        <br/>
                        06 00 00 00 00
                    </p>
                </div>
                <div className={
                    styles.card
                }>
                    <h1 className={
                        styles.title
                    }>WORKING HOURS</h1>
                    <p className={
                        styles.text
                    }>
                        MONDAY UNTIL FRIDAY
                        <br/>
                        9:00 – 22:00
                    </p>
                    <p className={
                        styles.text
                    }>
                        SATURDAY - SUNDAY
                        <br/>
                        12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
