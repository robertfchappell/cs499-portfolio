import { copyFile, cp, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(repoRoot, 'dist');
const rootIndex = resolve(repoRoot, 'index.html');
const distIndex = resolve(distDir, 'index.html');
const rootAssets = resolve(repoRoot, 'assets');
const distAssets = resolve(distDir, 'assets');

await rm(rootAssets, { recursive: true, force: true });
await mkdir(rootAssets, { recursive: true });
await cp(distAssets, rootAssets, { recursive: true });
await copyFile(distIndex, rootIndex);

console.log('Exported production files for GitHub Pages.');
