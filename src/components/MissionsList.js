import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div data-testid="mission-list">
          {props.missions.map(mission => (
            <div className="mission" data-testid="mission" key={mission.mission_id}>
              <h3>{mission.mission_name}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;
