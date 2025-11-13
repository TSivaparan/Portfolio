# Quick Start Guide

## To Run Your React Portfolio Application:

1. **Open a terminal/command prompt**

2. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

3. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

## Common Issues:

### Issue: "Port 3000 is already in use"
**Solution:** Either:
- Close the application using port 3000, OR
- Change the port in `vite.config.js` to a different number (e.g., 3001)

### Issue: "Cannot find module"
**Solution:** 
```bash
cd frontend
npm install
```

### Issue: Blank page or errors
**Solution:** 
- Open browser Developer Tools (F12)
- Check the Console tab for errors
- Check the Network tab for failed requests

### Issue: "npm is not recognized"
**Solution:** 
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation

## Your Portfolio Data:

Edit `frontend/src/data/portfolioData.js` to customize:
- Your name and information
- Projects
- Skills
- Contact details

