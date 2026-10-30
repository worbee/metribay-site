---
title: So ist Metribay aufgebaut
description: Arbeitsbereiche, Projekte, Datenquellen, verbundene Konten, Kennzahlen und Ereignisse und wie sie zusammenhängen.
---

Metribay besteht aus wenigen Bausteinen. Kennst du sie, ergibt jeder Bildschirm Sinn.

```
Arbeitsbereich
├── Projekt: example.com
│   ├── Datenquelle: Google-Analytics-Property   ← liest über ein verbundenes Konto
│   ├── Datenquelle: Search-Console-Property     ← liest über ein verbundenes Konto
│   ├── Datenquelle: UptimeRobot-Monitor         ← liest über ein verbundenes Konto
│   └── Ereignisse: Launches, Kampagnen, Releases
├── Projekt: Mein WordPress-Plugin
│   ├── Datenquelle: WordPress.org-Downloads     (kein Konto nötig)
│   └── Datenquelle: GitHub-Repository
├── Verbundene Konten: deine Logins bei Google, GitHub, Umami …
└── Teammitglieder
```

Projekte und verbundene Konten sind die beiden Dinge, die du unter **Einstellungen** verwaltest. Datenquellen gehören zu Projekten: Du fügst sie im jeweiligen Projekt hinzu und verwaltest sie dort.

## Arbeitsbereich

Ein Arbeitsbereich enthält alles für ein Unternehmen, einen Kunden oder ein Portfolio: Projekte, verbundene Konten, den Verlauf der Kennzahlen und das Team. Zwischen Arbeitsbereichen wird nichts geteilt.

In Metribay Cloud kannst du bis zu fünf Arbeitsbereiche besitzen und oben in der Kopfzeile zwischen ihnen wechseln. Die selbst gehostete Version hat einen einzigen Arbeitsbereich, der im Hintergrund bleibt. Siehe [Arbeitsbereiche](../workspaces/).

## Projekt

Ein Projekt ist alles, was du betreibst und verfolgen willst: eine Website, ein Plugin, eine App oder ein Produkt. Es bündelt seine Datenquellen und Ereignisse in einer Ansicht. Ein Projekt hat einen Namen und optional eine Domain.

Du beginnst immer mit einem Projekt und fügst dann seine Datenquellen hinzu. Brauchst du ein Projekt nicht mehr, archiviere es. Es verschwindet aus der Übersicht, behält aber seinen Verlauf. Siehe [Projekte verwalten](../projects/).

## Verbundenes Konto

Ein verbundenes Konto ist dein Login bei einem Anbieter, etwa dein Google-Konto, ein GitHub-Token oder Benutzername und Passwort für Umami. Darüber erhält Metribay Lesezugriff. Du verbindest es einmal und nutzt es für beliebig viele Datenquellen in beliebig vielen Projekten: Ein Google-Konto kann jede Analytics-Property versorgen, die es sehen kann.

Zugangsdaten werden verschlüsselt und nach dem Speichern nie wieder angezeigt. Verbundene Konten gehören zum Arbeitsbereich, nicht zu einem Projekt. Siehe [Verbundene Konten](../connected-accounts/).

## Datenquelle

Eine Datenquelle ist genau ein Ding, das Metribay für ein Projekt erfasst: eine Search-Console-Property, ein GitHub-Repository oder ein UptimeRobot-Monitor. Sie legt fest, *was* gelesen wird; ihr verbundenes Konto legt fest, *mit welchem Login*.

Jede Datenquelle gehört zu genau einem Projekt und liest von genau einem Anbieter. Eine Datenquelle hat:

- einen **Namen**, den du wählst,
- die **Ressource**, die sie liest, etwa eine Property-ID oder einen Repository-Namen,
- das **verbundene Konto**, mit dem sie liest (WordPress.org braucht keins),
- eine **Berichtszeitzone**, die festlegt, wo ein Tag beginnt und endet,
- einen **Verlaufszeitraum**, der bestimmt, wie viele Tage Metribay zurückliest, und
- einen **Status**, etwa *Aktuell* oder *Braucht Aufmerksamkeit*.

Siehe [Datenquellen hinzufügen und verwalten](../data-sources/).

## Was wann passiert

Google Analytics zu einem Projekt namens *Beispiel* hinzufügen:

1. Wähle auf der Projektseite von *Beispiel* **Datenquelle hinzufügen** und dann **Google Analytics 4**.
2. Wähle ein verbundenes Konto oder melde dich bei Google an. **In diesem Moment wird ein neues verbundenes Konto gespeichert.**
3. Metribay listet die Properties, die dieses Konto sehen kann. Wähle eine aus.
4. Bestätige. **Jetzt entsteht die Datenquelle** und ihr erster Import startet.

Danach erfasst Metribay jede Datenquelle planmäßig über ihr verbundenes Konto. Ändert sich ein Passwort oder Token, aktualisierst du das verbundene Konto einmal, und alle Datenquellen, die es nutzen, laufen weiter.

## Kennzahlen

Jeder Anbieter liefert einen festen Satz an Kennzahlen, etwa Besucher, Klicks, Commits oder Verfügbarkeit. Metribay speichert sie als tägliche Beobachtungen: ein Wert pro Kennzahl und Tag, in der Zeitzone der Datenquelle.

Manche Kennzahlen, wie Besuche oder Downloads, lassen sich über einen Zeitraum addieren. Andere, wie eindeutige Besucher oder offene Issues, nicht. Metribay behandelt jede richtig. Siehe [Die Zahlen richtig lesen](../reading-the-numbers/).

## Ereignisse

Ereignisse sind datierte Markierungen an einem Projekt, etwa „Neue Preisseite online“. Sie erscheinen in den Diagrammen und helfen dir später, einen Anstieg oder Einbruch zu erklären. Eigene Ereignisse können sich wiederholen, zum Beispiel ein wöchentlicher Newsletter. GitHub-Releases werden automatisch als Ereignisse importiert. Siehe [Ereignisse](../events/).

## Rollen

In Metribay Cloud hat jede Person in einem Arbeitsbereich eine Rolle:

- **Eigentümer** verwalten das Team und die verbundenen Konten und dürfen alles andere auch.
- **Bearbeiter** verwalten Projekte, Datenquellen und Ereignisse.
- **Leser** sehen alles, ändern aber nichts.

Siehe [Teammitglieder und Rollen](../team/).
