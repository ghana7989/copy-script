const path = require('path');
const fs = require('fs');

/**
 * @param  {Array<String>} files
 * @param  {String} destinationPath
 * @returns {void}
 */
const copyFiles = (files, destinationPath) => {
	if (fs.existsSync(destinationPath)) {
		// delete the existing folder
		fs.rmSync(destinationPath, {
			recursive: true,
			force: true,
		});
	}
	if (!fs.existsSync(destinationPath)) {
		fs.mkdirSync(destinationPath);
	}
	files.forEach(file => {
		const fileName = path.basename(file);
		const fileParentFolder = path.dirname(file).split('src')[1];
		const destinationFolder = path.join(destinationPath, fileParentFolder);
		if (!fs.existsSync(destinationFolder)) {
			fs.mkdirSync(destinationFolder, {
				recursive: true,
			});
		}
		fs.copyFileSync(file, path.join(destinationFolder, fileName));
	});
};

module.exports = {copyFiles};
