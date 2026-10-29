---
title: Projektseiten und Diagramme
description: Öffne ein Projekt, um große Diagramme für jede Datenquelle zu sehen, Zeiträume zu vergleichen, Tageswerte zu prüfen und Daten zu aktualisieren.
---

Wähle in der Übersicht ein Projekt, um seine Projektseite zu öffnen. Sie zeigt alle Datenquellen des Projekts mit großen Kennzahlen und darunter die [Notizen](../annotations/) des Projekts.

## Der Kopfbereich

- **Zeitraum** wechselt zwischen 7, 30 und 90 Tagen.
- **Add source** verbindet ein weiteres Tool mit diesem Projekt.
- **Edit project** springt zu den Einstellungen des Projekts.
- **All projects** bringt dich zurück zur Übersicht.

## Jede Datenquelle

Jede Datenquelle hat einen eigenen Abschnitt mit:

- dem Anbieter, der Zeitzone und der Zeit der letzten erfolgreichen Synchronisierung,
- ihrem [Status](../overview/#status-der-datenquellen),
- **Sync now**, das sofort neue Daten anfordert (siehe [Aktualisierung und Sync](../syncing/)),
- einer Karte pro Kennzahl.

## Kennzahlen-Karten

Eine Karte zeigt:

- **Den Wert im Zeitraum.** Zum Beispiel die Klicks der letzten 30 Tage. Ein Strich (—) heißt, dass keine verlässliche Summe verfügbar ist. Er bedeutet nie null.
- **Die Veränderung** zum vorherigen Zeitraum gleicher Länge, mit Pfeil. Sie fehlt, wenn es nichts Faires zum Vergleichen gibt.
- **Partial**, wenn einzelne Tage oder der heutige Tag noch unvollständig sind.
- **Ein Tagesdiagramm.** Die kräftige Linie ist der gewählte Zeitraum. Die hellere Linie ist der vorherige Zeitraum, auf dieselben Tage gelegt, damit du den Verlauf vergleichen kannst. Mit den Legenden-Buttons blendest du jede Linie ein oder aus.
- **Eine Fußnote,** etwa *28/30 days recorded* oder *Observed 29 Oct 2026* bei Kennzahlen, die den aktuellen Zustand beschreiben.

Fehlende Tage erscheinen als Lücken in der Linie. Metribay zieht keine Linie durch Tage, über die es nichts weiß.

## Tageswerte

Wähle unter einem Diagramm **View daily values**, um die genaue Zahl für jeden Tag zu sehen. Die Spalte **Coverage** zeigt für jeden Tag:

- **Recorded**: Der Anbieter hat einen Wert gemeldet.
- **Partial**: Der Tag läuft noch oder kann sich noch ändern.
- **Missing**: Es liegt kein Wert vor.

Die Tabelle zeigt immer vollständige, genaue Zahlen, auch wenn du im Dashboard kompakte Zahlen gewählt hast.

## Tastatur und Screenreader

Diagramme sind mit ihrem Inhalt und der Zahl der Tage mit Daten beschriftet. Setze den Fokus auf ein Diagramm und geh mit den Pfeiltasten links und rechts durch die erfassten Tage. Jeder Wert steht außerdem in der Tabelle der Tageswerte.

## Archivierte Projekte

Die Seite eines archivierten Projekts lässt sich weiter öffnen und zeigt den ganzen Verlauf. Datenquellen hinzufügen oder synchronisieren kannst du erst wieder, wenn du die Archivierung aufhebst. Siehe [Projekte verwalten](../projects/).
