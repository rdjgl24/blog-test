import humanizeDate from "./utils/humanizeDate";
import sortByDate from "./utils/sortByDate";

function humanizeArticlesDate() {
  const $dates = document.querySelectorAll("time"); //ARRAY-LIKE
  $dates.forEach(humanizeDate);
}

function sortArticlesByDate() {
  const $cards = document.querySelectorAll(".post-list .card");
  const $cardsSorted = [...$cards].sort(sortByDate);

  const $postList = document.querySelector(".post-list");
  [...$postList.children].forEach(($child) => $child.remove());
  $postList.append(...$cardsSorted);
}

function main() {
  humanizeArticlesDate();
  sortArticlesByDate();
}

main();
