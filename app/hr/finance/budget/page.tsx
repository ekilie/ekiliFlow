import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Budget() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Budget Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create Budget</CardTitle>
          <CardDescription>Set up a new budget for a department or project</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="budget-name">Budget Name</Label>
            <Input id="budget-name" placeholder="Enter budget name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              <SelectTrigger id="department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="Enter budget amount" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
            <Input id="start-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">End Date</Label>
            <Input id="end-date" type="date" />
          </div>
          <Button>Create Budget</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Budgets</CardTitle>
          <CardDescription>Overview of active budgets</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Budget Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Q3 Marketing Campaign</TableCell>
                <TableCell>Marketing</TableCell>
                <TableCell>$50,000</TableCell>
                <TableCell>2023-07-01</TableCell>
                <TableCell>2023-09-30</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Annual IT Infrastructure</TableCell>
                <TableCell>IT</TableCell>
                <TableCell>$200,000</TableCell>
                <TableCell>2023-01-01</TableCell>
                <TableCell>2023-12-31</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

