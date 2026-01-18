# GitHub Pages Deployment Guide

This guide will help you deploy your React portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your project initialized as a Git repository

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `profile-page` or `your-username.github.io`)
4. Choose **Public** (GitHub Pages requires public repos for free accounts)
5. **DO NOT** initialize with README, .gitignore, or license (if you already have these files)
6. Click "Create repository"

## Step 2: Update Homepage URL in package.json

**Important:** Update the `homepage` field in `package.json` with your actual GitHub username and repository name.

### Option A: Custom Repository Name (e.g., `profile-page`)

If your repository is named `profile-page`:
```json
"homepage": "https://YOUR_USERNAME.github.io/profile-page"
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Option B: User/Organization Site (e.g., `username.github.io`)

If your repository is named `your-username.github.io`:
```json
"homepage": "https://YOUR_USERNAME.github.io"
```

**Example:**
- If your username is `johndoe` and repo is `profile-page`:
  ```json
  "homepage": "https://johndoe.github.io/profile-page"
  ```

- If your username is `johndoe` and repo is `johndoe.github.io`:
  ```json
  "homepage": "https://johndoe.github.io"
  ```

## Step 3: Install Dependencies

Make sure you've installed all dependencies including `gh-pages`:

```bash
npm install
```

## Step 4: Initialize Git (if not already done)

If you haven't initialized Git yet:

```bash
git init
git add .
git commit -m "Initial commit"
```

## Step 5: Connect to GitHub Repository

Add your GitHub repository as the remote origin:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values.

**Example:**
```bash
git remote add origin https://github.com/johndoe/profile-page.git
```

## Step 6: Push Your Code

Push your code to GitHub:

```bash
git branch -M main
git push -u origin main
```

## Step 7: Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

This will:
1. Build your React app for production
2. Create a `gh-pages` branch
3. Push the built files to GitHub Pages

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Select **/ (root)** folder
7. Click **Save**

## Step 9: Access Your Site

Your site will be available at:
- Custom repo: `https://YOUR_USERNAME.github.io/profile-page`
- User site: `https://YOUR_USERNAME.github.io`

**Note:** It may take a few minutes for the site to be available after deployment.

## Updating Your Site

Whenever you make changes and want to update your live site:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. Deploy again:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### 404 Error or Blank Page

If you see a 404 error or blank page:

1. **Check the homepage URL** in `package.json` - it must match your repository name exactly
2. **Verify the build** - make sure `npm run build` completes without errors
3. **Check GitHub Pages settings** - ensure `gh-pages` branch is selected
4. **Clear browser cache** - try accessing in incognito mode

### Assets Not Loading

If images or CSS aren't loading:

1. Make sure the `homepage` field in `package.json` is correct
2. Rebuild and redeploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Routing Issues

If you're using React Router (not applicable to this single-page app), you may need to add a `404.html` file that redirects to `index.html`. However, this portfolio is a single-page app, so routing shouldn't be an issue.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)
