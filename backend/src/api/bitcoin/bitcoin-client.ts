import config from '../../config';
import * as bitcoin from '@mempool/bitcoin';
import { BitcoinRpcCredentials } from './bitcoin-api-abstract-factory';

const nodeRpcCredentials: BitcoinRpcCredentials = {
  host: config.CORE_RPC.HOST,
  port: config.CORE_RPC.PORT,
  user: config.CORE_RPC.USERNAME,
  pass: config.CORE_RPC.PASSWORD,
  timeout: 60000,
};

export default new bitcoin.Client(nodeRpcCredentials);
