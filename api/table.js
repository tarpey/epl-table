const express = require("express");
const app = express();
const router = express.Router();

const imgSrc = "https://ssl.gstatic.com/onebox/media/sports/logos";

router.get("/table", (req, res, next) => {
  res.json([
    {
      name: "Man United",
      shortName: "Man Utd",
      logo: `${imgSrc}/udQ6ns69PctCv143h-GeYw_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 5,
      ga: 1,
      gd: 4,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Chelsea",
      shortName: "Chelsea",
      logo: `${imgSrc}/fhBITrIlbQxhVB6IjxUO6Q_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 3,
      ga: 0,
      gd: 3,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Liverpool",
      shortName: "Liverpool",
      logo: `${imgSrc}/0iShHhASp5q1SL4JhtwJiw_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 3,
      ga: 0,
      gd: 3,
      pts: 3,
      form: ["w"],
    },
    {
      name: "West Ham",
      shortName: "West Ham",
      logo: `${imgSrc}/bXkiyIzsbDip3x2FFcUU3A_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 4,
      ga: 2,
      gd: 2,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Everton",
      shortName: "Everton",
      logo: `${imgSrc}/C3J47ea36cMBc4XPbp9aaA_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 3,
      ga: 1,
      gd: 2,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Brentford",
      shortName: "Brentford",
      logo: `${imgSrc}/QOUce0WQBYqnkSmN6_TxGA_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 2,
      ga: 0,
      gd: 2,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Watford",
      shortName: "Watford",
      logo: `${imgSrc}/lHr1L31i7aJS-O8tUdHOIQ_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 3,
      ga: 2,
      gd: 1,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Brighton",
      shortName: "Brighton",
      logo: `${imgSrc}/EKIe0e-ZIphOcfQAwsuEEQ_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 2,
      ga: 1,
      gd: 1,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Leicester City",
      shortName: "Leicester",
      logo: `${imgSrc}/UDYY4FSlty6fXFBzvFfcyw_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 1,
      ga: 0,
      gd: 1,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Tottenham",
      shortName: "Tottenham",
      logo: `${imgSrc}/k3Q_mKE98Dnohrcea0JFgQ_48x48.png`,
      gp: 1,
      w: 1,
      d: 0,
      l: 0,
      gf: 1,
      ga: 0,
      gd: 1,
      pts: 3,
      form: ["w"],
    },
    {
      name: "Aston Villa",
      shortName: "Aston Villa",
      logo: `${imgSrc}/uyNNelfnFvCEnsLrUL-j2Q_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 2,
      ga: 3,
      gd: -1,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Burnley",
      shortName: "Burnley",
      logo: `${imgSrc}/teLLSaMXim_8BA1d93sMng_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 1,
      ga: 2,
      gd: -1,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Man City",
      shortName: "Man City",
      logo: `${imgSrc}/z44l-a0W1v5FmgPnemV6Xw_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 0,
      ga: 1,
      gd: -1,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Wolves",
      shortName: "Wolves",
      logo: `${imgSrc}/-WjHLbBIQO9xE2e2MW3OPQ_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 0,
      ga: 1,
      gd: -1,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Newcastle",
      shortName: "Newcastle",
      logo: `${imgSrc}/96CcNNQ0AYDAbssP0V9LuQ_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 2,
      ga: 4,
      gd: -2,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Southampton",
      shortName: "Southampton",
      logo: `${imgSrc}/y1V4sm2SEBiWUPRIYl5rfg_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 1,
      ga: 3,
      gd: -2,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Arsenal",
      shortName: "Arsenal",
      logo: `${imgSrc}/4us2nCgl6kgZc0t3hpW75Q_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 0,
      ga: 2,
      gd: -2,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Crystal Palace",
      shortName: "Crystal Palace",
      logo: `${imgSrc}/8piQOzndGmApKYTcvyN9vA_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 0,
      ga: 3,
      gd: -3,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Norwich City",
      shortName: "Norwich",
      logo: `${imgSrc}/y-we_-8ySOubta5psWzDoA_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 0,
      ga: 3,
      gd: -3,
      pts: 0,
      form: ["l"],
    },
    {
      name: "Leeds United",
      shortName: "Leeds",
      logo: `${imgSrc}/5dqfOKpjjW6EwTAx_FysKQ_48x48.png`,
      gp: 1,
      w: 0,
      d: 0,
      l: 1,
      gf: 1,
      ga: 5,
      gd: -4,
      pts: 0,
      form: ["l"],
    },
  ]);
});

module.exports = router;
