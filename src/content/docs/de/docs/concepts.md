---
title: So ist Metribay aufgebaut
description: Arbeitsbereiche, Projekte, Datenquellen, gespeicherte Konten, Kennzahlen und Notizen und wie sie zusammenhängen.
---

Metribay besteht aus wenigen Bausteinen. Kennst du sie, ergibt jeder Bildschirm Sinn.

```
Arbeitsbereich
├── Projekt: example.com
│   ├── Datenquelle: Google-Analytics-Property   ← nutzt ein gespeichertes Konto
│   ├── Datenquelle: Search-Console-Property     ← nutzt ein gespeichertes Konto
│   └── Datenquelle: UptimeRobot-Monitor         ← nutzt ein gespeichertes Konto
├── Projekt: Mein WordPress-Plugin
│   ├── Datenquelle: WordPress.org-Downloads     (kein Konto nötig)
│   └── Datenquelle: GitHub-Repository
└── Gespeicherte Konten, Teammitglieder, Notizen
```

## Arbeitsbereich

Ein Arbeitsbereich (in der App **Workspace**) enthält alles für ein Unternehmen, einen Kunden oder ein Portfolio: Projekte, gespeicherte Konten, den Verlauf der Kennzahlen und das Team. Zwischen Arbeitsbereichen wird nichts geteilt.

In Metribay Cloud kannst du bis zu fünf Arbeitsbereiche besitzen und oben in der Kopfzeile zwischen ihnen wechseln. Die selbst gehostete Version hat einen einzigen Arbeitsbereich, der im Hintergrund bleibt. Siehe [Arbeitsbereiche](../workspaces/).

## Projekt

Ein Projekt ist alles, was du betreibst und verfolgen willst: eine Website, ein Plugin, eine App oder ein Produkt. Es fasst zusammengehörige Datenquellen in einer Ansicht zusammen. Ein Projekt hat einen Namen und optional eine Domain.

Brauchst du ein Projekt nicht mehr, archiviere es. Es verschwindet aus der Übersicht, behält aber seinen Verlauf. Siehe [Projekte verwalten](../projects/).

## Datenquelle

Eine Datenquelle (in der App **Source**) ist eine Verbindung, die ein Projekt mit Zahlen versorgt. Eine Search-Console-Property, ein GitHub-Repository und ein UptimeRobot-Monitor sind drei Datenquellen.

Jede Datenquelle gehört zu genau einem Projekt und liest von genau einem Anbieter. Eine Datenquelle hat:

- eine **Bezeichnung**, die du wählst,
- die **Ressource**, die sie liest, etwa eine Property-ID oder einen Repository-Namen,
- eine **Zeitzone**, die festlegt, wann ein Tag beginnt und endet,
- einen **Verlaufszeitraum**, der bestimmt, wie viele Tage Metribay zurückliest, und
- einen **Status**, etwa *Up to date* oder *Needs attention*.

Siehe [Datenquellen hinzufügen und verwalten](../sources/).

## Gespeichertes Konto

Ein gespeichertes Konto enthält die Zugangsdaten, mit denen Metribay bei einem Anbieter liest, etwa einen API-Schlüssel oder ein Google-Dienstkonto. Du speicherst es einmal und nutzt es für beliebig viele Datenquellen. Ein einziges Google-Dienstkonto kann jede Property versorgen, auf die es Zugriff hat.

Zugangsdaten werden verschlüsselt und nach dem Speichern nie wieder angezeigt. In den Einstellungen heißen gespeicherte Konten **Connections**. Siehe [Gespeicherte Konten](../saved-accounts/).

## Kennzahlen

Jeder Anbieter liefert feste Kennzahlen, etwa Besucher, Klicks, Commits oder Verfügbarkeit. Metribay speichert sie als tägliche Beobachtungen: ein Wert pro Kennzahl und Tag, in der Zeitzone der Datenquelle.

Manche Kennzahlen wie Besuche oder Downloads lassen sich über einen Zeitraum addieren. Andere wie eindeutige Besucher oder offene Issues nicht. Metribay behandelt jede richtig. Siehe [Die Zahlen richtig lesen](../reading-the-numbers/).

## Notizen

Notizen (in der App **Annotations**) sind datierte Anmerkungen zu einem Projekt, etwa „Neue Preisseite online“. Sie helfen dir später, einen Anstieg oder Einbruch zu erklären. GitHub-Releases werden automatisch zu Notizen. Siehe [Notizen](../annotations/).

## Rollen

In Metribay Cloud hat jede Person in einem Arbeitsbereich eine Rolle:

- **Eigentümer** (Owner) verwalten das Team und die gespeicherten Konten und können alles andere auch.
- **Bearbeiter** (Editor) verwalten Projekte, Datenquellen und Notizen.
- **Leser** (Viewer) sehen alles, ändern aber nichts.

Siehe [Teammitglieder und Rollen](../team/).
