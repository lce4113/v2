# omahesh.github.io (omahesh.tk)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed23a536-913d-47b6-ba02-37fd8974ee79/deploy-status)](https://app.netlify.com/sites/ommahesh/deploys)
## Things Used

[Create React App](https://create-react-app.dev/)  
[Netlify](https://netlify.com)  
[Tailwind CSS](https://tailwindcss.com/)  
[Sass](https://sass-lang.com/)  
[gh-pages](https://www.npmjs.com/package/gh-pages)

## File Structure
This website was built with create-react-app so most of the file structure is taken from there.  
Maintaining this README section is difficult so this will probably be out of date (unless I develop some kind of amazing automation to do this for me).

### `public` 
For HTML files and files used directly by the HTML files

`index.html` - The main HTML page  
`404.html` - Used for when a URL is typed incorrectly  
`arrow.svg` - The down arrow on the first slide  
`favicon.svg` - The favicon (changes a lot)  

### `src` 
For Javascript and (S)CSS files (and files that they use)

`index.js` - The entry point for Javascript  
`main.scss` - Main SCSS script with things like `margin: 0` and `box-sizing: border-box`  
`title.scss` - SCSS for front slide  
#### `CGOL` 
Javascript and SCSS for Conway's Game of Life on the front page

`CGOL.js` - Contains Grid and Cell react components  
`CGOL.scss` - SCSS for Grid and Cells  
`om.txt` - A .txt file for the name Om Mahesh drawn in 1s and 0s

#### `Projects` 
Handles projects and project cards

`projects.js` - The main entry point for projects  
`projects.scss` - The main SCSS file for projects  
`card.scss` - SCSS for a project card

### Build
Contains compressed files that are ready for production (contents are the same as the `gh-pages` branch)

### Misc Files
Files used for configuration, metadata, etc.

`README.md` - The markdown file you are reading right now  
`node_modules` - Contains npm packages (it's very big)
`package.json` - Metadata about the repo (version, dependencies, etc.)  
`package-lock.json` - Dependency tree or something  
`gh-pages.js` - A script to publish to the `gh-pages` branch using the `gh-pages` package  
`tailwind.config.js` - Configuration for [Tailwind CSS](https://tailwindcss.com/)  
`craco.config.js` - Configuration for [CRACO (Create React App Configuration Override)](https://www.npmjs.com/package/@craco/craco)