import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const CustomInput = ({
  type,
  name,
  label,
  placeholder,
  required,
  defaultValue,
  max,
}) => {
  const { control } = useFormContext();

  const fallbackLabel = "This Field";

  return (
    <Controller
      name={name}
      control={control}
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
