import { ConfigProvider, DatePicker, Form, Input } from "antd";
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
              <ConfigProvider
                theme={{
                  components: {
                    Input: {
                      activeBorderColor: "#FF8100",
                      hoverBorderColor: "#FF8100",
                    },
                  },
                }}
              >
                <Input.Password
                  {...field}
                  size="large"
                  placeholder={placeholder}
                  required={required}
                />
              </ConfigProvider>
            )) ||
              (type === "textarea" && (
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        activeBorderColor: "#FF8100",
                        hoverBorderColor: "#FF8100",
                      },
                    },
                  }}
                >
                  <Input.TextArea
                    {...field}
                    size="large"
                    placeholder={placeholder}
                    required={required}
                    className="mt-2 hover:border-primary border-2 focus:border-primary"
                  />
                </ConfigProvider>
              )) ||
              (type === "date" && (
                <ConfigProvider
                  theme={{
                    components: {
                      DatePicker: {
                        activeBorderColor: "#FF8100",
                        hoverBorderColor: "#FF8100",
                      },
                    },
                  }}
                >
                  <DatePicker
                    {...field}
                    size="large"
                    placeholder={placeholder}
                    required={required}
                    className="w-full"
                  />
                </ConfigProvider>
              )) || (
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        activeBorderColor: "#FF8100",
                        hoverBorderColor: "#FF8100",
                      },
                    },
                  }}
                >
                  <Input
                    {...field}
                    type={type}
                    size="large"
                    required={required}
                    placeholder={placeholder}
                  />
                </ConfigProvider>
              )}
          </Form.Item>
        )}
      />
    </>
  );
};

export default CustomInput;
