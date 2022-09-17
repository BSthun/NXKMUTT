import { faEllipsisV, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import { Tween } from "react-gsap";
import { useTranslation } from "react-i18next";
import { Controller, Scene } from "react-scrollmagic";
import CurveButton from "../../components/fork/CurveButton";
import DecoSpotWave from "../../images/decorate/spotwave.svg";
import Title from "../components/Title";

const AboutSection = () => {
  const classes = useStyles();
  const [t] = useTranslation("home");

  return (
    <Box bgcolor="background.default" className={classes.root}>
      <Controller>
        <Box position="absolute" top={-96} left={-256} width={512} zIndex={2}>
          <div id="home-mission-deco1" />
          <Scene duration={600} triggerElement="#home-mission-deco1">
            {(progress) => (
              <Tween
                to={{
                  rotation: 180,
                }}
                totalProgress={progress}
                paused
              >
                <img alt="Decoration element" src={DecoSpotWave} />
              </Tween>
            )}
          </Scene>
        </Box>
        {/*<Box position="absolute" bottom={-192} right={0} width={256} height={512} overflow="hidden" zIndex={2}>
					<Box position="absolute" bottom={0} right={-256} width={512}>
						<div id="home-mission-deco2" />
						<Scene duration={600} triggerElement="#home-mission-deco2">
							{(progress) => (
								<Tween
									from={{
										rotation: 359,
									}}
									to={{
										rotation: 180,
									}}
									totalProgress={progress}
									paused
								>
									<img alt="Decoration element" src={DecoCrescentMoon} />
								</Tween>
							)}
						</Scene>
					</Box>
				</Box>*/}
      </Controller>
      <Container maxWidth="lg" className={classes.container}>
        <div>
          <Title color="#448aff" /* blue A200 */>ABOUT US</Title>
          <div className={classes.body}>
            <div>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                Our mission
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our team investigates neural and computational mechanism that
                support human perception and cognitive functions, and study how
                they develop from children and teenagers to fully grown adults.
                Moreover, we study how brain functions decline in aging society.
              </Typography>
              <Box
                display="flex"
                justifyContent={{ xs: "flex-start", md: "center" }}
                marginTop={6}
              >
                <CurveButton minWidth={142} marginRight={16}>
                  <FontAwesomeIcon icon={faEllipsisV} /> &nbsp;{" "}
                  {t("moredetail")}
                </CurveButton>
                <CurveButton minWidth={142}>
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp; {t("contact")}
                </CurveButton>
              </Box>
            </div>
            <div className={classes.list}>
              <h6>
                Frontier research lab in neuroscience, neurotechnology, and
                learning innovation.
              </h6>
              <h6>
                Pioneering the field of neuroscience using an integrative
                framework.
              </h6>
              <h6>
                Inventing new ways to tackle neurological and mental disorders
                and promote cognitive health across lifespan.
              </h6>
              <h6>
                Translating results from empirical experiments into useful
                industrial applications.
              </h6>
              <h6>Aiming to become a world-class excellence center.</h6>
              <h6>Making the impossible possible 💫</h6>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    padding: 16,
    zIndex: 3,
    "& > div": {
      padding: 16,
      borderRadius: theme.shape.borderRadius,
      background:
        theme.palette.mode === "dark"
          ? "linear-gradient(135deg, #140b02, hsla(0,0%,100%,0) 80%)"
          : "linear-gradient(135deg, #ebf4fd, hsla(0,0%,100%,0) 80%)",
      backdropFilter: `blur(6px) brightness(${
        theme.palette.mode === "dark" ? "8" : "12"
      }0%)`,
    },
  },
  body: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "& > div": {
      padding: "0 32px 32px 32px",
      "&:first-child": {
        flex: 4,
      },
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      "& > div": {
        padding: 8,
        paddingTop: 32,
      },
    },
  },
  list: {
    flex: 7,
    maxWidth: 600,
    "& > h6": {
      padding: "12px 6px",
      fontSize: "1em",
      color: theme.palette.text.secondary,
      fontWeight: 400,
      borderBottom: `1px solid ${theme.palette.text.hint}`,
      "&:first-child": {
        paddingTop: 0,
      },
      "&:last-child": {
        paddingBottom: 0,
        borderBottom: "none",
      },
    },
  },
}));

export default AboutSection;
