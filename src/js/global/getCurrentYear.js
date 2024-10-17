export function getCurYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
}
