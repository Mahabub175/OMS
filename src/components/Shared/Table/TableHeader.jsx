import { Popover } from "antd";
import { FaPlus } from "react-icons/fa";
import { RiImportFill, RiFileExcel2Line, RiFilePdf2Fill } from "react-icons/ri";
import { base_url } from "../../../utilities/configs/base_api";
import { useSelector } from "react-redux";
import { useCurrentToken } from "../../../redux/services/auth/authSlice";

const TableHeader = ({ setOpen, title, model, appLabel }) => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
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

      // Create Blob URL
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
        <div className="flex gap-2 items-center mt-10 lg:mt-0">
          <Popover
            content={content}
            title="Title"
            trigger="hover"
            className="mx-20"
          >
            <button className="text-gray-400 px-20 py-2 border border-gray-400 rounded-lg">
              Search...
            </button>
          </Popover>
          <button className="bg-secondary hover:bg-blue-800 duration-300 px-6 lg:px-8 py-2 text-white rounded-lg font-bold">
            <RiImportFill className="mr-2 text-xl inline-block" />
            Import
          </button>
          <button
            onClick={() => handleExport("excel")}
            className="bg-excel hover:bg-green-800 duration-300 px-6 lg:px-8 py-2 text-white rounded-lg font-bold"
          >
            <RiFileExcel2Line className="mr-2 text-xl inline-block" />
            Excel
          </button>
          <button
            onClick={() => handleExport("pdf")}
            className="bg-pdf hover:bg-red-800 duration-300 px-6 lg:px-8 py-2 text-white rounded-lg font-bold"
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
