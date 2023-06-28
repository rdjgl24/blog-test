import capitalize from "./capitalize";
import humanize from "./humanize";

export default function humanizeDate($date) {
  const datetime = $date.getAttribute("datetime");
  const humanizedDate = humanize(datetime);

  $date.textContent = capitalize(humanizedDate);
}
