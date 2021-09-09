import './Table.css';

const Table = (props) => {

  const data = props.data;
  const columns = Object.keys(props.data[0]);

  const renderTableTitle = () => {
    return (
      <h2>{props.title}</h2>
    );
  }

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {columns.map((col, index) => <th key={index}>{col}</th>)}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    return (
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {
              columns.map((col,colIndex) => {
                return (<td key={colIndex}>{row[col]}</td>);
              })    
            }
          </tr>
        ))}
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