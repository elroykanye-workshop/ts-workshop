/* 
Created as a result of following instructions from exercise 2
*/

declare module "AuthTypes" {
    export interface User {
        email: string;
        roles: Array<string>;
        source?: string;
    }
}