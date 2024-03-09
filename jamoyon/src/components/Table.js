import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Id",
    selector: (row) => row.Id,
  },
  {
    name: "Merk",
    selector: (row) => row.Merk,
  },
  {
    name: "Jumlah",
    selector: (row) => row.Jumlah,
  },
  {
    name: "Harga",
    selector: (row) => row.Harga,
  },
];

const data = [
  {
    Id: 1,
    Merk: "Casio",
    Jumlah: 50,
    Harga: "1988",
  },
  {
    Id: 2,
    Merk: "Casio",
    Jumlah: 30,
    Harga: "1984",
  },
  {
    Id: 3,
    Merk: "Casio",
    Jumlah: 50,
    Harga: "1988",
  },
  {
    Id: 4,
    Merk: "Casio",
    Jumlah: 30,
    Harga: "1984",
  },
  {
    Id: 5,
    Merk: "Casio",
    Jumlah: 50,
    Harga: "1988",
  },
  {
    Id: 6,
    Merk: "Casio",
    Jumlah: 30,
    Harga: "1984",
  },
  {
    Id: 7,
    Merk: "Casio",
    Jumlah: 50,
    Harga: "1988",
  },
  {
    Id: 8,
    Merk: "Casio",
    Jumlah: 30,
    Harga: "1984",
  },
];
function Table() {
  return (
    <div className=" backdrop-blur-xl px-2 py-15 rounded-3xl w-full ">
      <h3 className="text-4xl text-yellow-600  text-center pb-10 font-extrabold">
        Data<span className="text-3xl text-indigo-950  text-center mb-10 font-extrabold">Stock</span>Jam
      </h3>

      <div className=" rounded-3xl  border-2 px-5 py-30 ">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Table;
