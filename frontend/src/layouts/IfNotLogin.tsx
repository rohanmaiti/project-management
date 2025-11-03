import { SignedOut, useUser } from "@clerk/react-router";
import { Navigate, Outlet } from "react-router";
import { Loading } from "../components/Loading";

export const IfNotLogin = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <Loading />;
  }

  if (isSignedIn) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
    <>
      <SignedOut>
        <Outlet />
      </SignedOut>
    </>
  );
};
