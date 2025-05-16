
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, User, Building, Clock, UserCheck } from "lucide-react";

interface SummaryCardsProps {
  data: {
    totalVisits: number;
    todayVisits: number;
    doctorsRegistered: number;
    departments: number;
    followupPending: number;
    activePatients: number;
  };
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ data }) => {
  const cards = [
    {
      title: "Total OPD Visits",
      value: data.totalVisits.toLocaleString(),
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      trend: "+5.2%",
      trendUp: true,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Today's Visits",
      value: data.todayVisits,
      icon: <User className="h-8 w-8 text-green-500" />,
      trend: "+12.3%",
      trendUp: true,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Doctors Registered",
      value: data.doctorsRegistered,
      icon: <Users className="h-8 w-8 text-purple-500" />,
      trend: "+1.8%",
      trendUp: true,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Departments",
      value: data.departments,
      icon: <Building className="h-8 w-8 text-indigo-500" />,
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Follow-up Pending",
      value: data.followupPending,
      icon: <Clock className="h-8 w-8 text-amber-500" />,
      trend: "-2.4%",
      trendUp: false,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Active Patients",
      value: data.activePatients,
      icon: <UserCheck className="h-8 w-8 text-teal-500" />,
      trend: "+3.7%",
      trendUp: true,
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, index) => (
        <Card key={index} className={`${card.bgColor} border ${card.borderColor}`}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-600">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                {card.trend && (
                  <p className={`text-xs mt-1 ${card.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {card.trend} from last month
                  </p>
                )}
              </div>
              <div className="p-3 rounded-full">{card.icon}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SummaryCards;
