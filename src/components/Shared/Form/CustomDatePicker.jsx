import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const CustomDatePicker = ({
  name,
  label,
  placeholder,
  required,
  defaultValue,
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
