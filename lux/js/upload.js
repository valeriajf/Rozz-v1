//=========CRÉDITOS=============\\
/*
CRÉDITOS: PEDROZZ MODS

Essa base foi criada por Pedrozz Mods, então se você for divulgar, repostar ou compartilhar em qualquer lugar, dá aquela moral e mantém os créditos, fechou? 😅

Ela é totalmente **gratuita**, ou seja, se algum espertinho aí tiver vendendo, já sabe que tá feio hein... 👀
*/
const { Catbox } = require("node-catbox");
const fs = require("fs");
const path = require("path");

const getRandomName = (extension) => {
function getRandomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
const fileName = `arquivoTemporario_${getRandomNumber(0, 999999)}`;
if (!extension) { return fileName.toString(); }return `${fileName}.${extension}`;};

exports.catBoxUpload = async (buffer) => {
const catBox = new Catbox();
const tempPath = path.resolve("./lux", getRandomName("png"));
fs.writeFileSync(tempPath, buffer);
try {
const response = await catBox.uploadFile({
path: tempPath,
});

setTimeout(() => {
if (fs.existsSync(tempPath)) {
fs.unlinkSync(tempPath);
} }, 1000 * 60 * 5);

return response;
} catch (error) {
console.error("Erro ao fazer upload para o CatBox:", error);
return null;
}
};
