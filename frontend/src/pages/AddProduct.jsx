import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();

  const add = async (e) => {
    try {
      e.preventDefault();

      await axios.post("http://localhost:3000/add", {
        name,
        price,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-5">
        <h1 className="text-zinc-900 text-4xl font-bold">tambah product</h1>
        <form className="mt-5" method="post" onSubmit={add}>
          <ul className="space-y-3">
            <li>
              <input
                onChange={(e) => setName(e.target.value)}
                className="border p-2"
                type="text"
                placeholder="Nama product"
                required
              />
            </li>
            <li>
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="border p-2"
                type="text"
                placeholder="Harga product"
                required
              />
            </li>
            <li>
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-md"
              >
                tambah
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
