import Header from "@/components/Header";
import FinancialModule from "@/components/FinancialModule";
import QuickActions from "@/components/QuickActions";
import { PiggyBank, CreditCard, TrendingUp, Shield, Users, Award } from "lucide-react";

const Index = () => {
  const modules = [
    {
      icon: PiggyBank,
      title: "ସଞ୍ଚୟ ଏବଂ ଜମା",
      description: "ଟଙ୍କା ସଞ୍ଚୟ କରିବାର ସହଜ ଉପାୟ",
      content: "ନିୟମିତ ସଞ୍ଚୟ କରି ଆପଣଙ୍କ ଭବିଷ୍ୟତକୁ ସୁରକ୍ଷିତ କରନ୍ତୁ। ବ୍ୟାଙ୍କରେ ସଞ୍ଚୟ ଖାତା ଖୋଲିବା ଏବଂ ସୁଦ ବିଷୟରେ ଜାଣନ୍ତୁ।",
      buttonText: "ସଞ୍ଚୟ ଆରମ୍ଭ କରନ୍ତୁ",
      variant: "success" as const
    },
    {
      icon: CreditCard,
      title: "ବ୍ୟାଙ୍କିଙ୍ଗ ସେବା",
      description: "ଆଧୁନିକ ବ୍ୟାଙ୍କିଙ୍ଗ ସେବାର ବ୍ୟବହାର",
      content: "ATM, ଇଣ୍ଟରନେଟ ବ୍ୟାଙ୍କିଙ୍ଗ, ମୋବାଇଲ ବ୍ୟାଙ୍କିଙ୍ଗ ଏବଂ UPI ର ବ୍ୟବହାର ଶିଖନ୍ତୁ। ଡିଜିଟାଲ ଲେଣଦେଣ କରନ୍ତୁ।",
      buttonText: "ବ୍ୟାଙ୍କିଙ୍ଗ ଶିଖନ୍ତୁ",
      variant: "accent" as const
    },
    {
      icon: TrendingUp,
      title: "ବିନିଯୋଗ ମୂଳତତ୍ତ୍ୱ",
      description: "ସରଳ ବିନିଯୋଗ ବିକଳ୍ପ",
      content: "ସୁରକ୍ଷିତ ବିନିଯୋଗ ଯୋଜନା ଯେପରିକି FD, RD, NSC ଏବଂ SIP ବିଷୟରେ ଜାଣନ୍ତୁ। ଅଳ୍ପ ଟଙ୍କାରେ ବିନିଯୋଗ ଆରମ୍ଭ କରନ୍ତୁ।",
      buttonText: "ବିନିଯୋଗ ଆରମ୍ଭ କରନ୍ତୁ",
      variant: "default" as const
    },
    {
      icon: Shield,
      title: "ବୀମା ଏବଂ ସୁରକ୍ଷା",
      description: "ଜୀବନ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ ବୀମା",
      content: "ପରିବାରର ସୁରକ୍ଷା ପାଇଁ ଜୀବନ ବୀମା, ସ୍ୱାସ୍ଥ୍ୟ ବୀମା ଏବଂ ଫସଲ ବୀମା ବିଷୟରେ ଜାଣନ୍ତୁ।",
      buttonText: "ବୀମା ଜାଣନ୍ତୁ",
      variant: "success" as const
    },
    {
      icon: Users,
      title: "ଋଣ ଏବଂ ଉଧାର",
      description: "ସଠିକ ଋଣ ନେବାର ଉପାୟ",
      content: "ଗୃହ ଋଣ, ଶିକ୍ଷା ଋଣ, କୃଷି ଋଣ ଏବଂ ବ୍ୟବସାୟିକ ଋଣ ପାଇଁ ଆବେଦନ ପ୍ରକ୍ରିୟା ଏବଂ ସର୍ତ୍ତାବଳୀ ଜାଣନ୍ତୁ।",
      buttonText: "ଋଣ ପ୍ରକ୍ରିୟା ଜାଣନ୍ତୁ",
      variant: "accent" as const
    },
    {
      icon: Award,
      title: "ସରକାରୀ ଯୋଜନା",
      description: "କଲ୍ୟାଣମୂଳକ ଯୋଜନା ଏବଂ ସବସିଡି",
      content: "PMJDY, PMJJBY, PMSBY, ଏବଂ ଅନ୍ୟାନ୍ୟ ସରକାରୀ ଆର୍ଥିକ ଯୋଜନାର ଲାଭ ଉଠାନ୍ତୁ।",
      buttonText: "ଯୋଜନା ଦେଖନ୍ତୁ",
      variant: "default" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">ସ୍ୱାଗତମ୍</h2>
          <p className="text-lg text-muted-foreground">ଆର୍ଥିକ ସାକ୍ଷରତା ବୃଦ୍ଧି କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ଭବିଷ୍ୟତକୁ ସୁରକ୍ଷିତ କରନ୍ତୁ</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <QuickActions />
        </div>

        {/* Financial Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <FinancialModule
              key={index}
              icon={module.icon}
              title={module.title}
              description={module.description}
              content={module.content}
              buttonText={module.buttonText}
              variant={module.variant}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center py-6 border-t border-border">
          <p className="text-muted-foreground">ଆର୍ଥିକ ଶିକ୍ଷା - ଗ୍ରାମୀଣ ବିକାଶ ପାଇଁ ଏକ ପଦକ୍ଷେପ</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
