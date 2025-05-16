
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileEdit } from "lucide-react";

interface Visit {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  department: string;
  visitDate: string;
  status: string;
}

interface RecentVisitsTableProps {
  visits: Visit[];
}

const RecentVisitsTable: React.FC<RecentVisitsTableProps> = ({ visits }) => {
  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "Completed": "bg-green-100 text-green-800 hover:bg-green-200",
      "In Progress": "bg-blue-100 text-blue-800 hover:bg-blue-200",
      "Scheduled": "bg-purple-100 text-purple-800 hover:bg-purple-200",
      "Cancelled": "bg-red-100 text-red-800 hover:bg-red-200",
    };

    return statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="border rounded-md">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient ID</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Visit Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visits.length > 0 ? (
              visits.map((visit) => (
                <TableRow key={visit.id}>
                  <TableCell className="font-medium">{visit.patientId}</TableCell>
                  <TableCell>{visit.patientName}</TableCell>
                  <TableCell>{visit.doctorName}</TableCell>
                  <TableCell>{visit.department}</TableCell>
                  <TableCell>{visit.visitDate}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadge(visit.status)}>
                      {visit.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <FileEdit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  No visit records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {visits.length > 0 && (
        <div className="flex items-center justify-between px-4 py-2 border-t">
          <div className="text-sm text-slate-500">
            Showing <strong>{visits.length}</strong> of <strong>{visits.length}</strong> visits
          </div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentVisitsTable;
