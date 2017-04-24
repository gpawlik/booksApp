import { parseString } from 'xml2js';

const xmlToJson = xmlString => {
	return new Promise((resolve, reject) => {
		parseString(xmlString, function (err, result) {
			if(err) {
			reject(error);
			}
			resolve(result)
		});
	});
}

export default xmlToJson;
