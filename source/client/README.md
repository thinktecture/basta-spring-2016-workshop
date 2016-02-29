# basta-spring-2016-workshop
Samples für den BASTA! Spring 2015 Pre-Con Workshop



## Projekt Abhängigkeiten installieren

Nachdem das Projekt auf dem lokalen System installiert ist, müssen die Abhängigkeiten installiert werden. Hierzu muss im `client` Ordner der Begriff `npm install` ausgeführt werden.


## Kompilieren von Typescript nach JavaScript

Die Anwendung kann mit `npm run tsc` einmalig transpiliert werden. Über den Watch task `npm run tsc:w` werden die Typescript files on the fly bei jeder Änderung kompiliert.

## Starten der Anwendung auf dem lokalen System

Zum starten muss der `lite-server` gestartet werden. Hierzu führen Sie

```
$ npm run lite
```

