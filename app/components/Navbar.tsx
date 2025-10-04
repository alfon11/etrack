"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect } from "react";
import { checkAndAddUser } from "../actions";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      checkAndAddUser(user?.primaryEmailAddress?.emailAddress);
    }
  }, [user]);

  return (
    <div className="bg-base-200/30 px-5 md:px[10%] py-4">
      {isLoaded &&
        (isSignedIn ? (
          <>
            <div className="flex justify-between items-center">
              <div className="flex text-2xl items-center font-bold">
                e<span className="text-accent">.Track</span>
              </div>

              <div className="md:flex hidden">
                <Link href={"/dashboard"} className="btn rounded-full">
                  Tableau de bord
                </Link>
                <Link href={"/budgets"} className="btn rounded-full mx-4">
                  Mes budgets
                </Link>
                <Link href={"/transactions"} className="btn rounded-full">
                  Mes Transactions
                </Link>
              </div>
              <UserButton />
            </div>

            <div className="md:hidden flex mt-2 justify-center">
              <Link href={"/dashboard"} className="btn btn-sm rounded-full">
                Tableau de bord
              </Link>
              <Link href={"/budgets"} className="btn btn-sm rounded-full mx-4">
                Mes budgets
              </Link>
              <Link href={"/transactions"} className="btn btn-sm rounded-full">
                Mes Transactions
              </Link>
            </div>
          </>
        ) : (
          <div>
            <div className="flex mt-2 justify-center ">
              <Link href={"/sign-in"} className="btn btn-sm rounded-full">
                Se connecter
              </Link>
              <Link
                href={"/sign-up"}
                className="btn btn-sm btn-accent rounded-full mx-4"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
