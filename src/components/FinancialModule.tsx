import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FinancialModuleProps {
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
  buttonText: string;
  variant?: "default" | "accent" | "success";
}

const FinancialModule = ({ icon: Icon, title, description, content, buttonText, variant = "default" }: FinancialModuleProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${
            variant === "accent" ? "bg-accent/10" : 
            variant === "success" ? "bg-success/10" : 
            "bg-primary/10"
          }`}>
            <Icon className={`h-6 w-6 ${
              variant === "accent" ? "text-accent" :
              variant === "success" ? "text-success" :
              "text-primary"
            }`} />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 mb-4 leading-relaxed">{content}</p>
        <Button 
          variant={variant === "accent" ? "accent" : variant === "success" ? "success" : "default"} 
          className="w-full group"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default FinancialModule;