//components
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import Product from "../pages/Dashboard/Product/Product";
import Purchase from "../pages/Dashboard/Purchase/Purchase";
import Sale from "../pages/Dashboard/Sale/Sale";
import Expense from "../pages/Dashboard/Expense/Expense";
import Quotation from "../pages/Dashboard/Quotations/Quotation";
import People from "../pages/Dashboard/People/People";
import Department from "../pages/Dashboard/Hrm/Department/Department";
import Employee from "../pages/Dashboard/Hrm/Employee/Employee";
import Attendance from "../pages/Dashboard/Hrm/Attendance/Attendance";
import Leaves from "../pages/Dashboard/Hrm/Leaves/Leaves";
import Salary from "../pages/Dashboard/Hrm/Salary/Salary";

//icons
import { TbDashboard } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FaHandHoldingMedical,
  FaRegClipboard,
  FaHandHoldingUsd,
  FaClipboardList,
} from "react-icons/fa";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdPeopleAlt, MdOutlineApartment } from "react-icons/md";
import { FaCartShopping, FaMoneyBillWave, FaClipboard } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { IoPeopleCircle } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: AiOutlineDashboard,
    element: <AdminDashboard />,
  },
  {
    name: "Short Hand",
    icon: FaHandHoldingMedical,
    children: [
      {
        name: "Incomes",
        path: "incomes",
        icon: GiReceiveMoney,
        element: <Product />,
      },
      {
        name: "Expenses",
        path: "expenses",
        icon: FaMoneyBillWave,
        element: <Product />,
      },
      {
        name: "Ledger",
        path: "ledger",
        icon: FaRegClipboard,
        element: <Product />,
      },
    ],
  },
  {
    name: "Commission",
    icon: FaHandHoldingUsd,
    children: [
      {
        name: "Commission",
        path: "purchases",
        icon: FaHandHoldingUsd,
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
        name: "Department",
        path: "department",
        icon: MdOutlineApartment,
        element: <Department />,
      },
      {
        name: "Employee",
        path: "employee",
        icon: IoIosPeople,
        element: <Employee />,
      },
      {
        name: "Attendance",
        path: "attendance",
        icon: FaClipboardList,
        element: <Attendance />,
      },
      {
        name: "Leaves",
        path: "leaves",
        icon: FaClipboard,
        element: <Leaves />,
      },
      {
        name: "Salary",
        path: "salary",
        icon: GiTakeMyMoney,
        element: <Salary />,
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
