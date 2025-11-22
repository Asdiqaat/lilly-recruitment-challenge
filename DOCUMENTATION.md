# Lilly Technical Challenge - Documentation

## Approach  
- Planned the steps before starting to avoid getting lost.  
- Tested backend endpoints using **Postman** to understand data structure.  
- Built the frontend using `fetch()` to display `/medicines` on page load.  
- Created input forms for adding medicines with validation.  
- Tested each feature step-by-step to ensure stability.  
- Displayed all sections (medicine list, add form, search) at once for easy access.  

## Objectives  

**1. Fetch data from backend and display it user-friendly**  
- Used `fetch()` to pull data from `/medicines` and `/medicines/{name}`.  
- Displayed each medicine as a card with name, price, and warning if any info was missing.  
- Centered cards on the page.  

**2. Handle missing/invalid data without crashing**  
- Empty names → displayed as `"Unknown"`.  
- Missing prices → displayed as `"N/A"`.  
- Added visual warning boxes on cards when data is incomplete.  
- Checked for undefined or null values before rendering.  

**3. User-friendly data input**  
- Form to input medicine name and price.  
- Front-end validation: name must not be empty; price must be a positive number.  
- Submits data to backend POST `/create` endpoint.  
- Medicine list updates automatically after adding a new entry.  

**4. Improve overall design and UX**  
- Centered cards, form, and search bar for clean layout.  
- Added hover effects on buttons and cards for better visual feedback.  
- Colored warnings for missing data.  
- Search bar lets users find a medicine by name and shows “not found” messages.  

## Problems / Challenges  
- Medicines not displaying initially → fixed by properly creating container and appending elements.  
- Validation wasn’t strict at first → added checks to prevent empty or invalid entries.  
- Styling and layout required trial and error to center and align cards/form/search bar.  

## Evaluation  
- Enjoyed building a full-stack workflow from scratch.  
- Learned to handle missing data gracefully and connect frontend to backend.  
- Debugging display issues and adding validation took the most time.  

## Future Improvements  
- Implement **update and delete functionality** for full CRUD.  
- Add a **search filter** for faster access to medicines.  
- Include **pagination** for easier viewing with large datasets.  
- Use a proper database (like SQLite/PostgreSQL) instead of JSON.  
- Improve form validation further (regex for names, etc.).  
- Polish UI with animations and better responsive layout.  

## Bonus / Extra  
- Live updates after adding new medicine.  
- Search bar shows immediate results.  
- Visual highlights for missing data.  
