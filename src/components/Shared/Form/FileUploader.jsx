import { Form, Input, Button } from "antd";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

const FileUploader = ({ name, label, placeholder, required }) => {
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  const clearFile = (field) => {
    setFilePreview(null);
    field.onChange(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            validateStatus={error ? "error" : ""}
            help={error ? error.message : null}
            label={label}
          >
            <div
              className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary cursor-pointer duration-200 group"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="space-y-1 text-center">
                {filePreview ? (
                  <div className="relative">
                    {filePreview?.includes("image") ? (
                      <img
                        src={filePreview}
                        alt="File Preview"
                        className="mx-auto h-auto"
                      />
                    ) : (
                      <div className="flex items-center gap-2 justify-center">
                        <FaFileAlt className="text-xl" />
                        <p className="text-lg font-bold">{field.value?.name}</p>
                      </div>
                    )}

                    <Button
                      type="link"
                      onClick={() => clearFile(field)}
                      className="absolute top-0 right-0 mt-1 mr-1 bg-white p-1"
                      icon={<MdDelete className="text-red-500 text-xl" />}
                    />
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex flex-col text-sm text-gray-600">
                  <label
                    htmlFor={name}
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary"
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <Input
                      id={name}
                      {...field}
                      type="file"
                      accept="/*"
                      value={field.value?.fileName}
                      className="sr-only"
                      onChange={(e) => {
                        handleFileChange(e);
                        field.onChange(e.target.files[0]);
                      }}
                      required={required}
                      placeholder={placeholder}
                    />
                  </label>
                  <span>
                    <span className="text-primary font-bold">Click to</span>{" "}
                    Upload a file or drag and drop
                  </span>
                </div>
                <p className="text-xs text-gray-500">{placeholder}</p>
              </div>
            </div>
          </Form.Item>
        )}
      />
    </>
  );
};

export default FileUploader;
