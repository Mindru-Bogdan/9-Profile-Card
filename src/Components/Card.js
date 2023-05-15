import BackgroundTop from '../../src/bg-pattern-top.svg';
import BackgroundBottom from '../../src/bg-pattern-bottom.svg';
import CardTopImage from '../../src/bg-pattern-card.svg';
import ProfilePicture from '../../src/image-victor.jpg';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.background}>
      <img src={BackgroundTop} className={classes.backgroundTop} />
      <img src={BackgroundBottom} className={classes.backgroundBottom} />
      <div className={classes.card}>
        <img src={CardTopImage} className={classes.cardTopImage} />
        <img src={ProfilePicture} className={classes.profilePicture} />
        <div>
          <h1>Victor Crest</h1>
          <h2>26</h2>
          <h3>London</h3>
        </div>
        <div className={classes.line}></div>
        <div className={classes.allStats}>
          <div className={classes.stats}>
            <h1>80K</h1>
            <p>Followers</p>
          </div>
          <div className={classes.stats}>
            <h1>803K</h1>
            <p>Likes</p>
          </div>
          <div className={classes.stats}>
            <h1>1.4K</h1>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
