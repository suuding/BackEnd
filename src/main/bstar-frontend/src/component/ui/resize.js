import imageCompression from 'browser-image-compression';

const handleFileOnChange = async (file) => {
    const options = {maxSizeMB: 1, maxWidthOrHeight: 300};
    try {
        const compressedFile = await imageCompression(file, options);
        const resultFile = new File([compressedFile], compressedFile.name, {
            type: compressedFile.type,
        });

        return resultFile;
    } catch (error) {
        console.log(error);
    }
};

const handleUrlOnChange = async(compressedFile) => {
    try{
        const url = await imageCompression.getDataUrlFromFile(compressedFile);
        return url;
    } catch (error) {
        console.log(error);
    }
};



const handleResize = async (file) => {
    const newFile = await handleFileOnChange(file);
    const newUrl = await handleUrlOnChange(newFile);
    const content = "";

    return { file: newFile, id: newFile.lastModified, url: newUrl, };
};

export { handleFileOnChange, handleUrlOnChange, handleResize };