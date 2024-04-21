import { Button } from "antd";

export const SubmitButton = ({ loading, text, func }) => {
  return (
    <Button
      htmlType="submit"
      size="large"
      type="text"
      loading={loading}
      onClick={func}
      className="font-bold w-full bg-primary border border-primary px-20 pt-2 pb-8 text-white"
    >
      {text}
    </Button>
  );
};
