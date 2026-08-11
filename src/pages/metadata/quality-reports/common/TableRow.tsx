interface TableRowProps {
  label: string;
  value: string;
}

export function TableRow({ label, value }: TableRowProps) {
  return (
    <tr className="border-b border-gray-200 last:border-b-0">
      <td className="py-2 px-3 bg-gray-50 text-sm font-medium text-gray-700 w-1/3">
        {label}
      </td>
      <td className="py-2 px-3 text-sm text-gray-700">{value}</td>
    </tr>
  );
}
