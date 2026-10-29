---
title: Import und Export
description: Lade die Einrichtung deines Arbeitsbereichs als JSON-Datei herunter und importiere sie anderswo, ohne Zugangsdaten und Verlauf.
---

Du kannst die Einrichtung deines Arbeitsbereichs als Datei speichern und in einen anderen Arbeitsbereich oder eine andere Metribay-Installation laden. So ziehst du von einer selbst gehosteten Installation zu Metribay Cloud um oder zurück, kopierst eine Einrichtung zwischen Arbeitsbereichen oder bewahrst eine Kopie deiner Konfiguration auf.

Beides findest du unter **Settings → Import & export**.

## Was in der Datei steht

| Enthalten | Nicht enthalten |
|---|---|
| Projekte: Namen, Domains, Archivierung | Zugangsdaten gespeicherter Konten |
| Datenquellen: Anbieter, Ressource, Bezeichnung, Zeitzone, Verlaufszeitraum, Pausierung | Verlauf der Kennzahlen |
| Der *Name* des gespeicherten Kontos jeder Datenquelle | Notizen |
| | Teammitglieder |

Zugangsdaten fehlen mit Absicht, damit du die Datei gefahrlos aufbewahren oder verschicken kannst. Der Verlauf fehlt, weil Metribay ihn erneut bei deinen Anbietern abrufen kann.

## Konfiguration exportieren

Wähle **Download JSON**. Eigentümer und Bearbeiter können exportieren.

## Konfiguration importieren

1. Wähle unter **Import configuration** bei **Configuration file** eine JSON-Datei, die aus Metribay exportiert wurde.
2. Wähle **Import configuration**.

Der Import:

- **fügt** Projekte und Datenquellen **hinzu**, die es noch nicht gibt,
- **aktualisiert** die Einstellungen passender Projekte und Datenquellen,
- **behält** den ganzen vorhandenen Verlauf.

Es wird nichts gelöscht. Danach meldet Metribay *Configuration imported. Sources without an existing matching connection are paused.*

## Importierte Datenquellen verbinden

Die Datei merkt sich über den Namen, welches gespeicherte Konto jede Datenquelle genutzt hat. Beim Import sucht Metribay im Arbeitsbereich ein gespeichertes Konto mit **gleichem Namen und Anbieter**:

- **Gefunden:** Die Datenquelle wird damit verbunden und erfasst wie gewohnt.
- **Nicht gefunden:** Die Datenquelle wird pausiert importiert, damit sie nicht an fehlenden Zugangsdaten scheitert.

WordPress.org-Datenquellen brauchen kein Konto und werden deshalb nie pausiert.

:::tip[Zeit sparen beim Umzug]
Leg vor dem Import in einen neuen Arbeitsbereich oder eine neue Installation [deine gespeicherten Konten](../saved-accounts/) mit genau denselben Namen wie vorher an. Dann verbindet sich jede Datenquelle von selbst.
:::

So verbindest du eine pausierte Datenquelle nachträglich:

1. Öffne unter **Settings → Sources** **Manage source**.
2. Wähle unter **Connection** das gespeicherte Konto und setz den Haken bei **Collect automatically**.
3. Wähle **Save source**. Die nächste Synchronisierung liest den ganzen Verlaufszeitraum der Datenquelle.

## Grenzen

- Eine Datei kann bis zu 100 Projekte mit je bis zu 100 Datenquellen enthalten und bis zu 1 MB groß sein.
- In Metribay Cloud zählen importierte aktive Projekte und Datenquellen wie alle anderen für die Grenzen deines Plans.
