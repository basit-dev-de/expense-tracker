
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Settings = () => {
  const { t } = useTranslation();
  
  const handleSaveSettings = () => {
    toast.success(t('settingsSaved'));
  };
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">{t('settings')}</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t('appearance')}</CardTitle>
              <CardDescription>{t('customizeAppearance')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t('theme')}</Label>
                <div className="flex items-center space-x-2">
                  <ThemeSwitcher />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>{t('language')}</Label>
                <div className="flex items-center space-x-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('notifications')}</CardTitle>
              <CardDescription>{t('manageNotifications')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">{t('emailNotifications')}</Label>
                <Switch id="email-notifications" />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="budget-alerts">{t('budgetAlerts')}</Label>
                <Switch id="budget-alerts" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="weekly-summary">{t('weeklySummary')}</Label>
                <Switch id="weekly-summary" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('privacy')}</CardTitle>
              <CardDescription>{t('managePrivacy')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="save-history">{t('saveHistory')}</Label>
                <Switch id="save-history" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="analytics">{t('analytics')}</Label>
                <Switch id="analytics" />
              </div>
              
              <Button variant="destructive" className="w-full">
                {t('clearAllData')}
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('account')}</CardTitle>
              <CardDescription>{t('manageAccount')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                {t('exportData')}
              </Button>
              
              <Button variant="outline" className="w-full">
                {t('importData')}
              </Button>
              
              <Button variant="default" className="w-full" onClick={handleSaveSettings}>
                {t('saveSettings')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
