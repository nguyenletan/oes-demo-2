import "./App.css";
import ProgressDashboard from "./pages/ProgressDashboard";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProgressDashboard />} />
          <Route path="/student-progress-tracker/" element={<ProgressDashboard />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
