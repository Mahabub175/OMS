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
  const fallbackLabel = "This Field";

  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      rules={{
        required: required
          ? `${label || fallbackLabel} is required.`
          : undefined,
      }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          validateStatus={error ? "error" : ""}
          help={error ? error.message : null}
          label={label || null}
        >
          <Input
            {...field}
            type={type}
            required={required}
            size="large"
            maxLength={max}
            placeholder={placeholder}
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomInput;
