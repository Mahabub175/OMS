import { Controller } from "react-hook-form";
import { Form, Select } from "antd";

const CustomSelect = ({
  label,
  name,
  placeholder,
  mode,
  defaultValue,
  required,
  options,
  type,
}) => {
  const fallbackLabel = "This Field";
  let adjustedDefaultValue = defaultValue;

  if (type === "status" && defaultValue !== undefined) {
    adjustedDefaultValue = defaultValue ? "Active" : "Inactive";
  }

  return (
    <Controller
      name={name || "test"}
      defaultValue={adjustedDefaultValue || null}
      rules={{
        required: required
          ? `${label || fallbackLabel} is required.`
          : undefined,
      }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          validateStatus={error ? "error" : ""}
          help={error ? error.message : null}
          label={label || fallbackLabel}
        >
          <Select
            {...field}
            mode={mode || undefined}
            placeholder={placeholder || null}
            allowClear
            size="large"
            options={options}
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomSelect;
