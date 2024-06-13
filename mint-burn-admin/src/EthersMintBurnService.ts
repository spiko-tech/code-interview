import { BigNumberish } from 'ethers';
import { MintBurnService } from './interface/MintBurnService';

export class EthersMintBurnService implements MintBurnService {
  burn = (amount: BigNumberish, address: string) => {
    throw new Error('Method not implemented.');
  };
  mint = (amount: BigNumberish, address: string) => {
    throw new Error('Method not implemented.');
  };
}
