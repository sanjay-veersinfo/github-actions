# Node.js Continuous Integration (CI) Pipeline with GitHub Actions

This project demonstrates a production-grade, beginner-friendly **Node.js Continuous Integration (CI)** pipeline powered by **GitHub Actions**.

---

## Project Structure

```text
github-actions/
├── .github/
│   └── workflows/
│       └── node-ci.yml        # GitHub Actions CI workflow configuration
├── sample/
│   ├── math.js                # Core arithmetic functions (add, multiply)
│   └── math.test.js           # Automated test suite using Node.js built-in test runner
├── package.json               # Project manifest and test scripts
├── package-lock.json          # Deterministic dependency lockfile
└── README.md                  # Project documentation
```

---

## Functions Implemented (`sample/math.js`)

1. **`add(a, b)`**: Calculates and returns the sum of two numbers.
2. **`multiply(a, b)`**: Calculates and returns the product of two numbers.

---

## Automated Unit Tests (`sample/math.test.js`)

The project uses the native **Node.js Test Runner (`node:test`)** and **Assertion Library (`node:assert`)** introduced in Node.js 18+. No heavy third-party testing frameworks (such as Jest or Mocha) are required!

### Test Cases Covered (8 Total):
* **`add()` Tests:**
  1. Positive numbers: `2 + 3 = 5`
  2. Larger numbers: `10 + 20 = 30`
  3. Negative and opposite numbers: `-2 + 2 = 0`
  4. Zero values: `0 + 0 = 0`
* **`multiply()` Tests:**
  5. Positive numbers: `2 * 3 = 6`
  6. Double-digit numbers: `5 * 4 = 20`
  7. Negative numbers: `-2 * 3 = -6`
  8. Zero values: `0 * 10 = 0`

---

## Local Testing Instructions

To run tests locally on your development machine:

```bash
# 1. Install dependencies using lockfile
npm install

# 2. Run automated test suite
npm test
```

---

## CI Pipeline Workflow (`.github/workflows/node-ci.yml`)

The CI workflow triggers automatically on:
* **`push`** to `main` and `development` branches.
* **`pull_request`** targeting `main` and `development`.
* **`workflow_dispatch`** for manual execution.

### Stages Executed in CI:
1. **Checkout:** Clones the repository code using `actions/checkout@v4`.
2. **Setup Node.js:** Sets up Node.js 22 with automated npm dependency caching (`actions/setup-node@v4`).
3. **Environment Audit:** Displays active `node` and `npm` versions.
4. **Clean Install (`npm ci`):** Deterministically installs dependencies using `package-lock.json`.
5. **Test Execution (`npm test`):** Executes all 8 unit tests; fails the build immediately if any assertion fails.

