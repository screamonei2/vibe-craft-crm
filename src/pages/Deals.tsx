
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

interface Deal {
  id: string;
  title: string;
  client: string;
  amount: number;
  stage: "prospecting" | "qualified" | "proposal" | "negotiation" | "closed-won" | "closed-lost";
  updatedAt: Date;
}

const Deals = () => {
  const deals: Record<string, Deal[]> = {
    "prospecting": [
      {
        id: "deal1",
        title: "Software Implementation",
        client: "Acme Corporation",
        amount: 25000,
        stage: "prospecting",
        updatedAt: new Date(2023, 5, 10),
      },
      {
        id: "deal2",
        title: "Consulting Services",
        client: "TechSolutions Inc.",
        amount: 15000,
        stage: "prospecting",
        updatedAt: new Date(2023, 5, 9),
      },
    ],
    "qualified": [
      {
        id: "deal3",
        title: "Product Upgrade",
        client: "InnovateCo",
        amount: 45000,
        stage: "qualified",
        updatedAt: new Date(2023, 5, 11),
      },
      {
        id: "deal4",
        title: "Annual Maintenance",
        client: "Vision Media",
        amount: 35000,
        stage: "qualified",
        updatedAt: new Date(2023, 5, 8),
      },
    ],
    "proposal": [
      {
        id: "deal5",
        title: "Enterprise Solution",
        client: "Global Trends",
        amount: 78000,
        stage: "proposal",
        updatedAt: new Date(2023, 5, 12),
      },
    ],
    "negotiation": [
      {
        id: "deal6",
        title: "Cloud Migration",
        client: "Future Technologies",
        amount: 120000,
        stage: "negotiation",
        updatedAt: new Date(2023, 5, 7),
      },
      {
        id: "deal7",
        title: "Security Upgrade",
        client: "Acme Corporation",
        amount: 85000,
        stage: "negotiation",
        updatedAt: new Date(2023, 5, 6),
      },
    ],
    "closed-won": [
      {
        id: "deal8",
        title: "Training Program",
        client: "TechSolutions Inc.",
        amount: 55000,
        stage: "closed-won",
        updatedAt: new Date(2023, 5, 5),
      },
    ],
    "closed-lost": [
      {
        id: "deal9",
        title: "Hardware Refresh",
        client: "Vision Media",
        amount: 65000,
        stage: "closed-lost",
        updatedAt: new Date(2023, 5, 4),
      },
    ],
  };

  const stageConfig = {
    "prospecting": {
      label: "Prospecting",
      color: "border-purple-400 bg-purple-50",
    },
    "qualified": {
      label: "Qualified",
      color: "border-blue-400 bg-blue-50",
    },
    "proposal": {
      label: "Proposal",
      color: "border-cyan-400 bg-cyan-50",
    },
    "negotiation": {
      label: "Negotiation",
      color: "border-amber-400 bg-amber-50",
    },
    "closed-won": {
      label: "Closed Won",
      color: "border-emerald-400 bg-emerald-50",
    },
    "closed-lost": {
      label: "Closed Lost",
      color: "border-rose-400 bg-rose-50",
    },
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Deals Pipeline</h1>
          <p className="text-muted-foreground">
            Drag and drop deals between stages
          </p>
        </div>
        <Button className="gap-2">
          <PlusCircle size={16} />
          Add Deal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-6 min-h-[calc(100vh-200px)]">
        {Object.entries(deals).map(([stage, stageDeals]) => (
          <div key={stage} className="w-full min-w-[280px]">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-medium">
                {stageConfig[stage as keyof typeof stageConfig]?.label}
              </h3>
              <span className="text-sm text-muted-foreground">
                {stageDeals.length}
              </span>
            </div>
            <div
              className={`rounded-lg border-2 border-dashed p-2 h-full min-h-[70vh] ${
                stageConfig[stage as keyof typeof stageConfig]?.color || ""
              }`}
            >
              {stageDeals.map((deal) => (
                <Card
                  key={deal.id}
                  className="mb-3 p-3 cursor-pointer card-shadow card-shadow-hover hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="font-medium">{deal.title}</div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {deal.client}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-primary">
                      ${deal.amount.toLocaleString()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(deal.updatedAt)}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
