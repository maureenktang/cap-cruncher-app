import { pgTable, unique, bigint, timestamp, text, foreignKey, numeric, date } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const countries = pgTable("countries", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "countries_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	country: text(),
	alpha3: text(),
}, (table) => [
	unique("countries_country_key").on(table.country),
]);

export const draft = pgTable("draft", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "draft_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	draftYear: numeric("draft_year"),
	draftRound: numeric("draft_round"),
	draftRoundPick: numeric("draft_round_pick"),
	draftOverall: numeric("draft_overall"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	originalTeam: bigint("original_team", { mode: "number" }),
	finalTeam: text("final_team"),
}, (table) => [
	foreignKey({
			columns: [table.originalTeam],
			foreignColumns: [teams.id],
			name: "draft_original_team_fkey"
		}),
]);

export const teams = pgTable("teams", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "teams_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	teamName: text("team_name"),
	teamCity: text("team_city"),
	teamState: text("team_state"),
	teamCountry: text("team_country"),
	startDate: date("start_date"),
	firstSeason: numeric("first_season"),
	lastSeason: numeric("last_season"),
}, (table) => [
	foreignKey({
			columns: [table.teamCountry],
			foreignColumns: [countries.country],
			name: "teams_team_country_fkey"
		}),
	unique("teams_team_name_key").on(table.teamName),
]);
