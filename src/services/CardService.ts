import ApiClient, { CanceledError } from "./ApiClient";

export interface DataCard {
    id: number;
    header: string;
    data: string;
}

class CardService {
    getACard(date: Date) {
        const controller = new AbortController();
        const path = date ? `/retrieve/${date}` : `/retrieve`
        const request = ApiClient.get<DataCard>(path, { signal: controller.signal })
        return { request, cancel: () => controller.abort() }
    }

    saveACard(card: DataCard) {
        return ApiClient.post("/save", card)
    }
}

export default new CardService()

