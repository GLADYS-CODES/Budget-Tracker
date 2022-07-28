
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert  ${alertType}`}>
			<span>Remaining: Ksh{budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;