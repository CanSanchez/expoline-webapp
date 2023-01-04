import React from 'react'
import Image from 'next/image'

import styles from '../styles/styles.module.css'

export default function HeaderComp() {
  return (
    <div className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.logowrapper}>
                <Image
                    width={100} height={45}
                    src='/translink.png'
                />
            </div>
        </div>
    </div>
  )
}

