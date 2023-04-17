import { Fragment, useCallback, useEffect, useState } from "react";
import { Input } from "~/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { cn } from "~/utils/className";

import { Label } from "~/components/ui/label";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import useLocalGameStore from "~/hooks/useLocalGameStore";
import { Separator } from "~/components/ui/separator";

// + 1 to add border with time numbers;
const SIZE = 2;
const LENGTH = SIZE + 1;
const HEIGHT = SIZE + 1;

type CellProps = {
    currentlySelected: string;
    row: number;
    column: number;
    name: string;
    onClick: () => void;
    onCorrect: () => void;
    onCellType: () => void;
};

const Cell = ({ onCellType, onCorrect, onClick, name, column, currentlySelected, row }: CellProps) => {
    const [givenValue, setGivenValue] = useState("");
    const [invalidInput, setInvalidInput] = useState("");
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    useEffect(() => {
        if (!isPopoverOpen && givenValue === `${column * row}`) onCorrect();
    }, [onCorrect, row, column, givenValue, isPopoverOpen]);

    return (
        <Popover open={isPopoverOpen}>
            <PopoverTrigger asChild onClick={() => givenValue === `${column * row}` || setIsPopoverOpen(true)}>
                <div
                    className={cn(
                        "border-2 border-slate-600 p-4 text-center transition-all duration-150 hover:cursor-pointer hover:border-slate-400 hover:bg-slate-400",
                        {
                            "bg-slate-600": currentlySelected === name,
                            "border-green-400 bg-green-400 hover:border-green-500 hover:bg-green-500":
                                !isPopoverOpen && givenValue === `${column * row}`,
                            "border-red-400 bg-red-400 hover:border-red-500 hover:bg-red-500":
                                !isPopoverOpen && givenValue != "" && givenValue !== `${column * row}`,
                        }
                    )}
                    onClick={onClick}
                >
                    {givenValue}
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Enter Your Guess!</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{invalidInput}</p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Input
                                id="width"
                                defaultValue={givenValue}
                                className={cn("col-span-2 h-8", { "border-2 border-red-500": invalidInput !== "" })}
                                onChange={(e) => {
                                    // Always trigger this callback
                                    onCellType();
                                    if (!isPopoverOpen && givenValue === `${column * row}`) return;
                                    if (isNaN(+e.target.value)) {
                                        setInvalidInput("Please enter a number.");
                                        return;
                                    }
                                    setInvalidInput("");
                                    setGivenValue(e.target.value);
                                }}
                                onKeyUp={(e) => {
                                    if (e.key === "Enter") {
                                        setIsPopoverOpen(false);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

const Grid = () => {
    const [selectedGrid, setSelectedGrid] = useState("");
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [isGameComplete, setGameComplete] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [highscore, updateHighscore] = useLocalGameStore("grid");

    const onCorrect = useCallback(() => {
        setTotalCorrect((prev) => prev + 1);
    }, []);

    const onCellType = () => {
        console.log("Started timer", Date.now());
        setStartTime(Date.now());
    };

    const newGame = () => {
        setEndTime(0);
        setStartTime(0);
        setGameComplete(false);
        setTotalCorrect(0);
        setSelectedGrid("");
    };

    const saveScore = () => {
        updateHighscore(endTime);
        newGame();
    };

    useEffect(() => {
        if (totalCorrect === (LENGTH - 1) * (HEIGHT - 1)) {
            setEndTime(Date.now() - startTime);
            setGameComplete(true);
        }
    }, [totalCorrect, startTime]);

    return (
        <>
            <h1>Grid</h1>
            <h2>How To Play!</h2>
            <p>Click on a grid cell, and enter the correct number for that grid cell.</p>
            <Separator />
            <h3>Highscore: {highscore?.grid}</h3>

            <div className="grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-1">
                {Array.from(Array(LENGTH)).map((_, column) => {
                    return (
                        <Fragment key={column}>
                            {Array.from(Array(HEIGHT)).map((_, row) => {
                                const key = `${row}:${column}`;

                                // Do not display anything in top left corner
                                if (row == 0 && column == 0) return <div key={key}></div>;

                                // Style outer edge number differently
                                if (row == 0 || column == 0) {
                                    return (
                                        <div key={key} className="p-4">
                                            {row + column}
                                        </div>
                                    );
                                }

                                // Actual grid numbers
                                return (
                                    <Cell
                                        column={column}
                                        currentlySelected={selectedGrid}
                                        key={key}
                                        name={key}
                                        row={row}
                                        onClick={() => setSelectedGrid(key)}
                                        onCorrect={onCorrect}
                                        onCellType={onCellType}
                                    />
                                );
                            })}
                        </Fragment>
                    );
                })}
            </div>

            <Sheet open={isGameComplete}>
                <SheetContent position={"bottom"} size="content">
                    <SheetHeader>
                        <SheetTitle>Congrats! You completed the grid in {endTime} seconds!</SheetTitle>
                        <SheetDescription>
                            Enter a username below to save your time to the{" "}
                            <Link href={"/leaderboard"}>leardboards!</Link>
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" defaultValue={""} className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type="submit" onClick={saveScore}>
                            Save Score
                        </Button>
                        <Button type="submit" onClick={newGame} variant={"subtle"}>
                            New Game (Will not save Score)
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default Grid;
