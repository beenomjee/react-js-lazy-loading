import React from 'react'
import { useProgressBar } from '../../hooks'
import styles from './ShowCase.module.scss'
import { imgs } from "../../data";
import { Image } from '../../components';

const ShowCase = () => {
    useProgressBar();
    return (
        <div className={styles.container}>
            {
                imgs.map(imgData => (
                    <div key={imgData.name} className={styles.imgContainer}>
                        <Image className={styles.img} src={`/imgs/${imgData.name}`} alt={imgData.name} hast={imgData.blurhash} />
                    </div>
                ))
            }
        </div>
    )
}

export default ShowCase