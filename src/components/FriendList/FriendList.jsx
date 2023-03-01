import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from './FriendList.module.css';

function FriendList({ friends }) {
	return (
		<ul className={css.friendList}>
			{friends.map(friend => (
				<li key={friend.id}>
					<FriendListItem
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
					/>
				</li>
			))}
		</ul>
	);
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		}),
	),
};

export default FriendList;