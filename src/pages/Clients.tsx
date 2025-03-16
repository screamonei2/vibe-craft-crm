
import { PlusCircle, Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ClientCard from "@/components/dashboard/ClientCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Clients = () => {
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredClients = clients.filter(client => {
    // Filter by status if one is selected
    if (filterStatus && client.status !== filterStatus) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !client.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !client.company.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const totals = {
    clients: clients.length,
    active: clients.filter(c => c.status === 'active').length,
    lead: clients.filter(c => c.status === 'lead').length,
    inactive: clients.filter(c => c.status === 'inactive').length,
    value: clients.reduce((sum, client) => sum + client.totalValue, 0),
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold font-mono text-glow">Clients</h1>
          <p className="text-muted-foreground">
            Manage your client relationships
          </p>
        </div>
        <Button className="gap-2 hover-lift">
          <PlusCircle size={16} />
          Add Client
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="glass-card p-4 rounded-lg flex items-center justify-between border">
          <div>
            <p className="text-sm text-muted-foreground">Total Clients</p>
            <p className="text-2xl font-mono font-bold">{totals.clients}</p>
          </div>
        </div>
        <div className="glass-card p-4 rounded-lg flex items-center justify-between border">
          <div>
            <p className="text-sm text-muted-foreground">Active Clients</p>
            <p className="text-2xl font-mono font-bold text-emerald-600">{totals.active}</p>
          </div>
          <div className="status-dot active"></div>
        </div>
        <div className="glass-card p-4 rounded-lg flex items-center justify-between border">
          <div>
            <p className="text-sm text-muted-foreground">Lead Clients</p>
            <p className="text-2xl font-mono font-bold text-amber-600">{totals.lead}</p>
          </div>
          <div className="status-dot lead"></div>
        </div>
        <div className="glass-card p-4 rounded-lg flex items-center justify-between border">
          <div>
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-2xl font-mono font-bold text-primary">
              ${totals.value.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            className="pl-9 w-full font-mono"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-1 bg-secondary rounded-full p-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "rounded-full px-3 text-xs font-mono",
                filterStatus === null ? "bg-primary text-white" : ""
              )}
              onClick={() => setFilterStatus(null)}
            >
              All
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "rounded-full px-3 text-xs font-mono",
                filterStatus === "active" ? "bg-emerald-500 text-white" : ""
              )}
              onClick={() => setFilterStatus("active")}
            >
              Active
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "rounded-full px-3 text-xs font-mono",
                filterStatus === "lead" ? "bg-amber-500 text-white" : ""
              )}
              onClick={() => setFilterStatus("lead")}
            >
              Leads
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "rounded-full px-3 text-xs font-mono",
                filterStatus === "inactive" ? "bg-slate-500 text-white" : ""
              )}
              onClick={() => setFilterStatus("inactive")}
            >
              Inactive
            </Button>
          </div>
          
          <Button variant="outline" size="icon">
            <SlidersHorizontal size={16} />
          </Button>
        </div>
      </div>

      {filteredClients.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-muted/30 rounded-lg border border-dashed">
          <div className="rounded-full bg-muted p-3 mb-4">
            <Search size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-1 font-mono">No clients found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <Button variant="outline" onClick={() => {
            setSearchTerm("");
            setFilterStatus(null);
          }}>
            Reset filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClients.map((client) => (
            <ClientCard key={client.id} client={client} className="hover-lift" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Clients;
