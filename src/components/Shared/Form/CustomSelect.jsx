import { Controller } from "react-hook-form";
import { Form, Select } from "antd";

const CustomSelect = ({ label, name, placeholder, mode, defaultValue }) => {
  return (
    <>
      <Controller
        name={name || "test"}
        defaultValue={defaultValue || null}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            validateStatus={error ? "error" : ""}
            help={error ? error.message : null}
            label={label || ""}
          >
            <Select
              {...field}
              mode={mode || undefined}
              placeholder={placeholder || null}
              allowClear
              defaultValue={defaultValue || null}
              size="large"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled" },
              ]}
            />
          </Form.Item>
        )}
      />
    </>
  );
};

export default CustomSelect;
