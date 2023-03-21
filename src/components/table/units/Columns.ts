import { ColumnsType } from 'antd/es/table';
import { ITableData } from '../../../types/ITableData';
import { StatusRenderer } from './ColumnsOptions';

export const COLUMNS: ColumnsType<ITableData> = [
  {
    title: '주문번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '거래시간',
    dataIndex: 'transaction_time',
    key: 'transaction_time',
  },
  {
    title: '주문처리상태',
    dataIndex: 'status',
    key: 'status',
    render: StatusRenderer,
  },
  {
    title: '고객번호',
    dataIndex: 'customer_id',
    key: 'customer_id',
  },
  {
    title: '고객이름',
    dataIndex: 'customer_name',
    key: 'customer_name',
  },
  {
    title: '가격',
    dataIndex: 'currency',
    key: 'currency',
  },
];
