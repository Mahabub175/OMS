import { Avatar, Popover } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/services/auth/authSlice";
import { toast } from "sonner";
import { UserOutlined } from "@ant-design/icons";

const Profile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!", { duration: 2000 });
  };
  const content = (
    <>
      <button
        onClick={handleLogout}
        className="bg-primary text-white font-bold hover:bg-transparent border border-primary hover:text-primary duration-300 px-6 py-1.5 rounded-lg"
      >
        Log Out
      </button>
    </>
  );

  return (
    <div className="flex justify-between items-center mt-3">
      <div className="flex items-center ml-4">
        <div className="font-bold text-2xl text-primary cursor-pointer">
          Falaq Oil
        </div>
      </div>
      <Popover placement="bottomLeft" content={content} className="mr-4">
        <Avatar className="bg-primary" size={40} icon={<UserOutlined />} />
      </Popover>
    </div>
  );
};

export default Profile;
