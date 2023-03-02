import Profile from "./Profile/Profile";
import user from "../assets/user.json";

import Statistics from "./Statistics/Statistics";
import stats from "../assets/data.json";

import FriendList from "./FriendList/FriendList";
import friends from "../assets/friends.json";

import transactions from "../assets/transactions.json";
import TransactionHistory from "./TransactionsHistory/TransactionsHistory";

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.body}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
		<Statistics title="Upload stats" stats={stats}></Statistics>
		<FriendList friends={friends} />

		<TransactionHistory transactions={transactions} />
    </div>
  );
}
