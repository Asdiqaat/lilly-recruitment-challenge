# Lilly Technical Challenge - Documentation

## Approach  
- Planned the project step-by-step before starting to avoid getting lost.  
- Started by setting up the **FastAPI backend**, so endpoints were ready for testing the frontend.  
- Tested backend endpoints using **Postman** to confirm data structure and response formats.  
- Built the frontend using `fetch()` to display `/medicines` dynamically on page load.  
- Created forms for adding medicines with basic validation.  
- Added extra features: delete, update, and search functionality for medicines.  
- Tested each feature step-by-step to ensure stability and proper UI updates.  
- Displayed all sections (medicine list, add form, update, delete, search) in a single interface for easy access.  

## Objectives  

**1. Fetch data from backend and display it user-friendly**  
- Used `fetch()` to retrieve data from `/medicines` endpoint.  
- Rendered each medicine as a card showing **name** and **price**.  
- Empty names → displayed as `"Unknown"`.  
- Missing prices → displayed as `"N/A"`.  
- Cards with missing information have a visible warning.  
- Centered the medicine cards and ensured spacing between cards for readability.  

**2. Handle missing/invalid data without crashing**  
- Implemented data cleaning functions before rendering to handle incomplete backend data.  
- Checked for `null`, `undefined`, or empty values to prevent frontend crashes.  
- Added visual warning boxes for medicines with missing data.  

**3. User-friendly data input**  
- Added form to input medicine name and price.  
- Frontend validation: name cannot be empty; price must be a number greater than zero.  
- Form submits data to backend `POST /create` endpoint.  
- Medicine list refreshes automatically after adding a new medicine.  

**4. Extra CRUD features implemented**  
- **Delete medicine** via `DELETE /delete` endpoint.  
- **Update medicine price** via `POST /update` endpoint.  
- **Search medicine** by name via `GET /medicines/{name}` endpoint.  
- All CRUD actions update the frontend dynamically without needing a page reload.  

**5. Improve overall design and UX**  
- Styled cards with borders, padding, and hover effects.  
- Colored warnings for missing or invalid data.  
- Buttons styled consistently with hover animations.  
- Search bar provides immediate feedback when searching medicines.  

## Problems / Challenges  
- Medicines not displaying initially → fixed by properly creating the container div and appending elements dynamically.  
- Frontend crashed when backend returned missing or invalid data → solved by adding data cleaning functions.  
- Validation errors in the forms → added checks for empty names and invalid prices.  
- Styling and layout required trial and error to center cards, forms, and search bar.  
- CORS issues → solved by adding **CORSMiddleware** to backend.  

## Evaluation  
- Enjoyed building a full-stack workflow from scratch.  
- Learned to handle missing data gracefully and connect frontend to backend.  
- Debugging display issues and adding extra CRUD features took the most time.  
- Gained confidence in designing and building a complete system manually.  
- If given more time, I would add pagination, a proper database (SQLite/PostgreSQL), async JSON read/write, and polish the UI with responsive design and animations.  

## Bonus / Extra Features  
- Deployed backend on **AWS EC2** and connected frontend using an Elastic IP.  
- Configured backend as a **systemd service with Uvicorn** to ensure it runs continuously.  
- Delete, Update, and Search functionalities beyond the basic objective.  
- Live refresh of medicines list after each action.  
- Data cleaning system for missing or invalid backend values.  
- Hover animations and visual highlights for warnings.  

## Steps  
- Installed **Python** and **pip** on local machine or server.  
- Installed backend dependencies: `fastapi`, `uvicorn`, and `python-multipart`.  
- Navigated to the backend folder with `cd backend/`.  
- Ran backend locally with `python main.py` to test endpoints.  
- Connected frontend to backend using `fetch()` in `script.js` with the `/medicines` endpoint.  
- Created forms for adding medicines and tested live updates.  
- Implemented delete, update, and search forms connected to their respective backend endpoints.  
- Verified all CRUD functionality updated the frontend dynamically.  
- Tested the site thoroughly with valid, missing, and invalid backend data.  
- Ensured UI was clean, cards displayed correctly, and warnings showed for missing data.  
