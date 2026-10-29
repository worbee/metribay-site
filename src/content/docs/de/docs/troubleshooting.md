---
title: Fehlerbehebung
description: Was du tun kannst, wenn eine Datenquelle Aufmerksamkeit braucht, Zahlen falsch aussehen oder die Anmeldung nicht klappt.
---

## Eine Datenquelle braucht Aufmerksamkeit

Kann eine Datenquelle nicht erfassen, zeigt sie **Needs attention** und behält deinen vorhandenen Verlauf. Geh diese Schritte durch:

1. **Lies die Meldung.** Öffne die Projektseite oder **Settings → Sources**. Die Datenquelle zeigt das letzte Erfassungsproblem und wann es auftrat.
2. **Prüf den Zugriff beim Anbieter.** Die meisten Fehler kommen von einer entfernten Berechtigung, einem neu erzeugten Schlüssel oder einem abgelaufenen Token. Melde dich beim Anbieter an und prüf, ob das Konto, das Metribay nutzt, die Ressource noch sieht.
3. **Aktualisiere die Zugangsdaten**, falls sie sich geändert haben. Siehe [Gespeicherte Konten](../saved-accounts/#zugangsdaten-ändern-oder-erneuern).
4. **Teste es.** Eigentümer können unter **Settings → Sources** **Check provider access** wählen. Wähle danach **Sync now**.

Die Anleitungen zu den Integrationen nennen die häufigsten Probleme je Anbieter:
[Google Analytics 4](../integrations/google-analytics/#wenn-die-erfassung-fehlschlägt) ·
[Search Console](../integrations/search-console/#wenn-die-erfassung-fehlschlägt) ·
[Bing](../integrations/bing/#wenn-die-erfassung-fehlschlägt) ·
[Umami](../integrations/umami/#wenn-die-erfassung-fehlschlägt) ·
[GitHub](../integrations/github/) ·
[UptimeRobot](../integrations/uptimerobot/)

### Meldungen, die du sehen kannst

| Meldung | Bedeutung |
|---|---|
| *Request limit reached; scheduled imports will retry* | Das Anfragelimit des Anbieters ist vorerst erreicht. Du musst nichts tun: Die nächste geplante Synchronisierung versucht es erneut. |
| *Please wait N seconds before trying again* | Du hast **Sync now** oder **Check provider access** gerade erst genutzt. Geplante Synchronisierungen laufen trotzdem weiter. |
| *Collection needs attention. Reference: …* | Die Erfassung ist fehlgeschlagen. Die Referenz nennt die Art des Problems. Prüf Zugriff und Zugangsdaten wie oben. Bleibt es dabei, schick uns die Referenz. |
| *Collection and changes are paused* | Das Konto hat keinen aktiven Plan. Siehe [Pläne und Abrechnung](../billing/#ohne-aktiven-plan). |

## Der erste Import wird nicht fertig

Erste Importe laufen im Hintergrund und sind meist nach wenigen Minuten fertig. Ein langer Verlaufszeitraum bei einem aktiven GitHub-Repository kann länger dauern. Steht eine Datenquelle nach einer Stunde noch auf *Awaiting first sync*, wähle **Sync now**. Wechselt sie zu *Needs attention*, folge den Schritten oben. Bei GitHub hilft oft ein kürzerer Verlaufszeitraum.

## Eine Ressource fehlt in der Liste

Metribay listet nur, was das gespeicherte Konto sehen kann.

- Gib dem Konto beim Anbieter Zugriff (jede Anleitung zeigt, wie) und wähle dann **Refresh resources**.
- Sehr große Konten zeigen bis zu 2.000 Ressourcen. Nutze den Filter oder **Enter a resource manually**.
- In Metribay Cloud können Bearbeiter Konten nicht durchsuchen. Sie tragen die Ressource von Hand ein oder fragen einen Eigentümer.

## Die Zahlen sehen falsch aus

**Eine Datenquelle zeigt einen Strich.** Es ist keine verlässliche Summe verfügbar. Das ist nicht null. Siehe [Ein Strich ist keine Null](../reading-the-numbers/#ein-strich-ist-keine-null).

**Die Zahlen weichen vom Dashboard des Anbieters ab.** Prüf, ob du dieselben Tage in derselben Zeitzone vergleichst. Search Console zählt in pazifischer Zeit, und das Umami-Dashboard nutzt die Zeitzone deines Browsers. Siehe [Zeitzonen](../reading-the-numbers/#zeitzonen).

**Die Besucher sind weniger als die Summe der Tage.** Das ist richtig: Wer an zwei Tagen vorbeischaut, ist im Zeitraum ein Besucher. Siehe [Zeitraumwerte](../reading-the-numbers/#zeitraumwerte).

**Die Zahl von gestern hat sich geändert.** Anbieter schließen die letzten Tage erst später ab, und Metribay übernimmt das. Siehe [Teilweise und vorläufige Daten](../reading-the-numbers/#teilweise-und-vorläufige-daten).

**Ein plötzlicher Einbruch auf null oder fast null.** Oft eine Änderung am Tracking, etwa ein nach einem Redesign fehlendes Analyse-Skript oder ein neues Consent-Banner. Sieh im Dashboard des Anbieters nach. Zeigt es dasselbe, stimmen die Daten.

**Die Datenquelle zeigt *Delayed*.** Die neuesten Daten sind älter als drei Tage. Search Console und Bing veröffentlichen manchmal spät. Meist erledigt sich das von selbst.

## Die Anmeldung klappt nicht

- **Passwort vergessen?** Nutze **Forgot password** auf der Anmeldeseite.
- **Keine Registrierungs-E-Mail?** Sieh im Spam nach. Registrierungslinks laufen nach einer Stunde ab. Starte dann neu auf der Registrierungsseite.
- **Zwei-Faktor-Gerät verloren?** Nutze einen deiner Wiederherstellungscodes anstelle des Codes aus der App. Hast du keine, [schreib uns](mailto:rob@worbee.com).
- **Eingeladen, aber der Arbeitsbereich fehlt?** Melde dich mit der E-Mail-Adresse an, an die die Einladung ging, und prüf, ob sie abgelaufen ist (72 Stunden). Bitte bei Bedarf um eine neue Einladung.

## Kommst du immer noch nicht weiter?

Schreib an [rob@worbee.com](mailto:rob@worbee.com) und nenne:

- den Namen von Projekt und Datenquelle,
- was du erwartet hast und was du siehst,
- jede Meldung oder Referenz, die Metribay anzeigt.

Schick **nie Passwörter, API-Schlüssel oder Tokens** per E-Mail. Wir fragen nie danach.
