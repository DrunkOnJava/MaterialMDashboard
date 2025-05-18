# How to Set Main as Default Branch

Follow these steps to change the default branch from `fix/navigation-and-sidebar-clean` to `main`:

## Method 1: GitHub Web Interface

1. Go to your repository: https://github.com/DrunkOnJava/MaterialMDashboard
2. Click on **Settings** (top navigation bar)
3. In the left sidebar, click on **Branches**
4. Under "Default branch", you'll see it's currently set to `fix/navigation-and-sidebar-clean`
5. Click the **🔄 Switch branches** icon (two arrows)
6. Select `main` from the dropdown
7. Click **Update**
8. Confirm the change when prompted

## Method 2: GitHub CLI (if you have permissions)

If you have admin access to the repository, you can use:

```bash
gh repo edit DrunkOnJava/MaterialMDashboard --default-branch main
```

## After Changing the Default Branch

Once `main` is the default branch:

1. All new pull requests will target `main` by default
2. The repository's landing page will show the `main` branch
3. Fresh clones will check out `main` automatically

## Update Local Repository

After changing the default branch on GitHub, update your local repository:

```bash
cd /Users/griffin/Documents/GitHub/MaterialMDashboard
git remote set-head origin main
```

This updates your local repository to know that `main` is now the default branch.