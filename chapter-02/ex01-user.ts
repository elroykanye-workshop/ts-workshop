/// <reference path = "./types/AuthTypes.d.ts" />
import auth = require("AuthTypes")

let jon: auth.User = {
    email: "jon@snow.com",
    roles: ["admin"],
};

let alice: auth.User = {
    email: "alice@snow.com",
    roles: ["super_admin"],
    source: "facebook",
}

