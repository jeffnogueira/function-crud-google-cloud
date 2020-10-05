const Datastore = require('@google-cloud/datastore');
const datastoreConnect = new Datastore({
	projectId: 'YOUR-PROJECT-ID',
	keyFilename: './configDatastore.json'
});
const kindName = 'cars';

exports.getCar = async (req, res) => {
	const { plaque } = req.query;

	const query = datastoreConnect.createQuery(kindName).filter('plaque', '=', plaque);

	const [data] = await datastoreConnect.runQuery(query);

	if (data.length === 0) {
		return res.status(404).send('No car found with this plaque!');
	}

	res.status(200).send(data);
};