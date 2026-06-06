import { relations } from "drizzle-orm/relations";
import { teams, draft, countries } from "./schema";

export const draftRelations = relations(draft, ({one}) => ({
	team: one(teams, {
		fields: [draft.originalTeam],
		references: [teams.id]
	}),
}));

export const teamsRelations = relations(teams, ({one, many}) => ({
	drafts: many(draft),
	country: one(countries, {
		fields: [teams.teamCountry],
		references: [countries.country]
	}),
}));

export const countriesRelations = relations(countries, ({many}) => ({
	teams: many(teams),
}));