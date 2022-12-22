import {useUser} from "@auth0/nextjs-auth0";

export function getData() {
    return useUser;
}
