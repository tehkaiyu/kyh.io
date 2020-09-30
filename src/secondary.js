import tippy from "tippy.js";
import AnimatedShape from "./services/shapes";

import amazonImage from "./assets/screenshots/amazon.png";
import slyceImage from "./assets/screenshots/slyce.png";
import tinyrxImage from "./assets/screenshots/tinyrx.png";
import cardiogramImage from "./assets/screenshots/cardiogram.png";
import atriumImage from "./assets/screenshots/atrium.png";
import tedxuoftImage from "./assets/screenshots/tedxuoft.png";
import tedxtorontoImage from "./assets/screenshots/tedxtoronto.png";
import vwImage from "./assets/screenshots/vw.png";
import ingImage from "./assets/screenshots/ing.png";
import fbImage from "./assets/screenshots/fb.png";
import bootstrapImage from "./assets/screenshots/bootstrap.png";
import keikoImage from "./assets/screenshots/keiko.png";
import ysImage from "./assets/screenshots/ys.png";
import covid19Image from "./assets/screenshots/covid19.png";
import playhouseImage from "./assets/screenshots/playhouse.png";

const tooltipMap = {
  amazon: `<img src=${amazonImage} width="320" height="240"/>`,
  slyce: `<img src=${slyceImage} width="320" height="240"/>`,
  tinyrx: `<img src=${tinyrxImage} width="320" height="240"/>`,
  cardiogram: `<img src=${cardiogramImage} width="320" height="240"/>`,
  atrium: `<img src=${atriumImage} width="320" height="240"/>`,
  tedxuoft: `<img src=${tedxuoftImage} width="320" height="240"/>`,
  tedxtoronto: `<img src=${tedxtorontoImage} width="320" height="240"/>`,
  vw: `<img src=${vwImage} width="320" height="240"/>`,
  ing: `<img src=${ingImage} width="320" height="240"/>`,
  fb: `<img src=${fbImage} width="320" height="240"/>`,
  bootstrap: `<img src=${bootstrapImage} width="320" height="240"/>`,
  keiko: `<img src=${keikoImage} width="320" height="240"/>`,
  ys: `<img src=${ysImage} width="320" height="240"/>`,
  covid19: `<img src=${covid19Image} width="320" height="240"/>`,
  playhouse: `<img src=${playhouseImage} width="320" height="240"/>`,
};

tippy("[data-tooltip]", {
  content: (reference) => {
    const content = reference.getAttribute("data-tooltip");
    return tooltipMap[content] || "My tooltip!";
  },
  allowHTML: true,
  animation: "shift-away-subtle",
  arrow: false,
  delay: 200,
});

const icosahedron = new AnimatedShape("shape-icosahedron");
icosahedron.init();
