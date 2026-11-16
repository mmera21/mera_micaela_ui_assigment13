# Assignment 13: UI Component Library – Build Checks

**Author:** Micaela Mera
**Repo:** https://github.com/mmera21/mera_micaela_ui_assigment13

My UI component library from Assignment 12 (React + TypeScript + styled-components + Storybook) with code quality checks added to the build process.

## Run with Docker (localhost:8018)

```bash
git clone https://github.com/mmera21/mera_micaela_ui_assigment13.git
cd mera_micaela_ui_assigment13

docker build -t mera_micaela_coding_assignment13 .
docker run -d -p 8018:8018 --name mera_micaela_coding_assignment13 mera_micaela_coding_assignment13
```

Open **http://localhost:8018** (or http://127.0.0.1:8018).

- **Container name:** `mera_micaela_coding_assignment13`
- **Working directory:** `/mera_micaela_ui_garden_build_checks`
- **Serves:** the production build (`npm run build`) on port 8018

## Run locally

```bash
npm install   # also installs the Husky hooks
npm start
```

## Code quality checks

| Script | What it does |
| --- | --- |
| `npm run format:check` | Prettier check |
| `npm run lint` | ESLint check (fails on any warning) |
| `npm run test:ci` | Runs all tests once |

### Husky (pre-commit)

`.husky/pre-commit` runs Prettier, ESLint and the tests before every commit. If any check fails, the commit is blocked.

### GitHub Actions

`.github/workflows/ci.yml` runs the same checks plus the production build on every push and pull request. If the Husky hooks are skipped (`git commit --no-verify`), the workflow fails on GitHub and I get an email notification.

## Steps I followed

1. Installed **Prettier** and `eslint-config-prettier`, and added `.prettierrc` and `.prettierignore`.
2. Added `"prettier"` to the **ESLint** config so the two tools don't conflict.
3. Added the `format`, `format:check`, `lint` and `test:ci` scripts to `package.json`.
4. Installed **Husky** (`npx husky init`) and set the pre-commit hook to run the three checks.
5. Created the **GitHub Actions** workflow in `.github/workflows/ci.yml`.
6. Updated the **Dockerfile** to use port 8018, the new working directory, `npm ci` and `HUSKY=0`.

Screenshots of Husky blocking commits, the GitHub Actions results and the app running in Docker are in the `photos/` folder.
