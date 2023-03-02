import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { FiCircle } from 'react-icons/fi';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <div className={css.item}>
        <FiCircle
          className={isOnline ? `${css.isOnline}` : `${css.isOffline}`}
          size={13}
        />
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
