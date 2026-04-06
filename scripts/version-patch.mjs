import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const latestReleaseMetadataUrl = 'https://github.com/nostria-app/nostria/releases/latest/download/latest.json';
const downloadsDataPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/app/shared/downloads/downloads.data.ts'
);

async function getLatestVersion() {
  const response = await fetch(latestReleaseMetadataUrl, {
    headers: {
      accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch latest release metadata: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  const version = payload?.version;

  if (typeof version !== 'string' || version.trim() === '') {
    throw new Error('The latest release metadata did not contain a valid version field.');
  }

  return version.trim();
}

async function updateDownloadsData(nextVersion) {
  const currentFile = await readFile(downloadsDataPath, 'utf8');
  const versionPattern = /export const currentDesktopRelease = '([^']+)';/;
  const match = currentFile.match(versionPattern);

  if (!match) {
    throw new Error('Could not find currentDesktopRelease in downloads.data.ts.');
  }

  const currentVersion = match[1];

  if (currentVersion === nextVersion) {
    console.log(`currentDesktopRelease is already ${nextVersion}. No changes were needed.`);
    return;
  }

  const updatedFile = currentFile.replace(
    versionPattern,
    `export const currentDesktopRelease = '${nextVersion}';`
  );

  await writeFile(downloadsDataPath, updatedFile, 'utf8');
  console.log(`Updated currentDesktopRelease from ${currentVersion} to ${nextVersion}.`);
}

async function main() {
  const latestVersion = await getLatestVersion();
  await updateDownloadsData(latestVersion);
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});