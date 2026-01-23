import "./style.css";

import { charmander } from "./bases/05-decorators";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
Hello ${charmander.name}
  </div>
`;
