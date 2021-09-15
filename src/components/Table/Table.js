import { createPortal } from 'react-dom';
import './Table.css';

const Table = (props) => {

  const data = props.data;
  const title = props.tableMetadata.title;
  const headers = props.tableMetadata.headers;
  const headerKeys = props.tableMetadata.keys;

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
    
    return (
      <tbody>
        {
          data.map((row, index) => {
            return <tr key={index}>
              {headers.map((col, colIndex) => {return (<td key={colIndex}>{String(row[headerKeys[col]])}</td>);})}
            </tr>
          })
        }
      </tbody>
    );
  }

  return(
    <div className="tableForm">
      
      {renderTableTitle()}
      <table className="Table center">
        {renderTableHeader()}
        {renderTableBody()}
      </table>
    

    </div>    
  );
}

export default Table;