import Link from 'next/link'
import { Home, Users, Calendar, BarChart2, Settings, Briefcase, Clock, UserPlus, UserMinus, Award, FileText, UserCheck, UsersIcon, DollarSign, CreditCard, Truck, PieChart, BookOpen, Banknote, FileSpreadsheet, Building, RefreshCw } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-72 space-y-6 py-7 px-2 fixed top-0 left-0 h-screen overflow-y-auto transition duration-200 ease-in-out">
      <nav className="space-y-2">
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2 h-5 w-5" /> Dashboard
        </Link>
        <Link href="/employees" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2 h-5 w-5" /> Employees
        </Link>
        <Link href="/hr-configuration" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Settings className="inline-block mr-2 h-5 w-5" /> HR Configuration
        </Link>
        <Link href="/staff-transfer" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Briefcase className="inline-block mr-2 h-5 w-5" /> Staff Transfer
        </Link>
        <Link href="/timesheet-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Clock className="inline-block mr-2 h-5 w-5" /> Timesheet Management
        </Link>
        <Link href="/manage-interns" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UserPlus className="inline-block mr-2 h-5 w-5" /> Manage Interns
        </Link>
        <Link href="/recruitment-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UsersIcon className="inline-block mr-2 h-5 w-5" /> Recruitment Management
        </Link>
        <Link href="/separation-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UserMinus className="inline-block mr-2 h-5 w-5" /> Separation Management
        </Link>
        <Link href="/performance-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Award className="inline-block mr-2 h-5 w-5" /> Performance Management
        </Link>
        <Link href="/leave-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Calendar className="inline-block mr-2 h-5 w-5" /> Leave Management
        </Link>
        <Link href="/delegations" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UserCheck className="inline-block mr-2 h-5 w-5" /> Delegations
        </Link>
        <Link href="/committee-settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FileText className="inline-block mr-2 h-5 w-5" /> Committee Settings
        </Link>

        {/* Finance Section */}
        <div className="pt-4">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Finance
          </h3>
        </div>
        <Link href="/hr/finance" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <DollarSign className="inline-block mr-2 h-5 w-5" /> Finance Dashboard
        </Link>
        <Link href="/hr/finance/budget" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <PieChart className="inline-block mr-2 h-5 w-5" /> Budget
        </Link>
        <Link href="/hr/finance/imprest-reimbursement" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <CreditCard className="inline-block mr-2 h-5 w-5" /> Imprest Reimbursement
        </Link>
        <Link href="/hr/finance/payment-lists" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FileSpreadsheet className="inline-block mr-2 h-5 w-5" /> Payment Lists
        </Link>
        <Link href="/hr/finance/vehicle-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Truck className="inline-block mr-2 h-5 w-5" /> Vehicle Management
        </Link>
        <Link href="/hr/finance/income-capturing" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Banknote className="inline-block mr-2 h-5 w-5" /> Income Capturing
        </Link>
        <Link href="/hr/finance/general-ledger" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <BookOpen className="inline-block mr-2 h-5 w-5" /> General Ledger
        </Link>
        <Link href="/hr/finance/asset-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Building className="inline-block mr-2 h-5 w-5" /> Asset Management
        </Link>
        <Link href="/hr/finance/tax-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FileText className="inline-block mr-2 h-5 w-5" /> Tax Management
        </Link>
        <Link href="/hr/finance/payment-vouchers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FileText className="inline-block mr-2 h-5 w-5" /> Payment Vouchers
        </Link>
        <Link href="/hr/finance/petty-cash-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <DollarSign className="inline-block mr-2 h-5 w-5" /> Petty Cash Management
        </Link>
        <Link href="/hr/finance/financial-reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <BarChart2 className="inline-block mr-2 h-5 w-5" /> Financial Reports
        </Link>
        <Link href="/hr/finance/financial-settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Settings className="inline-block mr-2 h-5 w-5" /> Financial Settings
        </Link>
        <Link href="/hr/finance/forex-transfer" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <RefreshCw className="inline-block mr-2 h-5 w-5" /> Forex Transfer
        </Link>
        <Link href="/hr/finance/employee-imprest-balance" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2 h-5 w-5" /> Employee Imprest Balance
        </Link>
      </nav>
    </aside>
  )
}

