import { ClerkProvider } from "@clerk/react-router";
import { useThemeContext } from "../theme/useThemeContext";
import { dark, neobrutalism } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

export const ClerkProviderWithTheme = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useThemeContext();
  return (
    <ClerkProvider
      appearance={{
        theme: theme === "dark" ? dark : "simple",
      }}
      publishableKey={PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};
