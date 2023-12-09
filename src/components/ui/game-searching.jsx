import React from "react";
import { Icons } from "./icons";
import { Progress } from "./progress";
import { Button } from "./button";

function ({ timer }) {
  return (
    <>
      <Icons.gamepad className="" />
      <Progress
        fill="!bg-green-400"
        placeholder="Searching for players..."
        className=" h-20 rounded-3xl max-w-xl"
        max={100}
        value={timer > 0 ? (5 - timer) * 10 : 100}
      />
      <Button disabled={!timer > 0 && true} className="" variant="game">
        Cancel{"..." + timer}
      </Button>
    </>
  );
}

export default GameSearching;
