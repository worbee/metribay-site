---
title: Projektübersicht
description: Die Übersicht zeigt jedes Projekt eines Arbeitsbereichs mit aktuellen Zahlen, Trends und dem Zustand der Datenquellen.
---

Die Projektübersicht (**Project overview**) siehst du als Erstes nach der Anmeldung. Sie beantwortet eine Frage: Wie geht es meinen Projekten?

## Was auf der Seite steht

**Zeitraum.** Wähle oben **Last 7 days**, **Last 30 days** oder **Last 90 days**. Alle Zahlen und Diagramme der Seite richten sich danach, und jede Veränderung wird mit dem Zeitraum direkt davor verglichen.

**Zusammenfassung.** Zeigt, wie viele Projekte und aktive Datenquellen du hast und ob eine Datenquelle deine Aufmerksamkeit braucht. *Source health looks clear* heißt: Alle aktiven Datenquellen sind in Ordnung.

**Projekt finden.** Tippe einen Teil eines Projektnamens oder einer Domain in **Find a project…**, um die Liste zu filtern. Das Feld erscheint, sobald du Projekte hast.

**Projekte.** Jedes Projekt listet seine Datenquellen. Zu jeder Datenquelle siehst du:

- Bezeichnung und Anbieter,
- ihren [Status](#status-der-datenquellen) und die Zeit der letzten erfolgreichen Synchronisierung,
- eine Reihe kompakter Kennzahlen mit dem Wert im Zeitraum, der Veränderung zum vorherigen Zeitraum und einem kleinen Trenddiagramm.

Wähle einen Projektnamen, um die [Projektseite](../project-page/) mit großen Diagrammen und Notizen zu öffnen.

## Status der Datenquellen

| Status | Bedeutung | Was du tun kannst |
|---|---|---|
| **Up to date** | Die letzte Erfassung hat funktioniert, die Daten sind aktuell. | Nichts. |
| **Awaiting first sync** | Die Datenquelle ist neu, der erste Import ist noch nicht fertig. | Warten. Du kannst die Seite verlassen. |
| **Delayed** | Die Erfassung funktioniert, aber die neuesten Daten sind älter als drei Tage. Manche Anbieter veröffentlichen Daten spät. | Meist nichts. Hält es an, sieh beim Anbieter nach. |
| **Needs attention** | Die letzte Erfassung ist fehlgeschlagen oder seit 8 Stunden gab es keine erfolgreiche Synchronisierung (bei Uptime-Monitoren 2 Stunden). | Wähle **Review source**. Siehe [Fehlerbehebung](../troubleshooting/). |
| **Paused** | Die automatische Erfassung ist für diese Datenquelle ausgeschaltet. | Schalte **Collect automatically** ein, wenn du neue Daten willst. |

Braucht eine Datenquelle Aufmerksamkeit, zeigt Metribay weiter den Verlauf, den es schon hat. Es geht nichts verloren.

## Gut zu wissen

- **Die Seite hält sich selbst aktuell.** Solange die Übersicht offen ist, aktualisiert sie sich von selbst. Neue Daten erscheinen ohne Neuladen.
- **Datumsangaben folgen der Zeitzone jeder Datenquelle.** Search Console zählt Tage in pazifischer Zeit, die meisten anderen Anbieter in UTC. Siehe [Zeitzonen](../reading-the-numbers/#zeitzonen).
- **Ein Strich bedeutet „nicht verfügbar“, nicht null.** Siehe [Die Zahlen richtig lesen](../reading-the-numbers/).
- **Archivierte Projekte** erscheinen nicht in der Übersicht. Du findest sie unter **Settings → Projects**.

## Darstellung anpassen

Unter **Account & preferences → Appearance** wechselst du zwischen hellem und dunklem Design, zeigst Zahlen kompakt an (12.5K statt 12,450) und machst die Übersicht platzsparender. Siehe [Konto und Sicherheit](../account/#darstellung).
