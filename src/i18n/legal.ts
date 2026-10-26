import type { Locale } from './copy';
import type { LegalPage } from '../lib/urls';
import { company, plan } from '../lib/company';

// Drafted on 2026-10-26 against Paddle's seller-policy requirements. Have them reviewed before relying on them, and bump `updated` with every change.
export interface LegalDocument { title: string; description: string; intro: string; sections: { heading: string; body: string[] }[] }

export const legalUpdated = { iso: '2026-10-26', en: '26 October 2026', de: '26. Oktober 2026' };

const address = company.address.join(', ');

export const legalContent: Record<Locale, Record<LegalPage, LegalDocument>> = {
  en: {
    terms: {
      title: 'Terms of service',
      description: 'The terms for using Metribay Cloud and the metribay.com website.',
      intro: `These terms cover Metribay Cloud at app.metribay.com and this website. Metribay is run by ${company.name}, ${address}, VAT ID ${company.vatId} (“we”, “us”). When you create an account or use the service, you agree to these terms and enter into a contract with ${company.name} for the use of Metribay.`,
      sections: [
        { heading: 'Ordering through Paddle', body: [
          'Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle handles checkout, payment, invoices, billing questions and returns. Paddle’s buyer terms apply to your purchase: https://www.paddle.com/legal/checkout-buyer-terms',
        ] },
        { heading: 'The service', body: [
          'Metribay Cloud collects metrics from tools you connect, such as analytics, search, repository, download and uptime services, and shows them in a shared dashboard. The plan limits and features on our pricing page apply to your subscription.',
          'We keep improving Metribay and may change features. We won’t remove a core feature you pay for during a paid period without telling you first.',
          'Metribay depends on the APIs of the tools you connect. If a provider changes or limits its API, some numbers may be delayed or unavailable.',
        ] },
        { heading: 'Trial, billing and renewal', body: [
          `New subscriptions start with a ${plan.trialDays}-day free trial. You add a payment method to start it. If you don’t cancel before the trial ends, your subscription starts and you’re charged.`,
          `Metribay Cloud costs $${plan.monthly} a month or $${plan.annual} a year, in US dollars. Prices include VAT or sales tax where it applies. Paddle calculates and pays these taxes. If you buy as a business with a valid VAT ID, Paddle may remove VAT and you pay less.`,
          'Subscriptions renew automatically at the end of each billing period until you cancel. If we change prices, we’ll tell you at least 30 days before the new price applies to your next billing period.',
        ] },
        { heading: 'Cancellation', body: [
          'You can cancel anytime from the billing page in the app. You keep access until the end of the period you paid for. Cancelling doesn’t delete your data: you can still sign in, see your history and export your configuration.',
        ] },
        { heading: 'Refunds', body: [
          `You can ask for a full refund within ${plan.refundDays} days of any payment. Our refund policy explains how: https://metribay.com/refunds/`,
        ] },
        { heading: 'Your account and team', body: [
          'Keep your sign-in details safe and your account information accurate. You’re responsible for what happens in your account and for the people you invite to your workspaces.',
        ] },
        { heading: 'Your data and connected accounts', body: [
          'Your data stays yours. You allow us to access the tools you connect only to collect and show your metrics. Only connect accounts you’re allowed to use.',
          'We process personal data as described in our privacy policy: https://metribay.com/privacy/',
        ] },
        { heading: 'Acceptable use', body: [
          'Don’t use Metribay for anything unlawful, for fraud or spam, or to infringe anyone’s intellectual property. Don’t try to break or bypass our security, access other people’s data, or overload the service. Don’t resell access to Metribay Cloud without our written agreement.',
        ] },
        { heading: 'Availability', body: [
          'We work hard to keep Metribay running, but we can’t promise it will always be available or free of errors. We may pause the service briefly for maintenance.',
        ] },
        { heading: 'Liability', body: [
          'To the extent the law allows, our total liability is limited to the amount you paid us in the 12 months before the claim. This limit doesn’t apply to intent, gross negligence, injury to life, body or health, or where the law doesn’t allow a limit. If you’re a consumer, your statutory rights are not affected.',
        ] },
        { heading: 'Suspension and termination', body: [
          'We may suspend or close an account for a material breach of these terms, non-payment, a security or fraud risk, or repeated violations. Where we can, we’ll warn you first. You can ask us to delete your account at any time.',
        ] },
        { heading: 'Self-hosted edition', body: [
          'The self-hosted edition is licensed under the Apache License 2.0. That licence, not these terms, governs its use. It comes as is, without a warranty or support obligation.',
        ] },
        { heading: 'Changes to these terms', body: [
          'If we make material changes, we’ll email account owners at least 30 days before they take effect. If you don’t agree, you can cancel before then.',
        ] },
        { heading: 'Law and contact', body: [
          'Bulgarian law applies. If you’re a consumer, you also keep the protection of the mandatory laws of the country you live in.',
          `Questions about these terms: ${company.email}`,
        ] },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      description: 'What personal data Metribay processes, why, and the rights you have.',
      intro: `This policy explains how ${company.name} handles personal data on metribay.com and in Metribay Cloud at app.metribay.com. We collect what we need to run the service, and nothing for advertising.`,
      sections: [
        { heading: 'Who is responsible', body: [
          `${company.name}, ${address}. UIC ${company.uic}, VAT ID ${company.vatId}. Privacy contact: ${company.email}`,
        ] },
        { heading: 'This website', body: [
          'metribay.com sets no cookies and runs no analytics or tracking scripts. Cloudflare delivers the site and processes technical request data, such as your IP address and browser details, to serve and protect it. Legal basis: our legitimate interest in a secure, working website (Art. 6(1)(f) GDPR).',
        ] },
        { heading: 'Your Metribay account', body: [
          'When you sign up, we process your name, email address, password (stored only as a hash), two-factor settings, workspace memberships and invitations. We use this to provide the service and send emails you need, such as verification, password resets and invitations. Legal basis: performance of our contract with you (Art. 6(1)(b) GDPR).',
          'The app uses only essential cookies: a session cookie, a security token and, if you choose it, a “remember me” cookie. They’re needed for sign-in and protection, so no consent banner is required.',
        ] },
        { heading: 'Connected tools and metrics', body: [
          'To show your metrics, we store the credentials you enter for each tool, encrypted, and the numbers we collect. These are aggregate counts, such as daily visitors or clicks. Metribay doesn’t collect data about individual visitors to your websites.',
        ] },
        { heading: 'Payments', body: [
          'Paddle is our reseller and Merchant of Record. Paddle processes your payment and billing details as an independent controller under its own privacy policy: https://www.paddle.com/legal/privacy. We receive your subscription status, plan, country and a customer reference. We never see your full card details.',
        ] },
        { heading: 'Logs and security', body: [
          'We don’t keep web server access logs for the app. Application errors are logged without request bodies or credentials and rotate automatically. We use encryption in transit and at rest for credentials, limit access to production systems and protect operator access with two-factor authentication.',
        ] },
        { heading: 'Who receives data', body: [
          'Hetzner Online GmbH hosts the app and database in its data centre in Finland.',
          'Cloudflare, Inc. provides the network in front of the app, DNS and hosting for this website.',
          'Paddle.com Market Ltd handles checkout, payments, invoices and taxes as Merchant of Record.',
          'Zoho Corporation delivers the app’s emails.',
          'Professional advisers and authorities, only where the law requires it.',
          'We don’t sell personal data or share it for advertising.',
        ] },
        { heading: 'Transfers outside the EU', body: [
          'Some providers may process data outside the EU, for example Cloudflare in the United States and Paddle in the United Kingdom. We rely on the EU-US Data Privacy Framework, the EU adequacy decision for the UK, or Standard Contractual Clauses.',
        ] },
        { heading: 'How long we keep data', body: [
          'We keep account data while your account exists. If you ask us to delete your account, we delete it within 30 days. Database backups roll over after 14 days. Billing records are kept as long as tax and accounting law requires.',
        ] },
        { heading: 'Your rights', body: [
          `You can ask for access to your data, correction, deletion, restriction, a portable copy, or object to processing based on legitimate interest. Email ${company.email}. We answer within one month.`,
          'You can also complain to a data protection authority, such as the Bulgarian Commission for Personal Data Protection (https://www.cpdp.bg) or the authority where you live.',
        ] },
        { heading: 'Changes', body: [
          'If this policy changes in a way that matters, we’ll update the date above and tell account owners by email.',
        ] },
      ],
    },
    refunds: {
      title: 'Refund policy',
      description: `Get a full refund within ${plan.refundDays} days of any Metribay payment.`,
      intro: `If Metribay isn’t right for you, you get your money back. Ask within ${plan.refundDays} days of a payment and we refund it in full.`,
      sections: [
        { heading: 'Free trial', body: [
          `Every new subscription starts with a ${plan.trialDays}-day free trial. Cancel before it ends and you’re never charged.`,
        ] },
        { heading: `Full refund within ${plan.refundDays} days`, body: [
          `This covers your first payment and every renewal, monthly or annual. You don’t need to give a reason. A refund ends access for the period it covers.`,
        ] },
        { heading: 'How to ask', body: [
          'Paddle, our reseller and Merchant of Record, processes refunds. Find your order at https://paddle.net and request a refund there, or email us and we’ll arrange it. The money goes back to the payment method you used.',
          `Email: ${company.email}`,
        ] },
        { heading: `After ${plan.refundDays} days`, body: [
          'You can still cancel anytime to stop the next renewal. You keep access until the end of the period you paid for. We don’t refund partial periods after the refund window, unless the law requires it.',
        ] },
        { heading: 'Your statutory rights', body: [
          'This policy doesn’t limit any rights you have under consumer law, including the right of withdrawal in the EU. Paddle may refuse refunds in cases of fraud or abuse.',
        ] },
      ],
    },
    imprint: {
      title: 'Imprint',
      description: 'Legal notice and company details for Metribay.',
      intro: 'Metribay is a product of:',
      sections: [
        { heading: company.name, body: [
          ...company.address,
          `Represented by: ${company.representative}`,
          `Registered in the Bulgarian Commercial Register, UIC ${company.uic}`,
          `VAT ID: ${company.vatId}`,
          `Email: ${company.email}`,
        ] },
        { heading: 'Responsible for content', body: [
          `${company.representative}, address as above.`,
        ] },
      ],
    },
  },
  de: {
    terms: {
      title: 'Allgemeine Geschäftsbedingungen',
      description: 'Die Bedingungen für die Nutzung von Metribay Cloud und der Website metribay.com.',
      intro: `Diese Bedingungen gelten für Metribay Cloud unter app.metribay.com und für diese Website. Metribay wird betrieben von der ${company.name}, ${address}, USt-IdNr. ${company.vatId} („wir“, „uns“). Mit der Registrierung oder Nutzung des Dienstes stimmst du diesen Bedingungen zu und schließt mit der ${company.name} einen Vertrag über die Nutzung von Metribay.`,
      sections: [
        { heading: 'Bestellung über Paddle', body: [
          'Unser Bestellprozess wird von unserem Online-Wiederverkäufer Paddle.com durchgeführt. Paddle.com ist der Merchant of Record für alle unsere Bestellungen. Paddle übernimmt Checkout, Zahlung, Rechnungen, Fragen zur Abrechnung und Rückgaben. Für deinen Kauf gelten die Käuferbedingungen von Paddle: https://www.paddle.com/legal/checkout-buyer-terms',
        ] },
        { heading: 'Der Dienst', body: [
          'Metribay Cloud erfasst Kennzahlen aus Tools, die du verbindest, etwa Analyse-, Such-, Repository-, Download- und Uptime-Dienste, und zeigt sie in einem gemeinsamen Dashboard. Für dein Abonnement gelten die Grenzen und Funktionen auf unserer Preisseite.',
          'Wir entwickeln Metribay laufend weiter und können Funktionen ändern. Eine zentrale Funktion, für die du bezahlst, entfernen wir während eines bezahlten Zeitraums nicht, ohne dich vorher zu informieren.',
          'Metribay ist auf die Schnittstellen der verbundenen Tools angewiesen. Ändert oder begrenzt ein Anbieter seine Schnittstelle, können einzelne Zahlen verzögert oder nicht verfügbar sein.',
        ] },
        { heading: 'Test, Abrechnung und Verlängerung', body: [
          `Neue Abonnements beginnen mit einem kostenlosen Test über ${plan.trialDays} Tage. Zum Start hinterlegst du eine Zahlungsmethode. Kündigst du nicht vor Ablauf, beginnt dein Abonnement und wird berechnet.`,
          `Metribay Cloud kostet ${plan.monthly} USD im Monat oder ${plan.annual} USD im Jahr. Die Preise enthalten Mehrwertsteuer bzw. Sales Tax, soweit diese anfällt. Paddle berechnet und zahlt diese Steuern. Kaufst du als Unternehmen mit gültiger USt-IdNr., kann Paddle die Mehrwertsteuer abziehen, dann zahlst du weniger.`,
          'Abonnements verlängern sich am Ende jedes Abrechnungszeitraums automatisch, bis du kündigst. Ändern wir Preise, informieren wir dich mindestens 30 Tage bevor der neue Preis für deinen nächsten Abrechnungszeitraum gilt.',
        ] },
        { heading: 'Kündigung', body: [
          'Du kannst jederzeit auf der Abrechnungsseite in der App kündigen. Du behältst den Zugang bis zum Ende des bezahlten Zeitraums. Eine Kündigung löscht keine Daten: Du kannst dich weiter anmelden, deinen Verlauf sehen und deine Konfiguration exportieren.',
        ] },
        { heading: 'Erstattung', body: [
          `Innerhalb von ${plan.refundDays} Tagen nach jeder Zahlung kannst du eine volle Erstattung verlangen. Wie das geht, steht in unseren Erstattungsrichtlinien: https://metribay.com/de/erstattung/`,
        ] },
        { heading: 'Dein Konto und dein Team', body: [
          'Halte deine Zugangsdaten sicher und deine Kontodaten aktuell. Du bist verantwortlich für Vorgänge in deinem Konto und für die Personen, die du in deine Arbeitsbereiche einlädst.',
        ] },
        { heading: 'Deine Daten und verbundene Konten', body: [
          'Deine Daten gehören dir. Du erlaubst uns, auf die verbundenen Tools nur zuzugreifen, um deine Kennzahlen zu erfassen und anzuzeigen. Verbinde nur Konten, die du nutzen darfst.',
          'Personenbezogene Daten verarbeiten wir wie in unserer Datenschutzerklärung beschrieben: https://metribay.com/de/datenschutz/',
        ] },
        { heading: 'Zulässige Nutzung', body: [
          'Nutze Metribay nicht für rechtswidrige Zwecke, Betrug oder Spam und verletze keine geistigen Eigentumsrechte. Versuche nicht, unsere Sicherheit zu umgehen, auf fremde Daten zuzugreifen oder den Dienst zu überlasten. Verkaufe den Zugang zu Metribay Cloud nicht ohne unsere schriftliche Zustimmung weiter.',
        ] },
        { heading: 'Verfügbarkeit', body: [
          'Wir tun viel dafür, dass Metribay zuverlässig läuft, können aber keine ständige oder fehlerfreie Verfügbarkeit versprechen. Für Wartungsarbeiten kann der Dienst kurz pausieren.',
        ] },
        { heading: 'Haftung', body: [
          'Soweit gesetzlich zulässig, ist unsere Haftung insgesamt auf den Betrag begrenzt, den du uns in den 12 Monaten vor dem Anspruch gezahlt hast. Diese Grenze gilt nicht bei Vorsatz, grober Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit oder wo das Gesetz keine Begrenzung erlaubt. Als Verbraucher bleiben deine gesetzlichen Rechte unberührt.',
        ] },
        { heading: 'Sperrung und Beendigung', body: [
          'Wir können ein Konto bei einem wesentlichen Verstoß gegen diese Bedingungen, bei Nichtzahlung, bei einem Sicherheits- oder Betrugsrisiko oder bei wiederholten Verstößen sperren oder schließen. Wenn möglich, warnen wir dich vorher. Du kannst jederzeit die Löschung deines Kontos verlangen.',
        ] },
        { heading: 'Selbst gehostete Version', body: [
          'Die selbst gehostete Version steht unter der Apache License 2.0. Für ihre Nutzung gilt diese Lizenz, nicht diese Bedingungen. Sie wird ohne Gewährleistung und ohne Supportpflicht bereitgestellt.',
        ] },
        { heading: 'Änderungen dieser Bedingungen', body: [
          'Bei wesentlichen Änderungen informieren wir Kontoinhaber mindestens 30 Tage vor Inkrafttreten per E-Mail. Bist du nicht einverstanden, kannst du vorher kündigen.',
        ] },
        { heading: 'Recht und Kontakt', body: [
          'Es gilt bulgarisches Recht. Als Verbraucher behältst du zusätzlich den Schutz der zwingenden Vorschriften des Landes, in dem du lebst.',
          `Fragen zu diesen Bedingungen: ${company.email}`,
        ] },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      description: 'Welche personenbezogenen Daten Metribay verarbeitet, warum, und welche Rechte du hast.',
      intro: `Diese Erklärung beschreibt, wie die ${company.name} personenbezogene Daten auf metribay.com und in Metribay Cloud unter app.metribay.com verarbeitet. Wir erheben, was wir für den Dienst brauchen, und nichts für Werbung.`,
      sections: [
        { heading: 'Verantwortlicher', body: [
          `${company.name}, ${address}. UIC ${company.uic}, USt-IdNr. ${company.vatId}. Datenschutzkontakt: ${company.email}`,
        ] },
        { heading: 'Diese Website', body: [
          'metribay.com setzt keine Cookies und nutzt keine Analyse- oder Tracking-Skripte. Cloudflare liefert die Website aus und verarbeitet dabei technische Anfragedaten wie deine IP-Adresse und Browserangaben, um sie bereitzustellen und zu schützen. Rechtsgrundlage: unser berechtigtes Interesse an einer sicheren, funktionierenden Website (Art. 6 Abs. 1 lit. f DSGVO).',
        ] },
        { heading: 'Dein Metribay-Konto', body: [
          'Bei der Registrierung verarbeiten wir deinen Namen, deine E-Mail-Adresse, dein Passwort (nur als Hash gespeichert), Zwei-Faktor-Einstellungen, Mitgliedschaften in Arbeitsbereichen und Einladungen. Damit stellen wir den Dienst bereit und senden notwendige E-Mails wie Bestätigungen, Passwort-Resets und Einladungen. Rechtsgrundlage: Erfüllung unseres Vertrags mit dir (Art. 6 Abs. 1 lit. b DSGVO).',
          'Die App nutzt nur notwendige Cookies: ein Sitzungs-Cookie, ein Sicherheits-Token und, wenn du es wählst, ein „Angemeldet bleiben“-Cookie. Sie sind für Anmeldung und Schutz erforderlich, deshalb ist kein Einwilligungsbanner nötig.',
        ] },
        { heading: 'Verbundene Tools und Kennzahlen', body: [
          'Um deine Kennzahlen anzuzeigen, speichern wir die Zugangsdaten für jedes Tool verschlüsselt sowie die erfassten Zahlen. Das sind zusammengefasste Werte wie tägliche Besucher oder Klicks. Metribay erhebt keine Daten über einzelne Besucher deiner Websites.',
        ] },
        { heading: 'Zahlungen', body: [
          'Paddle ist unser Wiederverkäufer und Merchant of Record. Paddle verarbeitet deine Zahlungs- und Rechnungsdaten als eigenständiger Verantwortlicher nach eigener Datenschutzerklärung: https://www.paddle.com/legal/privacy. Wir erhalten deinen Abonnementstatus, den Plan, dein Land und eine Kundenreferenz. Deine vollständigen Kartendaten sehen wir nie.',
        ] },
        { heading: 'Logs und Sicherheit', body: [
          'Für die App speichern wir keine Webserver-Zugriffslogs. Anwendungsfehler werden ohne Anfrageinhalte oder Zugangsdaten protokolliert und automatisch rotiert. Zugangsdaten sind bei Übertragung und Speicherung verschlüsselt, der Zugriff auf Produktivsysteme ist begrenzt und durch Zwei-Faktor-Authentifizierung geschützt.',
        ] },
        { heading: 'Empfänger', body: [
          'Hetzner Online GmbH hostet App und Datenbank in ihrem Rechenzentrum in Finnland.',
          'Cloudflare, Inc. stellt das Netzwerk vor der App, DNS und das Hosting dieser Website bereit.',
          'Paddle.com Market Ltd übernimmt als Merchant of Record Checkout, Zahlungen, Rechnungen und Steuern.',
          'Zoho Corporation versendet die E-Mails der App.',
          'Berater und Behörden, nur soweit gesetzlich vorgeschrieben.',
          'Wir verkaufen keine personenbezogenen Daten und geben sie nicht für Werbung weiter.',
        ] },
        { heading: 'Übermittlung außerhalb der EU', body: [
          'Einige Anbieter verarbeiten Daten möglicherweise außerhalb der EU, etwa Cloudflare in den USA und Paddle im Vereinigten Königreich. Grundlage sind das EU-US Data Privacy Framework, der Angemessenheitsbeschluss der EU für das Vereinigte Königreich oder Standardvertragsklauseln.',
        ] },
        { heading: 'Speicherdauer', body: [
          'Kontodaten speichern wir, solange dein Konto besteht. Verlangst du die Löschung, löschen wir es innerhalb von 30 Tagen. Datenbank-Backups werden nach 14 Tagen überschrieben. Abrechnungsunterlagen bewahren wir so lange auf, wie Steuer- und Handelsrecht es verlangen.',
        ] },
        { heading: 'Deine Rechte', body: [
          `Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen. Schreib an ${company.email}. Wir antworten innerhalb eines Monats.`,
          'Du kannst dich außerdem bei einer Datenschutzbehörde beschweren, etwa bei der bulgarischen Kommission für den Schutz personenbezogener Daten (https://www.cpdp.bg) oder bei der Behörde an deinem Wohnort.',
        ] },
        { heading: 'Änderungen', body: [
          'Ändert sich diese Erklärung in wesentlichen Punkten, aktualisieren wir das Datum oben und informieren Kontoinhaber per E-Mail.',
        ] },
      ],
    },
    refunds: {
      title: 'Erstattungsrichtlinien',
      description: `Volle Erstattung innerhalb von ${plan.refundDays} Tagen nach jeder Zahlung für Metribay.`,
      intro: `Passt Metribay nicht zu dir, bekommst du dein Geld zurück. Melde dich innerhalb von ${plan.refundDays} Tagen nach einer Zahlung und wir erstatten den vollen Betrag.`,
      sections: [
        { heading: 'Kostenloser Test', body: [
          `Jedes neue Abonnement beginnt mit einem kostenlosen Test über ${plan.trialDays} Tage. Kündigst du vorher, wird nichts berechnet.`,
        ] },
        { heading: `Volle Erstattung innerhalb von ${plan.refundDays} Tagen`, body: [
          'Das gilt für deine erste Zahlung und jede Verlängerung, monatlich oder jährlich. Einen Grund musst du nicht nennen. Mit der Erstattung endet der Zugang für den erstatteten Zeitraum.',
        ] },
        { heading: 'So beantragst du sie', body: [
          'Paddle, unser Wiederverkäufer und Merchant of Record, wickelt Erstattungen ab. Finde deine Bestellung unter https://paddle.net und beantrage dort die Erstattung, oder schreib uns und wir kümmern uns darum. Das Geld geht an die genutzte Zahlungsmethode zurück.',
          `E-Mail: ${company.email}`,
        ] },
        { heading: `Nach ${plan.refundDays} Tagen`, body: [
          'Du kannst jederzeit kündigen, um die nächste Verlängerung zu stoppen. Den Zugang behältst du bis zum Ende des bezahlten Zeitraums. Angebrochene Zeiträume erstatten wir nach Ablauf der Frist nicht, außer das Gesetz verlangt es.',
        ] },
        { heading: 'Deine gesetzlichen Rechte', body: [
          'Diese Richtlinien schränken deine Rechte als Verbraucher nicht ein, einschließlich des Widerrufsrechts in der EU. Paddle kann Erstattungen bei Betrug oder Missbrauch ablehnen.',
        ] },
      ],
    },
    imprint: {
      title: 'Impressum',
      description: 'Rechtliche Angaben und Unternehmensdaten zu Metribay.',
      intro: 'Metribay ist ein Produkt der:',
      sections: [
        { heading: company.name, body: [
          ...company.address.map(line => line.replace('Bulgaria, EU', 'Bulgarien, EU')),
          `Vertreten durch: ${company.representative}`,
          `Eingetragen im bulgarischen Handelsregister, UIC ${company.uic}`,
          `USt-IdNr.: ${company.vatId}`,
          `E-Mail: ${company.email}`,
        ] },
        { heading: 'Verantwortlich für den Inhalt', body: [
          `${company.representative}, Anschrift wie oben.`,
        ] },
      ],
    },
  },
};
