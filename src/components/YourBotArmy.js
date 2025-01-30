import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ army = [], releaseFromArmy, deleteBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army.length === 0 ? (
          <p>No bots in the army yet.</p>
        ) : (
          army.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleClick={() => releaseFromArmy(bot)} deleteBot={deleteBot} inArmy />
          ))
        )}
      </div>
    </div>
  );
};

export default YourBotArmy;
