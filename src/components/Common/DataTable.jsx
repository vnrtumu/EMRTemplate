const DataTable = ({ headers, rows, renderRow }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover mb-0">
        <thead className="thead-light">
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{renderRow(row, i)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
