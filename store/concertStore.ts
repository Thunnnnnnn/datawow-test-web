import { create } from 'zustand'
import { ConcertResponse, ConcertCountResponse, CreateConcertRequest } from "@/model/concert";
import { getConcerts, getConcertCount, createConcert, deleteConcert } from "@/service/concertService";
import { IResponse } from "@/model/response";

type State = {
    concerts: ConcertResponse[];
    allCount: ConcertCountResponse;
}

type Actions = {
    getConcerts: () => Promise<IResponse<ConcertResponse[]>>;
    getConcertCount: () => Promise<IResponse<ConcertCountResponse>>;
    createConcert: (concertData: CreateConcertRequest) => Promise<IResponse<ConcertResponse>>;
    deleteConcert: (concertId: number) => Promise<IResponse<{ message: string }>>;
}

export const useConcertStore = create<State & Actions>((set) => ({
    concerts: [],
    allCount: {
        count: 0,
        bookedCount: 0,
        cancelCount: 0,
    },
    getConcerts: async () => {
        const response = await getConcerts();
        if (response.status) {
            set({ concerts: response.data });
        }
        return response;
    },

    getConcertCount: async () => {
        const response = await getConcertCount();

        if (response.status) {
            set({ allCount: response.data });
        }
        return response;
    },

    createConcert: async (concertData: CreateConcertRequest) => {
        const response = await createConcert(concertData);

        return response;
    },

    deleteConcert: async (concertId: number) => {
        const response = await deleteConcert(concertId);
        return response;
    }
}))