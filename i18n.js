(function () {
  "use strict";

  const KEY = "centerMmaLanguage";
  const savedLanguage = localStorage.getItem(KEY);
  window.currentLanguage = ["de", "en", "uk"].includes(savedLanguage) ? savedLanguage : "de";

  const dictionaries = {
    en: {},
    de: {"Welcome back": "Willkommen zurück", "Login to your CENTER MMA account.": "Melde dich bei deinem CENTER MMA Konto an.", "Email": "E-Mail", "Password": "Passwort", "LOGIN": "ANMELDEN", "Don't have an account?": "Noch kein Konto?", "Create account": "Konto erstellen", "Create your CENTER MMA account.": "Erstelle dein CENTER MMA Konto.", "CREATE ACCOUNT": "KONTO ERSTELLEN", "Already have an account?": "Du hast bereits ein Konto?", "Login": "Anmelden", "LOGOUT": "ABMELDEN", "Member": "Mitglied", "Active member": "Aktives Mitglied", "Administrator": "Administrator", "Trainer": "Trainer", "Membership Status": "Mitgliedschaftsstatus", "ACTIVE": "AKTIV", "INACTIVE": "INAKTIV", "Active": "Aktiv", "Inactive": "Inaktiv", "Valid until": "Gültig bis", "Next Training": "Nächstes Training", "Loading...": "Wird geladen...", "MY PROFILE": "MEIN PROFIL", "View and edit your personal information": "Persönliche Daten ansehen und bearbeiten", "Calendar": "Kalender", "Training, competitions & events": "Training, Wettkämpfe & Veranstaltungen", "Competitions & Events": "Wettkämpfe & Events", "Upcoming events & results": "Kommende Events & Ergebnisse", "News": "News", "Latest club news": "Neueste Vereinsnews", "Membership": "Mitgliedschaft", "Membership details": "Mitgliedschaftsdetails", "Payments": "Zahlungen", "Payment history": "Zahlungsverlauf", "Attendance & Progress": "Anwesenheit & Fortschritt", "Your training overview": "Deine Trainingsübersicht", "Chat": "Chat", "Club chat": "Vereinschat", "Documents": "Dokumente", "Club documents & files": "Vereinsdokumente & Dateien", "ADMIN PANEL": "ADMIN-BEREICH", "TRAINER PANEL": "TRAINER-BEREICH", "Members, payments and club administration": "Mitglieder, Zahlungen und Vereinsverwaltung", "Attendance and trainer tools": "Anwesenheit und Trainer-Werkzeuge", "Home": "Home", "Profile": "Profil", "Notifications": "Benachrichtigungen", "← BACK": "← ZURÜCK", "Birth date": "Geburtsdatum", "First name": "Vorname", "Last name": "Nachname", "Phone": "Telefon", "Emergency contact name": "Notfallkontakt – Name", "Emergency contact phone": "Notfallkontakt – Telefon", "Membership number": "Mitgliedsnummer", "UPLOAD PHOTO": "FOTO HOCHLADEN", "SAVE PROFILE": "PROFIL SPEICHERN", "Language": "Sprache", "Choose the language of the CENTER MMA interface.": "Wähle die Sprache der CENTER MMA Oberfläche.", "Notification Settings": "Benachrichtigungseinstellungen", "Notification Preferences": "Benachrichtigungseinstellungen", "Choose which optional notifications you want to receive.": "Wähle, welche optionalen Benachrichtigungen du erhalten möchtest.", "🔒 Important club notifications": "🔒 Wichtige Vereinsbenachrichtigungen", "Admin, group, payment and membership notifications. Always enabled.": "Admin-, Gruppen-, Zahlungs- und Mitgliedschaftsbenachrichtigungen. Immer aktiviert.", "💬 Chat messages": "💬 Chat-Nachrichten", "Notifications about new club chat messages.": "Benachrichtigungen über neue Nachrichten im Vereinschat.", "Notify me about new club chat messages.": "Benachrichtige mich über neue Nachrichten im Vereinschat.", "⏰ Training reminders": "⏰ Trainingserinnerungen", "Reminders before upcoming training sessions.": "Erinnerungen vor kommenden Trainingseinheiten.", "🥋 Training changes": "🥋 Trainingsänderungen", "Changes, cancellations or new training sessions.": "Änderungen, Absagen oder neue Trainingseinheiten.", "New, changed or cancelled training sessions.": "Neue, geänderte oder abgesagte Trainingseinheiten.", "🏆 Competitions": "🏆 Wettkämpfe", "New competitions and competition updates.": "Neue Wettkämpfe und Wettkampf-Updates.", "📰 News": "📰 News", "Notifications when new club news is published.": "Benachrichtigungen bei neuen Vereinsnews.", "Notify me when new club news is published.": "Benachrichtige mich bei neuen Vereinsnews.", "📄 Documents": "📄 Dokumente", "Notifications when new club documents are added.": "Benachrichtigungen bei neuen Vereinsdokumenten.", "Notify me when new club documents are added.": "Benachrichtige mich bei neuen Vereinsdokumenten.", "🎂 Birthday reminders": "🎂 Geburtstagserinnerungen", "Birthday and club celebration reminders.": "Erinnerungen an Geburtstage und Vereinsfeiern.", "📱 Device alerts": "📱 Gerätebenachrichtigungen", "Allow this device to show browser/PWA alerts while CENTER MMA is active.": "Erlaube diesem Gerät Browser-/PWA-Benachrichtigungen anzuzeigen.", "ENABLE DEVICE ALERTS": "GERÄTEBENACHRICHTIGUNGEN AKTIVIEREN", "SAVE NOTIFICATION SETTINGS": "BENACHRICHTIGUNGEN SPEICHERN", "SAVE PREFERENCES": "EINSTELLUNGEN SPEICHERN", "Notification History": "Benachrichtigungsverlauf", "Your recent notifications.": "Deine letzten Benachrichtigungen.", "No notifications yet.": "Noch keine Benachrichtigungen.", "Loading notifications...": "Benachrichtigungen werden geladen...", "Loading news...": "News werden geladen...", "Loading calendar...": "Kalender wird geladen...", "Loading chat...": "Chat wird geladen...", "Loading documents...": "Dokumente werden geladen...", "Loading events...": "Events werden geladen...", "Loading attendance progress...": "Anwesenheit und Fortschritt werden geladen...", "Loading competition record...": "Wettkampfstatistik wird geladen...", "Events": "Events", "Competition Record": "Wettkampfstatistik", "Payment History": "Zahlungsverlauf", "Your membership payment history": "Dein Zahlungsverlauf der Mitgliedschaft", "Club Chat": "Vereinschat", "SEND": "SENDEN", "Progress": "Fortschritt", "Attendance": "Anwesenheit", "Today": "Heute", "Tomorrow": "Morgen", "Training": "Training", "Competition": "Wettkampf", "Birthday": "Geburtstag", "Install CENTER MMA": "CENTER MMA installieren", "Install the app on this device for a faster full-screen experience.": "Installiere die App auf diesem Gerät für eine schnellere Vollbild-Nutzung.", "INSTALL APP": "APP INSTALLIEREN", "No upcoming training": "Kein kommendes Training", "No future training session is currently scheduled.": "Derzeit ist kein zukünftiges Training eingetragen.", "No upcoming events": "Keine kommenden Events", "No news yet": "Noch keine News", "Your membership is not active.": "Deine Mitgliedschaft ist nicht aktiv.", "Membership inactive": "Mitgliedschaft inaktiv", "REQUEST PAYMENT CONFIRMATION": "ZAHLUNGSBESTÄTIGUNG ANFORDERN", "Account created successfully.": "Konto erfolgreich erstellt.", "Account created. Please check your email if confirmation is required.": "Konto erstellt. Bitte prüfe deine E-Mail, falls eine Bestätigung erforderlich ist.", "Creating account...": "Konto wird erstellt...", "Logging in...": "Anmeldung läuft...", "Login failed:": "Anmeldung fehlgeschlagen:", "Registration failed:": "Registrierung fehlgeschlagen:", "Please enter email and password.": "Bitte E-Mail und Passwort eingeben.", "Password must contain at least 6 characters.": "Das Passwort muss mindestens 6 Zeichen enthalten.", "Profile saved successfully.": "Profil erfolgreich gespeichert.", "Saving...": "Wird gespeichert...", "Photo uploaded successfully.": "Foto erfolgreich hochgeladen.", "Uploading photo...": "Foto wird hochgeladen...", "Payment confirmation request sent successfully.": "Anfrage zur Zahlungsbestätigung erfolgreich gesendet.", "You already have a pending payment confirmation request.": "Du hast bereits eine offene Anfrage zur Zahlungsbestätigung.", "Sending request...": "Anfrage wird gesendet...", "Payment approved": "Zahlung bestätigt", "Payment confirmed and membership activated.": "Zahlung bestätigt und Mitgliedschaft aktiviert.", "Amount not confirmed": "Betrag noch nicht bestätigt", "Confirm payment & activate membership": "Zahlung bestätigen & Mitgliedschaft aktivieren", "Amount (€)": "Betrag (€)", "Monthly": "Monatlich", "Half Year": "Halbjahr", "Year": "Jahr", "Custom": "Individuell", "Valid from": "Gültig ab", "Admin note": "Admin-Notiz", "Optional note": "Optionale Notiz", "CONFIRM & ACTIVATE": "BESTÄTIGEN & AKTIVIEREN", "REJECT": "ABLEHNEN", "Enter the amount actually received.": "Gib den tatsächlich eingegangenen Betrag ein.", "Valid from and Valid until are required.": "Gültig ab und Gültig bis sind erforderlich.", "Valid until cannot be before Valid from.": "Gültig bis darf nicht vor Gültig ab liegen.", "Confirming payment...": "Zahlung wird bestätigt...", "Pending payment requests": "Offene Zahlungsanfragen", "No pending payment requests.": "Keine offenen Zahlungsanfragen.", "Members": "Mitglieder", "Search name, email or member number...": "Name, E-Mail oder Mitgliedsnummer suchen...", "Member saved successfully.": "Mitglied erfolgreich gespeichert.", "ACCOUNT ACTIVE": "KONTO AKTIV", "ACCOUNT DEACTIVATED": "KONTO DEAKTIVIERT", "DEACTIVATE MEMBER": "MITGLIED DEAKTIVIEREN", "REACTIVATE MEMBER": "MITGLIED REAKTIVIEREN", "Training Sessions": "Trainingseinheiten", "Birthdays": "Geburtstage", "Groups": "Gruppen", "Admin Panel": "Admin-Bereich", "CREATE COMPETITION": "WETTKAMPF ERSTELLEN", "CREATE GROUP": "GRUPPE ERSTELLEN", "CREATE NEWS": "NEWS ERSTELLEN", "CREATE TRAINING SESSION": "TRAINING ERSTELLEN", "SAVE ATTENDANCE": "ANWESENHEIT SPEICHERN", "SEND NOTIFICATION": "BENACHRICHTIGUNG SENDEN", "DELETE": "LÖSCHEN", "DELETE OLD NOTIFICATIONS NOW": "ALTE BENACHRICHTIGUNGEN JETZT LÖSCHEN", "Notification settings saved.": "Benachrichtigungseinstellungen gespeichert.", "Device alerts are enabled on this device.": "Gerätebenachrichtigungen sind auf diesem Gerät aktiviert.", "Device alerts are not enabled yet.": "Gerätebenachrichtigungen sind noch nicht aktiviert.", "Device alerts are blocked in browser settings.": "Gerätebenachrichtigungen sind in den Browsereinstellungen blockiert.", "This browser does not support notifications.": "Dieser Browser unterstützt keine Benachrichtigungen.", "Excellent": "Ausgezeichnet", "Good": "Gut", "Improving": "Verbesserung", "Keep going": "Weiter so"},
    uk: {"Welcome back": "З поверненням", "Login to your CENTER MMA account.": "Увійдіть до свого акаунта CENTER MMA.", "Email": "Електронна пошта", "Password": "Пароль", "LOGIN": "УВІЙТИ", "Don't have an account?": "Ще немає акаунта?", "Create account": "Створити акаунт", "Create your CENTER MMA account.": "Створіть свій акаунт CENTER MMA.", "CREATE ACCOUNT": "СТВОРИТИ АКАУНТ", "Already have an account?": "Вже маєте акаунт?", "Login": "Увійти", "LOGOUT": "ВИЙТИ", "Member": "Учасник", "Active member": "Активний учасник", "Administrator": "Адміністратор", "Trainer": "Тренер", "Membership Status": "Статус членства", "ACTIVE": "АКТИВНЕ", "INACTIVE": "НЕАКТИВНЕ", "Active": "Активне", "Inactive": "Неактивне", "Valid until": "Дійсне до", "Next Training": "Наступне тренування", "Loading...": "Завантаження...", "MY PROFILE": "МІЙ ПРОФІЛЬ", "View and edit your personal information": "Перегляд і редагування особистих даних", "Calendar": "Календар", "Training, competitions & events": "Тренування, змагання та події", "Competitions & Events": "Змагання та події", "Upcoming events & results": "Майбутні події та результати", "News": "Новини", "Latest club news": "Останні новини клубу", "Membership": "Членство", "Membership details": "Дані членства", "Payments": "Оплати", "Payment history": "Історія оплат", "Attendance & Progress": "Відвідуваність і прогрес", "Your training overview": "Огляд ваших тренувань", "Chat": "Чат", "Club chat": "Чат клубу", "Documents": "Документи", "Club documents & files": "Документи та файли клубу", "ADMIN PANEL": "ПАНЕЛЬ АДМІНА", "TRAINER PANEL": "ПАНЕЛЬ ТРЕНЕРА", "Members, payments and club administration": "Учасники, оплати та керування клубом", "Attendance and trainer tools": "Відвідуваність та інструменти тренера", "Home": "Головна", "Profile": "Профіль", "Notifications": "Сповіщення", "← BACK": "← НАЗАД", "Birth date": "Дата народження", "First name": "Ім’я", "Last name": "Прізвище", "Phone": "Телефон", "Emergency contact name": "Ім’я контакту для екстрених випадків", "Emergency contact phone": "Телефон для екстрених випадків", "Membership number": "Номер учасника", "UPLOAD PHOTO": "ЗАВАНТАЖИТИ ФОТО", "SAVE PROFILE": "ЗБЕРЕГТИ ПРОФІЛЬ", "Language": "Мова", "Choose the language of the CENTER MMA interface.": "Оберіть мову інтерфейсу CENTER MMA.", "Notification Settings": "Налаштування сповіщень", "Notification Preferences": "Налаштування сповіщень", "Choose which optional notifications you want to receive.": "Оберіть, які необов’язкові сповіщення ви хочете отримувати.", "🔒 Important club notifications": "🔒 Важливі сповіщення клубу", "Admin, group, payment and membership notifications. Always enabled.": "Сповіщення адміна, груп, оплат і членства. Завжди увімкнені.", "💬 Chat messages": "💬 Повідомлення чату", "Notifications about new club chat messages.": "Сповіщення про нові повідомлення в чаті клубу.", "Notify me about new club chat messages.": "Сповіщати мене про нові повідомлення в чаті клубу.", "⏰ Training reminders": "⏰ Нагадування про тренування", "Reminders before upcoming training sessions.": "Нагадування перед майбутніми тренуваннями.", "🥋 Training changes": "🥋 Зміни тренувань", "Changes, cancellations or new training sessions.": "Зміни, скасування або нові тренування.", "New, changed or cancelled training sessions.": "Нові, змінені або скасовані тренування.", "🏆 Competitions": "🏆 Змагання", "New competitions and competition updates.": "Нові змагання та оновлення.", "📰 News": "📰 Новини", "Notifications when new club news is published.": "Сповіщення про нові новини клубу.", "Notify me when new club news is published.": "Сповіщати мене про нові новини клубу.", "📄 Documents": "📄 Документи", "Notifications when new club documents are added.": "Сповіщення про нові документи клубу.", "Notify me when new club documents are added.": "Сповіщати мене про нові документи клубу.", "🎂 Birthday reminders": "🎂 Нагадування про дні народження", "Birthday and club celebration reminders.": "Нагадування про дні народження та клубні події.", "📱 Device alerts": "📱 Сповіщення на пристрої", "Allow this device to show browser/PWA alerts while CENTER MMA is active.": "Дозволити цьому пристрою показувати сповіщення браузера/PWA.", "ENABLE DEVICE ALERTS": "УВІМКНУТИ СПОВІЩЕННЯ", "SAVE NOTIFICATION SETTINGS": "ЗБЕРЕГТИ НАЛАШТУВАННЯ", "SAVE PREFERENCES": "ЗБЕРЕГТИ НАЛАШТУВАННЯ", "Notification History": "Історія сповіщень", "Your recent notifications.": "Ваші останні сповіщення.", "No notifications yet.": "Сповіщень поки немає.", "Loading notifications...": "Завантаження сповіщень...", "Loading news...": "Завантаження новин...", "Loading calendar...": "Завантаження календаря...", "Loading chat...": "Завантаження чату...", "Loading documents...": "Завантаження документів...", "Loading events...": "Завантаження подій...", "Loading attendance progress...": "Завантаження відвідуваності та прогресу...", "Loading competition record...": "Завантаження статистики змагань...", "Events": "Події", "Competition Record": "Статистика змагань", "Payment History": "Історія оплат", "Your membership payment history": "Історія оплат вашого членства", "Club Chat": "Чат клубу", "SEND": "НАДІСЛАТИ", "Progress": "Прогрес", "Attendance": "Відвідуваність", "Today": "Сьогодні", "Tomorrow": "Завтра", "Training": "Тренування", "Competition": "Змагання", "Birthday": "День народження", "Install CENTER MMA": "Встановити CENTER MMA", "Install the app on this device for a faster full-screen experience.": "Встановіть застосунок на цей пристрій для зручної роботи на весь екран.", "INSTALL APP": "ВСТАНОВИТИ", "No upcoming training": "Немає найближчих тренувань", "No future training session is currently scheduled.": "Наразі майбутніх тренувань не заплановано.", "No upcoming events": "Немає майбутніх подій", "No news yet": "Новин поки немає", "Your membership is not active.": "Ваше членство неактивне.", "Membership inactive": "Членство неактивне", "REQUEST PAYMENT CONFIRMATION": "НАДІСЛАТИ ЗАПИТ НА ПІДТВЕРДЖЕННЯ ОПЛАТИ", "Account created successfully.": "Акаунт успішно створено.", "Account created. Please check your email if confirmation is required.": "Акаунт створено. Перевірте електронну пошту, якщо потрібне підтвердження.", "Creating account...": "Створення акаунта...", "Logging in...": "Вхід...", "Login failed:": "Помилка входу:", "Registration failed:": "Помилка реєстрації:", "Please enter email and password.": "Введіть електронну пошту та пароль.", "Password must contain at least 6 characters.": "Пароль має містити щонайменше 6 символів.", "Profile saved successfully.": "Профіль успішно збережено.", "Saving...": "Збереження...", "Photo uploaded successfully.": "Фото успішно завантажено.", "Uploading photo...": "Завантаження фото...", "Payment confirmation request sent successfully.": "Запит на підтвердження оплати успішно надіслано.", "You already have a pending payment confirmation request.": "У вас уже є активний запит на підтвердження оплати.", "Sending request...": "Надсилання запиту...", "Payment approved": "Оплату підтверджено", "Payment confirmed and membership activated.": "Оплату підтверджено, членство активовано.", "Amount not confirmed": "Суму ще не підтверджено", "Confirm payment & activate membership": "Підтвердити оплату та активувати членство", "Amount (€)": "Сума (€)", "Monthly": "Місяць", "Half Year": "Пів року", "Year": "Рік", "Custom": "Індивідуально", "Valid from": "Дійсне від", "Admin note": "Примітка адміна", "Optional note": "Необов’язкова примітка", "CONFIRM & ACTIVATE": "ПІДТВЕРДИТИ ТА АКТИВУВАТИ", "REJECT": "ВІДХИЛИТИ", "Enter the amount actually received.": "Введіть фактично отриману суму.", "Valid from and Valid until are required.": "Потрібно вказати дати початку та завершення.", "Valid until cannot be before Valid from.": "Дата завершення не може бути раніше дати початку.", "Confirming payment...": "Підтвердження оплати...", "Pending payment requests": "Запити на підтвердження оплати", "No pending payment requests.": "Немає запитів на підтвердження оплати.", "Members": "Учасники", "Search name, email or member number...": "Пошук за ім’ям, e-mail або номером учасника...", "Member saved successfully.": "Дані учасника успішно збережено.", "ACCOUNT ACTIVE": "АКАУНТ АКТИВНИЙ", "ACCOUNT DEACTIVATED": "АКАУНТ ДЕАКТИВОВАНИЙ", "DEACTIVATE MEMBER": "ДЕАКТИВУВАТИ УЧАСНИКА", "REACTIVATE MEMBER": "ПОВТОРНО АКТИВУВАТИ", "Training Sessions": "Тренування", "Birthdays": "Дні народження", "Groups": "Групи", "Admin Panel": "Панель адміна", "CREATE COMPETITION": "СТВОРИТИ ЗМАГАННЯ", "CREATE GROUP": "СТВОРИТИ ГРУПУ", "CREATE NEWS": "СТВОРИТИ НОВИНУ", "CREATE TRAINING SESSION": "СТВОРИТИ ТРЕНУВАННЯ", "SAVE ATTENDANCE": "ЗБЕРЕГТИ ВІДВІДУВАНІСТЬ", "SEND NOTIFICATION": "НАДІСЛАТИ СПОВІЩЕННЯ", "DELETE": "ВИДАЛИТИ", "DELETE OLD NOTIFICATIONS NOW": "ВИДАЛИТИ СТАРІ СПОВІЩЕННЯ", "Notification settings saved.": "Налаштування сповіщень збережено.", "Device alerts are enabled on this device.": "Сповіщення на цьому пристрої увімкнені.", "Device alerts are not enabled yet.": "Сповіщення на цьому пристрої ще не увімкнені.", "Device alerts are blocked in browser settings.": "Сповіщення заблоковані в налаштуваннях браузера.", "This browser does not support notifications.": "Цей браузер не підтримує сповіщення.", "Excellent": "Відмінно", "Good": "Добре", "Improving": "Покращується", "Keep going": "Продовжуйте"}
  };

  // Extra strings used by Community profiles, membership documents and the
  // payment-history UI. These views contain some German source text, so keep
  // English mappings too instead of assuming English is always the source.
  Object.assign(dictionaries.de, {
    "Choose which of your sports information other active club members can see. This does not change your records.": "Wähle aus, welche Sportinformationen andere aktive Vereinsmitglieder sehen können. Deine Einträge werden dadurch nicht geändert.",
    "🏆 Competition statistics and past competitions": "🏆 Wettkampfstatistiken und vergangene Wettkämpfe",
    "Medals, fights, wins and recorded competition results.": "Medaillen, Kämpfe, Siege und erfasste Wettkampfergebnisse.",
    "📅 Upcoming competitions": "📅 Kommende Wettkämpfe",
    "Competitions where your participation is approved.": "Wettkämpfe, für die deine Teilnahme bestätigt ist.",
    "🥋 Attendance and progress": "🥋 Anwesenheit und Fortschritt",
    "Training attendance totals and percentage.": "Anzahl und Prozentsatz deiner Trainingsteilnahmen.",
    "SAVE VISIBILITY SETTINGS": "SICHTBARKEITSEINSTELLUNGEN SPEICHERN",
    "Competition Statistics": "Wettkampfstatistiken",
    "Competition Record": "Wettkampfstatistik",
    "Loading competition record...": "Wettkampfstatistik wird geladen...",
    "Finishes": "Vorzeitige Siege",
    "Win Rate": "Siegquote",
    "Finish Rate": "Quote vorzeitiger Siege",
    "Fights": "Kämpfe",
    "Wins": "Siege",
    "Fights:": "Kämpfe:",
    "Wins:": "Siege:",
    "Community Profile Visibility": "Sichtbarkeit des Community-Profils",
    "📄 Vertrag / Documents": "📄 Vertrag / Dokumente",
    "Document": "Dokument",
    "Zahlungsverlauf pro Mitglied": "Zahlungsverlauf pro Mitglied",
    "Offene Zahlungsanfragen": "Offene Zahlungsanfragen",
    "Nach Zahlungseingang bestätigst du die Anfrage. Der Zeitraum wird automatisch nach dem Zahlungsdatum berechnet.": "Nach Zahlungseingang bestätigst du die Anfrage. Der Zeitraum wird automatisch anhand des Zahlungsdatums berechnet.",
    "Monat: 60 €, Halbjahr: 330 €, Jahr: 600 €. Die Zeiträume richten sich nach dem Kalender.": "Monat: 60 €, Halbjahr: 330 €, Jahr: 600 €. Die Zeiträume richten sich nach dem Kalender.",
    "Zahlungsdatum": "Zahlungsdatum",
    "Zeitraum": "Zeitraum",
    "Betrag (€)": "Betrag (€)",
    "Mitgliedschaftszeitraum": "Mitgliedschaftszeitraum",
    "Von": "Von",
    "Bis": "Bis",
    "Zeitraum auswählen": "Zeitraum auswählen",
    "Monat – 60 €": "Monat – 60 €",
    "Halbjahr – 330 €": "Halbjahr – 330 €",
    "Jahr – 600 €": "Jahr – 600 €",
    "Other – Sonderfall": "Sonstiges – Sonderfall",
    "Gültiger Zeitraum": "Gültiger Zeitraum",
    "Admin-Notiz": "Admin-Notiz",
    "Zahlung bestätigen und Mitgliedschaft aktivieren": "Zahlung bestätigen und Mitgliedschaft aktivieren",
    "BESTÄTIGEN & AKTIVIEREN": "BESTÄTIGEN & AKTIVIEREN",
    "ABLEHNEN": "ABLEHNEN",
    "Keine offenen Zahlungsanfragen.": "Keine offenen Zahlungsanfragen.",
    "Angefragt:": "Angefragt:",
    "Mitgliedsnummer:": "Mitgliedsnummer:",
    "Noch keine bestätigten Zahlungen.": "Noch keine bestätigten Zahlungen.",
    "Zahlung(en)": "Zahlung(en)",
    "Keine Mitgliedsnummer": "Keine Mitgliedsnummer",
    "＋ Zahlung hinzufügen": "＋ Zahlung hinzufügen",
    "Bezahlt:": "Bezahlt:",
    "EINTRAG LÖSCHEN": "EINTRAG LÖSCHEN",
    "ÄNDERUNGEN SPEICHERN": "ÄNDERUNGEN SPEICHERN",
    "ZAHLUNG EINTRAGEN": "ZAHLUNG EINTRAGEN",
    "Lade Zahlungshistorie…": "Zahlungsverlauf wird geladen…",
    "Noch keine Zahlungen vorhanden.": "Noch keine Zahlungen vorhanden.",
    "Your CENTER MMA payment history": "Dein Zahlungsverlauf bei CENTER MMA",
    "Start date": "Startdatum",
    "End date": "Enddatum",
    "Membership type": "Mitgliedschaftstyp",
    "Price": "Preis",
    "Price (€)": "Preis (€)",
    "Status": "Status",
    "monthly": "Monatlich",
    "halfyear": "Halbjahr",
    "half_year": "Halbjahr",
    "yearly": "Jährlich",
    "year": "Jährlich",
    "other": "Sonstiges",
    "active": "Aktiv",
    "inactive": "Inaktiv",
    "Start date and end date are required.": "Start- und Enddatum sind erforderlich.",
    "End date cannot be before start date.": "Das Enddatum darf nicht vor dem Startdatum liegen.",
    "Other": "Sonstiges",
    "approved": "Genehmigt",
    "pending": "Ausstehend",
    "rejected": "Abgelehnt",
    "payment(s)": "Zahlung(en)",
    "Statut documents are no longer available.": "Statutdokumente sind nicht mehr verfügbar."
  });

  Object.assign(dictionaries.en, {
    "Monat": "Month",
    "Halbjahr": "Half year",
    "Jahr": "Year",
    "Other – Sonderfall": "Other – special case",
    "Offene Zahlungsanfragen": "Pending payment requests",
    "Nach Zahlungseingang bestätigst du die Anfrage. Der Zeitraum wird automatisch nach dem Zahlungsdatum berechnet.": "Confirm the request after payment arrives. The period is calculated automatically from the payment date.",
    "Zahlungsverlauf pro Mitglied": "Payment history by member",
    "Zahlungsdatum": "Payment date",
    "Zeitraum": "Period",
    "Betrag (€)": "Amount (€)",
    "Mitgliedschaftszeitraum": "Membership period",
    "Von": "Start date",
    "Bis": "End date",
    "Zeitraum auswählen": "Select a period",
    "Monat – 60 €": "Monthly – €60",
    "Halbjahr – 330 €": "Half year – €330",
    "Jahr – 600 €": "Year – €600",
    "Gültiger Zeitraum": "Validity period",
    "Admin-Notiz": "Admin note",
    "Zahlung bestätigen und Mitgliedschaft aktivieren": "Confirm payment and activate membership",
    "BESTÄTIGEN & AKTIVIEREN": "CONFIRM & ACTIVATE",
    "ABLEHNEN": "REJECT",
    "Keine offenen Zahlungsanfragen.": "No pending payment requests.",
    "Angefragt:": "Requested:",
    "Mitgliedsnummer:": "Member number:",
    "Noch keine bestätigten Zahlungen.": "No confirmed payments yet.",
    "Zahlung(en)": "payment(s)",
    "Keine Mitgliedsnummer": "No membership number",
    "＋ Zahlung hinzufügen": "＋ Add payment",
    "Bezahlt:": "Paid:",
    "EINTRAG LÖSCHEN": "DELETE ENTRY",
    "ÄNDERUNGEN SPEICHERN": "SAVE CHANGES",
    "ZAHLUNG EINTRAGEN": "ADD PAYMENT",
    "Lade Zahlungshistorie…": "Loading payment history…",
    "Noch keine Zahlungen vorhanden.": "No payments yet.",
    "Zahlung konnte nicht gespeichert werden:": "Could not save payment:",
    "Zahlung konnte nicht aktualisiert werden:": "Could not update payment:",
    "Mitgliedschaft konnte nicht gespeichert werden:": "Could not save membership:",
    "Mitgliedschaft konnte nicht aktualisiert werden:": "Could not update membership:",
    "Mitgliedschaftszeitraum konnte nicht gelöscht werden:": "Could not delete membership period:",
    "Mitgliedschaft ist aktiviert, Zahlungszeitraum konnte jedoch nicht gespeichert werden:": "Membership is active, but the payment period could not be saved:",
    "Your CENTER MMA payment history": "Your CENTER MMA payment history",
    "Membership type": "Membership type",
    "monthly": "Monthly",
    "halfyear": "Half year",
    "half_year": "Half year",
    "yearly": "Yearly",
    "year": "Year",
    "other": "Other",
    "Startdatum": "Start date",
    "Enddatum": "End date",
    "Preis": "Price",
    "Preis (€)": "Price (€)",
    "Status": "Status",
    "Monat": "Month",
    "Halbjahr": "Half year",
    "Jährlich": "Yearly",
    "Aktiv": "Active",
    "Inaktiv": "Inactive",
    "Start- und Enddatum sind erforderlich.": "Start and end dates are required.",
    "Das Enddatum darf nicht vor dem Startdatum liegen.": "End date cannot be before start date.",
    "Your membership is not active.": "Your membership is not active.",
    "Your member profile could not be loaded.": "Your member profile could not be loaded.",
    "Your CENTER MMA member profile has not been activated yet.": "Your CENTER MMA member profile has not been activated yet.",
    "Your member account has been deactivated by CENTER MMA.": "Your member account has been deactivated by CENTER MMA.",
    "Statut documents are no longer available.": "Statut documents are no longer available.",
    "Community Profile Visibility": "Community Profile Visibility",
    "📄 Vertrag / Documents": "📄 Contract / Documents",
    "Dokument": "Document",
    "Competition Statistics": "Competition Statistics",
    "Kämpfe": "Fights",
    "Siege": "Wins",
    "Kämpfe:": "Fights:",
    "Siege:": "Wins:",
    "Finishes": "Finishes",
    "Win Rate": "Win Rate",
    "Finish Rate": "Finish Rate"
  });

  Object.assign(dictionaries.uk, {
    "Community Profile Visibility": "Видимість профілю спільноти",
    "📄 Vertrag / Documents": "📄 Договір / Документи",
    "Document": "Документ",
    "Choose which of your sports information other active club members can see. This does not change your records.": "Оберіть, яку спортивну інформацію можуть бачити інші активні учасники клубу. Це не змінює ваші записи.",
    "🏆 Competition statistics and past competitions": "🏆 Статистика змагань і минулі змагання",
    "Medals, fights, wins and recorded competition results.": "Медалі, поєдинки, перемоги та збережені результати змагань.",
    "📅 Upcoming competitions": "📅 Майбутні змагання",
    "Competitions where your participation is approved.": "Змагання, участь у яких підтверджено.",
    "🥋 Attendance and progress": "🥋 Відвідуваність і прогрес",
    "Training attendance totals and percentage.": "Кількість і відсоток відвіданих тренувань.",
    "SAVE VISIBILITY SETTINGS": "ЗБЕРЕГТИ НАЛАШТУВАННЯ ВИДИМОСТІ",
    "Competition Statistics": "Статистика змагань",
    "Competition Record": "Статистика змагань",
    "Loading competition record...": "Завантаження статистики змагань...",
    "Finishes": "Дострокові перемоги",
    "Win Rate": "Відсоток перемог",
    "Finish Rate": "Відсоток дострокових перемог",
    "Fights": "Поєдинки",
    "Wins": "Перемоги",
    "Fights:": "Поєдинки:",
    "Wins:": "Перемоги:",
    "Zahlungsverlauf pro Mitglied": "Історія оплат за учасником",
    "Offene Zahlungsanfragen": "Очікують підтвердження оплати",
    "Nach Zahlungseingang bestätigst du die Anfrage. Der Zeitraum wird automatisch nach dem Zahlungsdatum berechnet.": "Після отримання оплати підтвердьте запит. Період автоматично розраховується від дати оплати.",
    "Monat: 60 €, Halbjahr: 330 €, Jahr: 600 €. Die Zeiträume richten sich nach dem Kalender.": "Місяць: 60 €, пів року: 330 €, рік: 600 €. Періоди відповідають календарним місяцям.",
    "Zahlungsdatum": "Дата оплати",
    "Zeitraum": "Період",
    "Betrag (€)": "Сума (€)",
    "Mitgliedschaftszeitraum": "Період членства",
    "Von": "Від",
    "Bis": "До",
    "Zeitraum auswählen": "Оберіть період",
    "Monat – 60 €": "Місяць – 60 €",
    "Halbjahr – 330 €": "Пів року – 330 €",
    "Jahr – 600 €": "Рік – 600 €",
    "Other – Sonderfall": "Інше — особливий випадок",
    "Gültiger Zeitraum": "Період дії",
    "Admin-Notiz": "Примітка адміністратора",
    "Zahlung bestätigen und Mitgliedschaft aktivieren": "Підтвердити оплату й активувати членство",
    "BESTÄTIGEN & AKTIVIEREN": "ПІДТВЕРДИТИ Й АКТИВУВАТИ",
    "ABLEHNEN": "ВІДХИЛИТИ",
    "Keine offenen Zahlungsanfragen.": "Немає запитів, що очікують підтвердження.",
    "Angefragt:": "Запит надіслано:",
    "Mitgliedsnummer:": "Номер учасника:",
    "Noch keine bestätigten Zahlungen.": "Підтверджених оплат поки немає.",
    "Zahlung(en)": "оплат(и)",
    "Keine Mitgliedsnummer": "Номер учасника відсутній",
    "＋ Zahlung hinzufügen": "＋ Додати оплату",
    "Bezahlt:": "Сплачено:",
    "EINTRAG LÖSCHEN": "ВИДАЛИТИ ЗАПИС",
    "ÄNDERUNGEN SPEICHERN": "ЗБЕРЕГТИ ЗМІНИ",
    "ZAHLUNG EINTRAGEN": "ДОДАТИ ОПЛАТУ",
    "Lade Zahlungshistorie…": "Завантаження історії оплат…",
    "Noch keine Zahlungen vorhanden.": "Оплат поки немає.",
    "Your CENTER MMA payment history": "Історія оплат CENTER MMA",
    "Membership type": "Тип членства",
    "Start date": "Дата початку",
    "End date": "Дата завершення",
    "Price": "Ціна",
    "Price (€)": "Ціна (€)",
    "Status": "Статус",
    "monthly": "Щомісяця",
    "halfyear": "Пів року",
    "half_year": "Пів року",
    "yearly": "Щороку",
    "year": "Рік",
    "other": "Інше",
    "active": "Активне",
    "inactive": "Неактивне",
    "Start date and end date are required.": "Потрібно вказати дати початку та завершення.",
    "End date cannot be before start date.": "Дата завершення не може бути раніше дати початку.",
    "Start date": "Дата початку",
    "End date": "Дата завершення",
    "Other": "Інше",
    "approved": "Підтверджено",
    "pending": "Очікує",
    "rejected": "Відхилено",
    "payment(s)": "оплат(и)",
    "Statut documents are no longer available.": "Документи Statut більше недоступні."
  });

  const prefixes = {
    en: {
      "Zahlung konnte nicht gespeichert werden:": "Could not save payment:",
      "Zahlung konnte nicht aktualisiert werden:": "Could not update payment:",
      "Mitgliedschaft konnte nicht gespeichert werden:": "Could not save membership:",
      "Mitgliedschaft konnte nicht aktualisiert werden:": "Could not update membership:",
      "Mitgliedschaftszeitraum konnte nicht gelöscht werden:": "Could not delete membership period:",
      "Zahlung gelöscht, Mitgliedschaftszeitraum konnte aber nicht gelöscht werden:": "Payment deleted, but the membership period could not be deleted:",
      "Mitgliedschaft ist aktiviert, Zahlungszeitraum konnte jedoch nicht gespeichert werden:": "Membership is active, but the payment period could not be saved:"
    },
    de: {
      "Login failed:": "Anmeldung fehlgeschlagen:",
      "Registration failed:": "Registrierung fehlgeschlagen:",
      "Fights:": "Kämpfe:",
      "Wins:": "Siege:",
      "• Wins:": "• Siege:",
      "• Finishes:": "• Vorzeitige Siege:",
      "· Wins:": "· Siege:",
      "· Finishes:": "· Vorzeitige Siege:",
      "Could not load payment history:": "Zahlungsverlauf konnte nicht geladen werden:",
      "Could not load payment history:": "Zahlungsverlauf konnte nicht geladen werden:",
      "Could not save payment:": "Zahlung konnte nicht gespeichert werden:",
      "Could not update payment:": "Zahlung konnte nicht aktualisiert werden:",
      "Could not save membership:": "Mitgliedschaft konnte nicht gespeichert werden:",
      "Could not update membership:": "Mitgliedschaft konnte nicht aktualisiert werden:",
      "Mitgliedschaftszeitraum konnte nicht gelöscht werden:": "Mitgliedschaftszeitraum konnte nicht gelöscht werden:",
      "Requested:": "Angefordert:",
      "Member number:": "Mitgliedsnummer:",
      "Total trainings": "Trainings gesamt",
      "Attended": "Teilgenommen",
      "Missed": "Verpasst"
    },
    uk: {
      "Login failed:": "Помилка входу:",
      "Registration failed:": "Помилка реєстрації:",
      "Fights:": "Поєдинки:",
      "Wins:": "Перемоги:",
      "• Fights:": "• Поєдинки:",
      "• Wins:": "• Перемоги:",
      "• Finishes:": "• Дострокові перемоги:",
      "· Fights:": "· Поєдинки:",
      "· Wins:": "· Перемоги:",
      "· Finishes:": "· Дострокові перемоги:",
      "Zahlungsverlauf pro Mitglied": "Історія оплат за учасником",
      "Offene Zahlungsanfragen": "Очікують підтвердження оплати",
      "Could not load payment history:": "Не вдалося завантажити історію оплат:",
      "Zahlung konnte nicht gespeichert werden:": "Не вдалося зберегти оплату:",
      "Zahlung konnte nicht aktualisiert werden:": "Не вдалося оновити оплату:",
      "Mitgliedschaft konnte nicht gespeichert werden:": "Не вдалося зберегти членство:",
      "Mitgliedschaft konnte nicht aktualisiert werden:": "Не вдалося оновити членство:",
      "Mitgliedschaftszeitraum konnte nicht gelöscht werden:": "Не вдалося видалити період членства:",
      "Zahlung gelöscht, Mitgliedschaftszeitraum konnte aber nicht gelöscht werden:": "Оплату видалено, але не вдалося видалити період членства:",
      "Requested:": "Запит:",
      "Requested:": "Запит:",
      "Member number:": "Номер учасника:",
      "Total trainings": "Усього тренувань",
      "Attended": "Відвідано",
      "Missed": "Пропущено"
    }
  };

  Object.assign(dictionaries.de, {
    "Athlete tools": "Athletenbereich",
    "Track daily wellbeing and training in one journal, or browse the training library.": "Verfolge dein tägliches Wohlbefinden und Training in einem Journal oder entdecke die Trainingsbibliothek.",
    "📔 ATHLETE JOURNAL": "📔 SPORTLER-JOURNAL",
    "📚 TRAINING LIBRARY": "📚 TRAININGSBIBLIOTHEK",
    "Athlete Journal": "Sportler-Journal",
    "Training Library": "Trainingsbibliothek",
    "Saved to your account and visible only to you. Your journal is not shared with coaches or admins.": "Dein Journal wird in deinem Konto gespeichert und ist nur für dich sichtbar. Trainer und Administratoren haben keinen Zugriff.",
    "Day": "Tag",
    "Sleep (hours)": "Schlaf (Stunden)",
    "Sleep quality (1–10)": "Schlafqualität (1–10)",
    "Stress outside sport (1–10)": "Stress außerhalb des Sports (1–10)",
    "Work, school, family, travel…": "Arbeit, Schule, Familie, Reisen …",
    "Stress source or note (optional)": "Stressquelle oder Notiz (optional)",
    "Weight (kg)": "Gewicht (kg)",
    "Meals and food notes": "Mahlzeiten und Ernährungsnotizen",
    "Meals or notes about what you ate": "Mahlzeiten oder Notizen zu deiner Ernährung",
    "Water (litres, optional)": "Wasser (Liter, optional)",
    "Training sessions": "Trainingseinheiten",
    "Add each session separately. You can link it to a class in the calendar.": "Füge jede Einheit einzeln hinzu. Du kannst sie mit einem Training im Kalender verknüpfen.",
    "＋ ADD TRAINING SESSION": "＋ TRAININGSEINHEIT HINZUFÜGEN",
    "Pain, restriction or personal note (optional)": "Schmerzen, Einschränkungen oder persönliche Notiz (optional)",
    "Overall day score (1–10)": "Tagesbewertung (1–10)",
    "1 = very difficult day · 10 = felt excellent. Your own optional rating.": "1 = sehr schwieriger Tag · 10 = ausgezeichnetes Gefühl. Deine Bewertung ist freiwillig.",
    "SAVE MY ENTRY": "EINTRAG SPEICHERN",
    "Day scores": "Tagesbewertungen",
    "Week": "Woche",
    "Month": "Monat",
    "3 months": "3 Monate",
    "Year": "Jahr",
    "Season": "Saison",
    "Add day scores to see your history.": "Trage Tagesbewertungen ein, um deinen Verlauf zu sehen.",
    "Competition preparation": "Wettkampfvorbereitung",
    "Your daily entries can be linked to a competition you have entered. Choose it here to view your journal in that preparation context.": "Du kannst deine täglichen Einträge mit einem Wettkampf verknüpfen, für den du angemeldet bist. Wähle ihn hier aus, um dein Journal während der Vorbereitung anzuzeigen.",
    "My competition": "Mein Wettkampf",
    "No competition selected": "Kein Wettkampf ausgewählt",
    "Training session": "Trainingseinheit",
    "Link to calendar training": "Mit Kalendertraining verknüpfen",
    "Personal / other session": "Eigenes / anderes Training",
    "Club training": "Vereinstraining",
    "Session name": "Name der Einheit",
    "e.g. MMA sparring": "z. B. MMA-Sparring",
    "Type": "Art",
    "Technique": "Technik",
    "Striking": "Schlagtraining",
    "Wrestling / grappling": "Ringen / Grappling",
    "Sparring": "Sparring",
    "Strength & conditioning": "Kraft & Kondition",
    "Recovery": "Regeneration",
    "Other": "Sonstiges",
    "Duration (min)": "Dauer (Min.)",
    "Rounds": "Runden",
    "Effort (1–10)": "Anstrengung (1–10)",
    "How did you feel before? (1–10)": "Wie hast du dich davor gefühlt? (1–10)",
    "How did you feel after? (1–10)": "Wie hast du dich danach gefühlt? (1–10)",
    "Session notes": "Notizen zur Einheit",
    "Loading training entries…": "Trainingseinträge werden geladen …",
    "Loading library…": "Bibliothek wird geladen …",
    "Opening article…": "Artikel wird geöffnet …",
    "Read articles and guides": "Artikel und Anleitungen lesen",
    "Articles and guides for reading. Library content does not create calendar events or journal entries.": "Artikel und Anleitungen zum Lesen. Bibliotheksinhalte erzeugen keine Kalendereinträge oder Journaleinträge.",
    "No library categories are available.": "Keine Bibliothekskategorien verfügbar.",
    "← ALL CATEGORIES": "← ALLE KATEGORIEN",
    "PDF document": "PDF-Dokument",
    "Illustrated booklet": "Illustriertes Heft",
    "Article": "Artikel",
    "No published materials in this category yet.": "In dieser Kategorie gibt es noch keine veröffentlichten Inhalte.",
    "← BACK TO ARTICLES": "← ZURÜCK ZU DEN ARTIKELN",
    "Open or download PDF": "PDF öffnen oder herunterladen",
    "PDF is not attached.": "Es ist keine PDF-Datei angehängt.",
    "This article has no pages yet.": "Dieser Artikel hat noch keine Seiten.",
    "← PREVIOUS": "← ZURÜCK",
    "NEXT →": "WEITER →",
    "Create reading material for members. Articles can contain pages and photos; PDF files are displayed in the reader.": "Erstelle Lesematerial für Mitglieder. Artikel können Seiten und Fotos enthalten; PDFs werden im Lesebereich angezeigt.",
    "Category": "Kategorie",
    "SHOW ARTICLES": "ARTIKEL ANZEIGEN",
    "＋ CREATE ARTICLE": "＋ ARTIKEL ERSTELLEN",
    "Loading articles…": "Artikel werden geladen …",
    "No articles in this category yet.": "In dieser Kategorie gibt es noch keine Artikel.",
    "EDIT": "BEARBEITEN",
    "Edit material": "Material bearbeiten",
    "New material": "Neues Material",
    "Title": "Titel",
    "Short description": "Kurzbeschreibung",
    "Format": "Format",
    "Multi-page booklet": "Mehrseitiges Heft",
    "Publication status": "Veröffentlichungsstatus",
    "Draft": "Entwurf",
    "Published": "Veröffentlicht",
    "Archived": "Archiviert",
    "Cover photo (optional)": "Titelbild (optional)",
    "PDF file (for PDF format)": "PDF-Datei (für das PDF-Format)",
    "＋ ADD PAGE": "＋ SEITE HINZUFÜGEN",
    "SAVE MATERIAL": "MATERIAL SPEICHERN",
    "CANCEL": "ABBRECHEN",
    "Page": "Seite",
    "REMOVE PAGE": "SEITE ENTFERNEN",
    "Page heading": "Seitenüberschrift",
    "Text": "Text",
    "Add photos (JPG, PNG or WebP; up to 20 MB each)": "Fotos hinzufügen (JPG, PNG oder WebP; jeweils bis zu 20 MB)",
    "Existing photos are kept when you edit this page.": "Vorhandene Fotos bleiben beim Bearbeiten dieser Seite erhalten.",
    "Material saved.": "Material gespeichert.",
    "Choose a date first.": "Wähle zuerst ein Datum aus.",
    "Saving to your account…": "Wird in deinem Konto gespeichert …",
    "Save My Entry": "Eintrag speichern",
    "OPEN MY JOURNAL FOR THIS DAY": "MEIN JOURNAL FÜR DIESEN TAG ÖFFNEN",
    "MY PREPARATION & JOURNAL": "MEINE WETTKAMPFVORBEREITUNG & JOURNAL",
    "Library is not ready yet. Apply the library database setup first.": "Die Bibliothek ist noch nicht eingerichtet. Bitte wende dich an den Administrator.",
    "Library database is not ready. Apply training-library-setup.sql first.": "Die Bibliotheksdatenbank ist noch nicht eingerichtet. Bitte wende dich an den Administrator.",
    "Journal storage is not ready. Apply journal-setup.sql first.": "Der Journalspeicher ist noch nicht eingerichtet. Bitte wende dich an den Administrator."
  });

  Object.assign(dictionaries.uk, {
    "Athlete tools": "Розділ спортсмена",
    "Track daily wellbeing and training in one journal, or browse the training library.": "Відстежуйте щоденне самопочуття й тренування в одному журналі або переглядайте тренувальну бібліотеку.",
    "📔 ATHLETE JOURNAL": "📔 ЖУРНАЛ СПОРТСМЕНА",
    "📚 TRAINING LIBRARY": "📚 ТРЕНУВАЛЬНА БІБЛІОТЕКА",
    "Athlete Journal": "Журнал спортсмена",
    "Training Library": "Тренувальна бібліотека",
    "Saved to your account and visible only to you. Your journal is not shared with coaches or admins.": "Записи зберігаються у вашому обліковому записі й доступні лише вам. Тренери та адміністратори їх не бачать.",
    "Day": "День",
    "Sleep (hours)": "Сон (години)",
    "Sleep quality (1–10)": "Якість сну (1–10)",
    "Stress outside sport (1–10)": "Стрес поза спортом (1–10)",
    "Work, school, family, travel…": "Робота, навчання, родина, подорожі…",
    "Stress source or note (optional)": "Причина стресу або примітка (необов’язково)",
    "Weight (kg)": "Вага (кг)",
    "Meals and food notes": "Харчування та нотатки",
    "Meals or notes about what you ate": "Страви або нотатки про те, що ви їли",
    "Water (litres, optional)": "Вода (літри, необов’язково)",
    "Training sessions": "Тренування",
    "Add each session separately. You can link it to a class in the calendar.": "Додавайте кожне тренування окремо. Його можна пов’язати із заняттям у календарі.",
    "＋ ADD TRAINING SESSION": "＋ ДОДАТИ ТРЕНУВАННЯ",
    "Pain, restriction or personal note (optional)": "Біль, обмеження або особиста примітка (необов’язково)",
    "Overall day score (1–10)": "Загальна оцінка дня (1–10)",
    "1 = very difficult day · 10 = felt excellent. Your own optional rating.": "1 = дуже важкий день · 10 = чудове самопочуття. Оцінка необов’язкова.",
    "SAVE MY ENTRY": "ЗБЕРЕГТИ ЗАПИС",
    "Day scores": "Оцінки за дні",
    "Week": "Тиждень",
    "Month": "Місяць",
    "3 months": "3 місяці",
    "Year": "Рік",
    "Season": "Сезон",
    "Add day scores to see your history.": "Додавайте оцінки, щоб переглядати історію.",
    "Competition preparation": "Підготовка до змагань",
    "Your daily entries can be linked to a competition you have entered. Choose it here to view your journal in that preparation context.": "Щоденні записи можна пов’язати зі змаганням, на яке ви зареєструвалися. Виберіть його, щоб переглядати журнал у контексті підготовки.",
    "My competition": "Мої змагання",
    "No competition selected": "Змагання не вибрано",
    "Training session": "Тренування",
    "Link to calendar training": "Пов’язати з тренуванням у календарі",
    "Personal / other session": "Особисте / інше тренування",
    "Club training": "Клубне тренування",
    "Session name": "Назва тренування",
    "e.g. MMA sparring": "наприклад, спаринг з ММА",
    "Type": "Тип",
    "Technique": "Техніка",
    "Striking": "Ударна техніка",
    "Wrestling / grappling": "Боротьба / греплінг",
    "Sparring": "Спаринг",
    "Strength & conditioning": "Силова підготовка та витривалість",
    "Recovery": "Відновлення",
    "Other": "Інше",
    "Duration (min)": "Тривалість (хв)",
    "Rounds": "Раунди",
    "Effort (1–10)": "Інтенсивність (1–10)",
    "How did you feel before? (1–10)": "Як ви почувалися до тренування? (1–10)",
    "How did you feel after? (1–10)": "Як ви почувалися після тренування? (1–10)",
    "Session notes": "Нотатки про тренування",
    "Loading training entries…": "Завантаження тренувань…",
    "Loading library…": "Завантаження бібліотеки…",
    "Opening article…": "Відкриття статті…",
    "Read articles and guides": "Читайте статті та посібники",
    "Articles and guides for reading. Library content does not create calendar events or journal entries.": "Статті та посібники для ознайомлення. Матеріали бібліотеки не створюють подій у календарі чи записів у журналі.",
    "No library categories are available.": "Немає доступних категорій бібліотеки.",
    "← ALL CATEGORIES": "← УСІ КАТЕГОРІЇ",
    "PDF document": "Документ PDF",
    "Illustrated booklet": "Ілюстрований посібник",
    "Article": "Стаття",
    "No published materials in this category yet.": "У цій категорії ще немає опублікованих матеріалів.",
    "← BACK TO ARTICLES": "← НАЗАД ДО СТАТЕЙ",
    "Open or download PDF": "Відкрити або завантажити PDF",
    "PDF is not attached.": "PDF-файл не додано.",
    "This article has no pages yet.": "У цієї статті ще немає сторінок.",
    "← PREVIOUS": "← НАЗАД",
    "NEXT →": "ДАЛІ →",
    "Create reading material for members. Articles can contain pages and photos; PDF files are displayed in the reader.": "Створюйте матеріали для читання учасниками. Статті можуть містити сторінки й фото, а PDF відкриваються у переглядачі.",
    "Category": "Категорія",
    "SHOW ARTICLES": "ПОКАЗАТИ СТАТТІ",
    "＋ CREATE ARTICLE": "＋ СТВОРИТИ СТАТТЮ",
    "Loading articles…": "Завантаження статей…",
    "No articles in this category yet.": "У цій категорії ще немає статей.",
    "EDIT": "РЕДАГУВАТИ",
    "Edit material": "Редагувати матеріал",
    "New material": "Новий матеріал",
    "Title": "Назва",
    "Short description": "Короткий опис",
    "Format": "Формат",
    "Multi-page booklet": "Багатосторінковий посібник",
    "Publication status": "Статус публікації",
    "Draft": "Чернетка",
    "Published": "Опубліковано",
    "Archived": "Архівовано",
    "Cover photo (optional)": "Обкладинка (необов’язково)",
    "PDF file (for PDF format)": "PDF-файл (для формату PDF)",
    "＋ ADD PAGE": "＋ ДОДАТИ СТОРІНКУ",
    "SAVE MATERIAL": "ЗБЕРЕГТИ МАТЕРІАЛ",
    "CANCEL": "СКАСУВАТИ",
    "Page": "Сторінка",
    "REMOVE PAGE": "ВИДАЛИТИ СТОРІНКУ",
    "Page heading": "Заголовок сторінки",
    "Text": "Текст",
    "Add photos (JPG, PNG or WebP; up to 20 MB each)": "Додайте фото (JPG, PNG або WebP; до 20 МБ кожне)",
    "Existing photos are kept when you edit this page.": "Під час редагування цієї сторінки наявні фото зберігаються.",
    "Material saved.": "Матеріал збережено.",
    "Choose a date first.": "Спочатку виберіть дату.",
    "Saving to your account…": "Збереження у вашому обліковому записі…",
    "Save My Entry": "Зберегти запис",
    "OPEN MY JOURNAL FOR THIS DAY": "ВІДКРИТИ МІЙ ЖУРНАЛ ЗА ЦЕЙ ДЕНЬ",
    "MY PREPARATION & JOURNAL": "МОЯ ПІДГОТОВКА ДО ЗМАГАНЬ І ЖУРНАЛ",
    "Library is not ready yet. Apply the library database setup first.": "Бібліотеку ще не налаштовано. Зверніться до адміністратора.",
    "Library database is not ready. Apply training-library-setup.sql first.": "Базу даних бібліотеки ще не налаштовано. Зверніться до адміністратора.",
    "Journal storage is not ready. Apply journal-setup.sql first.": "Сховище журналу ще не налаштовано. Зверніться до адміністратора."
  });

  Object.assign(dictionaries.de, {
    "Saved to your account.": "In deinem Konto gespeichert.",
    "Loading scores…": "Bewertungen werden geladen …",
    "article": "Artikel",
    "booklet": "Heft",
    "pdf": "PDF",
    "draft": "Entwurf",
    "published": "Veröffentlicht",
    "archived": "Archiviert",
    "Each file must be 20 MB or smaller.": "Jede Datei darf höchstens 20 MB groß sein."
  });
  Object.assign(dictionaries.uk, {
    "Saved to your account.": "Збережено у вашому обліковому записі.",
    "Loading scores…": "Завантаження оцінок…",
    "article": "Стаття",
    "booklet": "Посібник",
    "pdf": "PDF",
    "draft": "Чернетка",
    "published": "Опубліковано",
    "archived": "Архівовано",
    "Each file must be 20 MB or smaller.": "Розмір кожного файла не має перевищувати 20 МБ."
  });
  Object.assign(prefixes.de, {
    "Page ": "Seite ",
    "Could not load training entries:": "Trainingseinträge konnten nicht geladen werden:",
    "Could not save your journal:": "Dein Journal konnte nicht gespeichert werden:",
    "Could not load scores:": "Bewertungen konnten nicht geladen werden:",
    "Could not open PDF:": "PDF konnte nicht geöffnet werden:",
    "Could not load an image:": "Bild konnte nicht geladen werden:",
    "Journal storage is not ready. Apply journal-setup.sql first.": "Der Journalspeicher ist noch nicht eingerichtet.",
    "Library is not ready yet. Apply the library database setup first.": "Die Bibliothek ist noch nicht eingerichtet.",
    "Library database is not ready. Apply training-library-setup.sql first.": "Die Bibliotheksdatenbank ist noch nicht eingerichtet.",
    "Could not save the material:": "Material konnte nicht gespeichert werden:",
    "Could not list files:": "Dateien konnten nicht aufgelistet werden:",
    "Could not delete uploaded files:": "Hochgeladene Dateien konnten nicht gelöscht werden:",
    "Could not delete article:": "Artikel konnte nicht gelöscht werden:"
  });
  Object.assign(prefixes.uk, {
    "Page ": "Сторінка ",
    "Could not load training entries:": "Не вдалося завантажити тренування:",
    "Could not save your journal:": "Не вдалося зберегти журнал:",
    "Could not load scores:": "Не вдалося завантажити оцінки:",
    "Could not open PDF:": "Не вдалося відкрити PDF:",
    "Could not load an image:": "Не вдалося завантажити зображення:",
    "Journal storage is not ready. Apply journal-setup.sql first.": "Сховище журналу ще не налаштовано.",
    "Library is not ready yet. Apply the library database setup first.": "Бібліотеку ще не налаштовано.",
    "Library database is not ready. Apply training-library-setup.sql first.": "Базу даних бібліотеки ще не налаштовано.",
    "Could not save the material:": "Не вдалося зберегти матеріал:",
    "Could not list files:": "Не вдалося отримати список файлів:",
    "Could not delete uploaded files:": "Не вдалося видалити завантажені файли:",
    "Could not delete article:": "Не вдалося видалити статтю:"
  });

  Object.assign(dictionaries.de, {
    "Forgot password?": "Passwort vergessen?",
    "Reset password": "Passwort zurücksetzen",
    "Enter the email address currently used as your login. We will send a password reset link if an account matches.": "Gib die E-Mail-Adresse ein, die du für die Anmeldung verwendest. Wenn ein Konto dazu passt, senden wir dir einen Link zum Zurücksetzen des Passworts.",
    "Email / login": "E-Mail / Benutzername",
    "SEND RESET LINK": "LINK ZUM ZURÜCKSETZEN SENDEN",
    "Back to login": "Zurück zur Anmeldung",
    "Choose a new password": "Neues Passwort festlegen",
    "Enter your new password twice to finish account recovery.": "Gib dein neues Passwort zweimal ein, um die Wiederherstellung abzuschließen.",
    "New password": "Neues Passwort",
    "Confirm new password": "Neues Passwort bestätigen",
    "SAVE NEW PASSWORD": "NEUES PASSWORT SPEICHERN",
    "Open this page in Safari.": "Öffne diese Seite in Safari.",
    "Tap": "Tippe auf",
    "Share / Teilen": "Teilen",
    "(the square with the arrow).": "(das Quadrat mit dem Pfeil).",
    "Choose": "Wähle",
    "Add to Home Screen / Zum Home-Bildschirm": "Zum Home-Bildschirm hinzufügen",
    "Add / Hinzufügen": "Hinzufügen",
    "OPEN PANEL": "BEREICH ÖFFNEN",
    "News": "News",
    "Community": "Community",
    "My Messages": "Meine Nachrichten",
    "Loading athletes...": "Athleten werden geladen …",
    "← COMMUNITY": "← COMMUNITY",
    "Athlete": "Athlet",
    "Loading athlete...": "Athlet wird geladen …",
    "Loading messages...": "Nachrichten werden geladen …",
    "← MESSAGES": "← NACHRICHTEN",
    "Private Chat": "Privater Chat",
    "Loading conversation...": "Unterhaltung wird geladen …",
    "Shop": "Shop",
    "CENTER MMA merchandise": "CENTER MMA Fanartikel",
    "🛒 CART": "🛒 WARENKORB",
    "Cash payment only. Place your order in the app and pay in cash when you receive it from CENTER MMA.": "Nur Barzahlung. Gib deine Bestellung in der App auf und bezahle bar, wenn du sie von CENTER MMA erhältst.",
    "Loading products...": "Produkte werden geladen …",
    "Your Cart": "Dein Warenkorb",
    "← SHOP": "← SHOP",
    "PLACE CASH ORDER": "BARZAHLUNGSBESTELLUNG AUFGEBEN",
    "My Orders": "Meine Bestellungen",
    "Your current and previous shop orders.": "Deine aktuellen und vergangenen Bestellungen.",
    "Vertrag": "Vertrag",
    "Notifications about new club and private chat messages.": "Benachrichtigungen über neue Vereins- und private Chatnachrichten.",
    "⏰ Training reminders (2 hours before)": "⏰ Trainingserinnerungen (2 Stunden vorher)",
    "📰 News": "📰 News",
    "CENTER MMA community card": "CENTER MMA Community-Karte",
    "Choose which hall information appears on your CENTER MMA card in Community.": "Wähle aus, welche Halleninformationen auf deiner CENTER MMA-Karte in der Community erscheinen.",
    "🏆 Hall achievements and results": "🏆 Erfolge und Ergebnisse",
    "📊 Training attendance chart": "📊 Trainingsanwesenheit",
    "🥇 Top three athletes": "🥇 Die drei besten Athleten",
    "Loading document...": "Dokument wird geladen …",
    "CLUB CHAT": "VEREINSCHAT",
    "All club members can see your messages. Please communicate respectfully and behave appropriately.": "Alle Vereinsmitglieder können deine Nachrichten sehen. Bitte kommuniziere respektvoll und verhalte dich angemessen.",
    "Notify me about new club and private chat messages.": "Benachrichtige mich über neue Vereins- und private Chatnachrichten.",
    "📱 Device notifications": "📱 Gerätebenachrichtigungen",
    "Receive push notifications on this device, even when CENTER MMA is closed.": "Erhalte Push-Benachrichtigungen auf diesem Gerät, auch wenn CENTER MMA geschlossen ist.",
    "ENABLE PUSH NOTIFICATIONS": "PUSH-BENACHRICHTIGUNGEN AKTIVIEREN",
    "Events": "Veranstaltungen",
    "Enable Push Notifications": "Push-Benachrichtigungen aktivieren",
    "Could not save your journal:": "Dein Journal konnte nicht gespeichert werden:",
    "Could not load scores:": "Bewertungen konnten nicht geladen werden:",
    "Could not load training entries:": "Trainingseinträge konnten nicht geladen werden:",
    "Could not open PDF:": "PDF konnte nicht geöffnet werden:",
    "Could not load an image:": "Bild konnte nicht geladen werden:",
    "CENTER MMA member": "CENTER MMA Mitglied",
    "Loading groups...": "Gruppen werden geladen …",
    "Home": "Startseite",
    "© SPORTUNION Center MMA. All rights reserved.": "© SPORTUNION Center MMA. Alle Rechte vorbehalten.",
    "Enter a title and choose a category.": "Gib einen Titel ein und wähle eine Kategorie.",
    "Choose the PDF file.": "Wähle die PDF-Datei aus.",
    "Delete this material and its uploaded files?": "Dieses Material und die hochgeladenen Dateien löschen?",
    "Saving…": "Wird gespeichert …",
    "Benutzername / Login": "E-Mail-Adresse / Login",
    "SPORTUNION Center MMA. All rights reserved.": "SPORTUNION Center MMA. Alle Rechte vorbehalten."
  });
  Object.assign(dictionaries.uk, {
    "Forgot password?": "Забули пароль?",
    "Reset password": "Скинути пароль",
    "Enter the email address currently used as your login. We will send a password reset link if an account matches.": "Введіть email, який використовуєте для входу. Якщо обліковий запис існує, ми надішлемо посилання для скидання пароля.",
    "Email / login": "Електронна пошта / логін",
    "SEND RESET LINK": "НАДІСЛАТИ ПОСИЛАННЯ ДЛЯ СКИДАННЯ",
    "Back to login": "Назад до входу",
    "Choose a new password": "Створіть новий пароль",
    "Enter your new password twice to finish account recovery.": "Введіть новий пароль двічі, щоб завершити відновлення облікового запису.",
    "New password": "Новий пароль",
    "Confirm new password": "Підтвердьте новий пароль",
    "SAVE NEW PASSWORD": "ЗБЕРЕГТИ НОВИЙ ПАРОЛЬ",
    "Open this page in Safari.": "Відкрийте цю сторінку в Safari.",
    "Tap": "Натисніть",
    "Share / Teilen": "Поділитися",
    "(the square with the arrow).": "(квадрат зі стрілкою).",
    "Choose": "Виберіть",
    "Add to Home Screen / Zum Home-Bildschirm": "Додати на головний екран",
    "Add / Hinzufügen": "Додати",
    "Nächster Termin": "Наступна подія",
    "OPEN PANEL": "ВІДКРИТИ ПАНЕЛЬ",
    "News": "Новини",
    "📰 News": "📰 Новини",
    "Community": "Спільнота",
    "My Messages": "Мої повідомлення",
    "Loading athletes...": "Завантаження спортсменів…",
    "← COMMUNITY": "← СПІЛЬНОТА",
    "Athlete": "Спортсмен",
    "Loading athlete...": "Завантаження профілю спортсмена…",
    "Loading messages...": "Завантаження повідомлень…",
    "← MESSAGES": "← ПОВІДОМЛЕННЯ",
    "Private Chat": "Особистий чат",
    "Loading conversation...": "Завантаження розмови…",
    "Shop": "Магазин",
    "CENTER MMA merchandise": "Товари CENTER MMA",
    "🛒 CART": "🛒 КОШИК",
    "Cash payment only. Place your order in the app and pay in cash when you receive it from CENTER MMA.": "Оплата лише готівкою. Оформіть замовлення в застосунку та сплатіть готівкою під час отримання від CENTER MMA.",
    "Loading products...": "Завантаження товарів…",
    "Your Cart": "Ваш кошик",
    "← SHOP": "← МАГАЗИН",
    "PLACE CASH ORDER": "ОФОРМИТИ ЗАМОВЛЕННЯ З ОПЛАТОЮ ГОТІВКОЮ",
    "My Orders": "Мої замовлення",
    "Your current and previous shop orders.": "Ваші поточні та попередні замовлення.",
    "Vertrag": "Договір",
    "Notifications about new club and private chat messages.": "Сповіщення про нові повідомлення клубу та особистого чату.",
    "⏰ Training reminders (2 hours before)": "⏰ Нагадування про тренування (за 2 години)",
    "CENTER MMA community card": "Картка CENTER MMA у спільноті",
    "Choose which hall information appears on your CENTER MMA card in Community.": "Виберіть, які відомості про зал показувати у вашій картці CENTER MMA у спільноті.",
    "🏆 Hall achievements and results": "🏆 Досягнення та результати",
    "📊 Training attendance chart": "📊 Відвідування тренувань",
    "🥇 Top three athletes": "🥇 Трійка найкращих спортсменів",
    "Loading document...": "Завантаження документа…",
    "CLUB CHAT": "ЧАТ КЛУБУ",
    "All club members can see your messages. Please communicate respectfully and behave appropriately.": "Усі учасники клубу бачать ваші повідомлення. Будь ласка, спілкуйтеся ввічливо та поводьтеся відповідально.",
    "Notify me about new club and private chat messages.": "Сповіщати мене про нові повідомлення клубу та особистого чату.",
    "📱 Device notifications": "📱 Сповіщення на пристрої",
    "Receive push notifications on this device, even when CENTER MMA is closed.": "Отримуйте push-сповіщення на цьому пристрої, навіть коли CENTER MMA закрито.",
    "ENABLE PUSH NOTIFICATIONS": "УВІМКНУТИ PUSH-СПОВІЩЕННЯ",
    "Events": "Події",
    "Enable Push Notifications": "Увімкнути push-сповіщення",
    "Could not save your journal:": "Не вдалося зберегти журнал:",
    "Could not load scores:": "Не вдалося завантажити оцінки:",
    "Could not load training entries:": "Не вдалося завантажити тренування:",
    "Could not open PDF:": "Не вдалося відкрити PDF:",
    "Could not load an image:": "Не вдалося завантажити зображення:",
    "CENTER MMA member": "Учасник CENTER MMA",
    "Loading groups...": "Завантаження груп…",
    "© SPORTUNION Center MMA. All rights reserved.": "© SPORTUNION Center MMA. Усі права захищено.",
    "Enter a title and choose a category.": "Введіть назву та виберіть категорію.",
    "Choose the PDF file.": "Виберіть PDF-файл.",
    "Delete this material and its uploaded files?": "Видалити цей матеріал і завантажені файли?",
    "Saving…": "Збереження…",
    "Benutzername / Login": "Електронна пошта / логін",
    "SPORTUNION Center MMA. All rights reserved.": "SPORTUNION Center MMA. Усі права захищено."
  });

  const originals = new WeakMap();
  const attrs = new WeakMap();

  window.getLocale = function () {
    if (window.currentLanguage === "uk") return "uk-UA";
    if (window.currentLanguage === "de") return "de-AT";
    return "en-GB";
  };

  window.translatePhrase = function (value) {
    if (value === null || value === undefined) return value;
    const source = String(value);
    const dict = dictionaries[window.currentLanguage] || {};
    if (Object.prototype.hasOwnProperty.call(dict, source)) {
      return dict[source];
    }

    const paymentCount = source.match(/^(\d+) Zahlung\(en\)$/);
    if (paymentCount && Object.prototype.hasOwnProperty.call(dict, "Zahlung(en)")) {
      return paymentCount[1] + " " + dict["Zahlung(en)"];
    }

    const pref = prefixes[window.currentLanguage] || {};
    for (const [key, translated] of Object.entries(pref)) {
      if (source.startsWith(key)) {
        return translated + source.slice(key.length);
      }
    }
    return source;
  };

  function translateText(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const parent = node.parentElement;
    if (!parent || ["SCRIPT","STYLE","TEXTAREA"].includes(parent.tagName)) return;

    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const original = originals.get(node);
    const trimmed = original.trim();
    if (!trimmed) return;

    const leading = (original.match(/^\s*/) || [""])[0];
    const trailing = (original.match(/\s*$/) || [""])[0];
    node.nodeValue = leading + window.translatePhrase(trimmed) + trailing;
  }

  function translateAttrs(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
    if (!attrs.has(el)) attrs.set(el, {});
    const store = attrs.get(el);

    ["placeholder","title","aria-label"].forEach(name => {
      if (!el.hasAttribute(name)) return;
      if (!(name in store)) store[name] = el.getAttribute(name);
      el.setAttribute(name, window.translatePhrase(store[name]));
    });
  }

  window.translateInterface = function (root = document.body) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateText(root);
      return;
    }

    if (root.nodeType === Node.ELEMENT_NODE) translateAttrs(root);

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    );

    let node = walker.currentNode;
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) translateText(node);
      else translateAttrs(node);
      node = walker.nextNode();
    }
  };

  function syncControls() {
    [["langAuthDe","de"],["langAuthEn","en"],["langAuthUa","uk"]].forEach(([id,lang]) => {
      const btn = document.getElementById(id);
      if (btn) btn.classList.toggle("active", window.currentLanguage === lang);
    });

    const select = document.getElementById("profileLanguageSelect");
    if (select) select.value = window.currentLanguage;

    document.documentElement.lang =
      window.currentLanguage === "uk" ? "uk" : window.currentLanguage;
  }

  window.setAppLanguage = function (language) {
    if (!["de","en","uk"].includes(language)) return;

    window.currentLanguage = language;
    localStorage.setItem(KEY, language);
    syncControls();
    window.translateInterface(document.body);

    try {
      if (window.currentUser && typeof renderMembershipSummary === "function") {
        renderMembershipSummary();
      }
      if (window.currentUser && typeof renderMembershipDetails === "function") {
        renderMembershipDetails();
      }
      if (window.currentUser && typeof loadHomeDashboard === "function") {
        loadHomeDashboard();
      }
      if (
        window.currentUser &&
        window.membershipAccessAllowed &&
        window.currentSectionName &&
        typeof openSection === "function"
      ) {
        setTimeout(() => openSection(
          window.currentSectionName,
          { pushHistory:false }
        ), 0);
      }
    } catch (e) {
      console.warn("Language refresh:", e);
    }

    setTimeout(() => window.translateInterface(document.body), 40);
  };

  const originalAlert = window.alert.bind(window);
  const originalConfirm = window.confirm.bind(window);

  window.alert = message => originalAlert(window.translatePhrase(message));
  window.confirm = message => originalConfirm(window.translatePhrase(message));

  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(node => window.translateInterface(node)));
    syncControls();
  });

  function start() {
    syncControls();
    window.translateInterface(document.body);
    observer.observe(document.body, { childList:true, subtree:true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once:true });
  } else {
    start();
  }
})();
