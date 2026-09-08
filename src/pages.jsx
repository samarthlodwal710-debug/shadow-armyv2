import React from "react";
import { Link } from "react-router-dom";
import { Card, EmptyState, PageShell } from "./components.jsx";

function Dashboard() {
  return (
    <PageShell title="Dashboard" subtitle="Operations overview">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Members", "—"],
          ["Announcements", "—"],
          ["Clearance", "—"],
          ["System", "Online"],
        ].map(([label, value]) => (
          <Card key={label} className="p-5">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              {label}
            </p>
            <p className="mt-3 text-2xl font-bold text-white">{value}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-6">
        <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
          Welcome
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Shadow Army Portal</h2>
        <p className="mt-2 text-sm text-neutral-400">
          Frontend interface is ready. Database integration will be added
          separately.
        </p>
      </Card>
    </PageShell>
  );
}

function Members() {
  return (
    <PageShell title="Members" subtitle="Member directory">
      <EmptyState
        title="No member data connected"
        message="Members will appear here after the frontend is connected to the existing database."
      />
    </PageShell>
  );
}

function Profile() {
  return (
    <PageShell title="Profile" subtitle="Account information">
      <Card className="max-w-2xl p-6">
        <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
          Profile
        </p>
        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs text-neutral-500">Name</label>
            <input
              className="mt-1 w-full rounded-lg border border-neutral-800 bg-shadow-950 px-3 py-2.5 text-sm outline-none focus:border-neutral-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-xs text-neutral-500">Username</label>
            <input
              className="mt-1 w-full rounded-lg border border-neutral-800 bg-shadow-950 px-3 py-2.5 text-sm outline-none focus:border-neutral-600"
              placeholder="Username"
            />
          </div>
        </div>
      </Card>
    </PageShell>
  );
}

function Rules() {
  return (
    <PageShell title="Rules" subtitle="Portal guidelines">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Respect member privacy.",
          "Keep account credentials secure.",
          "Follow assigned access boundaries.",
          "Report suspicious activity to administrators.",
        ].map((rule, index) => (
          <Card key={rule} className="p-5">
            <span className="font-mono text-xs text-neutral-600">
              RULE {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm text-neutral-300">{rule}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

function Announcements() {
  return (
    <PageShell title="Announcements" subtitle="Latest updates">
      <EmptyState
        title="No announcements"
        message="Announcements will appear here when connected to the existing data."
      />
    </PageShell>
  );
}

function AdminPanel() {
  return (
    <PageShell title="Admin Panel" subtitle="Administrative controls">
      <div className="grid gap-4 md:grid-cols-3">
        {["Members", "Announcements", "Activity Logs"].map((item) => (
          <Card key={item} className="p-5">
            <p className="text-sm font-medium text-neutral-200">{item}</p>
            <p className="mt-2 text-xs text-neutral-500">
              Database integration is currently disabled.
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-shadow-950 px-4 text-neutral-100">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <p className="text-center text-xs font-mono tracking-[0.3em] text-neutral-500">
          SHADOW ARMY
        </p>

        <h1 className="mt-4 text-center text-2xl font-bold">Sign in</h1>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-neutral-800 bg-shadow-950 px-3 py-3 text-sm outline-none focus:border-neutral-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-neutral-800 bg-shadow-950 px-3 py-3 text-sm outline-none focus:border-neutral-600"
          />

          <button className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
            Sign in
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-500">
          New member?{" "}
          <Link to="/register" className="text-neutral-200 hover:text-white">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-shadow-950 px-4 text-neutral-100">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <p className="text-center text-xs font-mono tracking-[0.3em] text-neutral-500">
          SHADOW ARMY
        </p>

        <h1 className="mt-4 text-center text-2xl font-bold">Create account</h1>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-lg border border-neutral-800 bg-shadow-950 px-3 py-3 text-sm outline-none focus:border-neutral-600"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-neutral-800 bg-shadow-950 px-3 py-3 text-sm outline-none focus:border-neutral-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-neutral-800 bg-shadow-950 px-3 py-3 text-sm outline-none focus:border-neutral-600"
          />

          <button className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
            Register
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-500">
          Already registered?{" "}
          <Link to="/login" className="text-neutral-200 hover:text-white">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}

export {
  Dashboard,
  Members,
  Profile,
  Rules,
  Announcements,
  AdminPanel,
  Login,
  Register,
};
