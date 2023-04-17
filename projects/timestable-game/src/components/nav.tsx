import { LayoutGrid, ListMusic, Music, Music2, PlayCircle } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "~/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

type NavProps = {
    children: ReactNode | ReactNode[];
};

const Nav = ({ children }: NavProps) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="rounded-md bg-white shadow-2xl transition-all dark:bg-slate-900">
            <div className="grid grid-cols-4 xl:grid-cols-5">
                <aside className="pb-12">
                    <div className="px-8 py-6">
                        <p className="flex items-center text-2xl font-semibold tracking-tight">
                            <Music className="mr-2" />
                            Timers
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="px-6 py-2">
                            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Games</h2>
                            <div className="space-y-1">
                                <Link href={"/grid"}>
                                    <Button variant="ghost" size="sm" className="w-full justify-start">
                                        <PlayCircle className="mr-2 h-4 w-4" />
                                        Grid
                                    </Button>
                                </Link>
                                <Link href={"/card-collector"}>
                                    <Button variant="ghost" size="sm" className="w-full justify-start">
                                        <LayoutGrid className="mr-2 h-4 w-4" />
                                        Card Collector
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="px-6 py-2">
                            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Social</h2>
                            <div className="space-y-1">
                                <Link href={"/leaderboards"}>
                                    <Button variant="ghost" size="sm" className="w-full justify-start">
                                        <ListMusic className="mr-2 h-4 w-4" />
                                        Leaderboards
                                    </Button>
                                </Link>
                                <Link href={"/your-scores"}>
                                    <Button variant="ghost" size="sm" className="w-full justify-start">
                                        <Music2 className="mr-2 h-4 w-4" />
                                        Your scores
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="px-6 py-2">
                            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Settings</h2>
                            <div className="space-y-1">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full justify-start"
                                    onClick={() => {
                                        setTheme(theme === "dark" ? "light" : "dark");
                                    }}
                                >
                                    <ListMusic className="mr-2 h-4 w-4" />
                                    DarkMode
                                </Button>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="col-span-3 border-l border-l-slate-200 dark:border-l-slate-700 xl:col-span-4">
                    <div className="h-full px-8 py-6">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default Nav;
