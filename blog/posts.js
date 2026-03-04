/**
 * ============================================================
 *  BLOG REGISTRY — posts.js
 *  Edit this file every time you publish a new post.
 *
 *  HOW TO ADD A POST:
 *  1. Write your post using post-template.html → save as posts/your-slug.html
 *  2. Add one entry to the POSTS array below (newest first)
 *  3. Commit & push — done.
 *
 *  FIELDS:
 *   slug      → filename without .html  (e.g. "windows-hardening")
 *   title     → post title
 *   date      → "YYYY-MM-DD"
 *   readTime  → estimated read time string (e.g. "8 min read")
 *   excerpt   → one or two sentence summary shown on the card
 *   tags      → array of lowercase tag strings (used for filtering)
 *   featured  → true = shown larger at top of listing (max 1-2)
 * ============================================================
 */

const POSTS = [

    // ── EXAMPLE POSTS — replace / delete these ──────────────
    {
        slug:     "windows-hardening",
        title:    "Windows Hardening: From Default Install to Fortress",
        date:     "2025-12-01",
        readTime: "12 min read",
        excerpt:  "A systematic walkthrough of hardening a Windows 11 endpoint — BitLocker XTS-AES 256, LAPS, WDAC, killing LLMNR/NetBIOS, and PowerShell CLM configurations that actually hold against modern threats.",
        tags:     ["windows", "hardening", "blue-team", "internals"],
        featured: true
    },

];

// ── TAG COLORS — add new tags here with a hex color ─────────
const TAG_COLORS = {
    "windows":            "#00b4ff",
    "hardening":          "#00ff9d",
    "blue-team":          "#0af",
    "internals":          "#a78bfa",
    "malware-dev":        "#ff2d55",
    "evasion":            "#ff6b35",
    "red-team":           "#ff2d55",
    "reverse-engineering":"#f59e0b",
    "tools":              "#10b981",
    "osint":              "#8b5cf6",
    "recon":              "#ec4899",
    "exploit-dev":        "#ef4444",
    "ctf":                "#00e5ff",
    "linux":              "#84cc16",
    "networking":         "#06b6d4",
};

// Default color for unknown tags
const TAG_DEFAULT_COLOR = "#555870";
