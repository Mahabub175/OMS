import { useState } from "react";
import {
  useDeletePhoneMutation,
  useGetPhonesQuery,
  useGetSinglePhoneQuery,
} from "../../../../redux/services/phone/phoneApi";
import { Pagination, Space, Table } from "antd";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TableHeader from "../../../../components/Shared/Table/TableHeader";
import CreatePhone from "./CreatePhone";
import DetailsModal from "../../../../components/Shared/Modal/DetailsModal";
import DeleteModal from "../../../../components/Shared/Modal/DeleteModal";
import EditPhone from "./EditPhone";
import CustomForm from "../../../../components/Shared/Form/CustomForm";
import CustomInput from "../../../../components/Shared/Form/CustomInput";
import { SubmitButton } from "../../../../components/Shared/Button/CustomButton";

const Phone = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(null);

  const onSubmit = async (data) => {
    setSearch(data);
  };

  const content = (
    <CustomForm onSubmit={onSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CustomInput
          label={"Name"}
          name={"name"}
          placeholder={"Search by name"}
        />
        <CustomInput
          label={"Relation"}
          name={"relation"}
          placeholder={"Search by relation"}
        />
        <CustomInput
          label={"Phone Number"}
          name={"phone_number"}
          placeholder={"Search by phone number"}
        />
        <CustomInput
          label={"Role Name"}
          name={"role__name"}
          placeholder={"Search by role name"}
        />
      </div>
      <div></div>

      <SubmitButton text={"Search"} />
    </CustomForm>
  );

  const { data: phones, isLoading } = useGetPhonesQuery({
    page: currentPage,
    search: search,
  });

  const { data: phoneData } = useGetSinglePhoneQuery(itemId, { skip: !itemId });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [deletePhone] = useDeletePhoneMutation();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Relation",
      dataIndex: "relation",
      key: "relation",
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
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

  const tableData = phones?.data?.map((item) => ({
    key: item.id,
    name: item.name,
    relation: item.relation,
    phone_number: item.phone_number,
    status: item.status,
  }));

  return (
    <div className="px-5">
      <TableHeader
        setOpen={setOpen}
        title={"Phones"}
        model={"Phone"}
        appLabel={"phonebook"}
        content={content}
      />

      <Table
        columns={columns}
        pagination={false}
        dataSource={tableData}
        className="mt-10"
        loading={isLoading}
      />
      <Pagination
        className="flex justify-center mt-10"
        total={phones?.meta?.count}
        current={currentPage}
        onChange={handlePageChange}
        simple
      />

      <CreatePhone open={open} setOpen={setOpen} />
      <EditPhone itemId={itemId} open={openEdit} setOpen={setOpenEdit} />
      <DetailsModal
        itemId={itemId}
        modalOpen={detailsModalOpen}
        setModalOpen={setDetailsModalOpen}
        title={"Book"}
        details={phoneData?.data}
      />
      <DeleteModal
        itemId={itemId}
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        func={deletePhone}
      />
    </div>
  );
};

export default Phone;
