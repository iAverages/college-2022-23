import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavContent = () => {
    const { data: sessionData } = useSession();

    return (
        <>
            {sessionData && (
                <li>
                    <Link href="/account/orders">Previous Orders</Link>
                </li>
            )}
            <li>
                {/* In theory this should always show sign out since the layout component would redirect otherwise */}
                <a onClick={() => (sessionData ? signOut() : signIn())}>Sign {sessionData ? "Out" : "In"}</a>
            </li>
        </>
    );
};

const Nav: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar w-full bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">
                        <Link href="/">Pizzers!</Link>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            <NavContent />
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
                    <NavContent />
                </ul>
            </div>
        </div>
    );
};
export default Nav;
