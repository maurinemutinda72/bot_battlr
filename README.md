### Bot Battlr - React Web App  

Welcome to Bot Battlr, the ultimate galactic web app where users can browse, view, and enlist powerful bots into their custom Bot Army.  

This project is built using React and follows best practices in component-based architecture, state management, event handling, and data fetching from a local JSON server.  use this to access the app https://vercel.com/maurinemutinda72s-projects/bot-battlr


### Features  

#### Core Features  
- View all available bots in the Bot Collection.  
- Click on a bot to view its details in a separate screen (BotSpecs).  
- Enlist a bot into Your Bot Army, ensuring that each bot can only be enlisted once.  
- Release a bot from the army, returning it to the collection.  
- Discharge a bot permanently, removing it from both the Bot Army and the database.  

#### Advanced Features  
- Clicking on a bot does not enlist it immediately but instead displays its details.  
- Sorting bots based on health, damage, and armor.  
- Filtering bots by their class.  
- Removing enlisted bots from the Bot Collection to prevent duplicate selection.  
- Restricting enlistment to one bot per class.  

### Technologies Used  
- React for building the front-end application.  
- CSS for styling, responsive design, and animations.  
- JSON Server as a mock backend to simulate REST API functionality.  
- JavaScript for component logic.  

### Getting Started  

#### Prerequisites  
Before running the project, ensure you have the following installed on your machine:  
- Node.js for running the JavaScript environment.  
- npm or yarn as the package manager.  
- Git for version control.  

#### Installation Steps  
1. Clone the repository to your local machine.  
2. Navigate into the project directory.  
3.  Set up the JSON Server by creating a db.json file and adding the bot data.  
4. Start the JSON Server and ensure it is running correctly.  
5. Run the React application and open it in the browser.  

### Project Structure  

- The application consists of multiple React components, including BotCollection, BotCard, YourBotArmy, and BotSpecs, to maintain modularity and reusability.  
- The state is managed using the useState and useEffect hooks to handle user interactions and data fetching.  
- Event handling ensures smooth functionality for enlisting, releasing, and deleting bots.  
- The UI includes a sorting and filtering feature to improve user experience.  

### Usage  

- Open the application and browse the available bots.  
- Click on a bot to view its detailed statistics, including health, damage, and armor.  
- Enlist a bot into Your Bot Army, ensuring that only one bot per class is allowed.  
- Remove a bot from Your Bot Army if you no longer want it in the lineup.  
- Discharge a bot permanently to delete it from the entire system.  



### License  

This project uses MIT License  

### Author  

By Queen Moh 