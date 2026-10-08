// Edit portfolio content in this file. No build step is required.
// Add or remove objects from projects, certifications, and posts as your work evolves.

export const siteData = {
  profile: {
    name: "Piyusha Akash",
    handle: "0x3xp",
    title: "Security Researcher",
    specialization: "AV/EDR Evasion",
    focus: [
      "AV/EDR Evasion",
      "Windows Internals",
      "Reverse Engineering",
      "Kernel Research"
    ]
  },

  projects: [
    {
      name: "Lethe",
      role: "Featured research",
      status: "Active research",
      category: "Endpoint Security",
      description: "Windows kernel research project exploring DPC-driven execution, kernel memory operations, driver visibility, persistence, and the limits of user-mode security telemetry.",
      stack: ["C", "Windows WDK", "Kernel", "DPC"],
      link: "https://github.com/0x3xp/Lethe",
      featured: true,
      note: "The project documentation explicitly treats detectability as a research question rather than claiming complete invisibility."
    },
    {
      name: "Artemis",
      role: "Low-level tooling",
      status: "Research tooling",
      category: "Windows Internals",
      description: "A C and x64 Assembly research toolkit focused on system call resolution, stub generation, and understanding execution below the Win32 API layer.",
      stack: ["C", "x64 Assembly", "MASM", "Windows"],
      link: "https://github.com/0x3xp/Artemis",
      featured: true
    },
    {
      name: "Native Adversary Framework",
      role: "Windows security tooling",
      status: "Research tooling",
      category: "Windows Internals",
      description: "A low-level Windows research framework covering process injection, PEB traversal, API resolution, and PE parsing through C and x64 Assembly.",
      stack: ["C", "x64 Assembly", "PE", "Windows NT"],
      link: "https://github.com/0x3xp/Native-Adversary-Framework",
      featured: true
    },
    {
      name: "WinSec",
      role: "Research archive",
      status: "Ongoing",
      category: "Windows Internals",
      description: "A consolidated research and learning archive covering WinAPI, Native API, PE structures, assembly, execution, processes and memory, reverse engineering, and security research.",
      stack: ["Windows", "WinAPI", "NTAPI", "PE"],
      link: "https://github.com/0x3xp/WinSec",
      featured: true
    },
    {
      name: "SENTINEX",
      role: "System tooling",
      status: "Tooling",
      category: "Windows",
      description: "A Windows reconnaissance and system information tool for host enumeration, process visibility, and post-compromise analysis workflows.",
      stack: ["C", "Windows", "System APIs"],
      link: "https://github.com/0x3xp/SENTINEX",
      featured: false
    },
    {
      name: "SetupAPI Callback Redirection",
      role: "Independent research",
      status: "Published research",
      category: "EDR Evasion",
      description: "Independent research into control-flow redirection through Windows SetupAPI callback infrastructure and the resulting endpoint visibility surface.",
      stack: ["C", "Win32", "Windows Internals", "Research"],
      link: "https://github.com/0x3xp",
      featured: false
    },
    {
      name: "Linux ExploitDev",
      role: "Research notes",
      status: "Archive",
      category: "Exploit Development",
      description: "A Linux x64 exploit development knowledge base containing low-level notes, memory corruption concepts, and practical research exercises.",
      stack: ["C", "x86-64", "Linux", "GDB"],
      link: "https://github.com/0x3xp/Linux-ExploitDev",
      featured: false
    }
  ],

  certifications: [
    {
      name: "CBFRPro",
      provider: "SecOps Group",
      detail: "Certified Binary Fuzzing & Reverse Engineering Professional",
      year: "Jul 2026",
      link: "https://pentestingexams.com/"
    },
    {
      name: "CAPT",
      provider: "Hackviser",
      detail: "Certified Associate Penetration Tester",
      year: "Feb 2026",
      link: "https://hackviser.com/capt"
    },
    {
      name: "COWA",
      provider: "Red Team Leaders",
      detail: "Certified Offensive Windows API",
      year: "2026",
      link: "https://courses.redteamleaders.com/exams/f1227a83-d041-4949-a3c6-9c5411ceb1ee"
    },
    {
      name: "Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
      detail: "Foundational security concepts and threat landscape",
      year: "Completed",
      link: "https://www.netacad.com/"
    },
    {
      name: "Computer Hardware Basics",
      provider: "Cisco Networking Academy",
      detail: "Hardware fundamentals and component-level understanding",
      year: "Completed",
      link: "https://www.netacad.com/"
    },
    {
      name: "Getting Started with Packet Tracer",
      provider: "Cisco Networking Academy",
      detail: "Network simulation and Packet Tracer fundamentals",
      year: "Completed",
      link: "https://www.netacad.com/"
    },
    {
      name: "Introduction to OSINT",
      provider: "Security Blue Team",
      detail: "Open source intelligence fundamentals",
      year: "Completed",
      link: "https://www.securityblue.team/"
    },
    {
      name: "Introduction to Virtual Machines",
      provider: "Security Blue Team",
      detail: "Virtualization fundamentals and lab environments",
      year: "Completed",
      link: "https://www.securityblue.team/"
    },
    {
      name: "Introduction to Cybersecurity",
      provider: "OPSWAT Academy",
      detail: "Cybersecurity foundations and critical infrastructure concepts",
      year: "Completed",
      link: "https://www.opswat.com/"
    },
    {
      name: "LFS101",
      provider: "Linux Foundation",
      detail: "Introduction to Linux",
      year: "2026",
      link: "https://training.linuxfoundation.org/training/introduction-to-linux/"
    }
  ],

  posts: [
    {
      title: "SetupAPI Callback Redirection",
      type: "Research",
      topics: ["Windows Internals", "EDR Evasion", "Process Injection"],
      summary: "Research into callback-based execution through Windows Setup infrastructure and the resulting security telemetry surface.",
      dateLabel: "2025",
      link: "https://github.com/0x3xp"
    },
    {
      title: "Understanding Windows Native Execution",
      type: "Technical notes",
      topics: ["Windows Internals", "Native API", "Reverse Engineering"],
      summary: "Notes on the relationship between Win32 APIs, NTDLL, system calls, kernel transitions, and the structures exposed along the way.",
      dateLabel: "Research notes",
      link: "https://github.com/0x3xp/WinSec"
    },
    {
      title: "Introduction to Exploit Development in Linux x64",
      type: "Tutorial",
      topics: ["Exploit Development", "x86-64", "Linux"],
      summary: "A foundation for understanding x64 process memory, calling conventions, stack state, debugging, and the mechanics behind exploit development.",
      dateLabel: "Published",
      link: "https://github.com/0x3xp/Linux-ExploitDev"
    }
  ]
};
