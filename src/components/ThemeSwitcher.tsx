
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  
  const changeTheme = (theme: string) => {
    setTheme(theme);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          {t('lightTheme')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          {t('darkTheme')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme('system')}>
          <Monitor className="mr-2 h-4 w-4" />
          {t('systemTheme')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
