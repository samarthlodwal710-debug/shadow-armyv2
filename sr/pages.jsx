import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Lock,
  LogIn,
  Mail,
  Menu,
  Shield,
  ShieldCheck,
  User,
  Users,
  XCircle,
} from "lucide-react";

import { Card, EmptyState, PageShell } from "./components.jsx";

/* -------------------------------------------------------
   Shared UI
------------------------------------------------------- */

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-500">
      {children}
    </p>
  );
}

function StatusBadge({ children, tone = "neutral" }) {
  const styles = {
    neutral: "border-neutral-800 bg-neutral-900 text-neutral-400",
    success: "border-emerald-900/50 bg-emerald-950/30 text-emerald-400",
    warning: "border-amber-900/50 bg-amber-950/30 text-amber-400",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
        styles[tone]
      }`}
    >
      {children}
    </span>
  );
}

function LoginBrand() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
        <ShieldCheck size={27} className="text-white" />
      </div>

      <p className="mt-5 text-xs font-mono font-semibold tracking-[0.35em] text-neutral-400">
        SHADOW ARMY
      </p>

      <p className="mt-2 text-xs text-neutral-600">
        Secure Operations Portal
      </p>
    </div>
  );
}

function AuthInput({
  icon: Icon,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-neutral-400">
        {label}
      </span>

      <div className="relative">
        <Icon
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-600"
        />

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-neutral-800 bg-shadow-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-neutral-700 focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700"
        />
      </div>
    </label>
  );
}

/* -------------------------------------------------------
   Dashboard
------------------------------------------------------- */

function Dashboard({ onMenu }) {
  const stats = [
    {
      label: "Members",
      value: "—",
      icon: Users,
      note: "Database not connected",
    },
    {
      label: "Announcements",
      value: "—",
      icon: Bell,
      note: "No live data",
    },
    {
      label: "Clearance",
      value: "—",
      icon: Lock,
      note: "Awaiting authentication",
    },
    {
      label: "System",
      value: "ONLINE",
      icon: Activity,
      note: "Frontend operational",
    },
  ];

  return (
    <PageShell
      title="Dashboard"
      subtitle="Operations overview"
      onMenu={onMenu}
    >
      <div className="space-y-6">
        <Card className="overflow-hidden">
          <div className="relative p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.02] blur-3xl" />

            <div className="relative">
              <StatusBadge tone="success">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                System operational
              </StatusBadge>

              <h2 className="mt-5 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Welcome to the Shadow Army Portal.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
                Central interface for members, announcements, rules and
                administrative operations.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card
                key={stat.label}
                className="group p-5 transition hover:border-neutral-700"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-neutral-800 bg-shadow-950 p-2.5">
                    <Icon size={18} className="text-neutral-400" />
                  </div>

                  {stat.label === "System" && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  )}
                </div>

                <SectionLabel>{stat.label}</SectionLabel>

                <p className="mt-2 text-xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-[11px] text-neutral-600">
                  {stat.note}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between">
              <div>
                <SectionLabel>Portal status</SectionLabel>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  System overview
                </h3>
              </div>

              <Shield size={20} className="text-neutral-600" />
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Frontend", "Operational", "success"],
                ["Database", "Not connected", "neutral"],
                ["Authentication", "Frontend only", "warning"],
              ].map(([name, status, tone]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-xl border border-neutral-800 bg-shadow-950 px-4 py-3"
                >
                  <span className="text-sm text-neutral-400">{name}</span>
                  <StatusBadge tone={tone}>{status}</StatusBadge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <SectionLabel>Quick access</SectionLabel>

            <div className="mt-4 space-y-2">
              {[
                ["Members", "/members", Users],
                ["Rules", "/rules", FileText],
                ["Announcements", "/announcements", Bell],
              ].map(([name, path, Icon]) => (
                <Link
                  key={path}
                  to={path}
                  className="flex items-center justify-between rounded-xl border border-neutral-800 bg-shadow-950 px-4 py-3 transition hover:border-neutral-700 hover:bg-shadow-900"
                >
                  <span className="flex items-center gap-3 text-sm text-neutral-300">
                    <Icon size={16} className="text-neutral-600" />
                    {name}
                  </span>

                  <ChevronRight size={16} className="text-neutral-700" />
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}

/* -------------------------------------------------------
   Members
------------------------------------------------------- */

function Members({ onMenu }) {
  return (
    <PageShell title="Members" subtitle="Member directory" onMenu={onMenu}>
      <Card className="overflow-hidden">
        <div className="border-b border-neutral-800 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-neutral-800 bg-shadow-950 p-2.5">
              <Users size={19} className="text-neutral-400" />
            </div>

            <div>
              <SectionLabel>Directory</SectionLabel>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Member directory
              </h2>
            </div>
          </div>
        </div>

        <div className="p-6">
          <EmptyState
            title="No member data connected"
            message="The member directory is ready for the existing database. No placeholder member records have been added."
          />
        </div>
      </Card>
    </PageShell>
  );
}

/* -------------------------------------------------------
   Profile
------------------------------------------------------- */

function Profile({ onMenu }) {
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
  });

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setSaved(false);
  }

  function handleSave(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <PageShell title="Profile" subtitle="Account information" onMenu={onMenu}>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-800 bg-shadow-950">
              <User size={30} className="text-neutral-500" />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-white">
              Your Profile
            </h2>

            <p className="mt-1 text-xs text-neutral-600">
              Personal account information
            </p>

            <div className="mt-5">
              <StatusBadge>Frontend only</StatusBadge>
            </div>
          </div>
        </Card>

        <Card className="lg:col-span-2 p-6 sm:p-7">
          <SectionLabel>Account details</SectionLabel>

          <h2 className="mt-1 text-lg font-semibold text-white">
            Profile information
          </h2>

          <form onSubmit={handleSave} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs text-neutral-500">
                  Name
                </span>
                <input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-neutral-800 bg-shadow-950 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-700 focus:border-neutral-600"
                />
              </label>

              <label>
                <span className="mb-2 block text-xs text-neutral-500">
                  Username
                </span>
                <input
                  value={form.username}
                  onChange={(e) =>
                    updateField("username", e.target.value)
                  }
                  placeholder="Username"
                  className="w-full rounded-xl border border-neutral-800 bg-shadow-950 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-700 focus:border-neutral-600"
                />
              </label>
            </div>

            <label>
              <span className="mb-2 block text-xs text-neutral-500">
                Email
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-neutral-800 bg-shadow-950 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-700 focus:border-neutral-600"
              />
            </label>

            {saved && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-900/50 bg-emerald-950/20 px-4 py-3 text-xs text-emerald-400">
                <CheckCircle2 size={16} />
                Changes saved locally for this session.
              </div>
            )}

            <button
              type="submit"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Save changes
            </button>

            <p className="text-[11px] text-neutral-700">
              Database saving is disabled in the frontend-only phase.
            </p>
          </form>
        </Card>
      </div>
    </PageShell>
  );
}

/* -------------------------------------------------------
   Rules
------------------------------------------------------- */

function Rules({ onMenu }) {
  const rules = [
    [
      "Respect member privacy.",
      "Personal and account information must be handled responsibly.",
    ],
    [
      "Keep credentials secure.",
      "Never share passwords or account access with other members.",
    ],
    [
      "Follow access boundaries.",
      "Use only the areas and features available to your assigned role.",
    ],
    [
      "Report suspicious activity.",
      "Unusual portal activity should be reported to administrators.",
    ],
    [
      "Use the portal responsibly.",
      "Do not misuse portal features or attempt unauthorized access.",
    ],
    [
      "Follow administrator instructions.",
      "Administrative decisions and security notices should be respected.",
    ],
  ];

  return (
    <PageShell title="Rules" subtitle="Portal guidelines" onMenu={onMenu}>
      <div className="mb-6">
        <Card className="p-6">
          <SectionLabel>Code of conduct</SectionLabel>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Shadow Army rules
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
            These guidelines define responsible use of the portal and help
            maintain a secure environment.
          </p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {rules.map(([title, description], index) => (
          <Card
            key={title}
            className="group p-5 transition hover:border-neutral-700"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-widest text-neutral-600">
                RULE {String(index + 1).padStart(2, "0")}
              </span>

              <Shield size={17} className="text-neutral-700" />
            </div>

            <h3 className="mt-5 text-sm font-semibold text-neutral-200">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              {description}
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

/* -------------------------------------------------------
   Announcements
------------------------------------------------------- */

function Announcements({ onMenu }) {
  return (
    <PageShell
      title="Announcements"
      subtitle="Latest updates"
      onMenu={onMenu}
    >
      <Card className="p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-neutral-800 bg-shadow-950 p-2.5">
            <Bell size={19} className="text-neutral-400" />
          </div>

          <div>
            <SectionLabel>Updates</SectionLabel>
            <h2 className="mt-1 text-lg font-semibold text-white">
              Announcements
            </h2>
          </div>
        </div>

        <div className="mt-6">
          <EmptyState
            title="No announcements"
            message="Live announcements will appear here after the frontend is connected to the existing data."
          />
        </div>
      </Card>
    </PageShell>
  );
}

/* -------------------------------------------------------
   Admin Panel
------------------------------------------------------- */

function AdminPanel({ onMenu }) {
  const tools = [
    {
      title: "Member management",
      description:
        "Review and manage member records when database integration is enabled.",
      icon: Users,
    },
    {
      title: "Announcements",
      description:
        "Create and manage official portal announcements in a future connected phase.",
      icon: Bell,
    },
    {
      title: "Activity logs",
      description:
        "Monitor administrative activity and system events.",
      icon: Activity,
    },
    {
      title: "Security",
      description:
        "Review access and security configuration.",
      icon: ShieldCheck,
    },
  ];

  return (
    <PageShell
      title="Admin Panel"
      subtitle="Administrative controls"
      onMenu={onMenu}
    >
      <div className="space-y-6">
        <Card className="border-neutral-700 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <SectionLabel>Administrator area</SectionLabel>

              <h2 className="mt-2 text-xl font-semibold text-white">
                Control center
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
                Administrative interface is prepared, but database mutations
                are disabled during the frontend-only phase.
              </p>
            </div>

            <StatusBadge tone="warning">Database disabled</StatusBadge>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Card
                key={tool.title}
                className="p-6 transition hover:border-neutral-700"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-neutral-800 bg-shadow-950 p-3">
                    <Icon size={19} className="text-neutral-400" />
                  </div>

                  <ChevronRight size={17} className="text-neutral-700" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {tool.description}
                </p>

                <div className="mt-5">
                  <StatusBadge>Frontend only</StatusBadge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

/* -------------------------------------------------------
   Login
------------------------------------------------------- */

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(null);

    if (!email.trim() || !password.trim()) {
      setMessage({
        type: "error",
        text: "Please enter your email and password.",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessage({
        type: "success",
        text: "Frontend demo only — authentication is not connected yet.",
      });
    }, 700);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-shadow-950 px-4 py-8 text-neutral-100">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative w-full max-w-md">
        <LoginBrand 
