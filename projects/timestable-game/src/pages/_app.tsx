import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Nav from "~/components/nav";

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Nav>
                <Component {...pageProps} />
            </Nav>
        </ThemeProvider>
    );
};

export default api.withTRPC(MyApp);
