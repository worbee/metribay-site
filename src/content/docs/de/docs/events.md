---
title: Ereignisse
description: Markiere Launches, Kampagnen und Änderungen in den Diagrammen eines Projekts, einmalig oder wiederkehrend. GitHub-Releases kommen von selbst dazu.
---

Zahlen zeigen dir, *dass* sich etwas verändert hat. Ereignisse helfen dir, dich zu erinnern, *warum*. Leg eins an, wenn du eine Funktion veröffentlichst, eine Kampagne startest, einen Fehler behebst oder auf einen neuen Server umziehst. Ereignisse erscheinen als Markierungen in den Diagrammen des Projekts und in einer Liste darunter.

## Ereignis hinzufügen

1. Öffne das Projekt.
2. Scrolle zu **Ereignisse** und wähle **Ereignis hinzufügen**.
3. Fülle aus:
   - **Datum**: wann es passiert ist oder passieren wird. Vergangene und zukünftige Daten sind möglich. Heute ist schon eingetragen.
   - **Datenquelle** *(optional)*: Zeig das Ereignis nur in den Diagrammen einer Datenquelle, oder lass **Ganzes Projekt** stehen.
   - **Titel**: eine kurze Beschreibung, etwa „Neue Preisseite online“.
   - **Farbe**: **Blau**, **Grün**, **Bernstein** oder **Violett**. Mit Farben unterscheidest du Arten von Ereignissen, etwa Grün für Marketing und Bernstein für Releases.
   - **Wiederholung** *(optional)*: **Jede Woche**, **Jeden Monat** oder **Jedes Jahr**, dazu optional **Wiederholen bis**. Lass **Wiederholen bis** leer, um unbegrenzt zu wiederholen.
   - **Notiz** *(optional)*: weitere Details.
   - **Referenz-URL** *(optional)*: ein Link zu Changelog, Ticket oder Blogartikel.
4. Wähle **Ereignis hinzufügen**.

Ereignisse stehen auf der Projektseite, das neueste zuerst. Zukünftige Ereignisse sind als *Bevorstehend* markiert, wiederkehrende zeigen ihr nächstes Datum.

## Wiederkehrende Ereignisse

Ein wiederkehrendes Ereignis erscheint in den Diagrammen an jedem Tag, an dem es sich wiederholt. Monatliche Ereignisse am 29., 30. oder 31. fallen in kürzeren Monaten auf den letzten Tag, jährliche Ereignisse am 29. Februar in anderen Jahren auf den 28. Februar.

Bearbeitest oder löschst du ein wiederkehrendes Ereignis, gilt das für die ganze Serie.

## Bearbeiten oder löschen

Öffne **Ereignis bearbeiten** unter einem Ereignis, um es zu ändern, oder wähle **Ereignis löschen**, um es zu entfernen.

Eigentümer und Bearbeiter dürfen Ereignisse anlegen, bearbeiten und löschen. Leser sehen sie.

## Importierte Ereignisse

Manche Ereignisse werden für dich importiert. Sie erscheinen grau mit einem Etikett-Symbol, tragen den Hinweis *Importiert von GitHub*, und du kannst sie in Metribay nicht bearbeiten oder löschen.

Hat ein Projekt eine [GitHub-Datenquelle](../integrations/github/), wird jedes veröffentlichte Release zu einem Ereignis, datiert auf den Tag der Veröffentlichung und in den Diagrammen dieser Datenquelle angezeigt. Der Titel ist der Release-Name (oder Tag), die Notiz die Release-Beschreibung, der Link führt zum Release auf GitHub. Pre-Releases sind als solche markiert, Entwürfe werden übersprungen.

Metribay hält diese Ereignisse mit GitHub synchron. Bearbeitest oder löschst du dort ein Release, folgt das Ereignis bei der nächsten Synchronisierung.

## In den Diagrammen

In jedem großen Diagramm erscheinen eigene Ereignisse als gestrichelte Linie mit einem Punkt in ihrer Farbe, importierte als graue gepunktete Linie mit einer Raute. Fahr mit der Maus über einen Tag oder geh die Tage mit den Pfeiltasten durch, um die Ereignisse dieses Tages zu sehen. Die Legende zeigt, wie viele Ereignisse in den gewählten Zeitraum fallen. Die kompakten Diagramme in der Übersicht zeigen keine Ereignisse.

## Ideen für gute Ereignisse

- Releases, Launches und Redesigns
- Marketingkampagnen, Newsletter und Social-Media-Beiträge, die gut liefen
- Updates von Suchmaschinen, von denen du gelesen hast
- Ausfälle, Umzüge und Änderungen an DNS oder Hosting
- Änderungen am Tracking, etwa ein neues Cookie-Banner oder eine neue Analytics-Einrichtung

Der letzte Punkt ist wichtiger, als er scheint. Ein plötzlicher Einbruch bei den Besuchern ist oft eine Änderung am Tracking, nicht am Traffic.
