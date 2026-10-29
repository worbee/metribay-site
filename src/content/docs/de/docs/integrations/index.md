---
title: Alle Integrationen
description: Die sieben Tools, aus denen Metribay liest, was jedes davon liefert und was du zum Verbinden brauchst.
---

Metribay liest von sieben Anbietern. Jede Anleitung zeigt dir, welchen Zugriff der Anbieter braucht und wie du ihn verbindest.

| Anbieter | Was du bekommst | Was du brauchst | Tage gezählt in |
|---|---|---|---|
| [Google Analytics 4](google-analytics/) | Besucher, Besuche, Seitenaufrufe | Ein Google-Dienstkonto | Zeitzone der Property |
| [Google Search Console](search-console/) | Klicks, Impressionen | Ein Google-Dienstkonto | Pazifischer Zeit |
| [Bing Webmaster Tools](bing/) | Klicks, Impressionen, indexierte Seiten | Einen API-Schlüssel | UTC |
| [Umami](umami/) | Besucher, Besuche, Seitenaufrufe | Serveradresse, Benutzername und Passwort | UTC |
| [GitHub](github/) | Commits, gemergte PRs, geänderte Zeilen, offene Issues, Releases | Ein Personal Access Token | UTC |
| [WordPress.org](wordpress/) | Tägliche Plugin-Downloads | Nichts | UTC |
| [UptimeRobot](uptimerobot/) | Status, Verfügbarkeit (24 h), Antwortzeit | Einen Read-only-API-Schlüssel | UTC |

## Wie jede Integration funktioniert

- **Nur lesen.** Metribay liest nur Zahlen. Es veröffentlicht, ändert oder löscht nie etwas in deinen Tools.
- **Vor dem Speichern geprüft.** Zugangsdaten werden beim Anbieter getestet, bevor Metribay sie speichert.
- **Nur, was das Konto sehen kann.** Wählst du eine Ressource, listet Metribay, worauf das gespeicherte Konto Zugriff hat. Gib den Zugriff also zuerst beim Anbieter frei.
- **Verschlüsselt.** Zugangsdaten werden verschlüsselt und nie wieder angezeigt. Siehe [Gespeicherte Konten](../saved-accounts/).
- **Nur öffentliches HTTPS.** Metribay verbindet sich mit der öffentlichen HTTPS-Adresse jedes Anbieters. Tools in einem privaten Netzwerk oder hinter einem VPN sind nicht erreichbar.

## Welche Datenquellen passen zu einem Projekt?

| Du betreibst | Passende Datenquellen |
|---|---|
| Eine Website oder einen Blog | Google Analytics 4 oder Umami, Search Console, Bing, UptimeRobot |
| Ein WordPress-Plugin | WordPress.org, GitHub und die Website des Plugins |
| Eine Open-Source-Bibliothek | GitHub und die Analysedaten der Doku-Website |
| Eine Web-App | Analyse für die Marketing-Website, UptimeRobot für die App, GitHub für den Code |

## Dir fehlt ein Tool?

Sag uns, welches, unter [rob@worbee.com](mailto:rob@worbee.com). Wünsche helfen bei der Entscheidung, was als Nächstes kommt.
