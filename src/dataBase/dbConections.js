import { connect } from "mongoose";
import { MONGO_URI } from "../../config";

connect(MONGO_URI)
    .then((resp) => console.log(`db conectada a ${resp.connection.name}`))
    .catch((err) => console.log(err));
