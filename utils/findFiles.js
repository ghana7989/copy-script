const path = require('path');
const fs = require('fs');
/**
 * @param {String} givenPath
 * @param {Array<String>} arrayOfExtensions
 * @returns {Array<String>}
 * @description findFiles takes a path and then recursively searches for all files in the directory and subdirectories
 * with a specific extension.
 */
const findFiles = (givenPath, arrayOfExtensions) => {
	const files = [];
	const findFilesInFolder = folderPath => {
		const folderContent = fs.readdirSync(folderPath);
		folderContent.forEach(file => {
			const filePath = path.join(folderPath, file);

			if (fs.lstatSync(filePath).isDirectory()) {
				findFilesInFolder(filePath);
			} else {
				const fileExtension = path.extname(filePath);
				if (arrayOfExtensions.includes(fileExtension)) {
					files.push(filePath);
				}
			}
		});
	};

	findFilesInFolder(givenPath);

	return files;
};

module.exports = {findFiles};
