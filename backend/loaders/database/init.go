package database

import (
	"database/sql"

	_ "github.com/lib/pq"
)

var PG *sql.DB

func Init() {
	connStr := "postgres://nxkmutt:nx_2022@10.5.141.2/nxkmutt-strapi?sslmode=disable"
	if db, err := sql.Open("postgres", connStr); err == nil {
		println("Database is initialized.")
		PG = db
	} else {
		panic(err)
	}
}
