---
title: Gespeicherte Konten
description: Gespeicherte Konten enthalten deine Zugangsdaten für Anbieter, verschlüsselt. Nutze ein Konto für viele Datenquellen und erneuere Zugangsdaten sicher.
---

Ein gespeichertes Konto enthält die Zugangsdaten, mit denen Metribay bei einem Anbieter liest: einen API-Schlüssel, ein Token, ein Google-Dienstkonto oder Benutzername und Passwort. In den **Settings** stehen sie unter **Connections**.

Du speicherst ein Konto einmal und nutzt es für beliebig viele Datenquellen. Ein Google-Dienstkonto kann jede Analytics-Property und jede Search-Console-Website versorgen, auf die es Zugriff hat.

## Gespeichertes Konto hinzufügen

Meist fügst du Konten beim [Hinzufügen einer Datenquelle](../sources/) hinzu. Diese bekommen einen Namen aus Anbieter und Uhrzeit, etwa *GitHub · 29 Oct 14:03:22*. Benenne sie unter **Settings → Connections** um, damit du sie später auseinanderhalten kannst.

Du kannst ein Konto auch einzeln hinzufügen:

1. Geh zu **Settings → Connections** und wähle **Add connection**.
2. Gib einen **Connection name** ein, der verrät, wem das Konto gehört, etwa „Kunde A Google“ oder „Mein GitHub-Token“.
3. Wähle den **Provider** und trag die Zugangsdaten ein. Die [Anleitung zur jeweiligen Integration](../integrations/) erklärt, was du brauchst.
4. Wähle **Add connection**.

WordPress.org braucht kein Konto und steht deshalb nicht in der Liste.

## So wenig Zugriff wie möglich

Metribay liest nur. Gib jedem Konto die kleinste Leseberechtigung, die der Anbieter bietet, und nur für die Ressourcen, die du verfolgen willst. Jede Anleitung nennt die Berechtigung, die reicht.

## Zugangsdaten ändern oder erneuern

1. Geh zu **Settings → Connections** und öffne **Edit connection**.
2. Den Namen kannst du jederzeit ändern.
3. Um die Zugangsdaten zu ersetzen, trag einen vollständigen Satz für eine Anmeldeart ein. Willst du die gespeicherten behalten, lass alle Felder für Zugangsdaten leer.
4. Wähle **Save connection**.

Alle Datenquellen mit diesem Konto übernehmen die neuen Zugangsdaten bei ihrer nächsten Synchronisierung. Ihr Verlauf bleibt unberührt.

Gespeicherte Zugangsdaten werden nie wieder angezeigt, auch nicht für Eigentümer. Hast du einen Schlüssel verloren, erstell beim Anbieter einen neuen und trag ihn hier ein.

## Datenquellen auf ein anderes Konto umstellen

Um eine Datenquelle auf ein anderes gespeichertes Konto umzustellen, öffne **Settings → Sources → Manage source** und wähle eine andere **Connection**. Die Datenquelle behält ihren Verlauf.

## Wer gespeicherte Konten verwalten darf

In Metribay Cloud können nur **Eigentümer** eines Arbeitsbereichs gespeicherte Konten hinzufügen und bearbeiten. Bearbeiter können gespeicherte Konten beim Hinzufügen von Datenquellen nutzen, die Zugangsdaten aber weder sehen noch ändern. Gespeicherte Konten gehören zu ihrem Arbeitsbereich und lassen sich nicht aus einem anderen Arbeitsbereich nutzen.

## Wie Zugangsdaten geschützt sind

- Zugangsdaten werden vor dem Speichern verschlüsselt.
- Nach dem Speichern tauchen sie weder in der App noch in Fehlermeldungen oder Logs auf.
- Sie sind nicht in [Konfigurationsexporten](../import-export/) enthalten.
- Metribay verbindet sich nur mit den öffentlichen HTTPS-Adressen der Anbieter.

Mehr dazu unter [Sicherheit und Datenschutz](../security/).
