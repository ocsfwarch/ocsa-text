import ApiClient, { CanceledError } from "./ApiClient";

export interface DataCard {
    id: number;
    header: string;
    data: string;
}

class CardService {
    getACard() {
        const controller = new AbortController();
        const request = ApiClient.get<DataCard>("/", { signal: controller.signal })
        return { request, cancel: () => controller.abort() }
    }

    saveACard(card: DataCard) {
        return ApiClient.post("/save", card)
    }
}

export default new CardService()

