import { MainActionTypes } from "../main";

export type Sex = "male" | "female";
export type ProgramOfLoyalty = "not available" | "mobile app" | number;

export interface UsersData {
  name: string,
  surname: string,
  date: string,
  sex?: Sex,
  program_of_loyalty?: ProgramOfLoyalty
}

export type AppActionTypes = MainActionTypes;