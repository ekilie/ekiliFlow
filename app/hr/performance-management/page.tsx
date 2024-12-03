import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PerformanceManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Performance Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create Performance Review</CardTitle>
          <CardDescription>Initiate a new performance review</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="employee">Employee</Label>
            <Select>
              <SelectTrigger id="employee">
                <SelectValue placeholder="Select employee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="jane-smith">Jane Smith</SelectItem>
                <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="review-period">Review Period</Label>
            <Select>
              <SelectTrigger id="review-period">
                <SelectValue placeholder="Select review period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="q2-2023">Q2 2023</SelectItem>
                <SelectItem value="q3-2023">Q3 2023</SelectItem>
                <SelectItem value="q4-2023">Q4 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="review-date">Review Date</Label>
            <Input id="review-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea id="comments" placeholder="Enter review comments" />
          </div>
          <Button>Create Review</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Performance Reviews</CardTitle>
          <CardDescription>List of recent performance reviews</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Review Period</TableHead>
                <TableHead>Review Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Q2 2023</TableCell>
                <TableCell>2023-06-30</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Q2 2023</TableCell>
                <TableCell>2023-07-05</TableCell>
                <TableCell>In Progress</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

