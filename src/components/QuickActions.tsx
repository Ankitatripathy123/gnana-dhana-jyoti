import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Phone, MapPin, FileText } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: Calculator,
      label: "EMI ଗଣନା",
      description: "ଋଣ EMI ହିସାବ କରନ୍ତୁ"
    },
    {
      icon: Phone,
      label: "ସହାୟତା",
      description: "ତୁରନ୍ତ ସହାୟତା ପାଇଁ କଲ କରନ୍ତୁ"
    },
    {
      icon: MapPin,
      label: "ନିକଟତମ ବ୍ୟାଙ୍କ",
      description: "ପାଖ ବ୍ୟାଙ୍କ ଖୋଜନ୍ତୁ"
    },
    {
      icon: FileText,
      label: "ଦସ୍ତାବେଜ",
      description: "ଆବଶ୍ୟକୀୟ କାଗଜପତ୍ର"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
      <CardHeader>
        <CardTitle className="text-xl text-center">ତୁରନ୍ତ ସେବା</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="card"
              className="h-auto p-4 flex flex-col items-center gap-2 text-center"
            >
              <action.icon className="h-6 w-6 text-accent" />
              <div>
                <div className="font-semibold text-sm">{action.label}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;