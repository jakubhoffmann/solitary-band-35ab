echo "module.exports = {
    siteMetadata: {
        title: 'Moja Strona',
    },
    plugins: [
        // Dodaj tutaj wtyczki zależne od potrzeb
    ],
};" > ishconfig.js

git add ishconfig.js
git commit -m "Dodanie pliku konfiguracyjnego Ish"
git push origin main
