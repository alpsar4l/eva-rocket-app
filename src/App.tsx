import React from "react";
import "./styles/main.scss";

import GaugeArea from "./components/GaugeArea/GaugeArea";
import Map from "./components/Map/Map"
import SelectPort from "./components/SelectPort/SelectPort";
import LineArea from "./components/LineArea/LineArea";

function App () {
    return (
        <div className="app">

            <div className="left">
                <div className="content">
                    <div className="left-top">
                        <GaugeArea />
                        <LineArea />
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="content">
                    <Map
                        latitude={41.05765467160048}
                        longitude={28.820463700293573}
                    />
                    <SelectPort />

                    <div className="eva-logo">
                        <img src="./assets/eva-logo.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
