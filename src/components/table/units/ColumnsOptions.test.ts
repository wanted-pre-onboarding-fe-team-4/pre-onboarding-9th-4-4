import { ITableData } from '../../../types/ITableData';
import {
  sorterIdOptionObject,
  sorterTransactionTimeOptionObject,
} from './ColumnsOptions';

const a: ITableData = {
  id: 3234,
  transaction_time: '2023-03-02',
  status: true,
  customer_id: 1233,
  customer_name: 'fewfwej',
  currency: 'wfoijwoefj',
};
const b: ITableData = {
  ...a,
  id: 294,
  transaction_time: '2023-03-01',
};

describe('ColumnsOptions test', () => {
  it('sorterTransactionTimeOptionObject', () => {
    // given

    // when
    const result = sorterTransactionTimeOptionObject.sorter(a, b);

    // then
    expect(result).toBe(+new Date('2023-03-02') - +new Date('2023-03-01'));
  });

  it('sorterIdOptionObject', () => {
    // given

    // when
    const result = sorterIdOptionObject.sorter(a, b);

    // then
    expect(result).toBe(a.id - b.id);
  });
});

export {};
