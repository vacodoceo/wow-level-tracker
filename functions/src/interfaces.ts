import admin = require("firebase-admin");

export interface Realm {
  name: string;
  id: number;
  slug: string;
}

export interface Character {
  name: string;
  realm: Realm;
  level: number | null;
}

export interface User {
  email: string;
  name: string;
  lastName: string;
  characters: Character[];
  group: string | number;
  program: string;
  updatedAt: admin.firestore.Timestamp;
}
