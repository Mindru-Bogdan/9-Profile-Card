import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <div>
        <h1>Victor Crest</h1>
        <h2>26</h2>
        <h3>London</h3>
      </div>
      <div></div>
      <div>
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
  );
};

export default Card;
