import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextElement from "@/components/TextElement";

import OperatorService from "./operator-service/OperatorService";
import PublicServiceList from "./public-service/PublicServiceList";

export function ServicesOffer() {
  return (
    <Tabs defaultValue="public" className="w-full">
      <TabsList className="flex flex-row items-center justify-evenly bg-primary p-12">
        <TabsTrigger value="public">
          <TextElement variant="title">For Public</TextElement>{" "}
        </TabsTrigger>
        <TabsTrigger value="operator">
          <TextElement variant="title">For Operator</TextElement>{" "}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="public" className="text-white">
        <PublicServiceList />
      </TabsContent>
      <TabsContent value="operator" className="text-white">
        <OperatorService />
      </TabsContent>
    </Tabs>
  );
}
