document.getElementById("fileInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const text = await file.text();
  const html = marked.parse(text);

  document.getElementById("output").innerHTML = html;
});
