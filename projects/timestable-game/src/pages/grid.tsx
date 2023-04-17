import { useCallback, useEffect, useState } from "react";
import { Input } from "~/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { cn } from "~/utils/className";
import * as Portal from "@radix-ui/react-portal";

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
};

const Cell = ({ onCorrect, onClick, name, column, currentlySelected, row }: CellProps) => {
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

    const onCorrect = useCallback(() => {
        setTotalCorrect((prev) => prev + 1);
    }, []);

    useEffect(() => {
        console.log("totalCorrect", totalCorrect);
        console.log((LENGTH - 1) * (HEIGHT - 1));
        if (totalCorrect === (LENGTH - 1) * (HEIGHT - 1)) {
            setGameComplete(true);
        }
    }, [totalCorrect]);

    return (
        <>
            <h1>Grid</h1>
            <h2>How To Play!</h2>
            <p>Click on a grid cell, and enter the correct number for that grid cell.</p>

            <div className="grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-1">
                {Array.from(Array(LENGTH)).map((_, column) => {
                    return Array.from(Array(HEIGHT)).map((_, row) => {
                        const key = `${row}:${column}`;

                        // Do not display anything in top left corner
                        if (row == 0 && column == 0) return <div></div>;

                        // Style outer edge number differently
                        if (row == 0 || column == 0) {
                            return (
                                <div key={row + column} className="p-4">
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
                            />
                        );
                    });
                })}
            </div>
            {isGameComplete && (
                <Portal.Root>
                    <div> Game complete</div>
                </Portal.Root>
            )}
        </>
    );
};

export default Grid;
