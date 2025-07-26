import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">ଆର୍ଥିକ ଶିକ୍ଷା</h1>
              <p className="text-sm text-primary-foreground/80">ଗ୍ରାମୀଣ ଅର୍ଥ ଶିକ୍ଷା</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;