import { ITableData } from '../../types/ITableData';

interface TableProps {
  data: ITableData[];
}

const TODAY = '2023-03-08';
const todayFilter = (record: ITableData): boolean => {
  return record.transaction_time.includes(TODAY);
};

export const Table = ({ data }: TableProps) => {
  const filteredData = data.filter((record) => todayFilter(record));
  console.log(filteredData);

  return <></>;
};
