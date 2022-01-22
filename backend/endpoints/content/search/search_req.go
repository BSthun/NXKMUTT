package search

type SearchReq struct {
	YearStart     int    `json:"year_start"`
	YearEnd       int    `json:"year_end"`
	TypeTag       []int  `json:"type_tags"`
	TechniqueTags []int  `json:"technique_tags"`
	ThemeTags     []int  `json:"theme_tags"`
	Query         string `json:"query"`
}
