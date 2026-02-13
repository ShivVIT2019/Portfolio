# 🚀 Vercel Deployment Guide - Step by Step

## What You'll Get
- Live portfolio at `https://your-name.vercel.app`
- Auto-deploys on every GitHub push
- Free SSL certificate
- Custom domain support (optional)

---

## 📋 Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Keep it **Public**
4. ✅ **DO NOT** initialize with README (we already have files)
5. Click "Create repository"

**GitHub will show you commands - IGNORE THEM for now**

---

## 💻 Step 2: Upload Your Portfolio to GitHub

### Option A: Using Git (Recommended)

Open Terminal/Command Prompt and run these commands:

```bash
# Navigate to where you downloaded the portfolio files
cd /path/to/portfolio-deployment

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - My portfolio"

# Add GitHub as remote (REPLACE with YOUR repository URL)
git remote add origin https://github.com/ShivVIT2019/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Website (If you don't have git)

1. Go to your new repository
2. Click "uploading an existing file"
3. Drag and drop ALL files from `portfolio-deployment` folder
4. Scroll down and click "Commit changes"

---

## 🌐 Step 3: Deploy on Vercel

### 3.1 Sign Up for Vercel
1. Go to https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your repositories

### 3.2 Import Your Project
1. Click **"Add New..."** → **"Project"**
2. Find your `portfolio` repository
3. Click **"Import"**

### 3.3 Configure (Vercel auto-detects everything!)
Vercel should auto-fill:
- **Framework Preset**: Vite
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

**Just click "Deploy"** - Don't change anything!

### 3.4 Wait for Deployment
- Takes 1-2 minutes
- You'll see a confetti animation when done! 🎉

---

## ✅ Step 4: Your Site is Live!

Your portfolio is now at: `https://portfolio-xxxxx.vercel.app`

Click **"Visit"** to see your live site!

---

## 🔄 Making Updates (After Initial Deploy)

Every time you want to update your portfolio:

```bash
# Make your changes to the files
# Then:
git add .
git commit -m "Updated projects section"
git push
```

**Vercel automatically redeploys in ~1 minute!** No need to do anything on Vercel.

---

## 🌍 Step 5: Add Custom Domain (Optional)

### If you have a domain (like atchyut.dev):

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain: `atchyut.dev`
3. Vercel gives you DNS records
4. Add those records to your domain provider:
   - **Type**: A
   - **Name**: @
   - **Value**: 76.76.21.21 (Vercel's IP)
5. Wait 5-60 minutes for DNS propagation
6. SSL certificate auto-configures!

### If you don't have a domain:
You can use the free Vercel subdomain: `your-portfolio.vercel.app`

Or buy a domain from:
- Namecheap (~$10/year for .dev)
- Google Domains
- GoDaddy

---

## 🐛 Troubleshooting

### Build Failed?
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Common fix: Clear cache and redeploy

### Site Not Updating?
- Check GitHub - did your push succeed?
- Go to Vercel → Deployments → Latest deployment
- Click "Redeploy"

### Need Help?
- Vercel Discord: https://vercel.com/discord
- Or email me: sakella@binghamton.edu

---

## 📊 Analytics (Optional)

Vercel provides free analytics:
1. Go to your project → Analytics
2. See page views, visitors, and performance

---

## 🎯 Next Steps

1. ✅ Deploy to Vercel (you're doing this now!)
2. Share your portfolio link on LinkedIn
3. Add it to your resume
4. Update GitHub README with live link
5. Consider adding:
   - Google Analytics
   - Blog section
   - Contact form

---

**Questions?** The README.md has a quick reference guide too!

Good luck with your deployment! 🚀
