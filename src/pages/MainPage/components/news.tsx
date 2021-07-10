import React from 'react';

type NewsItem = {
  icon: any;
  user: string;
  time: string;
  order: string;
};
interface NewsProps {
  newsData: NewsItem[];
}

const News: React.FC<NewsProps> = (props) => {
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
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '60px',
        }}
      >
        <div style={{ marginLeft: '20px', fontSize: '17px' }}>动态</div>
      </div>
      {props.tableData.map((row) => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                paddingLeft: '20px',
                paddingRight: '30px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '80px',
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

export default News;
