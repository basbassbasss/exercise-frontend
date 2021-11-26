import classes from './styles.module.scss';
import Show, { ShowType } from '@/components/Show';

interface ShowContainerProps {
  shows: Array<ShowType>;
  activeShow: string;
}

const ShowContainer: React.FC<ShowContainerProps> = ({ shows, activeShow }) => (
  <div className={classes.container}>
    {shows?.length > 0
      ? shows.map(show => <Show key={`show-${show.id}`} {...show} isActive={activeShow === show.id} />)
      : 'No shows today!'}
  </div>
);

export default ShowContainer;
