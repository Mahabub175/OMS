import { DatePicker, Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({ type, name, label, placeholder, required }) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            validateStatus={error ? "error" : ""}
            help={error ? error.message : null}
            label={label}
          >
            {(type === "password" && (
              <Input.Password
                {...field}
                size="large"
                placeholder={placeholder}
                required={required}
                className="mt-2 hover:border-primary border-2 focus:border-primary"
              />
            )) ||
              (type === "textarea" && (
                <Input.TextArea
                  {...field}
                  size="large"
                  placeholder={placeholder}
                  required={required}
                  className="mt-2 hover:border-primary border-2 focus:border-primary"
                />
              )) ||
              (type === "date" && (
                <DatePicker
                  {...field}
                  size="large"
                  placeholder={placeholder}
                  required={required}
                  className="mt-2 w-full hover:border-primary border-2 focus:border-primary"
                />
              )) || (
                <Input
                  {...field}
                  type={type}
                  size="large"
                  required={required}
                  placeholder={placeholder}
                  className="mt-2 hover:border-primary border-2 focus:border-primary"
                />
              )}
          </Form.Item>
        )}
      />
    </>
  );
};

export default CustomInput;
