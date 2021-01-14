import * as functions from "firebase-functions";
import FormData = require("form-data");
const axios = require("axios").default;

export const getToken = async () => {
  const { client_id, client_secret } = functions.config().blizzard;
  const form = new FormData();
  form.append("grant-type", "client_credentials");

  const token = await axios.post("https://us.battle.net/oauth/token", form, {
    auth: {
      username: client_id,
      password: client_secret,
    },
  });

  return token;
};

export const getCharacterInfo = async (
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
