import styles from './ScrollButton.module.scss';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export const ScrollButton = ({ onClick }) => {
  return (
    <button className={styles.scrollbtn} onClick={onClick}>
      <KeyboardArrowDownRoundedIcon />
    </button>
  );
};
