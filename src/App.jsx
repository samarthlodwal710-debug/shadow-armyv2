import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-shadow-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-wider">SHADOW ARMY</h1>
        <p className="mt-3 text-neutral-400">
          Operations Portal
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
