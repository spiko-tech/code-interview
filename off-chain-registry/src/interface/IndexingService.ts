import { BigNumberish } from 'ethers';

export interface Transfer {
  from: string;
  to: string;
  amount: BigNumberish;
}

export interface IndexingService {
  getTransfers: () => Promise<Transfer[]>;
}
