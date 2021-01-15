import * as functions from "firebase-functions";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { Character } from "./interfaces";
import FormData = require("form-data");

const axios = require("axios").default;

export const getToken = async () => {
  const { client_id, client_secret } = functions.config().blizzard;
  const form = new FormData();
  form.append("grant_type", "client_credentials");

  const response = await axios
    .post("https://us.battle.net/oauth/token", form, {
      auth: {
        username: client_id,
        password: client_secret,
      },
      headers: form.getHeaders(),
    })
    .catch(console.log);

  const token = response.data.access_token;
  return token;
};

const getCharacterInfo = async (
  characterName: string,
  realmSlug: string,
  token: string,
) => {
  const lowerCaseCharacterName = characterName.toLowerCase();
  const response = await axios.get(
    `https://us.api.blizzard.com/profile/wow/character/${realmSlug}/${lowerCaseCharacterName}?namespace=profile-us`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export const updateUserCharactersData = async (
  userDoc: QueryDocumentSnapshot,
  token: string,
) => {
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
};
