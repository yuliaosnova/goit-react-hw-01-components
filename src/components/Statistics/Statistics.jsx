import React from 'react';
import PropTypes from 'prop-types';

function Statistics ({ title, stats }) {
  return (
	<section class="statistics">
	{title && <h2>{title}</h2>}
	<ul class="stat-list">
		{stats.map(stat => (
			<li class="item" key={stat.id}>
				<span class="label">{stat.label}</span>
		 		<span class="percentage">{stat.percentage}</span>
			</li>
		))}
	</ul>
 </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	})
  )
};

export default Statistics;