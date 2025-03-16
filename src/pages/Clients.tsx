
import { PlusCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ClientCard from "@/components/dashboard/ClientCard";

const Clients = () => {
  // Sample data with proper status types
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
    {
      id: "client4",
      name: "David Garcia",
      email: "david@visionmedia.com",
      phone: "+1 (555) 789-0123",
      company: "Vision Media",
      status: "active" as const, // Type assertion to const
      totalValue: 110000,
    },
    {
      id: "client5",
      name: "Emma Wilson",
      email: "emma@globaltrends.com",
      phone: "+1 (555) 234-5678",
      company: "Global Trends",
      status: "inactive" as const, // Type assertion to const
      totalValue: 65000,
    },
    {
      id: "client6",
      name: "Robert Patel",
      email: "robert@futuretech.com",
      phone: "+1 (555) 567-8901",
      company: "Future Technologies",
      status: "lead" as const, // Type assertion to const
      totalValue: 85000,
    },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Clients</h1>
          <p className="text-muted-foreground">
            Manage your client relationships
          </p>
        </div>
        <Button className="gap-2">
          <PlusCircle size={16} />
          Add Client
        </Button>
      </div>

      <div className="flex items-center w-full max-w-sm space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            className="pl-9 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
