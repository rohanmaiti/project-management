import { SignUp } from "@clerk/react-router";

export const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="flex flex-col items-center p-4">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-white mb-2">
            Welcome to M-Project
          </h1>
          <p className="text-blue-700-600 dark:text-gray-300">
            Sign Up to manage your projects
          </p>
        </div>
        <div>
          <SignUp 
            path="/signup"
            routing="path"
            signInUrl="/login"
            afterSignUpUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
};
