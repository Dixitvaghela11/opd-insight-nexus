
// Mock data for the dashboard
// In a real application, this would come from API calls to your MySQL database

// Mock data for the OPD Visits Over Time chart
export const mockVisitsData = [
  { date: "2023-01-01", visits: 120 },
  { date: "2023-01-02", visits: 145 },
  { date: "2023-01-03", visits: 132 },
  { date: "2023-01-04", visits: 167 },
  { date: "2023-01-05", visits: 159 },
  { date: "2023-01-06", visits: 112 },
  { date: "2023-01-07", visits: 98 },
  { date: "2023-01-08", visits: 127 },
  { date: "2023-01-09", visits: 142 },
  { date: "2023-01-10", visits: 130 },
];

// Mock data for the Visits by Department chart
export const mockDepartmentData = [
  { department: "Cardiology", visits: 325, color: "#4CAF50" },
  { department: "Orthopedics", visits: 287, color: "#2196F3" },
  { department: "Neurology", visits: 198, color: "#FF9800" },
  { department: "Pediatrics", visits: 256, color: "#9C27B0" },
  { department: "Ophthalmology", visits: 145, color: "#F44336" },
  { department: "ENT", visits: 167, color: "#3F51B5" },
];

// Mock data for the Delay vs Prepond Reasons pie chart
export const mockReasonsData = [
  { name: "Doctor Unavailable", value: 45, color: "#FF5252" },
  { name: "Patient Request", value: 35, color: "#448AFF" },
  { name: "Emergency Case", value: 25, color: "#66BB6A" },
  { name: "Equipment Issue", value: 15, color: "#FFD740" },
  { name: "Administrative", value: 10, color: "#8D6E63" },
];

// Mock data for the Services by Payer Type chart
export const mockServicesData = [
  {
    service: "Consultation",
    insurance: 400,
    selfPay: 350,
    corporate: 200,
    government: 150
  },
  {
    service: "Lab Tests",
    insurance: 300,
    selfPay: 250,
    corporate: 150,
    government: 100
  },
  {
    service: "Radiology",
    insurance: 200,
    selfPay: 150,
    corporate: 100,
    government: 75
  },
  {
    service: "Procedures",
    insurance: 150,
    selfPay: 100,
    corporate: 75,
    government: 50
  },
];

// Mock data for Recent Visits Table
export const mockRecentVisits = [
  {
    id: "OPD00123",
    patientId: "P00456",
    patientName: "Rahul Sharma",
    doctorId: "D001",
    doctorName: "Dr. Anjali Gupta",
    department: "Cardiology",
    visitDate: "2023-01-10 09:30 AM",
    status: "Completed"
  },
  {
    id: "OPD00124",
    patientId: "P00789",
    patientName: "Priya Patel",
    doctorId: "D002",
    doctorName: "Dr. Vikram Singh",
    department: "Orthopedics",
    visitDate: "2023-01-10 10:15 AM",
    status: "In Progress"
  },
  {
    id: "OPD00125",
    patientId: "P00234",
    patientName: "Amit Kumar",
    doctorId: "D003",
    doctorName: "Dr. Neha Verma",
    department: "Neurology",
    visitDate: "2023-01-10 11:00 AM",
    status: "Scheduled"
  },
  {
    id: "OPD00126",
    patientId: "P00567",
    patientName: "Sunita Agarwal",
    doctorId: "D001",
    doctorName: "Dr. Anjali Gupta",
    department: "Cardiology",
    visitDate: "2023-01-10 11:45 AM",
    status: "Cancelled"
  },
  {
    id: "OPD00127",
    patientId: "P00890",
    patientName: "Rajesh Malhotra",
    doctorId: "D004",
    doctorName: "Dr. Suresh Reddy",
    department: "Pediatrics",
    visitDate: "2023-01-10 12:30 PM",
    status: "Completed"
  },
  {
    id: "OPD00128",
    patientId: "P00123",
    patientName: "Meera Joshi",
    doctorId: "D005",
    doctorName: "Dr. Pradeep Kumar",
    department: "Ophthalmology",
    visitDate: "2023-01-10 01:15 PM",
    status: "In Progress"
  },
];

// Mock data for Follow-up Records Table
export const mockFollowupRecords = [
  {
    id: "F00123",
    patientId: "P00456",
    patientName: "Rahul Sharma",
    scheduledDate: "2023-01-17 10:00 AM",
    reason: "Review Echo Results",
    status: "Pending",
    doctorName: "Dr. Anjali Gupta"
  },
  {
    id: "F00124",
    patientId: "P00789",
    patientName: "Priya Patel",
    scheduledDate: "2023-01-18 11:30 AM",
    reason: "Post-op Review",
    status: "Pending",
    doctorName: "Dr. Vikram Singh"
  },
  {
    id: "F00125",
    patientId: "P00234",
    patientName: "Amit Kumar",
    scheduledDate: "2023-01-05 09:15 AM",
    reason: "MRI Review",
    status: "Overdue",
    doctorName: "Dr. Neha Verma"
  },
  {
    id: "F00126",
    patientId: "P00567",
    patientName: "Sunita Agarwal",
    scheduledDate: "2023-01-03 12:45 PM",
    reason: "Blood Test Results",
    status: "Completed",
    doctorName: "Dr. Anjali Gupta"
  },
  {
    id: "F00127",
    patientId: "P00890",
    patientName: "Rajesh Malhotra",
    scheduledDate: "2023-01-20 10:30 AM",
    reason: "Vaccination Followup",
    status: "Pending",
    doctorName: "Dr. Suresh Reddy"
  },
];

// Mock data for Request Logs Timeline
export const mockRequestLogs = [
  {
    id: "REQ001",
    requestUri: "/api/opd/patient/P00456",
    requestDateTime: "2023-01-10T09:32:15.000Z",
    responseStatus: 200,
    responseTime: 124,
    user: "Dr. Anjali Gupta"
  },
  {
    id: "REQ002",
    requestUri: "/api/opd/visit/new",
    requestDateTime: "2023-01-10T09:35:22.000Z",
    responseStatus: 201,
    responseTime: 187,
    user: "Admin User"
  },
  {
    id: "REQ003",
    requestUri: "/api/opd/records/update/OPD00123",
    requestDateTime: "2023-01-10T09:40:48.000Z",
    responseStatus: 200,
    responseTime: 145,
    user: "Dr. Anjali Gupta"
  },
  {
    id: "REQ004",
    requestUri: "/api/opd/billing/P00456",
    requestDateTime: "2023-01-10T09:45:12.000Z",
    responseStatus: 200,
    responseTime: 210,
    user: "Billing Staff"
  },
  {
    id: "REQ005",
    requestUri: "/api/opd/labs/request",
    requestDateTime: "2023-01-10T09:50:33.000Z",
    responseStatus: 404,
    responseTime: 105,
    user: "Dr. Vikram Singh"
  },
  {
    id: "REQ006",
    requestUri: "/api/opd/followup/schedule",
    requestDateTime: "2023-01-10T10:02:07.000Z",
    responseStatus: 500,
    responseTime: 307,
    user: "Scheduling Staff"
  },
];
