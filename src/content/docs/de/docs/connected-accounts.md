---
title: Verbundene Konten
description: Verbundene Konten sind deine Logins bei Anbietern, verschlüsselt gespeichert. Nutze ein Konto für viele Datenquellen und tausche Zugangsdaten sicher aus.
---

Ein verbundenes Konto ist dein Login bei einem Anbieter: ein Google-Konto, ein API-Schlüssel, ein Token oder Benutzername und Passwort. Darüber erhält Metribay Lesezugriff. Du findest sie unter **Einstellungen → Verbundene Konten**.

Du verbindest ein Konto einmal und nutzt es für beliebig viele Datenquellen in beliebig vielen Projekten. Ein Google-Konto oder Service-Account kann jede Analytics-Property und jede Search-Console-Website versorgen, auf die es Zugriff hat.

## Konto verbinden

Meist verbindest du Konten, während du [eine Datenquelle hinzufügst](../data-sources/). Mit **Konto speichern und weiter** wird das Konto sofort gespeichert, auch wenn du das Hinzufügen der Datenquelle nicht abschließt. Konten bekommen einen Namen aus Anbieter und Uhrzeit, etwa *GitHub · 29 Oct 14:03:22*. Benenne sie um, damit du sie später auseinanderhältst.

Du kannst ein Konto auch einzeln verbinden:

1. Gehe zu **Einstellungen → Verbundene Konten** und wähle **Konto verbinden**.
2. Gib einen **Kontonamen** an, der verrät, wessen Konto es ist, etwa „Kunde A Google“ oder „Mein GitHub-Token“.
3. Wähle den **Anbieter** und fülle die Zugangsdaten aus. Jede [Integrationsanleitung](../integrations/) erklärt, was du eingibst.
4. Wähle **Konto verbinden**.

WordPress.org braucht kein Konto und taucht deshalb nicht auf.

## Sehen, wo ein Konto genutzt wird

Jedes verbundene Konto zeigt, wie viele Datenquellen es nutzen, mit einem Link zu jeder in den Einstellungen ihres Projekts. *Noch nicht verwendet* heißt, dass keine Datenquelle damit liest.

## So wenig Zugriff wie möglich

Metribay liest nur. Gib jedem Konto die kleinste Leseberechtigung, die der Anbieter anbietet, und nur für die Ressourcen, die du erfassen willst. Jede Integrationsanleitung sagt dir, welche Berechtigung reicht.

## Zugangsdaten ändern oder erneuern

1. Gehe zu **Einstellungen → Verbundene Konten** und öffne **Verbundenes Konto bearbeiten**.
2. Den Namen kannst du jederzeit ändern.
3. Um die Zugangsdaten zu ersetzen, gib einen vollständigen Satz für eine Anmeldemethode ein. Um die gespeicherten zu behalten, lass alle Zugangsdatenfelder leer.
4. Wähle **Verbundenes Konto speichern**.

Alle Datenquellen mit diesem Konto verwenden die neuen Zugangsdaten bei ihrer nächsten Synchronisierung. Ihr Verlauf bleibt unberührt.

Gespeicherte Zugangsdaten werden nie wieder angezeigt, auch nicht Eigentümern. Hast du einen Schlüssel verloren, erstelle beim Anbieter einen neuen und trag ihn hier ein.

## Datenquellen auf ein anderes Konto umstellen

Öffne die **Projekteinstellungen** des Projekts, dann **Datenquelle verwalten**, und wähle ein anderes **Verbundenes Konto**. Die Datenquelle behält ihren Verlauf.

## Konto entfernen

Öffne **Verbundenes Konto bearbeiten** und wähle **Verbundenes Konto entfernen**. Dabei werden die gespeicherten Zugangsdaten gelöscht. Entfernen kannst du nur ein Konto, das keine Datenquelle nutzt: Stelle seine Datenquellen zuerst auf ein anderes Konto um. Metribay widerruft den Zugriff nicht beim Anbieter. Entferne den Schlüssel oder den App-Zugriff dort ebenfalls, wenn du ihn nicht mehr brauchst.

## Wer verbundene Konten verwalten darf

In Metribay Cloud dürfen nur **Eigentümer** des Arbeitsbereichs Konten verbinden, bearbeiten und entfernen. Bearbeiter können verbundene Konten beim Hinzufügen von Datenquellen auswählen, die Zugangsdaten aber weder sehen noch ändern. Verbundene Konten gehören zu ihrem Arbeitsbereich und lassen sich nicht aus einem anderen Arbeitsbereich nutzen.

## So werden Zugangsdaten geschützt

- Zugangsdaten werden verschlüsselt, bevor sie gespeichert werden.
- Nach dem Speichern erscheinen sie nie wieder in der App, in Fehlermeldungen oder in Logs.
- Sie sind in [Konfigurationsexporten](../import-export/) nicht enthalten.
- Metribay verbindet sich nur mit den öffentlichen HTTPS-Adressen der Anbieter.

Mehr dazu unter [Sicherheit und Datenschutz](../security/).
