// Deliberately tiny zero-dependency build script for GitHub Actions CI/CD demonstration.
// Creates a 'dist/' directory, copies math.js, and outputs a build-info metadata file.

const fs = require('node:fs');
const path = require('node:path');

const OUT = 'dist';

// Clean and recreate output directory
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// Copy distributable source files
if (fs.existsSync('math.js')) {
  fs.copyFileSync('math.js', path.join(OUT, 'math.js'));
  console.log(`copied math.js -> ${OUT}/math.js`);
}

// Generate build metadata from environment variables (provided by GitHub Actions or local fallback)
const buildInfo = {
  builtAt: new Date().toISOString(),
  commit: process.env.GITHUB_SHA || 'local',
  runNumber: process.env.GITHUB_RUN_NUMBER || 'local',
  nodeVersion: process.version,
  runnerOs: process.env.RUNNER_OS || 'local',
};

fs.writeFileSync(path.join(OUT, 'build-info.json'), JSON.stringify(buildInfo, null, 2));
console.log('\nBuild complete:');
console.log(JSON.stringify(buildInfo, null, 2));
