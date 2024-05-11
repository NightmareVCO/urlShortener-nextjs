import TableHead from "./TableHead";
import TableItem from "./TableItem";

const Table = ({ urls }: { urls?: any[] }) => {
  return (
    <table className="w-full table-auto">
      <TableHead />
      <tbody>
        {urls &&
          urls.map((url: any) => (
            <TableItem key={url._id} {...url.toObject()} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
