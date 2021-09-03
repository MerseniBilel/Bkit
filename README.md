# Welcome to Bkit 👋 !
Hi 👋 👋 ! I'm **Merseni Bilel** 😁, i love cloning beautiful UI so i decided to create **Bkit**. 
it's a list of recreated components that i found on the internet. 
feel free to join as  **contributors**

# Tools 🧰 ! 
for now most of the components are made with
- ReactJS
- tailwindCss
# installation 💻 ! 
- git clone < repo >
- cd bkit
- yarn install
- yarn start
## Customization  💄💄 ! 
### Custom font  🖊🖊 !
- copy the font **CDN** from google font
- add it to the **HTML** file in the public directory
- open **TailwindCss** config file 
```javascript
const  defaultTheme  = require("tailwindcss/defaultTheme");
module.exports  =  {
purge: ["./src/**/*.{js,jsx,ts,tsx}",  "./public/index.html"],
darkMode:  false,  // or 'media' or 'class'
theme:  {
	extend:  {
		fontFamily:  {
				sora  : ["Sora",  ...defaultTheme.fontFamily.sans],
		},
	},
},
variants:  {
	extend:  {},
},
plugins: [],
};
```
- add the **fontFamily** key with the value contains the nama of the font

### Custom color 🌈🌈 !
- open **tailwindCss** config file 
```javascript
const  defaultTheme  = require("tailwindcss/defaultTheme");
module.exports  =  {
purge: ["./src/**/*.{js,jsx,ts,tsx}",  "./public/index.html"],
darkMode:  false,  // or 'media' or 'class'
theme:  {
	extend:  {
		colors:  {
				fuchsia  :  colors.fuchsia
		},
	},
},
variants:  {
	extend:  {},
},
plugins: [],
};
```
- add the **colors** key with the value contains the name / hex code of the color

## Files 📂 📂 !
```bash
.
├── craco.config.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── components
│   │   └── ......jsx
│   ├── index.css
│   ├── index.js
│   └── reportWebVitals.js
├── tailwind.config.js
└── yarn.lock


```
## the Bkit 😍 contains :
I'm working on creating a rich UI kit but for now 
Bkit contains :
- bkit story 
![Bkit Stroy](https://user-images.githubusercontent.com/57067060/132002121-3d8c6a37-6d02-47a9-87c4-275f1a514761.png)
- bkit grid
```python
	On Progress ...
```
- bkit cards
```python
	On Progress ...
```

If u have any idea please contact me 
- Twitter : https://twitter.com/MerseniBilel
- Mail :  bilelmerseni7016@gmail.com

