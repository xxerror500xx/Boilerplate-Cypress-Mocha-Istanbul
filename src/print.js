var clickNum = 0;
export default function toLi() {
  clickNum++;
  return `<li><span>Clicked! ` + clickNum + `</span></li>`;
}
