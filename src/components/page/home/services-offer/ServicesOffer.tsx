import { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextElement from "@/components/TextElement";

import OperatorService from "./operator-service/OperatorService";
import PublicService from "./public-service/PublicService";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

export function ServicesOffer() {
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("public");

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);
  const t = useTranslations(getLangFromUrl(url));

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const operatorServiceTypes = [
        "operational-license",
        "spectrum-license",
        "telecom-numbering-permit",
        "equipment-ta-certificate",
        "qualified-agent-certification",
        "equipment-importation-distribution-permit",
        "tower-construction-permit",
        "fiber-cable-construction-permit",
        "frequency-interference-complaint",
      ];
      const isOperatorServiceTypes = operatorServiceTypes.some((type) =>
        hash.includes(type),
      );

      if (isOperatorServiceTypes) {
        setActiveTab("operator");
      } else {
        setActiveTab("public");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="flex flex-row bg-primary p-14 md:justify-evenly">
        <TabsTrigger value="public" className="rounded-3xl px-6">
          <TextElement variant="title">
            {t("home.serviceWeOffer.forPublic")}
          </TextElement>
        </TabsTrigger>
        <TabsTrigger value="operator" className="rounded-3xl px-6">
          <TextElement variant="title">
            {t("home.serviceWeOffer.forOperator")}
          </TextElement>
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="public"
        className="text-white md:h-[400px] lg:h-[500px]"
      >
        <PublicService />
      </TabsContent>
      <TabsContent
        value="operator"
        className="text-white md:h-[400px] lg:h-[500px]"
      >
        <OperatorService />
      </TabsContent>
    </Tabs>
  );
}
