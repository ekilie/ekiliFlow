import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const leaveRequests = [
  { id: 1, employee: "John Doe", type: "Vacation", startDate: "2023-07-01", endDate: "2023-07-05", status: "Pending" },
  { id: 2, employee: "Jane Smith", type: "Sick Leave", startDate: "2023-06-28", endDate: "2023-06-30", status: "Approved" },
  { id: 3, employee: "Mike Johnson", type: "Personal", startDate: "2023-07-10", endDate: "2023-07-12", status: "Rejected" },
  // Add more leave request data as needed
]

export default function LeaveManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Leave Management</h2>
        <Button>Request Leave</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.employee}</TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.startDate}</TableCell>
              <TableCell>{request.endDate}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

