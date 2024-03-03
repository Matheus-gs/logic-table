document.addEventListener("DOMContentLoaded", loadTable);


function loadTable() {
  const tableBody = document.querySelector("#truthTable tbody");

  for (let p = 0; p <= 1; p++) {
    for (let q = 0; q <= 1; q++) {
      const row = document.createElement("tr");

      const assertionElementsRef = createAssertionElements()

      const {
        pCell,
        qCell,
        andCell,
        orCell,
        conditionalCell,
        biConditionalCell,
        notPCell
      } = fillAssertions(assertionElementsRef, p, q);

      row.appendChild(pCell);
      row.appendChild(qCell);
      row.appendChild(andCell);
      row.appendChild(orCell);
      row.appendChild(conditionalCell);
      row.appendChild(biConditionalCell);
      row.appendChild(notPCell);

      tableBody.appendChild(row);
    }
  }

}

function convertBooleanToBinaryBit(boolean) {
  return boolean ? 1 : 0;
}

function createAssertionElements() {
  const pCell = document.createElement("td");
  const qCell = document.createElement("td");
  const andCell = document.createElement("td");
  const orCell = document.createElement("td");
  const conditionalCell = document.createElement("td");
  const biConditionalCell = document.createElement("td");
  const notPCell = document.createElement("td");

  return {
    pCell,
    qCell,
    andCell,
    orCell,
    conditionalCell,
    biConditionalCell,
    notPCell
  }
}

function fillAssertions(assertionElementsRef, p, q) {
  const {
    pCell,
    qCell,
    andCell,
    orCell,
    conditionalCell,
    biConditionalCell,
    notPCell
  } = assertionElementsRef;

  const andAssertion = convertBooleanToBinaryBit(p && q);
  const orAssertion = convertBooleanToBinaryBit(p || q);
  const conditionalAssertion = convertBooleanToBinaryBit(!p || q);
  const biConditionalAssertion = convertBooleanToBinaryBit((p && q) || (!p && !q));
  const notPAssertion = convertBooleanToBinaryBit(!p);

  pCell.textContent = p;
  qCell.textContent = q;
  andCell.textContent = andAssertion;
  orCell.textContent = orAssertion;
  conditionalCell.textContent = conditionalAssertion
  biConditionalCell.textContent = biConditionalAssertion
  notPCell.textContent = notPAssertion

  return assertionElementsRef;
}