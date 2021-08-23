const email = document.getElementById("email");
const fact = document.getElementById("fact");

email.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getFacts(e.target.value);
  }
});

async function getFacts(email) {
  const {
    data: { data },
  } = await axios.get(`https://api.eva.pingutil.com/email?email=${email}`);
  fact.innerHTML = `
  <p>deliverable: ${data.deliverable}</p>
  <p>disposable: ${data.disposable}</p>
  <p>gibberish: ${data.gibberish}</p>
  <p>spam: ${data.spam}</p>
  <p>valid syntax: ${data.valid_syntax}</p>
  `;
}
