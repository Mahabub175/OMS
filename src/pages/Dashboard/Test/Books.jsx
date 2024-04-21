import { useState } from "react";
import TableHeader from "../../../components/Shared/Table/TableHeader";
import { Space, Table } from "antd";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import CreateBook from "./CreateBook";
import { useGetBooksQuery } from "../../../redux/services/book/bookApi";
import DeleteModal from "../../../components/Shared/Modal/DeleteModal";

const Books = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const { data: books } = useGetBooksQuery();

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (image) => (
        <img
          src={image}
          alt="Beneficiary"
          className="w-12 h-12 mx-auto rounded-full"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Publication Date",
      dataIndex: "publication_date",
      key: "publication_date",
      align: "center",
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => (
        <>
          {status === true && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-md font-bold">
              Active
            </span>
          )}
          {status === false && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-md font-bold">
              Inactive
            </span>
          )}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (item) => (
        <Space size="middle">
          <button className="bg-secondary p-2 rounded-xl text-white hover:scale-110 duration-300">
            <FaEye />
          </button>
          <button className="bg-excel p-2 rounded-xl text-white hover:scale-110 duration-300">
            <FaEdit />
          </button>
          <button
            onClick={() => {
              setItemId(item.key);
              setModalOpen(true);
            }}
            className="bg-pdf p-2 rounded-xl text-white hover:scale-110 duration-300"
          >
            <MdDelete />
          </button>
        </Space>
      ),
    },
  ];

  const tableData = books?.data?.map((item) => ({
    key: item.id,
    image: item.image,
    title: item.title,
    publication_date: item.publication_date,
    isbn: item.isbn,
    status: item.status,
  }));

  return (
    <div className="px-5">
      <TableHeader setOpen={setOpen} title={"Books"} />

      <Table
        columns={columns}
        pagination={false}
        dataSource={tableData}
        className="mt-10"
      />

      <CreateBook open={open} setOpen={setOpen} />
      <DeleteModal
        itemId={itemId}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
};

export default Books;
