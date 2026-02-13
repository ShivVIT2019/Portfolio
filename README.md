# Atchyut Portfolio

Personal portfolio website showcasing ML engineering projects and experience.

## 🚀 Quick Start - Deploy to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `portfolio`)
2. In your terminal, navigate to the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/ShivVIT2019/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" and choose "Continue with GitHub"
3. Click "Import Project" or "New Project"
4. Import your `portfolio` repository
5. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

Your site will be live in ~2 minutes at: `https://your-portfolio.vercel.app`

### Step 3: Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain (e.g., `atchyut.dev`)
3. Follow DNS configuration instructions
4. SSL certificate auto-configures

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## 🔄 Automatic Deployments

After initial setup, every push to `main` branch automatically triggers a new deployment on Vercel!

## 🌐 Technologies

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons
- Deployed on Vercel

---

Built by Sivasai Atchyut Akella | [GitHub](https://github.com/ShivVIT2019) | [LinkedIn](https://www.linkedin.com/in/atchyut/)
