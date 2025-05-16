
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
import { Calendar, Check, X } from "lucide-react";

interface Followup {
  id: string;
  patientId: string;
  patientName: string;
  scheduledDate: string;
  reason: string;
  status: string;
  doctorName: string;
}

interface FollowupTableProps {
  followups: Followup[];
}

const FollowupTable: React.FC<FollowupTableProps> = ({ followups }) => {
  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "Completed": "bg-green-100 text-green-800 hover:bg-green-200",
      "Pending": "bg-amber-100 text-amber-800 hover:bg-amber-200",
      "Overdue": "bg-red-100 text-red-800 hover:bg-red-200",
      "Cancelled": "bg-slate-100 text-slate-800 hover:bg-slate-200",
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
              <TableHead>Scheduled Date</TableHead>
              <TableHead>Follow-up Reason</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {followups.map((followup) => (
              <TableRow key={followup.id}>
                <TableCell className="font-medium">{followup.patientId}</TableCell>
                <TableCell>{followup.patientName}</TableCell>
                <TableCell>{followup.scheduledDate}</TableCell>
                <TableCell>{followup.reason}</TableCell>
                <TableCell>{followup.doctorName}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusBadge(followup.status)}>
                    {followup.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <Calendar className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-600">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600">
                    <X className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FollowupTable;
