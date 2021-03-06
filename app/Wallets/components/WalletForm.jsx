import React from 'react'

import FormRow from '~/FormHelpers/components/FormRow'

export default function WalletForm(props) {
	const { errors, handleChange } = props

	return (
		<form onSubmit={props.handleSubmit}>
			<FormRow errors={errors.name} label="Name:">
				<input
					type="text"
					value={props.name}
					onChange={handleChange.bind(null, 'name')}
				/>
			</FormRow>

			<FormRow errors={errors.amount} label="Amount:">
				<input
					type="number"
					step="any"
					value={props.amount}
					placeholder={100}
					onChange={handleChange.bind(null, 'amount')}
				/>
			</FormRow>

			<FormRow errors={errors.currency} label="Currency:">
				<select
					value={props.currency}
					onChange={handleChange.bind(null, 'currency')}
				>
					{props.currencyCodes.map(code =>
						<option key={code} value={code}>{code}</option>
					)}
				</select>
			</FormRow>

			<div>
				<button
					disabled={props.disabled}
				>Submit</button>
			</div>
		</form>
	)
}
