import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            NeuroPress.ai
          </h1>
          <p className="text-muted-foreground mt-2">AI-Powered News Analytics</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
