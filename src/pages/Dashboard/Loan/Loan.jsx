import { useState } from "react";
import { Button } from "antd";
import TableHeader from "../../../components/Shared/Table/TableHeader";
import CustomDrawer from "../../../components/Shared/Drawer/CustomDrawer";
import CustomForm from "../../../components/Shared/Form/CustomForm";
import { SubmitButton } from "../../../components/Shared/Button/CustomButton";
import { Space, Table } from "antd";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import LoanDrawerForm from "../../../components/AllSection/Loan/LoanDrawerForm";

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
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Join Date",
    dataIndex: "join_date",
    key: "join_date",
    align: "center",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
  },

  {
    title: "Action",
    key: "action",
    align: "center",
    render: () => (
      <Space size="middle">
        <button className="bg-secondary p-2 rounded-xl text-white hover:scale-110 duration-300">
          <FaEye />
        </button>
        <button className="bg-excel p-2 rounded-xl text-white hover:scale-110 duration-300">
          <FaEdit />
        </button>
        <button className="bg-pdf p-2 rounded-xl text-white hover:scale-110 duration-300">
          <MdDelete />
        </button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok-B7Yw0KXM7edAixfEV5NvOGwdHMz8UfNA&s",
    name: "John Brown",
    join_date: "11/2/24",
    email: "john@gmail.com",
    status: "active",
  },
  {
    key: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok-B7Yw0KXM7edAixfEV5NvOGwdHMz8UfNA&s",
    name: "Jim Green",
    join_date: "11/2/24",
    email: "john@gmail.com",
    status: "active",
  },
  {
    key: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok-B7Yw0KXM7edAixfEV5NvOGwdHMz8UfNA&s",
    name: "Joe Black",
    join_date: "11/2/24",
    email: "john@gmail.com",
    status: "active",
  },
];

const Loan = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-5">
      <TableHeader setOpen={setOpen} title={"Loan"} />

      <Table
        columns={columns}
        pagination={false}
        dataSource={data}
        className="mt-10"
      />

      <CustomDrawer open={open} setOpen={setOpen} title="Create Loan">
        <CustomForm onSubmit={onSubmit}>
          <LoanDrawerForm />
          <div className="flex justify-end items-center gap-4 mt-20">
            <Button
              onClick={() => setOpen(false)}
              type="text"
              className="font-bold w-full bg-transparent text-pdf px-10 pt-2 pb-8 border border-pdf"
            >
              Cancel
            </Button>
            <SubmitButton text={"Save"} />
          </div>
        </CustomForm>
      </CustomDrawer>
    </div>
  );
};

export default Loan;
