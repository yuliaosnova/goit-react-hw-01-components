import PropTypes from "prop-types";
import css from './TransactionsHistory.module.css';

function TransactionHistory ({ transactions }){
  return (
    <table className={css.history}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map((transaction) => (
        <tbody className={css.row}   key={transaction.id}>
          <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.shape({
			id:PropTypes.string.isRequired
		})
	)
};

export default TransactionHistory;