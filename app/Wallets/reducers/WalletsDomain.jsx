import { List, Map } from 'immutable'

import { createReducer } from '~/helpers/Reducers'
const currencyCodes = require('~/data/CurrencyCodes.json')

const newWallet = Map({
	name: '',
	currency: '',
	amount: 0,
})

const validator = (key, value, state) => {
	if (key === 'name' && value.trim() === '') {
		return 'Cannot be a blank name';
	}

	if (key === 'name' &&
		state.wallets.some(wallet => wallet.get('name') === value)) {
			return 'A wallet with that name already exists'
	}

	if (key === 'currency' && !currencyCodes.includes(value)) {
		return 'Not a valid currency code'
	}

	return false
}

const WalletsDomain = {}

export default createReducer({
	blankItem: newWallet,
	singularKey: 'wallet',
	pluralKey: 'wallets',
	validator,
	reducer: WalletsDomain,
})
