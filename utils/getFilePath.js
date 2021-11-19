const path = require('path');

const getFilePath = anyFilePath => path.join(anyFilePath);
// path.join(
// 	'E:',
// 	'MW',
// 	'react-component-library',
// 	'src',
// 	'Components',
// 	// 'Common',
// 	// 'MyProfile',
// );

module.exports = {
	getFilePath,
};
