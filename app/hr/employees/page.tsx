import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const employees = [
  { id: 1, name: "John Doe", email: "john@example.com", department: "IT", position: "Software Engineer", userType: "Full Time" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", department: "HR", position: "HR Manager", userType: "Full Time" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", department: "Finance", position: "Accountant", userType: "Part Time" },
  // Add more employee data as needed
]

export default function EmployeesList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Employees</h2>
        <Link href="/employees/add">
          <Button>Add Employee</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>User Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.userType}</TableCell>
              <TableCell>
                <Link href={`/employees/${employee.id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

