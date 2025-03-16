
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('de')}>
          {t('german')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
