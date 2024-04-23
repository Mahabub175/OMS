import { useState } from "react";
import TableHeader from "../../../components/Shared/Table/TableHeader";
import { Pagination, Space, Table } from "antd";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import CreateBook from "./CreateBook";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
} from "../../../redux/services/book/bookApi";
import DeleteModal from "../../../components/Shared/Modal/DeleteModal";
import DetailsModal from "../../../components/Shared/Modal/DetailsModal";
import EditBook from "./EditBook";

const Books = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: books, isLoading } = useGetBooksQuery({
    page: currentPage,
  });

  const { data: bookData } = useGetSingleBookQuery(itemId, { skip: !itemId });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [deleteBook] = useDeleteBookMutation();

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
          {status ? (
            <span className="bg-green-500 text-white px-2 py-1 rounded-md font-bold">
              Active
            </span>
          ) : (
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
          <button
            onClick={() => {
              setItemId(item.key);
              setDetailsModalOpen(true);
            }}
            className="bg-secondary p-2 rounded-xl text-white hover:scale-110 duration-300"
          >
            <FaEye />
          </button>
          <button
            onClick={() => {
              setItemId(item.key);
              setOpenEdit(true);
            }}
            className="bg-green-500 p-2 rounded-xl text-white hover:scale-110 duration-300"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => {
              setItemId(item.key);
              setDeleteModalOpen(true);
            }}
            className="bg-red-500 p-2 rounded-xl text-white hover:scale-110 duration-300"
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
        loading={isLoading}
      />
      <Pagination
        className="flex justify-center mt-10"
        total={books?.meta?.count}
        current={currentPage}
        onChange={handlePageChange}
        simple
      />

      <CreateBook open={open} setOpen={setOpen} />
      <EditBook itemId={itemId} open={openEdit} setOpen={setOpenEdit} />
      <DetailsModal
        itemId={itemId}
        modalOpen={detailsModalOpen}
        setModalOpen={setDetailsModalOpen}
        title={"Book"}
        details={bookData?.data}
      />
      <DeleteModal
        itemId={itemId}
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        func={deleteBook}
      />
    </div>
  );
};

export default Books;
