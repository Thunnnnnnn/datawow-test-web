import { create } from 'zustand'
import { BookHistoryResponse } from "@/model/bookHistory";
import { IResponse } from "@/model/response";
import { getBookHistories, getBookHistoriesByUser, createBookHistory, deleteBookHistory, updateBookHistory } from "@/service/bookHistoryService";

type State = {
    bookHistories: BookHistoryResponse[];
}

type Actions = {
    getBookHistories: () => Promise<IResponse<BookHistoryResponse[]>>;
    getBookHistoriesByUser: () => Promise<IResponse<BookHistoryResponse[]>>;
    createBookHistory: (concertId: number) => Promise<IResponse<BookHistoryResponse>>;
    deleteBookHistory: (bookHistoryId: number) => Promise<IResponse<{ message: string }>>;
    updateBookHistoryStatus: (bookHistoryId: number, status: string) => Promise<IResponse<BookHistoryResponse>>;
}

export const useBookHistoryStore = create<State & Actions>((set) => ({
    bookHistories: [],
    getBookHistories: async () => {
        const response = await getBookHistories();
        if (response.status) {
            set({ bookHistories: response.data });
        }
        return response;
    },
    getBookHistoriesByUser: async () => {
        const response = await getBookHistoriesByUser();
        if (response.status) {
            set({ bookHistories: response.data });
        }
        return response;
    },
    createBookHistory: async (concertId: number) => {
        const response = await createBookHistory({ concertId });
        return response;
    },
    deleteBookHistory: async (bookHistoryId: number) => {
        const response = await deleteBookHistory(bookHistoryId);
        return response;
    },
    updateBookHistoryStatus: async (bookHistoryId: number, status: string) => {
        const response = await updateBookHistory(bookHistoryId, { status });
        return response;
    }
}))