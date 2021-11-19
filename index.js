const {getFilePath} = require('./utils/getFilePath');
const {findFiles} = require('./utils/findFiles');
const {copyFiles} = require('./utils/copyFiles');

const DEFAULT_ARRAY_OF_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const sourcePath = process.argv[2];
const destinationPath = process.argv[3];
const arrayOfExtensions =
	process.argv[4]
		?.replace(',', '')
		.replace(' ', '')
		.split('.')
		.slice(1)
		.map(ext => '.' + ext) || DEFAULT_ARRAY_OF_EXTENSIONS;

const res = findFiles(getFilePath(sourcePath), arrayOfExtensions);
copyFiles(res, getFilePath(destinationPath));
