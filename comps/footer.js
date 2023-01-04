import React from 'react'
import Image from 'next/image'

import styles from '../styles/styles.module.css'

export default function FooterComp() {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.wrappercol} style={{width: '25%'}}>
            <div className={styles.logowrapper}>
                <Image
                    width={100} height={45}
                    src='/translink.png'
                />
            </div>
            <p className={styles.p}>
            Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.
            </p>
        </div>
        <div className={styles.wrappercol} style={{width: '25%'}}>
            <h4 className={styles.h4}>Getting Around</h4>
            <a 
            href='https://www.translink.ca/transit-fares'
            className={styles.a}
            >Transit Fares</a>
            <a 
            href='https://www.translink.ca/schedules-and-maps'
            className={styles.a}
            >Schedules</a>
            <a 
            href='https://www.translink.ca/rider-guide'
            className={styles.a}
            >Rider Info</a>
            <a 
            href='https://www.translink.ca/alerts'
            className={styles.a}
            >Transit Alerts</a>
        </div>
        <div className={styles.wrappercol} style={{width: '25%'}}>
            <h4 className={styles.h4}>Resources</h4>
            <a 
            href='https://www.translink.ca/about-us/customer-service/contact-information'
            className={styles.a}
            >Contact Us</a>
            <a 
            href='https://www.translink.ca/about-us/careers'
            className={styles.a}
            >Careers</a>
        </div>
        <div className={styles.wrappercol} style={{width: '25%'}}>
            <h4 className={styles.h4}>Contact Us</h4>
            <p className={styles.p}>
                Call us at 604.953.3333
            </p>
            <a 
            href='https://www.google.com/maps/place/TransLink/@49.2247324,-122.8939064,17z/data=!3m1!4b1!4m5!3m4!1s0x5486765906294161:0x8be44a756edffc2f!8m2!3d49.2247289!4d-122.8917178'
            className={styles.a}
            >400-287 Nelson's Ct.,<br />
            New Westminster,<br /> 
            BC V3L0E7</a>
        </div>
    </div>
    <div className={styles.wrapper}><span className={styles.signature}>2023 Can Sanchez</span></div>
    </>
  )
}