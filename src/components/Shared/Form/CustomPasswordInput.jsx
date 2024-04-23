import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CustomPasswordInput = ({
  name,
  label,
  placeholder,
  required,
  defaultValue,
}) => {
  const fallbackLabel = "This Field";
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{
        required: required
          ? `${label || fallbackLabel} is required.`
          : undefined,
      }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          validateStatus={error ? "error" : ""}
          help={error ? error.message : null}
          label={label}
        >
          <Input.Password
            {...field}
            size="large"
            placeholder={placeholder}
            required={required}
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomPasswordInput;
