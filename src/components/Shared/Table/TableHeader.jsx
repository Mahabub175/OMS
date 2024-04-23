import { Popover } from "antd";
import { FaPlus } from "react-icons/fa";
import { RiImportFill, RiFileExcel2Line, RiFilePdf2Fill } from "react-icons/ri";
import { base_url } from "../../../utilities/configs/base_api";
import { useSelector } from "react-redux";
import { useCurrentToken } from "../../../redux/services/auth/authSlice";
import { FaSearch } from "react-icons/fa";
import CustomInput from "../Form/CustomInput";
import CustomForm from "../Form/CustomForm";

const TableHeader = ({ setOpen, title, model, appLabel }) => {
  const content = (
    <div>
      <CustomForm>
        <CustomInput
          label={"Test Search"}
          name={"test"}
          placeholder={"Search Here"}
        />
      </CustomForm>
    </div>
  );

  const token = useSelector(useCurrentToken);

  const handleExport = async (file) => {
    try {
      const fileUrl = `${base_url}/export/?file_type=${file}&model=${model}&app_label=${appLabel}`;

      const response = await fetch(fileUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const extension = file === "excel" ? "xlsx" : "pdf";

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${model}.${extension}`;
      document.body.appendChild(a);

      a.click();

      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="lg:flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
          <button
            className="bg-primary rounded-full p-2 mt-1"
            onClick={() => setOpen(true)}
          >
            <FaPlus className="text-2xl text-white" />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center mt-4 lg:mt-0 lg:w-[60%]">
          <Popover content={content} trigger="hover" className="mb-4 lg:mb-0">
            <button className="flex justify-between flex-2 w-full px-5 py-2 border border-gray-400 rounded-lg hover:border-primary duration-300">
              <span className="text-gray-400">Search...</span>
              <span>
                <FaSearch className="text-xl text-primary" />
              </span>
            </button>
          </Popover>
          <button className="bg-secondary lg:w-4/6 hover:bg-blue-800 duration-300 px-6 py-2 text-white rounded-lg font-bold">
            <RiImportFill className="mr-2 text-xl inline-block" />
            Import
          </button>
          <button
            onClick={() => handleExport("excel")}
            className="bg-excel lg:w-4/6 hover:bg-green-800 duration-300 px-6  py-2 text-white rounded-lg font-bold"
          >
            <RiFileExcel2Line className="mr-2 text-xl inline-block" />
            Excel
          </button>
          <button
            onClick={() => handleExport("pdf")}
            className="bg-pdf lg:w-4/6 hover:bg-red-800 duration-300 px-6 py-2 text-white rounded-lg font-bold"
          >
            <RiFilePdf2Fill className="mr-2 text-xl inline-block" />
            PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
