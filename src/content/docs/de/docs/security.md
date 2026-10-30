---
title: Sicherheit und Datenschutz
description: Wie Metribay deine Zugangsdaten und Daten schützt, wo sie gespeichert sind und wie du sie löschen lassen kannst.
---

Du verbindest echte Konten mit Metribay. So gehen wir damit um.

## Deine Konten bei Anbietern

- **Nur lesen.** Metribay liest nur Zahlen. Es veröffentlicht, ändert oder löscht nie etwas in deinen Tools. Wo ein Anbieter reinen Lesezugriff bietet, empfehlen ihn die Anleitungen.
- **So wenig Zugriff wie möglich.** Gib jedem Konto nur Zugriff auf das, was du verfolgen willst, etwa ausgewählte Repositorys oder eine einzelne Property.
- **Verschlüsselt gespeichert.** API-Schlüssel, Tokens, Passwörter und Schlüssel von Dienstkonten werden vor dem Speichern verschlüsselt.
- **Nie wieder angezeigt.** Nach dem Speichern tauchen Zugangsdaten weder in der App noch in Fehlermeldungen, Logs oder Exporten auf. Auch Eigentümer können sie nicht auslesen.
- **An den Arbeitsbereich gebunden.** Ein verbundenes Konto lässt sich nur in seinem eigenen Arbeitsbereich nutzen, und in Metribay Cloud können nur Eigentümer eins anlegen oder ändern.
- **Nur öffentliches HTTPS.** Metribay verbindet sich nur mit den öffentlichen HTTPS-Adressen der Anbieter und folgt keinen Weiterleitungen anderswohin.
- **Dein Zugriff, nicht der eines anderen.** Metribay Cloud liest Daten nur über die Konten, die du verbindest. Es verschafft sich nie über ein eigenes, geteiltes Konto Zugriff auf deine Daten.

Du kannst Metribay den Zugriff jederzeit beim Anbieter entziehen: Entferne das Dienstkonto, lösch das Token oder erzeuge den Schlüssel neu.

## Dein Metribay-Konto

- **Zwei-Faktor-Authentifizierung** mit einer Authenticator-App. Siehe [Konto und Sicherheit](../profile/#zwei-faktor-authentifizierung).
- **Rollen** geben jeder Person nur den Zugriff, den sie braucht. Siehe [Teammitglieder und Rollen](../team/).
- **Diskrete Registrierung und Wiederherstellung.** Registrierung und Passwort-Zurücksetzen verraten nie, ob es zu einer E-Mail-Adresse ein Konto gibt.

## Wo deine Daten liegen

Metribay Cloud läuft auf einem Hetzner-Server in Finnland, innerhalb der EU. Cloudflare sorgt davor für Tempo und Schutz und versendet die E-Mails von Metribay. Zahlungen laufen über Paddle.

Die Datenbank wird jede Nacht gesichert, und Hetzner sichert täglich den ganzen Server.

Die selbst gehostete Version speichert alles auf deinem eigenen Server und spricht nur mit den Anbietern, die du verbindest.

## Was Metribay speichert

- deinen Namen, deine E-Mail-Adresse und dein Passwort (als Hash),
- deine Arbeitsbereiche, Projekte, Datenquellen, Ereignisse und dein Team,
- verschlüsselte Zugangsdaten für Anbieter,
- die täglichen Kennzahlen, die von deinen Anbietern erfasst werden.

Metribay speichert Summen pro Tag, etwa Besucher oder Klicks. Über die einzelnen Besucher deiner Websites erfasst es nichts.

Alle Details, einschließlich aller beteiligten Dienste, stehen in der [Datenschutzerklärung](../../datenschutz/).

## Daten löschen

- **Erfassung stoppen:** Pausiere eine Datenquelle oder archiviere ein Projekt. Der Verlauf bleibt.
- **Zugriff entziehen:** Entferne den Zugriff von Metribay beim Anbieter. Die Datenquelle braucht dann Aufmerksamkeit, behält aber ihren Verlauf.
- **Konto löschen:** Schreib von der Adresse deines Kontos an [rob@worbee.com](mailto:rob@worbee.com). Wir löschen es innerhalb von 30 Tagen. Backups werden nach 14 Tagen überschrieben. Abrechnungsunterlagen bewahren wir so lange auf, wie das Steuerrecht es verlangt.

Du kannst auch eine Kopie deiner Daten, eine Berichtigung oder eine Einschränkung verlangen. Wir antworten innerhalb eines Monats.

## Sicherheitslücke melden

Du hast eine Schwachstelle gefunden? Schreib bitte mit den Details an [rob@worbee.com](mailto:rob@worbee.com), bevor du jemand anderem davon erzählst, damit wir sie zuerst beheben können.
