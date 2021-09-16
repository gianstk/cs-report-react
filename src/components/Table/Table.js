import React from 'react';
import './Table.css';

const Table = (props) => {

  const data = props.data;
  const title = props.tableMetadata.title;
  const headers = props.tableMetadata.headers;
  const headerKeys = props.tableMetadata.keys;
  const specialNote = props.tableMetadata.specialNote;

  const renderTableTitle = () => {
    return (
      <h2>{title}</h2>
    );
  }

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {headers.map((col, index) => <th key={index}>{col}</th>)}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    if (!data) {
      return <div></div>
    }
    return (
      <tbody>
        {
          data.map((row, index) => {
            return <tr key={index}>
              {headers.map((col, colIndex) => {
                return (<td key={colIndex}>{row[headerKeys[col]]}</td>);
              })}
            </tr>
          })
        }
      </tbody>
    );
  }

  const renderSpecialNote = () => {
    
    return (
      <div className="specialNote">
        {specialNote.map((note, index) => <p key={index}>{note}</p>)}
      </div>
    );
  }

  return(
    <div className="tableForm">
      {renderTableTitle()}
      {specialNote ? renderSpecialNote() : null}
      <table className="Table center">
        {renderTableHeader()}
        {renderTableBody()}
      </table>
      
    </div>    
  );
}

export default Table;