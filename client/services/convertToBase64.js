export default async function convertToBase64(file) {
  try {
    return await readFileAsync(file);
  } catch (e) {
    console.log(e.message);
  }
}
const readFileAsync = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => reject('Error');

    reader.readAsDataURL(file);
  });
};
