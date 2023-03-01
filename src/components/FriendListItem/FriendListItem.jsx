import PropTypes from "prop-types";
// import defaultImage from './assets/default.jpg';

const FriendListItem = ({avatar, name, isOnline}) => {
	return (
		<li class="item">
  			<span class="status">{isOnline ? 'online' : 'offline'}</span>
  			<img class="avatar" src={avatar} alt={name} width="48" />
  			<p class="name">{name}</p>
		</li>
	);
};

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;