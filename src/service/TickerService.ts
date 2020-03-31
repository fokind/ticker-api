import { getTicker, ITicker } from "exchange-service";
export class TickerService {
  public static async getTicker({
    exchange,
    currency,
    asset
  }: {
    exchange: string;
    currency: string;
    asset: string;
  }): Promise<ITicker> {
    return getTicker({
      exchange,
      currency,
      asset
    });
  }
}
