
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { AreaChart, BarChart, LineChart } from "recharts";
import MarketOverview from "@/components/MarketOverview";
import StockList from "@/components/StockList";
import Watchlist from "@/components/Watchlist";
import CurrencyConverter from "@/components/CurrencyConverter";
import MarketNews from "@/components/MarketNews";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <h1 className="text-xl font-bold">{t("marketDashboard")}</h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MarketOverview />
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>{t("quickActions")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  onClick={() => toast.success(t("downloadStarted"))}
                  variant="outline" 
                  className="justify-start"
                >
                  {t("downloadReport")}
                </Button>
                <Button 
                  onClick={() => toast.success(t("alertSet"))}
                  variant="outline" 
                  className="justify-start"
                >
                  {t("setAlert")}
                </Button>
                <Button 
                  onClick={() => toast.success(t("watchlistUpdated"))}
                  variant="outline" 
                  className="justify-start"
                >
                  {t("editWatchlist")}
                </Button>
                <Button 
                  onClick={() => toast.success(t("portfolioRefreshed"))}
                  variant="outline" 
                  className="justify-start"
                >
                  {t("refreshData")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="stocks" className="mt-6">
          <TabsList className="mb-4">
            <TabsTrigger value="stocks">{t("stocks")}</TabsTrigger>
            <TabsTrigger value="forex">{t("forex")}</TabsTrigger>
            <TabsTrigger value="crypto">{t("crypto")}</TabsTrigger>
            <TabsTrigger value="commodities">{t("commodities")}</TabsTrigger>
          </TabsList>
          <TabsContent value="stocks">
            <StockList />
          </TabsContent>
          <TabsContent value="forex">
            <CurrencyConverter />
          </TabsContent>
          <TabsContent value="crypto">
            <Watchlist type="crypto" />
          </TabsContent>
          <TabsContent value="commodities">
            <Watchlist type="commodities" />
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <MarketNews />
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © 2023 {t("marketDashboard")}. {t("allRightsReserved")}.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              {t("terms")}
            </Button>
            <Button variant="ghost" size="sm">
              {t("privacy")}
            </Button>
            <Button variant="ghost" size="sm">
              {t("contact")}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
