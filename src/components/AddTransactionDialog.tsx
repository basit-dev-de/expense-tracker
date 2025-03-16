
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AddTransactionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'expense' | 'income';
}

const AddTransactionDialog = ({ isOpen, onClose, type }: AddTransactionDialogProps) => {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date>(new Date());
  
  const categories = [
    "food",
    "transport",
    "housing",
    "entertainment",
    "shopping",
    "utilities",
    "healthcare",
    "education",
    "personal",
    "travel",
    "other",
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('transactionAdded'));
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'expense' ? t('addExpense') : t('addIncome')}
          </DialogTitle>
          <DialogDescription>
            {t('fillDetails')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                {t('amount')}
              </Label>
              <div className="col-span-3 flex items-center">
                <span className="mr-2">$</span>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0"
                  required
                  className="col-span-3"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                {t('date')}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className="col-span-3 justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                {t('category')}
              </Label>
              <Select required>
                <SelectTrigger id="category" className="col-span-3">
                  <SelectValue placeholder={t('selectCategory')} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {t(category)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                {t('description')}
              </Label>
              <Textarea
                id="description"
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              {t('cancel')}
            </Button>
            <Button type="submit">
              {t('save')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionDialog;
