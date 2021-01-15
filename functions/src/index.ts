import * as functions from "firebase-functions";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";

import { getToken, updateUserCharactersData } from "./services";

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

exports.updateCharactersInfo = functions.https.onCall(async () => {
  const usersQuery = await admin
    .firestore()
    .collection("users")
    .get();
  const client_credentials = await admin
    .firestore()
    .doc("credentials/client_credentials")
    .get();
  const { token } = client_credentials.data();

  const updateUsersPromises = usersQuery.docs.map(
    (userDoc: QueryDocumentSnapshot) =>
      updateUserCharactersData(userDoc, token),
  );

  return await Promise.all(updateUsersPromises);
});
