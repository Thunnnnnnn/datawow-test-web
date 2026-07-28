import { IResponse } from "@/model/response";
import { LogResponse } from "@/model/log";
import { create } from "zustand";
import { getLogs } from "@/service/logService";

interface State {
    logs: LogResponse[];
}

interface Actions {
    getLogs: () => Promise<IResponse<LogResponse[]>>;
}

export const useLogStore = create<State & Actions>((set) => ({
    logs: [],
    getLogs: async (): Promise<IResponse<LogResponse[]>> => {
        const response = await getLogs();

        if (response.status) {
            set({ logs: response.data });
        }
        return response;
    },
}));