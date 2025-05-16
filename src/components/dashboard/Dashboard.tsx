
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { User, Calendar, Users, Building, Clock, UserCheck } from "lucide-react";

import SummaryCards from "./SummaryCards";
import VisitsChart from "./charts/VisitsChart";
import DepartmentChart from "./charts/DepartmentChart";
import ReasonsPieChart from "./charts/ReasonsPieChart";
import ServicesByPayerChart from "./charts/ServicesByPayerChart";
import RecentVisitsTable from "./tables/RecentVisitsTable";
import FollowupTable from "./tables/FollowupTable";
import RequestLogTimeline from "./timeline/RequestLogTimeline";

// Mock data for development (to be replaced with API calls)
import { 
  mockVisitsData,
  mockDepartmentData, 
  mockReasonsData, 
  mockServicesData,
  mockRecentVisits,
  mockFollowupRecords,
  mockRequestLogs 
} from "../data/mockData";

const Dashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [timeRange, setTimeRange] = useState<string>("week");

  // Summary data
  const summaryData = {
    totalVisits: 14567,
    todayVisits: 127,
    doctorsRegistered: 89,
    departments: 12,
    followupPending: 43,
    activePatients: 876
  };

  // Filter data based on selections (would be API calls in production)
  const filteredVisits = mockRecentVisits.filter(visit => {
    if (selectedDepartment !== "all" && visit.department !== selectedDepartment) return false;
    if (selectedDoctor !== "all" && visit.doctorId !== selectedDoctor) return false;
    if (selectedStatus !== "all" && visit.status !== selectedStatus) return false;
    if (searchQuery && !visit.patientName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 mb-1">OPD Dashboard</h1>
        <p className="text-slate-500">Monitor and analyze outpatient department performance</p>
      </div>

      <SummaryCards data={summaryData} />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="visits">OPD Visits</TabsTrigger>
          <TabsTrigger value="followups">Follow-ups</TabsTrigger>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  OPD Visits Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Time Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-72">
                  <VisitsChart data={mockVisitsData} timeRange={timeRange} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Visits by Department
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <DepartmentChart data={mockDepartmentData} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Delay vs Prepond Reasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ReasonsPieChart data={mockReasonsData} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Services by Payer Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ServicesByPayerChart data={mockServicesData} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="visits" className="space-y-6">
          {/* OPD Visits Table with Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Recent OPD Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Filter by Doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Doctors</SelectItem>
                    <SelectItem value="D001">Dr. Sharma</SelectItem>
                    <SelectItem value="D002">Dr. Patel</SelectItem>
                    <SelectItem value="D003">Dr. Gupta</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Filter by Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Cardiology">Cardiology</SelectItem>
                    <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="Neurology">Neurology</SelectItem>
                    <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                    <SelectItem value="Scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-[250px]"
                />
              </div>
              
              <RecentVisitsTable visits={filteredVisits} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="followups" className="space-y-6">
          {/* Follow-up Records */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Follow-up Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Follow-up Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input
                  placeholder="Search patients..."
                  className="w-full md:w-[250px]"
                />
              </div>
              
              <FollowupTable followups={mockFollowupRecords} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
          {/* Request Log Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Request Logs Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <RequestLogTimeline logs={mockRequestLogs} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
