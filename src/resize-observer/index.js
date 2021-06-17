let rangeValue = 60;
const minRange = 60;
const maxRange = 500;

document.getElementById("min-range-text-id").innerText = minRange;
document.getElementById("max-range-text-id").innerText = maxRange;

function resize(event) {
  const value = event.target.valueAsNumber;
  rangeValue = value;
  console.log(rangeValue);

  document.getElementById("range-value-id").innerText = rangeValue;

  let dumbBtn = document.getElementById("dumbBtnId");
  dumbBtn.style.width = `${value}px`;

  let dumbArea = document.getElementById("dumbAreaId");
  dumbArea.style.width = `${value}px`;
}

function colorText(entry) {
  if (rangeValue >= minRange && rangeValue <= 200) {
    entry.target.style.color = "#FFFFFF";
  } else if (rangeValue >= 201 && rangeValue <= 400) {
    entry.target.style.color = "#000000";
  } else if (rangeValue >= 401 && rangeValue <= maxRange) {
    entry.target.style.color = "red";
  }
}

try {
  let dumbBtn = document.getElementById("dumbBtnId");
  let textarea = document.getElementById("dumbAreaId");
  let resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      colorText(entry);
    }
  });
  resizeObserver.observe(dumbBtn);
  resizeObserver.observe(textarea);
} catch (e) {
  console.log(`${e}: Not Supported`);
}
