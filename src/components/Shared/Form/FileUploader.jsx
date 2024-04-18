import { Form, Input } from "antd";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AiOutlineDrag } from "react-icons/ai";

const FileUploader = ({ file_name }) => {
  const { control } = useFormContext();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const getFileArray = (fileList) => {
    return Array.from(fileList);
  };

  return (
    <div>
      <Controller
        name={"files"}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            validateStatus={error ? "error" : ""}
            help={error ? error.message : null}
            label={"Nid"}
          >
            <Input
              {...field}
              type="file"
              size="large"
              required={true}
              onChange={(e) => {
                handleFileChange(e);
                field.onChange(getFileArray(e.target.files));
              }}
              className="mt-2 hover:border-primary border-2 focus:border-primary"
              multiple
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FileUploader;
