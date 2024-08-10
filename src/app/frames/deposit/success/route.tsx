import { Button } from "frames.js/next";
import { frames } from "../../frames";
import { supplyAmountToDefiBase } from "@/app/_actions";

const handleRequest = frames(async (ctx) => {
  supplyAmountToDefiBase();

  return {
    image: "https://i.imgur.com/D7a9GqA.png",
    buttons: [
      <Button action='link' target={"https://capital-fi.vercel.app"}>
        Visit Capital Fi
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
