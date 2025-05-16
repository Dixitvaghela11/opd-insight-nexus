
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Hourglass, CheckCircle2, XCircle } from "lucide-react";

interface Log {
  id: string;
  requestUri: string;
  requestDateTime: string;
  responseStatus: number;
  responseTime: number;
  user: string;
}

interface RequestLogTimelineProps {
  logs: Log[];
}

const RequestLogTimeline: React.FC<RequestLogTimelineProps> = ({ logs }) => {
  const getStatusIcon = (status: number) => {
    if (status < 300) {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    } else if (status < 400) {
      return <Hourglass className="h-5 w-5 text-amber-500" />;
    } else {
      return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusBadge = (status: number) => {
    if (status < 300) {
      return "bg-green-100 text-green-800";
    } else if (status < 400) {
      return "bg-amber-100 text-amber-800";
    } else {
      return "bg-red-100 text-red-800";
    }
  };

  const getFormattedDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return new Intl.DateTimeFormat('en-US', { 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  return (
    <div className="relative pl-8 space-y-8">
      {/* The vertical timeline line */}
      <div className="absolute top-0 bottom-0 left-3.5 w-px bg-slate-200" />

      {logs.map((log) => (
        <div key={log.id} className="relative">
          {/* The circle on the timeline */}
          <div className="absolute -left-5 p-1 bg-white rounded-full">
            {getStatusIcon(log.responseStatus)}
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h4 className="font-medium text-slate-900">{log.requestUri}</h4>
              <div className="flex items-center gap-2">
                <Badge className={getStatusBadge(log.responseStatus)}>
                  Status: {log.responseStatus}
                </Badge>
                <span className="text-xs text-slate-500">{log.responseTime}ms</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
              <span className="text-slate-500">Initiated by {log.user}</span>
              <time className="text-slate-500">{getFormattedDateTime(log.requestDateTime)}</time>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestLogTimeline;
