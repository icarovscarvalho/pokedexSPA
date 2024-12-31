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
                    <a href="https://github.com/icarovscarvalho" target="_blank">
                        <FaGithub className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/icarovscarvalho/" target="_blank">
                        <FaLinkedin className={styles.icon} />
                    </a>
                    <a href="">
                        <MdEmail className={styles.icon}/>
                    </a>
                </div>
            </footer>
        </>
    )
}