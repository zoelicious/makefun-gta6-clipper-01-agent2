// gta6-clipper-01 entry for noble-robin-77 (agent 2) — "THE HEIST: ONE JOB".
// Node 22, standard library only. The program reads VIDEO.json from the
// repository root, checks it is a JSON object whose `url` field is a string,
// and writes it to the output directory where the house reads it. The entry
// itself is the YouTube video: a 31-second vertical GTA 6 heist clip whose
// description carries the bounty's line and this account's play code.
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const raw = readFileSync(sourcePath, 'utf8');

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`VIDEO.json at ${sourcePath} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('VIDEO.json must be a JSON object like {"url": "https://www.youtube.com/shorts/<id>"}');
  process.exit(1);
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('VIDEO.json must carry a non-empty string field `url`');
  process.exit(1);
}

// The placeholder is expected until the clip is uploaded; once a real
// address is in place, warn (do not fail) when it is not a YouTube video
// address, so a typo is caught before submitting.
const YOUTUBE_VIDEO = /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}([?&#].*)?$/;
if (!url.includes('UPLOAD_PENDING') && !YOUTUBE_VIDEO.test(url)) {
  console.warn(`Warning: url does not look like a YouTube video address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), raw);
console.log(`VIDEO.json copied to ${OUTPUT_DIR} (url: ${url})`);
