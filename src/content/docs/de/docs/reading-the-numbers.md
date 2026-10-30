---
title: Die Zahlen richtig lesen
description: Wie Metribay Daten summiert, vergleicht und kennzeichnet und warum ein Strich keine Null ist.
---

Metribay gibt sich viel Mühe, dir keine Zahl zu zeigen, für die es nicht geradestehen kann. Diese Seite erklärt die Regeln, damit du genau weißt, was jede Zahl bedeutet.

## Ein Strich ist keine Null

Hat ein Anbieter für einen Tag keinen Wert gemeldet, speichert Metribay für diesen Tag nichts. Es trägt keine Null ein.

- Im Diagramm ist ein fehlender Tag eine **Lücke** in der Linie.
- In der Tabelle der Tageswerte steht **Fehlt**.
- Lässt sich für einen Zeitraum keine verlässliche Summe bilden, zeigt die Karte **—** statt einer Zahl.

Eine echte Null, etwa ein Tag ohne Downloads, steht als 0 da. Siehst du also eine 0, hat der Anbieter wirklich null gemeldet.

## Zeitraumwerte

Metribay behandelt drei Arten von Kennzahlen unterschiedlich.

**Kennzahlen, die sich addieren lassen.** Besuche, Seitenaufrufe, Klicks, Impressionen, Downloads, Commits, gemergte Pull Requests und geänderte Zeilen. Der Wert im Zeitraum ist die Summe der erfassten Tage.

**Eindeutige Besucher.** Wer am Montag und am Dienstag vorbeischaut, ist für die Woche ein Besucher, nicht zwei. Die täglichen Besucher zu addieren würde ihn doppelt zählen. Deshalb fragt Metribay beim Anbieter die genaue Zahl eindeutiger Besucher für den ganzen Zeitraum ab. Kann der Anbieter das nicht beantworten, zeigt die Karte einen Strich, auch wenn das Tagesdiagramm Daten hat. Besucher werden nie über Tage, Projekte oder Datenquellen hinweg addiert.

**Kennzahlen zum aktuellen Zustand.** Indexierte Seiten, offene Issues, Monitorstatus, Verfügbarkeit der letzten 24 Stunden und Antwortzeit beschreiben, wie es *jetzt* aussieht. Die Karte zeigt die letzte Beobachtung und ihr Datum, etwa *Observed 29 Oct 2026*. Sie bekommen keine prozentuale Veränderung, denn eine Wachstumsrate für einen Status ergibt keinen Sinn.

## Vergleiche

Die Veränderung auf jeder Karte vergleicht den gewählten Zeitraum mit dem gleich langen Zeitraum direkt davor. Bei den letzten 30 Tagen sind das die 30 Tage davor.

Die Veränderung fehlt, wenn:

- der vorherige Zeitraum keine Daten oder eine Summe von null hat, denn Wachstum aus dem Nichts lässt sich nicht in Prozent ausdrücken,
- die Kennzahl einen aktuellen Zustand beschreibt, etwa Verfügbarkeit oder Status.

## Teilweise und vorläufige Daten

Manche Zahlen sind noch nicht endgültig.

- **Heute** ist immer unvollständig und als teilweise markiert.
- **Google Analytics** kann die letzten Tage noch korrigieren. Metribay behandelt die letzten drei Tage als vorläufig und liest sie erneut.
- **Search Console** veröffentlicht zuerst frische und einige Tage später endgültige Daten. Metribay behält die frischen Zahlen als vorläufig und ersetzt sie, sobald die endgültigen da sind.

Enthält der Zeitraum solche Tage, trägt die Karte das Label **Unvollständig**. In der Tabelle der Tageswerte sind diese Tage mit **Unvollständig** markiert.

Keine Sorge, wenn die Zahl von gestern bei der nächsten Synchronisierung etwas steigt. Dann hat der Anbieter seine Zählung abgeschlossen.

## Abdeckung

Die Fußnote unter jeder Karte, etwa *28/30 days recorded*, zeigt, für wie viele Tage im Zeitraum ein Wert vorliegt. Ist die Abdeckung gering, lies die Summe mit Vorsicht: Sie umfasst weniger Tage als der Zeitraum.

## Zeitzonen

Was ein „Tag“ ist, hängt davon ab, wo er beginnt. Metribay nutzt die Zeitzone, in der jeder Anbieter selbst berichtet. So stimmen die Zahlen mit dem überein, was du im jeweiligen Tool siehst:

| Anbieter | Tage werden gezählt in |
|---|---|
| Google Analytics 4 | Zeitzone deiner Property |
| Google Search Console | Pazifischer Zeit (America/Los_Angeles) |
| Bing, Umami, GitHub, WordPress.org, UptimeRobot | UTC |

Zwei Datenquellen im selben Projekt können ihren Tag also zu unterschiedlichen Uhrzeiten beginnen. Die Übersicht erinnert dich daran: *Dates follow each source's timezone*.

## Zahlen, die anderswo anders aussehen

- **Stichproben und Schwellenwerte in Google Analytics.** Liefert Google Daten, die auf Stichproben beruhen, durch Schwellenwerte gekürzt oder anderweitig unvollständig sind, lehnt Metribay sie ab, statt eine Schätzung zu speichern. Die Datenquelle zeigt dann *Needs attention*. Siehe [Google Analytics 4](../integrations/google-analytics/#wenn-die-erfassung-fehlschlägt).
- **Geänderte Zeilen bei GitHub** zählen hinzugefügte plus entfernte Zeilen, lassen Merge-Commits aber weg, damit dieselbe Änderung nicht doppelt zählt.
- **Commits bei GitHub** zählen nur Commits auf dem Standard-Branch, nach Commit-Datum.

## Änderungen am Verlauf

Korrigiert ein Anbieter einen vergangenen Tag, übernimmt Metribay das bei der nächsten Synchronisierung, die diesen Tag umfasst. Schlägt eine Synchronisierung fehl, bleibt der vorhandene Verlauf unberührt.
