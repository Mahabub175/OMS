//components
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import Product from "../pages/Dashboard/Product/Product";
import Quotation from "../pages/Dashboard/Quotations/Quotation";
import Department from "../pages/Dashboard/Hrm/Department/Department";
import Employee from "../pages/Dashboard/Hrm/Employee/Employee";
import Attendance from "../pages/Dashboard/Hrm/Attendance/Attendance";
import Leaves from "../pages/Dashboard/Hrm/Leaves/Leaves";
import Salary from "../pages/Dashboard/Hrm/Salary/Salary";
import Beneficiary from "../pages/Dashboard/Loan/Beneficiary";
import Installment from "../pages/Dashboard/Loan/Installment";
import Loan from "../pages/Dashboard/Loan/Loan";
import Books from "../pages/Dashboard/Test/Books";

//icons
import { TbDashboard } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FaHandHoldingMedical,
  FaRegClipboard,
  FaHandHoldingUsd,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import {
  MdPeopleAlt,
  MdOutlineApartment,
  MdOutlineLocalPhone,
} from "react-icons/md";
import {
  FaCartShopping,
  FaMoneyBillWave,
  FaClipboard,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";
import { IoPeopleCircle } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import Phone from "../pages/Dashboard/Others/Phones/Phone";

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
    name: "Commissions",
    icon: FaHandHoldingUsd,
    children: [
      {
        name: "Commission",
        path: "commission",
        icon: FaHandHoldingUsd,
        element: <Quotation />,
      },
    ],
  },
  {
    name: "Capitals",
    icon: FaCartShopping,
    children: [
      {
        name: "Capital",
        path: "capital",
        icon: TbDashboard,
        element: <Quotation />,
      },
    ],
  },
  {
    name: "Sales",
    icon: FaMoneyBillWave,
    children: [
      {
        name: "Sale",
        path: "sale",
        icon: TbDashboard,
        element: <Quotation />,
      },
    ],
  },
  {
    name: "Loans",
    icon: GiTakeMyMoney,
    children: [
      {
        name: "Beneficiary",
        path: "loan-beneficiary",
        icon: FaUsers,
        element: <Beneficiary />,
      },
      {
        name: "Loan",
        path: "loan",
        icon: GiReceiveMoney,
        element: <Loan />,
      },
      {
        name: "Loan Installment",
        path: "loan-installment",
        icon: FaMoneyBillTransfer,
        element: <Installment />,
      },
      {
        name: "Loan Transaction",
        path: "loan-transaction",
        icon: FaMoneyBillTrendUp,
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
        element: <Quotation />,
      },
    ],
  },
  {
    name: "Others",
    icon: PiDotsThreeCircleFill,
    children: [
      {
        name: "Phones",
        path: "phones",
        icon: MdOutlineLocalPhone,
        element: <Phone />,
      },
    ],
  },
  {
    name: "Test",
    icon: MdPeopleAlt,
    children: [
      {
        name: "Books",
        path: "books",
        icon: TbDashboard,
        element: <Books />,
      },
    ],
  },
];
