//components
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import Product from "../pages/Dashboard/Product/Product";
import Purchase from "../pages/Dashboard/Purchase/Purchase";
import Sale from "../pages/Dashboard/Sale/Sale";
import Expense from "../pages/Dashboard/Expense/Expense";
import Quotation from "../pages/Dashboard/Quotations/Quotation";
import Transfer from "../pages/Dashboard/Transfer/Transfer";
import Return from "../pages/Dashboard/Return/Return";
import Accounting from "../pages/Dashboard/Accounting/Accounting";
import People from "../pages/Dashboard/People/People";
import Reports from "../pages/Dashboard/Reports/Reports";
import AddOns from "../pages/Dashboard/AddOns/AddOns";
import Settings from "../pages/Dashboard/Settings/Settings";
import Documents from "../pages/Dashboard/Documents/Documents";
import Hrm from "../pages/Dashboard/Hrm/Hrm";

//icons
import { TbDashboard } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import {
  MdProductionQuantityLimits,
  MdAccountBalance,
  MdPeopleAlt,
} from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { FaCartShopping, FaMoneyBillWave } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import { IoPeopleCircle, IoDocumentTextOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { VscDiffAdded } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: AiOutlineDashboard,
    element: <AdminDashboard />,
  },
  {
    name: "Short Hand",
    icon: BsBoxSeam,
    children: [
      {
        name: "Products",
        path: "products",
        icon: MdProductionQuantityLimits,
        element: <Product />,
      },
    ],
  },
  {
    name: "Commission",
    icon: GoCreditCard,
    children: [
      {
        name: "Commission",
        path: "purchases",
        icon: TbDashboard,
        element: <Purchase />,
      },
    ],
  },
  {
    name: "Capital",
    icon: FaCartShopping,
    children: [
      {
        name: "Capital",
        path: "sales",
        icon: TbDashboard,
        element: <Sale />,
      },
    ],
  },
  {
    name: "Sales",
    icon: FaMoneyBillWave,
    children: [
      {
        name: "Sales",
        path: "expenses",
        icon: TbDashboard,
        element: <Expense />,
      },
    ],
  },
  {
    name: "Loan",
    icon: LuClipboardList,
    children: [
      {
        name: "Loan",
        path: "quotations",
        icon: TbDashboard,
        element: <Quotation />,
      },
      {
        name: "Beneficiary",
        path: "quotations",
        icon: TbDashboard,
        element: <Quotation />,
      },
      {
        name: "Loan Installment",
        path: "quotations",
        icon: TbDashboard,
        element: <Quotation />,
      },
      {
        name: "Loan Transaction",
        path: "quotations",
        icon: TbDashboard,
        element: <Quotation />,
      },
    ],
  },
  {
    name: "HRM",
    icon: IoPeopleCircle,
    children: [
      {
        name: "HRM",
        path: "hrm",
        icon: TbDashboard,
        element: <Hrm />,
      },
    ],
  },
  {
    name: "Office & Utility",
    icon: MdPeopleAlt,
    children: [
      {
        name: "Peoples",
        path: "peoples",
        icon: TbDashboard,
        element: <People />,
      },
    ],
  },
];
