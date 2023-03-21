import { useQuery } from 'react-query';
import { Table } from 'antd';
import { getTableData } from '../../apis/api';
import { ITableData } from '../../types/ITableData';
import { COLUMNS } from './units/Columns';

const TODAY = '2023-03-08';
const todayFilter = (record: ITableData): boolean => {
  return record.transaction_time.includes(TODAY);
};

export const MainTable = () => {
  const { data } = useQuery('getTableData', getTableData);
  const filteredData = data?.filter((record) => todayFilter(record));

  return (
    <Table
      columns={COLUMNS}
      dataSource={filteredData}
      pagination={{
        pageSize: 50,
        defaultPageSize: 50,
        pageSizeOptions: [],
        position: ['topLeft'],
      }}
    />
  );
};
