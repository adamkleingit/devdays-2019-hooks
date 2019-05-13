import moment from "moment";

export const timeStr = durationSec =>
  moment(0)
    .seconds(durationSec)
    .format("mm:ss");
