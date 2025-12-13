<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1OaAiCAgR8tokSohrSfS25bfVjOJ3Rw2D

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the root directory and set the `GEMINI_API_KEY`:
   ```bash
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   Get your API key from: https://aistudio.google.com/app/apikey
3. Run the app:
   ```bash
   npm run dev
   ```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variable in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `GEMINI_API_KEY` with your API key value

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Import project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. Add environment variable:
   - In project settings, add `GEMINI_API_KEY` environment variable
   - Redeploy the project

### Environment Variables for Vercel

Make sure to add the following environment variable in your Vercel project settings:
- `GEMINI_API_KEY`: Your Gemini API key

## Project Structure

- `/components` - React components
- `/pages` - Page components
- `/contexts` - React contexts (Auth)
- `/services` - API services (Gemini AI)
- `/hooks` - Custom React hooks
- `/data` - Mock data
- `/types` - TypeScript type definitions

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Google Gemini AI** - AI chatbot and OCR
