import { Breadcrumb, BreadcrumbItem as ChakraBreadcrumbItem, BreadcrumbLink, Container } from "@chakra-ui/react";
import useBreadcrumbsStore, { BreadcrumbItem } from "@hooks/useBreadcrumbsStore";
import { capital } from "@utils/stringFormat";
import { signIn, useSession } from "next-auth/react";
import { type ReactNode, useEffect } from "react";
import Navigation from "./nav";

type LayoutProps = {
    children: ReactNode | ReactNode[];
};

const BreadcrumbItem: React.FC<BreadcrumbItem> = ({ href, name, ...props }) => (
    <ChakraBreadcrumbItem {...props}>
        <BreadcrumbLink href={href}>{capital(name)}</BreadcrumbLink>
    </ChakraBreadcrumbItem>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const breadcrumbs = useBreadcrumbsStore((state) => state.items);
    const session = useSession();

    useEffect(() => {
        if (session.status === "unauthenticated") {
            signIn("github");
        }
    }, [session.status]);

    return (
        <div className="flex flex-col">
            <Navigation />
            <Breadcrumb className="p-4">
                <BreadcrumbItem href="/" name="Home" />
                {breadcrumbs.map(({ href, name }) => (
                    <BreadcrumbItem key={href} href={href} name={name} />
                ))}
            </Breadcrumb>
            <Container maxW="2xl">{children}</Container>
        </div>
    );
};

export default Layout;
