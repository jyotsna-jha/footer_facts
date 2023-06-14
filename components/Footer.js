import React from "react";
import styles from "../styles/Footer1.module.css";
import { FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src="/tu_logo_0.png" alt="Logo" width={100} height={100} />
            <div className={styles.institute}>
              <p>Tribhuvan University</p>
              <p>Institute Of Engineering</p>
              <p>Thapathali Campus</p>
            </div>
          </div>
          <div className={styles.contact}>
            <ul>
              <li>
                <FaMapMarker />
                Location: Thapathali, Kathmandu
              </li>
              <li>
                <FaPhone />
                Call: +977-01-4246307
              </li>
              <li>
                <FaEnvelope />
                Email: info@tcioe.edu.np
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.links}>
            <div className={styles.column}>
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="https://examform.ioe.edu.np/">IOE, Examination Control Division</a>
                </li>
                <li>
                  <a href="https://entrance.ioe.edu.np/">IOE, Entrance Examination Board</a>
                </li>
                <li>
                  <a href="https://library.tcioe.edu.np/">Thapathali Campus, Library</a>
                </li>
                <li>
                  <a href="https://emis.tcioe.edu.np/">Thapathali Campus, Admission</a>
                </li>
                <li>
                  <a href="https://journal.tcioe.edu.np/">Thapathali Campus, Journal</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h2>Important Links</h2>
              <ul>
                <li>
                  <a href="https://ioe.edu.np/">Institute Of Engineering</a>
                </li>
                <li>
                  <a href="https://pcampus.edu.np/">Pulchowk Campus</a>
                </li>
                <li>
                  <a href="https://www.ioepas.edu.np/">Paschimanchal Campus</a>
                </li>
                <li>
                  <a href="https://www.ioecc.edu.np/">Chitwan Engineering Campus</a>
                </li>
                <li>
                  <a href="https://www.ioepc.edu.np/">Purwanchal Campus</a>
                </li>
                <li>
                  <a href="https://moest.gov.np/">Ministry Of Education</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h2>Explore</h2>
              <ul>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
               
                <li>
                  <a href="#">Facilities</a>
                </li>
                <li>
                  <a href="#">Departments</a>
                </li>
                <li>
                  <a href="#">Faculty</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.line} />

      <div className={styles.copyRight}>
        <p className={styles.animation}>
          &copy; {new Date().getFullYear()} Thapathali Campus
        </p>
      </div>
    </footer>
  );
};

export default Footer;
