1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
   - This assignment took me about 5 hours. If I had more time I would work more on the tests.

2) What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

   - The new features of the Context API and hooks. I am currently looking more into them and I am trying to compare it with Redux, since I wouldn't have to add libraries to my project.

```javascript
//I used this code to toggle between dark and light themes
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

3. How would you track down a performance issue in production? Have you ever had to do this?

   - I never had to track down a performance issue in production, however to do so I would have to try and recreate what happened and look at the dev tools in the browser.

4. How would you improve the API that you just used?

   - Control the data being returned to improve performance.

5) Please describe yourself using JSON.

```json
{
  "firstName": "Kayla",
  "lastName": "Noronha",
  "location": "Toronto, ON",
  "developer": {
    "type": "Full-Stack",
    "techStack": [
      "React",
      "React Native",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "MySQL"
    ]
  },
  "interests": ["Hiking", "Cooking", "Reading", "Traveling"]
}
```
