---
title: Projektübersicht
description: Die Übersicht zeigt jedes Projekt eines Arbeitsbereichs mit aktuellen Zahlen, Trends und dem Zustand der Datenquellen.
---

Die Projektübersicht (**Projektübersicht**) siehst du als Erstes nach der Anmeldung. Sie beantwortet eine Frage: Wie geht es meinen Projekten?

## Was auf der Seite steht

**Zeitraum.** Wähle oben **Letzte 7 Tage**, **Letzte 30 Tage** oder **Letzte 90 Tage**. Alle Zahlen und Diagramme der Seite richten sich danach, und jede Veränderung wird mit dem Zeitraum direkt davor verglichen.

**Zusammenfassung.** Zeigt, wie viele Projekte und aktive Datenquellen du hast und ob eine Datenquelle deine Aufmerksamkeit braucht. *Source health looks clear* heißt: Alle aktiven Datenquellen sind in Ordnung.

**Projekt finden.** Tippe einen Teil eines Projektnamens oder einer Domain in **Projekt suchen …**, um die Liste zu filtern. Das Feld erscheint, sobald du Projekte hast.

**Summen.** Hast du mehr als ein Projekt, zählt eine Zeile über der Tabelle jede Spalte über alle Projekte zusammen.

**Projekte.** Jedes Projekt belegt eine Zeile, so vergleichst du viele Projekte auf einen Blick. Die Spalten zeigen pro Art von Daten eine Zahl für den gewählten Zeitraum:

- **Besuche** aus Umami und Google Analytics,
- **Suchklicks** aus Search Console und Bing Webmaster Tools,
- **Commits · PRs**: Commits und gemergte Pull Requests aus GitHub,
- **Downloads** aus WordPress.org,
- **Verfügbarkeit · 24 h**: wie viele UptimeRobot-Monitore erreichbar sind, und die niedrigste Verfügbarkeit der letzten 24 Stunden.

Eine Spalte erscheint nur, wenn mindestens ein Projekt eine Datenquelle dieser Art hat. Hat ein Projekt mehrere Datenquellen einer Art, zum Beispiel zwei Websites, zählt die Spalte sie zusammen. Zeige auf einen Wert, um jede Datenquelle einzeln zu sehen. Eindeutige Besucher werden nie addiert, deshalb zeigt die Übersicht Besuche. Neben jeder Zahl siehst du die Veränderung zum vorherigen Zeitraum und eine kleine Trendlinie.

Ein Punkt (**·**) bedeutet, dass das Projekt keine Datenquelle dieser Art hat. Ein Strich (**—**) bedeutet, dass die Datenquelle existiert, aber für den Zeitraum keine Daten hat.

Der farbige Punkt vor jedem Projektnamen zeigt den dringendsten [Status seiner Datenquellen](#status-der-datenquellen). Projekte mit einer Datenquelle, die Aufmerksamkeit braucht oder verzögert ist, sind hervorgehoben und stehen oben.

**Sortieren.** Wähle eine Spaltenüberschrift, um danach zu sortieren, die größten Werte zuerst. Wähle sie erneut, um die Reihenfolge umzukehren. Projekte ohne Wert in dieser Spalte stehen am Ende.

Wähle die Zeile eines Projekts, um seine [Projektseite](../project-page/) zu öffnen. Sie zeigt jede Datenquelle einzeln, mit großen Diagrammen und Ereignissen.

## Status der Datenquellen

| Status | Bedeutung | Was du tun kannst |
|---|---|---|
| **Aktuell** | Die letzte Erfassung hat funktioniert, die Daten sind aktuell. | Nichts. |
| **Wartet auf erste Synchronisierung** | Die Datenquelle ist neu, der erste Import ist noch nicht fertig. | Warten. Du kannst die Seite verlassen. |
| **Verzögert** | Die Erfassung funktioniert, aber die neuesten Daten sind älter als drei Tage. Manche Anbieter veröffentlichen Daten spät. | Meist nichts. Hält es an, sieh beim Anbieter nach. |
| **Braucht Aufmerksamkeit** | Die letzte Erfassung ist fehlgeschlagen oder seit 8 Stunden gab es keine erfolgreiche Synchronisierung (bei Uptime-Monitoren 2 Stunden). | Öffne das Projekt und wähle **Datenquelle prüfen**. Siehe [Fehlerbehebung](../troubleshooting/). |
| **Pausiert** | Die automatische Erfassung ist für diese Datenquelle ausgeschaltet. | Schalte **Automatisch erfassen** ein, wenn du neue Daten willst. |

Braucht eine Datenquelle Aufmerksamkeit, zeigt Metribay weiter den Verlauf, den es schon hat. Es geht nichts verloren.

## Gut zu wissen

- **Die Seite hält sich selbst aktuell.** Solange die Übersicht offen ist, aktualisiert sie sich von selbst. Neue Daten erscheinen ohne Neuladen.
- **Datumsangaben folgen der Zeitzone jeder Datenquelle.** Search Console zählt Tage in pazifischer Zeit, die meisten anderen Anbieter in UTC. Siehe [Zeitzonen](../reading-the-numbers/#zeitzonen).
- **Ein Strich bedeutet „nicht verfügbar“, nicht null.** Siehe [Die Zahlen richtig lesen](../reading-the-numbers/).
- **Archivierte Projekte** erscheinen nicht in der Übersicht. Du findest sie unter **Einstellungen → Projekte**.

## Darstellung anpassen

Unter **Profil & Einstellungen → Darstellung** wechselst du zwischen hellem und dunklem Design, zeigst Zahlen kompakt an (12.5K statt 12,450) und machst die Übersicht platzsparender. Siehe [Konto und Sicherheit](../profile/#darstellung).
