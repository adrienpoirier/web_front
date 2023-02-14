import {ServiceXhr} from "./ServiceXhr";

export const ServiceChannel = {
    getAll: () => {
        ServiceXhr.callWithAuthNoBody("https://edu.tardigrade.land/msg/protected/user/channels", "GET");
    },
    createChannel: (chennel) => {
        const data = JSON.stringify(chennel);
        ServiceXhr.callWithAuth("https://edu.tardigrade.land/msg/protected/user/channels", data,"PUT");
    }
}