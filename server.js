const app = require("./modules/app/app");
const port = process.env.PORT || 8000;

app.listen(port, () => {
	return (`[petful-server] Listening on ${port}.`);
});
