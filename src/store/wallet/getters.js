import * as types from './types';
export default {
  [types.MNEMONIC]: (state) => {
    return state.mnemonic;
  },
  [types.WALLET]: (state) => {
    return state.wallet;
  },
  [types.WORDS_NUMBER_ALLOWED]: (state) => {
    return state.wordsNumbersAllowed;
  },
  [types.NETWORK]: (state) => {
    return state.network;
  },  
  [types.WALLET_NAME]: (state) => {
    return state.walletName;
  },
  [types.ASSET_NAME]: (state) => {
    return state.assetName;
  },
  [types.TOKEN_AMOUNT]: (state) => {
    return state.tokenAmount;
  },
  [types.PASSPHRASE]: (state) => {
    return state.passphrase;
  },
  [types.METADATA]: (state) => {
    return state.metadata;
  }
};


