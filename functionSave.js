const Datastore = require('@google-cloud/datastore');
const datastoreConnect = new Datastore({
	projectId: 'YOUR-PROJECT-ID',
	keyFilename: './configDatastore.json'
});
const kindName = 'cars';

exports.saveCar = (req, res) => {
	const { plaque, color, price, model, brand } = req.body;

	datastoreConnect.upsert({
		key: datastoreConnect.key(kindName),
		data: {
			plaque,
			color,
			price,
			model,
			brand
		}
	}).catch((err) => {
		console.error(`ERROR: ${err}`);
		res.status(500).send(err);
		return;
	});

	res.status(200).send('Car created!');
};