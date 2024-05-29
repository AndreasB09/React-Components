import React from 'react';
import styles from './cssSlider.module.css';
import img1 from '../../assets/images/forest_nature.png';
import img2 from '../../assets/images/air_sky.png';
import img3 from '../../assets/images/fire_volcano.png';
import img4 from '../../assets/images/water_ocean.png';

const sliderCards = [
  {
    id: 'c1',
    title: 'Earth',
    description: 'Become one',
    img: img1
  },
  {
    id: 'c2',
    title: 'Air',
    description: 'Soar high',
    img: img2
  },
  {
    id: 'c3',
    title: 'Fire',
    description: 'Shatter foundations',
    img: img3
  },
  {
    id: 'c4',
    title: 'Water',
    description: 'Rebuild evolution',
    img: img4
  }
];

const AnimatedCards = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {sliderCards.map((card) => (
            <React.Fragment key={card.id}>
              <input
                type="radio"
                name="slide"
                id={card.id}
                defaultChecked={card.id === "c1"}
                className={styles.input}
              />
              <label
                htmlFor={card.id}
                className={styles.card}
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className={styles.row}>
                  <div className={styles.icon}>{card.id.slice(1)}</div>
                  <div className={styles.description}>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
}

export default AnimatedCards;