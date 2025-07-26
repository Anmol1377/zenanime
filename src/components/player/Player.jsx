import React from "react";

const Player = ({
  episodeId,
  streamInfo, // contains `language` like "sub" or "dub"
  subtitles,
  intro,
  outro,
  thumbnail,
  autoSkipIntro,
  autoPlay,
  autoNext,
  episodes,
  animeInfo,
  activeEpisodeNum,
  activeServerId,
  servers,
}) => {


  const servers2 = servers;
  
  const activeServerId2 = activeServerId;
  
  // Find the active server
  const activeServer = servers2.find((s) => s.data_id === activeServerId2);
  


  const language = streamInfo?.language || "sub";
  const iframeSrc = `https://megaplay.buzz/stream/s-2/${episodeId}/${activeServer.type}`;


  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
     
      {/* ✅ Your Anime Iframe Player */}
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Anime Player"
        style={{ minHeight: "500px", borderRadius: "10px", overflow: "hidden" }}
      />
      
      {/* ✅ Logging All Variables */}
      {/* <div style={{ display: "block" }}> */}
        {/* {String(episodeId)}
        {JSON.stringify(subtitles)}
        {JSON.stringify(intro)}
        {JSON.stringify(outro)}
        {String(thumbnail)}
        {String(autoSkipIntro)}
        {String(autoPlay)}
        {String(autoNext)}
        {JSON.stringify(episodes)}
        {JSON.stringify(animeInfo)}
        {String(activeEpisodeNum)} */}
        {/* {JSON.stringify(streamInfo)} */}
        {/* {JSON.stringify(activeServerId)} */}
        {/* {JSON.stringify(language)} */}
        {/* {JSON.stringify(servers)} */}
        {/* {JSON.stringify(activeServer.type)} */}
      {/* </div> */}
    </div>
  );
};

export default Player;
