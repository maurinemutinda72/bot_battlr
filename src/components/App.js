import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";

const API_URL = "/db.json";

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState(null);
  const [filterClass, setFilterClass] = useState(null);
  const [error, setError] = useState(null);

  // Fetch bots data
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bots data");
        return res.json();
      })
      .then((data) => {
        if (!data.bots || !Array.isArray(data.bots)) throw new Error("Invalid data format");
        setBots(data.bots);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch bots. Check JSON server.");
      });
  }, []);

  // Add bot to army (with class restriction)
  const addToArmy = (bot) => {
    if (army.some((b) => b.id === bot.id)) return;

    if (army.some((b) => b.bot_class === bot.bot_class)) {
      alert(`Only one bot per class allowed!`);
      return;
    }

    setArmy([...army, bot]);
    setBots(bots.filter((b) => b.id !== bot.id)); // Remove from collection (Advanced)
  };

  // Remove bot from army
  const releaseFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
    setBots([...bots, bot]); // Return bot to collection (Optional)
  };

  // Delete bot permanently
  const deleteBot = (bot) => {
    setBots(bots.filter((b) => b.id !== bot.id));
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Open bot details in BotSpecs
  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  // Filter and sort bots
  const filteredBots = bots
    .filter((bot) => bot.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((bot) => (filterClass ? bot.bot_class === filterClass : true))
    .sort((a, b) => (sortType ? b[sortType] - a[sortType] : 0));

  return (
    <div className="app-container">
      <h1 className="app-title">Bot Battlr</h1>
      {error && <p className="error">{error}</p>}

      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={addToArmy} goBack={() => setSelectedBot(null)} />
      ) : (
        <>
          <SortBar setSortType={setSortType} />
          <FilterBar setFilterType={setFilterClass} />
          <YourBotArmy army={army} releaseFromArmy={releaseFromArmy} deleteBot={deleteBot} />
          <BotCollection bots={filteredBots} handleBotClick={handleBotClick} deleteBot={deleteBot} />
        </>
      )}
    </div>
  );
};

export default App;
