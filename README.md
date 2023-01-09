# React devcontainer

Environment de développement pour React.

## Analyse du code et formattage

Cet environnement est configuré pour que le code JavaScript suive les [règles d'Airbnb](https://airbnb.io/javascript/), également disponibles [en français](https://github.com/nmussy/javascript-style-guide).

## Client React

Toutes les commandes concernant le client React doivent se faire dans le répertoire `client`.

```shell
$ cd client
```

### Serveur de développement

Pour lancer le serveur de développement, tapez les commandes suivantes dans votre terminal :

```shell
$ npm run dev
```

Ceci lance un serveur HTTP sur le port 3000.
Si vous utilisez Codespaces, consultez l'onglet "Ports" et pointez votre navigateur web vers l'adresse proposée.

### Mise en production

Lorsque vous êtes prêts, exécuter les commandes suivantes vous permettra de générer le code de production.

```shell
$ npm run build
```

Vous pouvez même vérifier le comportement de la version _production_ de votre code avec la commande suivante.

```shell
$ npm run preview
```
