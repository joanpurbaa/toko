import axios from "axios";
import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [data, setData] = useState([false]);

  const show = async () => {
    const result = await axios.get("http://localhost:3000/show");

    setData(result.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete("http://localhost:3000/delete/" + productId);
    } catch (error) {
      console.log(error);
    }
  };

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  useEffect(() => {
    show();
  }, []);

  return (
    <>
      <div className="p-5">
        <h1 className="text-zinc-900 text-4xl font-bold">toko koh atong</h1>
        <Link to="/add">
          <button className="bg-blue-500 text-white p-3 rounded-md my-5">
            Add product
          </button>
        </Link>
        <Table>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((datu, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-white">
                  {datu.name}
                </Table.Cell>
                <Table.Cell className="text-white">
                  {formatRupiah(parseFloat(datu.price))}
                </Table.Cell>
                <Table.Cell className="flex">
                  <a
                    onClick={() => {
                      deleteProduct(datu._id);
                      location.reload();
                    }}
                  >
                    <MdDelete className="w-8 h-8 cursor-pointer text-red-500" />
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default Home;
