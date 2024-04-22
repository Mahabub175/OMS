import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({
  type,
  name,
  label,
  placeholder,
  required,
  defaultValue,
  max,
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || null}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          validateStatus={error ? "error" : ""}
          help={error ? error.message : null}
          label={label}
        >
          <Input
            {...field}
            type={type}
            size="large"
            maxLength={max}
            required={required}
            defaultChecked={defaultValue || null}
            placeholder={placeholder}
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomInput;
