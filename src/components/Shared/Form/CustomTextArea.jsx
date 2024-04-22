import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CustomTextArea = ({
  name,
  label,
  placeholder,
  required,
  defaultValue,
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          validateStatus={error ? "error" : ""}
          help={error ? error.message : null}
          label={label}
        >
          <Input.TextArea
            {...field}
            size="large"
            placeholder={placeholder}
            required={required}
            className="mt-2 hover:border-primary border-2 focus:border-primary"
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomTextArea;
