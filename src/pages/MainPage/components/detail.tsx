import React from 'react';

interface TableItem {
  tableTitle: string;
  number: number;
}
interface DetailProps {
  title: string;
  tableData: TableItem[];
}

const Detail: React.FC<DetailProps> = (props) => {
  return (
    <div
      style={{
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        boxShadow: '2px 2px 10px #888888',
      }}
    >
      <div
        style={{
          backgroundColor: '#d9d9d9',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '40px',
        }}
      >
        <div style={{ marginLeft: '20px', fontSize: '17px' }}>{props.title}</div>
      </div>
      {props.tableData.map((row) => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                paddingLeft: '20px',
                paddingRight: '30px',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '40px',
                borderBottom: '2px solid #D9D9D9',
              }}
            >
              <div>{`${row.tableTitle}:`}</div>
              <div style={{ color: 'green' }}>{row.number}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Detail;
