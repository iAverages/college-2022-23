import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Nav from "~/components/nav";
import { DndContext } from "@dnd-kit/core";

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <DndContext>
                <Nav>
                    <Component {...pageProps} />
                </Nav>
            </DndContext>
        </ThemeProvider>
    );
};

export default api.withTRPC(MyApp);
