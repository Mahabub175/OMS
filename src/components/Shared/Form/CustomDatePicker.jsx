import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const CustomDatePicker = ({
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
      defaultValue={defaultValue || null}
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
          <DatePicker
            {...field}
            size="large"
            allowClear
            placeholder={placeholder}
            defaultValue={defaultValue || null}
            required={required}
            className="w-full"
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomDatePicker;
