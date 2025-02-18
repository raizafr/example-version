const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Ambil tag terbaru dari Git
function getGitVersion() {
  try {
    return execSync("git describe --tags --abbrev=0").toString().trim();
  } catch (error) {
    console.error("Failed to get git version:", error);
    return "unknown";
  }
}

// Simpan ke dalam file .env.local
const version = getGitVersion();
const envPath = path.resolve(__dirname, "../.env.local");

fs.writeFileSync(envPath, `NEXT_PUBLIC_APP_VERSION=${version}\n`);

console.log(`Version ${version} written to .env.local`);
