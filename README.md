# Portfolio Application

A React portfolio application with a modern, responsive UI. Backend will be implemented with .NET.

## Project Structure

```
protfolio/
├── frontend/          # React application
│   ├── src/
│   │   ├── data/
│   │   │   └── portfolioData.js  # Edit this to customize your portfolio
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

**Start the Frontend Development Server**
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:3000`

### Building for Production

```bash
cd frontend
npm run build
```

## How to Add/Edit Your Projects

To customize your portfolio, edit the file `frontend/src/data/portfolioData.js`:

1. **Update Personal Information:**
   - Change `name`, `tagline`, and `about` sections

2. **Add Your Projects:**
   ```javascript
   projects: [
     {
       id: 1,
       title: "Your Project Title",
       description: "Describe your project here...",
       image: "path/to/your/image.jpg",  // or URL
       link: "https://github.com/yourusername/project",
       technologies: ["React", ".NET", "C#", "SQL Server"]
     },
     // Add more projects...
   ]
   ```

3. **Update Contact Information:**
   - Edit the `contact` object with your details

4. **Update Skills:**
   - Modify the `skills` array with your technologies

## Customization

- **Portfolio Data:** Edit `frontend/src/data/portfolioData.js`
- **Styling:** Customize `frontend/src/App.css`
- **Components:** Modify `frontend/src/App.jsx`

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** .NET (to be implemented)

## Future: Connecting to .NET Backend

When you're ready to connect to a .NET backend:
1. Update `portfolioData.js` to fetch from API instead of using local data
2. Add axios or fetch to call your .NET API endpoints
3. Configure CORS in your .NET backend to allow frontend requests

