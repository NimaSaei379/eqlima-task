import React, { useEffect } from "react";

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  useEffect(() => {}, []);

  return children;
}

export default ProtectedRoutes;
