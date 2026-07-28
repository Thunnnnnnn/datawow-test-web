import { create } from 'zustand'
import { ConcertResponse } from "@/model/concert";
import { getConcerts } from "@/service/concertService";
import { IResponse } from "@/model/response";

type State = {
    concerts: ConcertResponse[];
}

type Actions = {
    getConcerts: () => Promise<IResponse<ConcertResponse[]>>;
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
}))