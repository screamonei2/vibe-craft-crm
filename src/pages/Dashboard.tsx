
import { BarChart3, CalendarDays, Clock, DollarSign, Users } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import DealsChart from "@/components/dashboard/DealsChart";
import ClientCard from "@/components/dashboard/ClientCard";
import UpcomingTasks from "@/components/dashboard/UpcomingTasks";
import RevenueChart from "@/components/dashboard/RevenueChart";

const Dashboard = () => {
  // Sample data
  const dealsData = [
    { name: "Prospecting", value: 23500, color: "#8b5cf6" },
    { name: "Qualified", value: 45700, color: "#6366f1" },
    { name: "Proposal", value: 78200, color: "#3b82f6" },
    { name: "Negotiation", value: 125400, color: "#0ea5e9" },
    { name: "Closed Won", value: 189300, color: "#10b981" },
  ];

  const revenueData = [
    { name: "Jan", revenue: 4000, goal: 4500 },
    { name: "Feb", revenue: 5000, goal: 5000 },
    { name: "Mar", revenue: 6000, goal: 5500 },
    { name: "Apr", revenue: 5500, goal: 6000 },
    { name: "May", revenue: 7000, goal: 6500 },
    { name: "Jun", revenue: 8000, goal: 7000 },
    { name: "Jul", revenue: 9000, goal: 8000 },
    { name: "Aug", revenue: 8500, goal: 8500 },
    { name: "Sep", revenue: 10000, goal: 9000 },
    { name: "Oct", revenue: 11000, goal: 10000 },
    { name: "Nov", revenue: 12000, goal: 11000 },
    { name: "Dec", revenue: 14000, goal: 12000 },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "New client added",
      description: "Sarah Johnson from Acme Corp was added as a new client",
      time: new Date(2023, 5, 12, 14, 32),
      type: "client" as const, // Type assertion to const
    },
    {
      id: 2,
      title: "Deal stage updated",
      description: "TechSolutions deal moved to Negotiation stage",
      time: new Date(2023, 5, 12, 10, 15),
      type: "deal" as const, // Type assertion to const
    },
    {
      id: 3,
      title: "Task completed",
      description: "Follow-up call with Brian from InnovateCo",
      time: new Date(2023, 5, 11, 16, 45),
      type: "task" as const, // Type assertion to const
    },
    {
      id: 4,
      title: "New message",
      description: "You received a message from Lisa regarding the proposal",
      time: new Date(2023, 5, 11, 11, 25),
      type: "message" as const, // Type assertion to const
    },
  ];

  const upcomingTasks = [
    {
      id: "task1",
      title: "Call with Sarah Johnson from Acme Corp",
      date: new Date(2023, 5, 15, 14, 0),
      completed: false,
      priority: "high" as const, // Type assertion to const
    },
    {
      id: "task2",
      title: "Send proposal to TechSolutions",
      date: new Date(2023, 5, 16, 12, 0),
      completed: false,
      priority: "medium" as const, // Type assertion to const
    },
    {
      id: "task3",
      title: "Follow up with InnovateCo",
      date: new Date(2023, 5, 17, 10, 30),
      completed: false,
      priority: "low" as const, // Type assertion to const
    },
    {
      id: "task4",
      title: "Prepare presentation for Vision Media",
      date: new Date(2023, 5, 18, 9, 0),
      completed: false,
      priority: "high" as const, // Type assertion to const
    },
  ];

  const clients = [
    {
      id: "client1",
      name: "Sarah Johnson",
      email: "sarah@acmecorp.com",
      phone: "+1 (555) 123-4567",
      company: "Acme Corporation",
      status: "active" as const, // Type assertion to const
      totalValue: 125000,
    },
    {
      id: "client2",
      name: "Michael Chen",
      email: "michael@techsolutions.com",
      phone: "+1 (555) 987-6543",
      company: "TechSolutions Inc.",
      status: "lead" as const, // Type assertion to const
      totalValue: 75000,
    },
    {
      id: "client3",
      name: "Lisa Martin",
      email: "lisa@innovateco.com",
      phone: "+1 (555) 456-7890",
      company: "InnovateCo",
      status: "active" as const, // Type assertion to const
      totalValue: 95000,
    },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, here's what's happening with your business today.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value="$456,700"
          icon={<DollarSign className="text-primary" />}
          description="Total revenue this month"
          trend={{ value: 12.5, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Active Deals"
          value="38"
          icon={<BarChart3 className="text-accent" />}
          description="Deals in pipeline"
          trend={{ value: 8.2, isPositive: true }}
          variant="accent"
        />
        <StatCard
          title="Total Clients"
          value="142"
          icon={<Users className="text-emerald-500" />}
          description="Active clients in system"
          trend={{ value: 4.6, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Meetings Today"
          value="5"
          icon={<CalendarDays className="text-amber-500" />}
          description="Scheduled for today"
          trend={{ value: 1.2, isPositive: false }}
          variant="warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueChart data={revenueData} className="lg:col-span-2" />
        <DealsChart data={dealsData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-xl font-semibold">Recent Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <UpcomingTasks tasks={upcomingTasks} />
        </div>
      </div>

      <RecentActivity activities={recentActivities} />
    </div>
  );
};

export default Dashboard;
