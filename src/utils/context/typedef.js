/**
 * @typedef HostJSON L'hôte de l'annonce est imbriqué dans le JSON
 * @property {string} name Nom de l'hôte
 * @property {string} picture Url du portrait de l'hôte
 */
/**
 * @typedef {Object} AccomodationJSON Les types des données JSON d'une annonce
 * @property {string} id Identifiant unique de l'annonce
 * @property {string} title Titre de l'annonce
 * @property {string} cover Url de la photo de couverture de l'annonce
 * @property {Array.<string>} pictures Tableau des urls des photos de l'annonce
 * @property {string} description Description textuelle
 * @property {HostJSON} host Nom et portait de l'hôte
 * @property {number} rating Note sur cinq
 * @property {string} location Localisation
 * @property {Array.<string>} equipments Tableau des équipements
 * @property {Array.<string>} tags Hello Tableau des étiquettes
 */

// Devoir exporter un objet vide ici est ennuyeux, mais requis pour par vscode transmette les types ?
export {};
