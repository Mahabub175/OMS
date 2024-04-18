import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({ type, name, label, placeholder, required }) => {
  return (
    <>
      {/* <label htmlFor={name} className="font-bold text-black/70">
        {label}:
      </label> */}
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
