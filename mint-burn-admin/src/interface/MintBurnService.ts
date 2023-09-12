import { BigNumberish } from 'ethers';

export interface MintBurnService {
  mint: (amount: BigNumberish, address: string) => Promise<void>;
  burn: (amount: BigNumberish, address: string) => Promise<void>;
}
