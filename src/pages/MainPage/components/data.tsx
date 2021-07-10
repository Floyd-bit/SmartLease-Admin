import React from 'react';

interface DataProps {
  color?: string;
  icon: any;
  description: string;
  number: string;
}
const Data: React.FC<DataProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: props.color ? props.color : '#36CFCB',
        width: '300px',
        height: '100px',
        justifyContent: 'space-around',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div style={{ color: 'white', fontSize: '60px', marginLeft: '20px' }}>{props.icon}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: '10px',
          alignItems: 'center',
        }}
      >
        <div style={{ color: 'white', fontSize: '40px' }}>{props.number}</div>
        <div style={{ color: 'white' }}>{props.description}</div>
      </div>
    </div>
  );
};
export default Data;
