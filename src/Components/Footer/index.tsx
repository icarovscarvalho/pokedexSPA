import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css"

export function Footer() {
    return(
        <>
            <footer className={styles.container}>
                <p>website developed by</p>
                <p className={styles.nameDEV}><strong><a href="https://www.linkedin.com/in/icarovscarvalho/" target="_blank">Ícaro Carvalho</a></strong></p>
                <div className={styles.iconsDiv}>
                    <FaGithub className={styles.icon} />
                    <FaLinkedin className={styles.icon} />
                    <MdEmail className={styles.icon} />
                </div>
            </footer>
        </>
    )
}