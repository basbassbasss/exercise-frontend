import classes from './styles.module.scss';

export type ShowType = {
  id: string;
  title: string;
  episodes: number;
  product_image_url: string;
  isActive?: boolean;
};

const Show: React.FC<ShowType> = ({ title, episodes, product_image_url, isActive }) => (
  <div className={isActive ? classes.active : classes.inactive}>
    <div className={classes.imageWrapper}>
      <img src={product_image_url} alt={title} />
    </div>
    <div className={classes.meta}>
      <p className={classes.episodes}>
        {episodes} {episodes === 1 ? 'episode' : 'episodes'}
      </p>
      <h2 className={classes.title}>{title}</h2>
    </div>
  </div>
);

export default Show;
