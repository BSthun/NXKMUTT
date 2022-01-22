package search

import (
	"Project/loaders/database"
	"github.com/gofiber/fiber/v2"
	"strconv"
	"strings"
)

func Handler(c *fiber.Ctx) error {
	req := new(SearchReq)
	if err := c.BodyParser(req); err != nil {
		return err
	}

	var queryPublicationId = `SELECT publications.id as id FROM publications INNER JOIN tags_publications_links ON publications.id = tags_publications_links.publication_id `

	if len(req.TypeTag) != 0 || len(req.TechniqueTags) != 0 || len(req.ThemeTags) != 0 {
		queryPublicationId += "AND (tags_publications_links.tag_id IN ("
		if len(req.TypeTag) != 0 {
			for i := 0; i < len(req.TypeTag); i++ {
				if i == len(req.TypeTag)-1 {
					queryPublicationId += strconv.Itoa(req.TypeTag[i]) + ") "
				} else {
					queryPublicationId += strconv.Itoa(req.TypeTag[i]) + ","
				}
			}
		}

		if len(req.TypeTag) == 0 {
			for i := 0; i < len(req.TechniqueTags); i++ {
				if i == len(req.TechniqueTags)-1 {
					queryPublicationId += strconv.Itoa(req.TechniqueTags[i]) + ") "
				} else {
					queryPublicationId += strconv.Itoa(req.TechniqueTags[i]) + ","
				}
			}
		} else if len(req.TechniqueTags) != 0 {
			queryPublicationId += "OR tags_publications_links.tag_id IN ("
			for i := 0; i < len(req.TechniqueTags); i++ {
				if i == len(req.TechniqueTags)-1 {
					queryPublicationId += strconv.Itoa(req.TechniqueTags[i]) + ") "
				} else {
					queryPublicationId += strconv.Itoa(req.TechniqueTags[i]) + ","
				}
			}
		}

		if len(req.TypeTag) == 0 && len(req.TechniqueTags) == 0 {
			for i := 0; i < len(req.ThemeTags); i++ {
				if i == len(req.ThemeTags)-1 {
					queryPublicationId += strconv.Itoa(req.ThemeTags[i]) + ") "
				} else {
					queryPublicationId += strconv.Itoa(req.ThemeTags[i]) + ","
				}
			}
		} else if len(req.ThemeTags) != 0 {
			queryPublicationId += "OR tags_publications_links.tag_id IN ("
			for i := 0; i < len(req.ThemeTags); i++ {
				if i == len(req.ThemeTags)-1 {
					queryPublicationId += strconv.Itoa(req.ThemeTags[i]) + ") "
				} else {
					queryPublicationId += strconv.Itoa(req.ThemeTags[i]) + ","
				}
			}
		}
		queryPublicationId += ") "
	}

	//query
	if req.Query != "" {
		queryPublicationId += `AND (`
		words := strings.Split(req.Query, " ")

		for i, word := range words {
			if i > 0 {
				queryPublicationId += ` OR`
			}
			queryPublicationId += ` publications.slug LIKE '%` + word + `%' OR publications.title LIKE '%` + word + `%' OR publications.desc LIKE '%` + word + `%'  `
		}

		queryPublicationId += ` OR publications.slug LIKE '%` + req.Query + `%' OR publications.title LIKE '%` + req.Query + `%' OR publications.desc LIKE '%` + req.Query + `%') `
	}

	//year
	queryPublicationId += `WHERE publications.published BETWEEN '01-01-` + strconv.Itoa(int(req.YearStart)) + `' AND '12-31-` + strconv.Itoa(int(req.YearEnd)) + `'` + ` GROUP BY publications.id`
	publicationsIdResult, err := database.PG.Query(queryPublicationId)
	if err != nil {
		println(err.Error())
	}

	//Store publications_id into array
	var publicationsId []int
	for publicationsIdResult.Next() {
		var id int
		err = publicationsIdResult.Scan(&id)
		if err != nil {
			println(err.Error())
		}
		publicationsId = append(publicationsId, id)
	}

	if len(publicationsId) == 0 {
		return c.JSON(SearchRes{
			Data: []int{},
		})
	}

	return c.JSON(SearchRes{
		Data: publicationsId,
	})
}
