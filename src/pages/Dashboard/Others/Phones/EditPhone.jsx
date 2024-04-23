import { toast } from "sonner";
import {
  useGetSinglePhoneQuery,
  useUpdatePhoneMutation,
} from "../../../../redux/services/phone/phoneApi";
import CustomDrawer from "../../../../components/Shared/Drawer/CustomDrawer";
import CustomForm from "../../../../components/Shared/Form/CustomForm";
import CustomInput from "../../../../components/Shared/Form/CustomInput";
import CustomSelect from "../../../../components/Shared/Form/CustomSelect";
import { Button } from "antd";
import { SubmitButton } from "../../../../components/Shared/Button/CustomButton";
import { useGetAllRolesQuery } from "../../../../redux/services/role/roleApi";

const EditPhone = ({ open, setOpen, itemId }) => {
  const { data: roleData } = useGetAllRolesQuery({ skip: !open });
  const { data: phoneData } = useGetSinglePhoneQuery(itemId, { skip: !itemId });
  const [updatePhone, { isLoading }] = useUpdatePhoneMutation();

  const roleOptions = roleData?.data?.map((item) => ({
    value: item?.id,
    label: item?.name.toUpperCase(),
  }));

  const onSubmit = async (data) => {
    try {
      const submittedData = {
        name: data?.name || phoneData?.data?.name,

        relation: data?.relation || phoneData?.data?.relation,
        phone_number: data?.phone_number || phoneData?.data?.phone_number,
        status:
          data?.status === "Inactive"
            ? false
            : data?.status || phoneData?.data?.status,
      };

      const updatedBookData = new FormData();
      Object.entries(submittedData).forEach(([key, value]) => {
        updatedBookData.append(key, value);
      });

      const updatedData = {
        id: itemId,
        data: updatedBookData,
      };

      const res = await updatePhone(updatedData);

      if (res.data.success) {
        toast.success(res.data.message);
        setOpen(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error updating phone:", error);
      toast.error("An error occurred while updating the phone.");
    }
  };

  const defaultValue = phoneData?.data;

  if (!defaultValue) {
    return null;
  }

  return (
    <CustomDrawer
      open={open}
      setOpen={setOpen}
      title="Edit Phone"
      placement={"left"}
    >
      <CustomForm onSubmit={onSubmit}>
        <div className="three-grid">
          <CustomInput
            label={"Name"}
            name={"name"}
            type={"text"}
            required={false}
            defaultValue={defaultValue?.name}
            placeholder={"Enter Name"}
          />
          <CustomInput
            label={"Relation"}
            name={"relation"}
            type={"text"}
            required={false}
            defaultValue={defaultValue?.relation}
            placeholder={"Enter Relation"}
          />
          <CustomInput
            label={"Phone Number"}
            name={"phone_number"}
            type={"number"}
            defaultValue={defaultValue?.phone_number}
            required={false}
            placeholder={"Enter Phone Number"}
          />
        </div>
        <CustomSelect
          label={"Role"}
          name={"role"}
          defaultValue={defaultValue?.role_name}
          placeholder={"Select a role"}
          required={false}
          options={roleOptions}
        />

        <div className="bottom-buttons">
          <Button
            onClick={() => setOpen(false)}
            type="text"
            className="font-bold w-full bg-transparent text-pdf px-10 pt-2 pb-8 border border-pdf"
          >
            Cancel
          </Button>
          <SubmitButton loading={isLoading} text={"Save"} />
        </div>
      </CustomForm>
    </CustomDrawer>
  );
};

export default EditPhone;
