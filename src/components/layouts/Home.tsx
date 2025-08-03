import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, Anvil, LayoutGrid, Paperclip, Radio } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Home = () => {
  return (
    <>
      <main className="my-4 md:my-24 px-4 sm:px-16 flex flex-col justify-between">
        <section>
          <h1 className="text-2xl font-semibold">Hello Abo!</h1>
          <h1 className="text-2xl font-semibold text-lime-900 opacity-50">
            How can I help you today?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card className="w-full md:w-48 lg:w-64 xl:w-94 bg-linear-to-b from-blue-100 to-red-50">
              <CardHeader>
                <CardTitle className="flex">
                  <div className="bg-white p-2 rounded-lg">
                    <Activity />
                  </div>
                </CardTitle>
                <CardAction className="block md:hidden">Templates</CardAction>
              </CardHeader>
              <CardFooter className="hidden md:block">
                <p>Templates</p>
              </CardFooter>
            </Card>

            <Card className="w-full md:w-48 lg:w-64 xl:w-94 bg-linear-to-b from-yellow-50 to-violet-50">
              <CardHeader>
                <CardTitle className="flex">
                  <div className="bg-white p-2 rounded-lg">
                    <Radio />
                  </div>
                </CardTitle>
                <CardAction className="block md:hidden">Agents</CardAction>
              </CardHeader>
              <CardFooter className="hidden md:block">
                <p>Agents</p>
              </CardFooter>
            </Card>

            <Card className="w-full md:w-48 lg:w-64 xl:w-94 bg-linear-to-b from-green-100 to-red-50">
              <CardHeader>
                <CardTitle className="flex">
                  <div className="bg-white p-2 rounded-lg">
                    <Anvil />
                  </div>
                </CardTitle>
                <CardAction className="block md:hidden">
                  Compabilities
                </CardAction>
              </CardHeader>
              <CardFooter className="hidden md:block">
                <p>Compabilities</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row gap-3">
            <Input className="h-12" placeholder="Ask anything from Sagehood" />
            <Button className="h-12 flex" variant="secondary">
              <LayoutGrid />
              Explore agents
            </Button>
            <Button className="h-12 hidden md:block" variant="secondary">
              <Paperclip />
            </Button>
            <Button className="h-12">Ask</Button>
          </div>
        </section>
      </main>
    </>
  );
};
