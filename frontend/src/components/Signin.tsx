import { SignIn } from "@clerk/react-router";

export const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to M-Project
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Sign in to manage your projects
          </p>
        </div>
        <SignIn />
      </div>
    </div>
  );
};
