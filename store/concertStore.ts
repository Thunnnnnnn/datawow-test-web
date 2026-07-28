import { create } from 'zustand'
import { ConcertResponse, ConcertCountResponse } from "@/model/concert";
import { getConcerts, getConcertCount } from "@/service/concertService";
import { IResponse } from "@/model/response";

type State = {
    concerts: ConcertResponse[];
}

type Actions = {
    getConcerts: () => Promise<IResponse<ConcertResponse[]>>;
    getConcertCount: () => Promise<IResponse<ConcertCountResponse>>;
}

export const useConcertStore = create<State & Actions>((set) => ({
    concerts: [],
    getConcerts: async () => {
        const response = await getConcerts();
        if (response.status) {
            set({ concerts: response.data });
        }
        return response;
    },

    getConcertCount: async () => {
        const response = await getConcertCount();

        return response;
    }
}))