import React from "react";
import { G } from "react-native-svg";
import VictoryPie from "./victory-pie";
import { default as Slice } from "./native-slice";
import { VictoryLabelNative, VictoryContainerNative } from "victory-core";

export default class extends VictoryPie {
  static defaultProps = Object.assign(
    VictoryPie.defaultProps,
    {
      dataComponent: <Slice />,
      groupComponent: <G/>,
      labelComponent: <VictoryLabelNative/>,
      containerComponent: <VictoryContainerNative/>
    }
  );
}
