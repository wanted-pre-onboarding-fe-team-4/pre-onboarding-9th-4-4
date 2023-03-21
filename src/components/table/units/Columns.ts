import { ColumnsType } from 'antd/es/table';
import { ITableData } from '../../../types/ITableData';
import { StatusRenderer } from './ColumnsOptions';

export const COLUMNS: ColumnsType<ITableData> = [
  {
    title: '주문번호',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
    sortDirections: ['descend'],
  },
  {
    title: '거래시간',
    dataIndex: 'transaction_time',
    key: 'transaction_time',
    sorter: (a:ITableData, b:ITableData) => Number(new Date(a.transaction_time)) - Number(new Date(b.transaction_time)),
    sortDirections: ['descend'],
  },
  {
    title: '주문처리상태',
    dataIndex: 'status',
    key: 'status',
    render: StatusRenderer,
    filters: [
      {
        text: '완료',
        value: true,
      },
      {
        text: '미완료',
        value: false,
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: ITableData) =>
      record.status === value,
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
