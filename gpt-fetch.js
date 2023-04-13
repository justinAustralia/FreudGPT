fetch(
  `https://api.openai.com/v1/completions`,
    {
        body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0, "max_tokens": 20}),
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer  (API key here)",
        },
            }
  ).then((response) => {
    if (response.ok) {
        response.json().then((json) => {
            console.log(json);
        });
    }
});
