export async function loadImagePaths() {
	const imageFiles = import.meta.glob('../../static/ourworks/*.{png,jpg,jpeg,gif,svg,webp}');

	const imagePaths = [];
	for (const path in imageFiles) {
		if (imageFiles.hasOwnProperty(path)) {
			imagePaths.push(path);
		}
	}

	return imagePaths;
}
