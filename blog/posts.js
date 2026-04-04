/**
 * ╔══════════════════════════════════════════════════════════════╗
 *  BLOG REGISTRY — posts.js
 *  This is the ONLY file you edit when publishing a new post.
 *
 *  WORKFLOW:
 *  1. Write your post → save as  blog/posts/your-slug.html
 *  2. Add one object to the POSTS array below  (newest at top)
 *  3. If you used a new tag, add it to TAG_COLORS at the bottom
 *  4. git add posts.js posts/your-slug.html && git commit && git push
 *  5. Done — the blog index auto-renders the new card.
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ══════════════════════════════════════════════════════════════
//  SECTION 1: POSTS ARRAY
//  ─────────────────────
//  Add a new object here for every post you publish.
//  Keep newest post at the TOP of the array.
//
//  FIELDS — all are required unless marked optional:
//
//  slug      (string)   → The filename WITHOUT the .html extension.
//                         Must exactly match your file in posts/
//                         Example: "windows-hardening" → posts/windows-hardening.html
//
//  title     (string)   → Full post title shown on the card and browser tab.
//
//  date      (string)   → Publication date in "YYYY-MM-DD" format.
//                         Example: "2026-04-01"
//
//  readTime  (string)   → Estimated reading time shown on the card.
//                         Example: "10 min read"
//                         Tip: ~200 words per minute is a good estimate.
//
//  excerpt   (string)   → 1-2 sentence summary shown on the listing card.
//                         Keep it under ~200 characters for clean card layout.
//                         This is also used by the search function.
//
//  tags      (array)    → Lowercase tag strings. Used for tag filter buttons.
//                         Use existing tags when possible for better filtering UX.
//                         To add a NEW tag you must also add it to TAG_COLORS below.
//                         Example: ["windows", "malware-dev", "red-team"]
//
//  featured  (boolean)  → true  = shown as a large featured card at the top.
//                          false = shown in the regular post grid below.
//                          Tip: keep only 1-2 posts featured at a time.
// ══════════════════════════════════════════════════════════════

const POSTS = [

    // ── ADD NEW POSTS HERE (newest at the top) ─────────────────

    // ▼▼▼ COPY THIS BLOCK AND FILL IT IN FOR EACH NEW POST ▼▼▼
    // {
    //     slug:     "your-post-slug",
    //     title:    "Your Post Title",
    //     date:     "2026-04-01",
    //     readTime: "10 min read",
    //     excerpt:  "One or two sentence summary that appears on the blog card.",
    //     tags:     ["tag-one", "tag-two"],
    //     featured: false,
    // },
    // ▲▲▲ END OF COPY BLOCK ▲▲▲

    {
        slug:     "basic-process-injection",
        title:    "Basic Process Injection — CreateRemoteThread Technique",
        date:     "2026-04-01",
        readTime: "14 min read",
        excerpt:  "A complete code walkthrough of a classic CreateRemoteThread process injector in C — process enumeration with Toolhelp32, VirtualAllocEx, WriteProcessMemory, shellcode generation with msfvenom, and remote thread execution.",
        tags:     ["malware-dev", "windows", "internals", "red-team", "shellcode"],
        featured: true,
    },
    {
        slug:     "dcomp-kernel-attack-surface",
        title:    "Windows DirectComposition — Kernel-Mode Attack Surface Analysis",
        date:     "2026-03-31",
        readTime: "18 min read",
        excerpt:  "SSN extraction for NtDCompositionCommitChannel & NtDCompositionCreateChannel, full Ghidra trace of the dcomp.dll commit pipeline, and kernel-side analysis of win32kbase.sys batch dispatch logic. No CVE — full analysis.",
        tags:     ["windows", "internals", "reverse-engineering", "exploit-dev", "red-team"],
        featured: false,
    },
    {
        slug:     "windows-hardening",
        title:    "Windows Hardening: From Default Install to Fortress",
        date:     "2025-12-01",
        readTime: "12 min read",
        excerpt:  "A systematic walkthrough of hardening a Windows 11 endpoint — BitLocker XTS-AES 256, LAPS, WDAC, killing LLMNR/NetBIOS, and PowerShell CLM configurations that actually hold against modern threats.",
        tags:     ["windows", "hardening", "blue-team", "internals"],
        featured: false,
    },

    // ── END OF POSTS ───────────────────────────────────────────

];


// ══════════════════════════════════════════════════════════════
//  SECTION 2: TAG COLORS
//  ─────────────────────
//  Every tag used in POSTS above must have a color entry here.
//  If you add a new tag in a post's tags[] array, add its color
//  here too — otherwise it will render in the default grey.
//
//  Use hex color codes. Pick colors that are visible on a dark
//  background (#060608). Bright/saturated colors work best.
//
//  Format:
//  "tag-name": "#hexcolor",
//
//  The tag name must be lowercase and match EXACTLY what you
//  wrote in the tags[] array of your post objects above.
// ══════════════════════════════════════════════════════════════

const TAG_COLORS = {

    // ── Windows & Internals ────────────────────────────────────
    "windows":              "#00b4ff",   // bright blue
    "internals":            "#a78bfa",   // purple
    "hardening":            "#00ff9d",   // green (matches site accent)
    "blue-team":            "#00aaff",   // lighter blue

    // ── Offensive Security ─────────────────────────────────────
    "red-team":             "#ff2d55",   // red
    "malware-dev":          "#ff2d55",   // red (same family as red-team)
    "evasion":              "#ff6b35",   // orange-red
    "exploit-dev":          "#ef4444",   // bright red
    "shellcode":            "#f97316",   // orange  ← used by process injection post

    // ── Analysis & Reverse Engineering ────────────────────────
    "reverse-engineering":  "#f59e0b",   // amber/gold
    "tools":                "#10b981",   // emerald green

    // ── Recon & Intelligence ───────────────────────────────────
    "osint":                "#8b5cf6",   // violet
    "recon":                "#ec4899",   // pink

    // ── Other / Miscellaneous ──────────────────────────────────
    "ctf":                  "#00e5ff",   // cyan
    "linux":                "#84cc16",   // lime green
    "networking":           "#06b6d4",   // teal
    "kernel":               "#c084fc",   // light purple
    "win32k":               "#fb923c",   // orange (win32k subsystem specific)

    // ── ADD NEW TAGS HERE ──────────────────────────────────────
    // "your-new-tag":      "#hexcolor",

};


// ══════════════════════════════════════════════════════════════
//  SECTION 3: DEFAULT COLOR (do not usually need to change)
//  ─────────────────────────────────────────────────────────
//  This color is used for any tag that does NOT have an entry
//  in TAG_COLORS above. It acts as a fallback so the site
//  never breaks if you forget to add a tag color.
// ══════════════════════════════════════════════════════════════

const TAG_DEFAULT_COLOR = "#555870";   // muted grey — safe fallback
