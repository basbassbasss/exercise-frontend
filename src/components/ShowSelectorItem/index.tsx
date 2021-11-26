import classes from './styles.module.scss';

interface ShowSelectorItemProps {
  id: string;
  number: number;
  onClick: () => any;
}

const ShowSelectorItem: React.FC<ShowSelectorItemProps> = ({ number, onClick }) => (
  <button role="menuitem" onClick={onClick} className={classes.container}>
    <div className={classes.block} />
    <div className={classes.identifier}>{number}</div>
  </button>
);

export default ShowSelectorItem;
