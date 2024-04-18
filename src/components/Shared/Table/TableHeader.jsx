import { FaPlus } from "react-icons/fa";
import { RiImportFill, RiFileExcel2Line, RiFilePdf2Fill } from "react-icons/ri";

const TableHeader = ({ setOpen }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Department</h2>
          <button
            className="bg-primary rounded-full p-2 mt-1"
            onClick={() => setOpen(true)}
          >
            <FaPlus className="text-2xl text-white" />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-secondary hover:bg-blue-800 duration-300 px-8 py-2 text-white rounded-lg font-bold">
            <RiImportFill className="mr-2 text-xl inline-block" />
            Import
          </button>
          <button className="bg-excel hover:bg-green-800 duration-300 px-8 py-2 text-white rounded-lg font-bold">
            <RiFileExcel2Line className="mr-2 text-xl inline-block" />
            Excel
          </button>
          <button className="bg-pdf hover:bg-red-800 duration-300 px-8 py-2 text-white rounded-lg font-bold">
            <RiFilePdf2Fill className="mr-2 text-xl inline-block" />
            PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
