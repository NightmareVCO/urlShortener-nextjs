const TableHead = () => {
  return (
    <thead className="bg-background-gray-translucent backdrop-blur-sm">
      <tr>
        <th className="py-3 rounded-tl-lg">Short Link</th>
        <th className="hidden py-3 lg:table-cell">Original Link</th>
        <th className="py-3 rounded-tr-lg lg:table-cell lg:rounded-none">
          QR Code
        </th>
        <th className="hidden py-3 lg:table-cell">Clicks</th>
        <th className="hidden py-3 lg:table-cell">Status</th>
        <th className="hidden py-3 rounded-tr-lg lg:table-cell">Date</th>
      </tr>
    </thead>
  );
};

export default TableHead;
