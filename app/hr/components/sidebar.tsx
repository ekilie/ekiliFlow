import Link from 'next/link'
import { Home, Users, Calendar, Settings, Briefcase, Clock, UserPlus, UserMinus, Award, FileText, UserCheck, UsersIcon } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
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
      </nav>
    </aside>
  )
}

