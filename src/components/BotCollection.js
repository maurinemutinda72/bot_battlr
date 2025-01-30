import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots = [], handleBotClick, deleteBot }) => {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.length > 0 ? (
          bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleClick={handleBotClick} deleteBot={deleteBot} />
          ))
        ) : (
          <p>No bots available.</p>
        )}
      </div>
    </div>
  );
};

export default BotCollection;
