import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextElement from "@/components/TextElement";

import OperatorService from "./operator-service/OperatorService";
import PublicService from "./public-service/PublicService";

export function ServicesOffer() {
  return (
    <Tabs defaultValue="public" className="w-full">
      <TabsList className="flex flex-row items-center justify-evenly bg-primary p-12">
        <TabsTrigger value="public" className="rounded-3xl">
          <TextElement variant="title">For Public</TextElement>{" "}
        </TabsTrigger>
        <TabsTrigger value="operator" className="rounded-3xl">
          <TextElement variant="title">For Operator</TextElement>{" "}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="public" className="text-white">
        <PublicService />
      </TabsContent>
      <TabsContent value="operator" className="text-white">
        <OperatorService />
      </TabsContent>
    </Tabs>
  );
}
