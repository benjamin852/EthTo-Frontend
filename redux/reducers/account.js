import consola from 'consola';
import { CONNECT_WALLET, DISCONNECT_WALLET } from '../actions/account';
import { NATIVE_CURRENCY } from '../../constants/Blockchain';
import { GraphQLNonNull } from 'graphql';

const initialState = {
  address: null,
  balances: {},
  signer: GraphQLNonNull,
  //   isAdmin: false,
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET: {
      const { account, balance, signer } = action.payload;
      let balances = state.balances;
      balances[NATIVE_CURRENCY.symbol] = balance;
      consola.info(`Connect wallet reducer ${account} ${balance} ${signer}`);
      return {
        address: account,
        balances: balance,
        signer: signer,
      };
    }
    case DISCONNECT_WALLET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
export default account;
