import * as functions from "firebase-functions";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";

import { getCharacterInfo, getToken } from "./services";
import { Character } from "./interfaces";

const admin = require("firebase-admin");
admin.initializeApp();

// Get token every 12 hours
exports.scheduledFunctionCrontab = functions.pubsub
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
    async (userDoc: QueryDocumentSnapshot) => {
      const userData = userDoc.data();
      const { characters } = userData;

      const updateUserCharactersPromises = characters.map(
        async (character: Character) => {
          const {
            name,
            realm: { slug },
          } = character;

          return getCharacterInfo(name, slug, token).then(response => {
            const newLevel = response.data.level;
            character.level = newLevel;
          });
        },
      );

      await Promise.all(updateUserCharactersPromises);
      return await userDoc.ref.update({ characters });
    },
  );

  await Promise.all(updateUsersPromises);
  return null;
});
