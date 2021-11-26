import classes from './styles.module.scss';
import ShowSelectorItem from '@/components/ShowSelectorItem';

interface ShowSelectorProps {
  items: Array<{
    id: string;
    number: number;
  }>;
  onItemClick: (id: string) => void;
}

const ShowSelector: React.FC<ShowSelectorProps> = ({ items, onItemClick }) => (
  <div className={classes.container}>
    <nav className={classes.nav}>
      {items?.map(({ id, number }) => (
        <ShowSelectorItem key={`selector-item-${id}`} id={id} number={number} onClick={() => onItemClick(id)} />
      ))}
    </nav>
  </div>
);

export default ShowSelector;
