import { useQuery } from 'react-query';
import { getTableData } from '../../apis/api';
import { ITableData } from '../../types/ITableData';

const TODAY = '2023-03-08';
const todayFilter = (record: ITableData): boolean => {
  return record.transaction_time.includes(TODAY);
};

export const Table = () => {
  const { data } = useQuery('getTableData', getTableData);
  const filteredData = data?.filter((record) => todayFilter(record));
  console.log(filteredData);
  return <></>;
};
