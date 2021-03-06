import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

import WalletForm from '../components/WalletForm'
const currencyCodes = require('~/data/CurrencyCodes.json')

class NewWalletContainer extends Component {
	componentDidMount() {
		this.props.actions.handleNewWalletChange('currency', this.props.defaultCurrencyCode, {
			defaultSet: true,
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.actions.handleNewWalletSubmit()
	}

	getValue(key, event) {
		return event.target.value
	}

	handleChange(key, event) {
		const value = this.getValue(key, event)
		this.props.actions.handleNewWalletChange(key, value)
	}

	render() {
		const { newWallet, defaultCurrencyCode } = this.props

		return (
			<WalletForm
				{...newWallet.form.toObject()}
				errors={newWallet.errors.toObject()}
				disabled={!newWallet.errors.isEmpty() || newWallet.pristine}
				handleSubmit={this.handleSubmit.bind(this)}
				handleChange={this.handleChange.bind(this)}
				currencyCodes={currencyCodes}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		newWallet: state.WalletsDomain.newWallet,
		defaultCurrencyCode: state.SettingsDomain.settings.get('currency'),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewWalletContainer)
