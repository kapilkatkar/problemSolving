import { useState } from "react";

const MissigleLaunch = () => {
  const [openTunnel, setOpenTunnle] = useState("OFF");
  const [enablePower, setEnablePower] = useState("OFF");
  const [startCountdown, setStartCountdown] = useState("OFF");
  const [lanuchMissile, setLanuchMissile] = useState("OFF");

  const onOpenTunnle = (e) => {
    console.log({ openTunnel });
    console.log(e.target.value);
    if (e.target.value === false) {
      e.target.value = true;
    }
    setOpenTunnle("ON");
  };

  //openTunnel === 'ON' ? OnEnablePower() :

  const OnEnablePower = () => {
    setEnablePower("ON");
  };
  const onStartCountdown = () => {
    setStartCountdown("ON");
  };

  const onLanuchMissile = () => {
    setLanuchMissile("ON");
    document.getElementById("success").innerText =
      "Missile Lanuched Successfully.";
  };
  return (
    <div>
      <div>
        <p>on-off : {openTunnel}</p>
        <button value={openTunnel} onClick={onOpenTunnle}>
          Open Tunnle
        </button>
      </div>
      <div>
        <p>on-off : {enablePower}</p>
        <button onClick={OnEnablePower} disabled={openTunnel !== "ON"}>
          Enable Power
        </button>
      </div>
      <div>
        <p>on-off : {startCountdown}</p>
        <button onClick={onStartCountdown} disabled={enablePower !== "ON"}>
          {" "}
          Start Countdown
        </button>
      </div>
      <div>
        <p>on-off :{lanuchMissile}</p>
        <button onClick={onLanuchMissile} disabled={startCountdown !== "ON"}>
          Lanuch Missile
        </button>
      </div>
      <p id="success"></p>
    </div>
  );
};

export default MissigleLaunch;
