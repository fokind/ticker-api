import { odata, ODataServer } from "odata-v4-server";
import { TickerController } from "./controller/Ticker";

@odata.cors
@odata.namespace("Ticker")
@odata.controller(TickerController, true)
export class TickerServer extends ODataServer {}
