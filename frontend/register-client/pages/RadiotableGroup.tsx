import React, { useMemo, useState } from "react";
import MaterialReactTable, {
  type MRT_ColumnDef,
  type MRT_RowSelectionState,
} from "material-react-table";

const data = [
  //data definitions...
  {
    userId: "1", //we'll use this as a unique row id
    categoryOfServices: "Package Standard",
    electricalElectronicsMaintenance: 120,
    plumbingMaintenance: 120,
    computerMaintenance: 120,
    carpenterServices: 90,
    houseKeeping: 120,
    gardeningServices: 120
  },
  {
    userId: "2", //we'll use this as a unique row id
    categoryOfServices: "Package Growth",
    electricalElectronicsMaintenance: 240,
    plumbingMaintenance: 240,
    computerMaintenance: 240,
    carpenterServices: 180,
    houseKeeping: 240,
    gardeningServices: 240
  },
  {
    userId: "3", //we'll use this as a unique row id
    categoryOfServices: "no Of Visits",
    electricalElectronicsMaintenance: 90,
    plumbingMaintenance: 90,
    computerMaintenance: 90,
    carpenterServices: 90,
    houseKeeping: 120,
    gardeningServices: 120
  },


  //end
];

const Example = () => {
  const columns = useMemo(
    //column definitions...
    () =>
      [
        {
          accessorKey: "categoryOfServices",
          header: "Category of Services",
        },
        {
          accessorKey: "electricalElectronicsMaintenance",
          header: "Electrical & Electronic Maintenance",
        },
        {
          accessorKey: "plumbingMaintenance",
          header: "Plumbing Maintenance",
        },
        {
          accessorKey: "computerMaintenance",
          header: "Computer System Maintenance (Hardware & Software)",
        },
        {
          accessorKey: "carpenterServices",
          header: "Carpenter Services",
        },
        {
          accessorKey: "houseKeeping",
          header: "Housekeeping Services (Cleaning Services)",
        },
        {
          accessorKey: "gardeningServices",
          header: "Gardening Services",
        },
      ] as unknown as MRT_ColumnDef<(typeof data)[0]>[],
    [] //end
  );

  //optionally, you can manage the row selection state yourself
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableMultiRowSelection={true} //use radio buttons instead of checkboxes
      enableRowSelection
      getRowId={(row) => row.userId} //give each row a more useful id
      muiTableBodyRowProps={({ row }) => ({
        //add onClick to row to select upon clicking anywhere in the row

        onClick: row.getToggleSelectedHandler(),
        sx: { cursor: "pointer" },
      })}
      onRowSelectionChange={setRowSelection} //connect internal row selection state to your own
      state={{ rowSelection }} //pass our managed row selection state to the table to use
    />
  );
};

export default Example;
