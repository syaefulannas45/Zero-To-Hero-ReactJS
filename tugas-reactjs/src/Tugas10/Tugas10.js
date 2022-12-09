import React from "react";
import { Table } from "flowbite-react";

const Tugas10 = () => {
  return (
    <>
      <Table striped={true} className="mt-10 w-3/5 mx-auto">
        <thead className="bg-sky-500 text-white text-center">
          <th>No</th>
          <th>Nama</th>
          <th>Mata Kuliah</th>
          <th>Nilai</th>
          <th>Index</th>
          <th>Action</th>
        </thead>
        <Table.Body className="">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">1</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">John</Table.Cell>
            <Table.Cell>Algoritma</Table.Cell>
            <Table.Cell>95</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
              <button className="w-12 bg-yellow-300 text-white rounded-sm h-8">Edit</button>
              <button className="w-12 bg-red-500 text-white rounded-sm h-8 ml-1">Hapus</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white  text-center dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">2</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Doe</Table.Cell>
            <Table.Cell>Matematika</Table.Cell>
            <Table.Cell>80</Table.Cell>
            <Table.Cell>B</Table.Cell>
            <Table.Cell>
              <button className="w-12 bg-yellow-300 text-white rounded-sm h-8">Edit</button>
              <button className="w-12 bg-red-500 text-white rounded-sm h-8 ml-1">Hapus</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white text-center dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">3</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Frank</Table.Cell>
            <Table.Cell>Kalkulus</Table.Cell>
            <Table.Cell>75</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>
              <button className="w-12 bg-yellow-300 text-white rounded-sm h-8">Edit</button>
              <button className="w-12 bg-red-500 text-white rounded-sm h-8 ml-1">Hapus</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white  text-center dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">4</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Jason</Table.Cell>
            <Table.Cell>Basis Data</Table.Cell>
            <Table.Cell>90</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
              <button className="w-12 bg-yellow-300 text-white rounded-sm h-8">Edit</button>
              <button className="w-12 bg-red-500 text-white rounded-sm h-8 ml-1">Hapus</button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default Tugas10;
