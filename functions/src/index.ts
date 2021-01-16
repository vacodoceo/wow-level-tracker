import * as functions from "firebase-functions";
import { getToken, updateAllCharactersData } from "./services";

const admin = require("firebase-admin");
admin.initializeApp();

// Get token every 12 hours
exports.getNewClientToken = functions.pubsub
  .schedule("every 12 hours")
  .onRun(async () => {
    const token = await getToken();
    await admin
      .firestore()
      .collection("credentials")
      .doc("client_credentials")
      .update({ token });
    return null;
  });

// Trigger character data update on HTTP call
exports.updateAllCharactersData = functions.https.onCall(
  updateAllCharactersData,
);

// Trigger character data update if a character is created
exports.onCharacterCreation = functions.firestore
  .document("users/{userId}")
  .onUpdate(async change => {
    const previousCharacters = change.before.data().characters;
    const newCharacters = change.after.data().characters;

    if (previousCharacters.length < newCharacters.length) {
      await updateAllCharactersData();
    }
    return null;
  });
