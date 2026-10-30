---
title: Aktualisierung und Sync
description: Wie oft Metribay neue Daten erfasst, wie weit es zurückliest und wie du eine Datenquelle sofort aktualisierst.
---

Metribay erfasst Daten im Hintergrund. Damit dein Dashboard aktuell bleibt, musst du nie etwas drücken.

## Der Zeitplan

| Was | Wie oft |
|---|---|
| Analyse, Suche, Downloads und Repository-Aktivität | Alle 4 Stunden |
| UptimeRobot-Monitore | Jede Stunde |
| Vollständiges Neueinlesen des Verlaufs | Einmal pro Woche |

Das Öffnen des Dashboards fragt nie bei deinen Anbietern an. Es zeigt, was Metribay schon erfasst hat. Darum lädt es schnell.

## Was jede Synchronisierung liest

**Erster Import.** Fügst du eine Datenquelle hinzu, liest Metribay ihren ganzen Verlaufszeitraum, 180 Tage, sofern du nichts anderes gewählt hast.

**Regelmäßige Synchronisierung.** Danach liest jede Synchronisierung die Tage seit der letzten erfolgreichen erneut, plus eine Woche zusätzlich. So kommen späte Korrekturen von Anbietern wie Google an.

**Wöchentliches Neueinlesen.** Einmal pro Woche liest Metribay den ganzen Verlaufszeitraum erneut, um ältere Änderungen zu erwischen.

Einige Anbieter funktionieren etwas anders:

- **GitHub** liest immer den ganzen Zeitraum, weil ältere Commits später auftauchen können, etwa wenn ein Branch gemergt wird.
- **Bing** hält selbst nur einen begrenzten Verlauf vor. Du bekommst also eventuell weniger als deinen Verlaufszeitraum.
- **UptimeRobot** meldet den aktuellen Zustand und die letzten 24 Stunden. Jede Synchronisierung fügt eine neue Beobachtung hinzu.

## Der Verlaufszeitraum

Der Verlaufszeitraum (in der App auch **Erfassungszeitraum**) legt fest, wie viele Tage Metribay zurückliest, von 1 bis 366. Standard sind 180 Tage. Du wählst ihn beim Hinzufügen einer Datenquelle unter **Erweiterte Einstellungen** und kannst ihn später unter **Projekteinstellungen → Datenquelle verwalten** ändern.

Ein längerer Zeitraum bringt dir vom ersten Tag an mehr Verlauf, der erste Import dauert aber länger. Metribay behält alles, was es erfasst hat. Dein Verlauf wächst mit der Zeit also über den Zeitraum hinaus.

## Sync now

Brauchst du sofort neue Daten? Wähle **Jetzt synchronisieren** neben einer Datenquelle auf ihrer Projektseite oder unter **Projekteinstellungen**. Die Synchronisierung läuft im Hintergrund, und die Seite aktualisiert sich, wenn sie fertig ist.

- **Jetzt synchronisieren** steht nur Eigentümern und Bearbeitern zur Verfügung.
- Bei pausierten Datenquellen und archivierten Projekten ist es deaktiviert.
- In Metribay Cloud kannst du jede Datenquelle einmal alle 15 Minuten synchronisieren. Geplante Synchronisierungen laufen davon unabhängig weiter.

## Zugriff prüfen

Eigentümer können unter **Projekteinstellungen** **Zugriff beim Anbieter prüfen** wählen. Das prüft, ob das verbundene Konto die Ressource noch erreicht, ohne Daten zu importieren. Nutze es, nachdem du beim Anbieter Rechte geändert hast. In Metribay Cloud geht das einmal pro Minute und Datenquelle.

## Anfragelimits

Anbieter begrenzen, wie viele Anfragen ein Konto stellen darf. Metribay verteilt seine Anfragen und teilt sich ein Budget pro Konto. Ist das Limit eines Anbieters erreicht, zeigt die Datenquelle eine Meldung wie *Request limit reached; scheduled imports will retry*. Du musst nichts tun. Die nächste geplante Synchronisierung versucht es erneut.

## Erfassung pausieren

Willst du für eine Datenquelle keine neuen Daten mehr erfassen, schalte unter **Projekteinstellungen → Datenquelle verwalten** **Automatisch erfassen** aus. Die Datenquelle steht dann auf *Paused* und behält ihren Verlauf. Schaltest du es wieder ein, holt die nächste Synchronisierung innerhalb des Verlaufszeitraums auf.
