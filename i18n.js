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
    "· Zeitraum:": "· Zeitraum:",
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
    "Nächster Termin": "Nächster Termin",
    "Community": "Community",
    "← MESSAGES": "← NACHRICHTEN",
    "Enable Push Notifications": "Push-Benachrichtigungen aktivieren",
    "ALL": "ALLE",
    "TRAINING": "TRAINING",
    "COMPETITIONS": "WETTKÄMPFE",
    "Previous month": "Vorheriger Monat",
    "Next month": "Nächster Monat",
    "No events this day.": "Keine Termine an diesem Tag.",
    "🥋 Training": "🥋 Training",
    "🏆 Competition": "🏆 Wettkampf",
    "Benutzername / Login": "Benutzername / Login",
    "CENTER MMA member": "CENTER MMA Mitglied",
    "Open this page in Safari.": "Öffne diese Seite in Safari.",
    "Tap": "Tippe auf",
    "Share / Teilen": "Teilen",
    "(the square with the arrow).": "(das Quadrat mit dem Pfeil).",
    "Choose": "Wähle",
    "Add to Home Screen / Zum Home-Bildschirm": "Zum Home-Bildschirm hinzufügen",
    "Add / Hinzufügen": "Hinzufügen",
    "OPEN PANEL": "BEREICH ÖFFNEN",
    "My Messages": "Meine Nachrichten",
    "Loading athletes...": "Sportler werden geladen...",
    "← COMMUNITY": "← COMMUNITY",
    "Athlete": "Sportler",
    "Loading athlete...": "Sportlerprofil wird geladen...",
    "Loading messages...": "Nachrichten werden geladen...",
    "Private Chat": "Privater Chat",
    "Loading conversation...": "Unterhaltung wird geladen...",
    "Shop": "Shop",
    "CENTER MMA merchandise": "CENTER MMA Fanartikel",
    "🛒 CART": "🛒 WARENKORB",
    "Cash payment only. Place your order in the app and pay in cash when you receive it from CENTER MMA.": "Nur Barzahlung. Gib deine Bestellung in der App auf und bezahle bar, wenn du sie von CENTER MMA erhältst.",
    "Loading products...": "Produkte werden geladen...",
    "Your Cart": "Dein Warenkorb",
    "← SHOP": "← SHOP",
    "PLACE CASH ORDER": "BARZAHLUNGSBESTELLUNG AUFGEBEN",
    "My Orders": "Meine Bestellungen",
    "Your current and previous shop orders.": "Deine aktuellen und früheren Bestellungen.",
    "Loading groups...": "Gruppen werden geladen...",
    "Vertrag": "Vertrag",
    "Notifications about new club and private chat messages.": "Benachrichtigungen über neue Nachrichten im Vereins- und Privat-Chat.",
    "⏰ Training reminders (2 hours before)": "⏰ Trainingserinnerungen (2 Stunden vorher)",
    "Loading document...": "Dokument wird geladen...",
    "CLUB CHAT": "VEREINSCHAT",
    "All club members can see your messages. Please communicate respectfully and behave appropriately.": "Alle Vereinsmitglieder können deine Nachrichten sehen. Bitte kommuniziere respektvoll und verhalte dich angemessen.",
    "Notify me about new club and private chat messages.": "Benachrichtige mich über neue Nachrichten im Vereins- und Privat-Chat.",
    "📱 Device notifications": "📱 Gerätebenachrichtigungen",
    "Receive push notifications on this device, even when CENTER MMA is closed.": "Erhalte Push-Benachrichtigungen auf diesem Gerät, auch wenn CENTER MMA geschlossen ist.",
    "ENABLE PUSH NOTIFICATIONS": "PUSH-BENACHRICHTIGUNGEN AKTIVIEREN",
    "your@email.com": "deine@email.com",
    "Minimum 6 characters": "Mindestens 6 Zeichen",
    "Search athletes by name": "Sportler nach Namen suchen",
    "Write a private message...": "Private Nachricht schreiben...",
    "Write a message...": "Nachricht schreiben...",
    "Unread chat messages": "Ungelesene Chat-Nachrichten",
    "Unread private messages": "Ungelesene private Nachrichten",
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
    "· Zeitraum:": "· Period:",
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
    "Community": "Community",
    "← MESSAGES": "← MESSAGES",
    "Enable Push Notifications": "Enable push notifications",
    "📄 Vertrag / Documents": "📄 Contract / Documents",
    "Dokument": "Document",
    "Competition Statistics": "Competition Statistics",
    "Nächster Termin": "Next event",
    "ALL": "ALL",
    "TRAINING": "TRAINING",
    "COMPETITIONS": "COMPETITIONS",
    "No events this day.": "No events this day.",
    "🥋 Training": "🥋 Training",
    "🏆 Competition": "🏆 Competition",
    "Kämpfe": "Fights",
    "Siege": "Wins",
    "Kämpfe:": "Fights:",
    "Siege:": "Wins:",
    "Finishes": "Finishes",
    "Win Rate": "Win Rate",
    "Finish Rate": "Finish Rate"
    ,"Benutzername / Login": "Username / login"
    ,"CENTER MMA member": "CENTER MMA member"
    ,"Nächster Termin": "Next event"
    ,"My Messages": "My messages"
    ,"Loading athletes...": "Loading athletes..."
    ,"← COMMUNITY": "← COMMUNITY"
    ,"Athlete": "Athlete"
    ,"Loading athlete...": "Loading athlete..."
    ,"Loading messages...": "Loading messages..."
    ,"Private Chat": "Private chat"
    ,"Loading conversation...": "Loading conversation..."
    ,"Shop": "Shop"
    ,"CENTER MMA merchandise": "CENTER MMA merchandise"
    ,"🛒 CART": "🛒 CART"
    ,"Cash payment only. Place your order in the app and pay in cash when you receive it from CENTER MMA.": "Cash payment only. Place your order in the app and pay in cash when you receive it from CENTER MMA."
    ,"Loading products...": "Loading products..."
    ,"Your Cart": "Your cart"
    ,"← SHOP": "← SHOP"
    ,"PLACE CASH ORDER": "PLACE CASH ORDER"
    ,"My Orders": "My orders"
    ,"Your current and previous shop orders.": "Your current and previous shop orders."
    ,"Loading groups...": "Loading groups..."
    ,"Vertrag": "Contract"
    ,"Notifications about new club and private chat messages.": "Notifications about new club and private chat messages."
    ,"⏰ Training reminders (2 hours before)": "⏰ Training reminders (2 hours before)"
    ,"Loading document...": "Loading document..."
    ,"CLUB CHAT": "CLUB CHAT"
    ,"All club members can see your messages. Please communicate respectfully and behave appropriately.": "All club members can see your messages. Please communicate respectfully and behave appropriately."
    ,"Notify me about new club and private chat messages.": "Notify me about new club and private chat messages."
    ,"📱 Device notifications": "📱 Device notifications"
    ,"Receive push notifications on this device, even when CENTER MMA is closed.": "Receive push notifications on this device, even when CENTER MMA is closed."
    ,"ENABLE PUSH NOTIFICATIONS": "ENABLE PUSH NOTIFICATIONS"
    ,"your@email.com": "your@email.com"
    ,"Minimum 6 characters": "Minimum 6 characters"
    ,"Search athletes by name": "Search athletes by name"
    ,"Write a private message...": "Write a private message..."
    ,"Write a message...": "Write a message..."
    ,"Unread chat messages": "Unread chat messages"
    ,"Unread private messages": "Unread private messages"
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
    "· Zeitraum:": "· Період:",
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
    "Nächster Termin": "Наступна подія",
    "Community": "Спільнота",
    "← MESSAGES": "← ПОВІДОМЛЕННЯ",
    "Enable Push Notifications": "Увімкнути push-сповіщення",
    "ALL": "УСІ",
    "TRAINING": "ТРЕНУВАННЯ",
    "COMPETITIONS": "ЗМАГАННЯ",
    "Previous month": "Попередній місяць",
    "Next month": "Наступний місяць",
    "No events this day.": "На цей день подій немає.",
    "🥋 Training": "🥋 Тренування",
    "🏆 Competition": "🏆 Змагання",
    "Benutzername / Login": "Ім’я користувача / логін",
    "CENTER MMA member": "Учасник CENTER MMA",
    "Open this page in Safari.": "Відкрийте цю сторінку в Safari.",
    "Tap": "Натисніть",
    "Share / Teilen": "Поділитися",
    "(the square with the arrow).": "(квадрат зі стрілкою).",
    "Choose": "Оберіть",
    "Add to Home Screen / Zum Home-Bildschirm": "Додати на головний екран",
    "Add / Hinzufügen": "Додати",
    "OPEN PANEL": "ВІДКРИТИ РОЗДІЛ",
    "My Messages": "Мої повідомлення",
    "Loading athletes...": "Завантаження спортсменів...",
    "← COMMUNITY": "← СПІЛЬНОТА",
    "Athlete": "Спортсмен",
    "Loading athlete...": "Завантаження профілю спортсмена...",
    "Loading messages...": "Завантаження повідомлень...",
    "Private Chat": "Приватний чат",
    "Loading conversation...": "Завантаження розмови...",
    "Shop": "Магазин",
    "CENTER MMA merchandise": "Товари CENTER MMA",
    "🛒 CART": "🛒 КОШИК",
    "Cash payment only. Place your order in the app and pay in cash when you receive it from CENTER MMA.": "Оплата лише готівкою. Оформіть замовлення в застосунку та сплатіть готівкою під час отримання від CENTER MMA.",
    "Loading products...": "Завантаження товарів...",
    "Your Cart": "Ваш кошик",
    "← SHOP": "← МАГАЗИН",
    "PLACE CASH ORDER": "ОФОРМИТИ ЗАМОВЛЕННЯ З ОПЛАТОЮ ГОТІВКОЮ",
    "My Orders": "Мої замовлення",
    "Your current and previous shop orders.": "Ваші поточні та попередні замовлення.",
    "Loading groups...": "Завантаження груп...",
    "Vertrag": "Договір",
    "Notifications about new club and private chat messages.": "Сповіщення про нові повідомлення в чаті клубу та приватних чатах.",
    "⏰ Training reminders (2 hours before)": "⏰ Нагадування про тренування (за 2 години)",
    "Loading document...": "Завантаження документа...",
    "CLUB CHAT": "ЧАТ КЛУБУ",
    "All club members can see your messages. Please communicate respectfully and behave appropriately.": "Усі учасники клубу бачать ваші повідомлення. Спілкуйтеся ввічливо та поводьтеся належно.",
    "Notify me about new club and private chat messages.": "Сповіщати мене про нові повідомлення в чаті клубу та приватних чатах.",
    "📱 Device notifications": "📱 Сповіщення на пристрої",
    "Receive push notifications on this device, even when CENTER MMA is closed.": "Отримуйте push-сповіщення на цьому пристрої, навіть коли CENTER MMA закрито.",
    "ENABLE PUSH NOTIFICATIONS": "УВІМКНУТИ PUSH-СПОВІЩЕННЯ",
    "your@email.com": "your@email.com",
    "Minimum 6 characters": "Щонайменше 6 символів",
    "Search athletes by name": "Пошук спортсменів за ім’ям",
    "Write a private message...": "Напишіть приватне повідомлення...",
    "Write a message...": "Напишіть повідомлення...",
    "Unread chat messages": "Непрочитані повідомлення чату",
    "Unread private messages": "Непрочитані приватні повідомлення",
    "Start date": "Дата початку",
    "End date": "Дата завершення",
    "Other": "Інше",
    "approved": "Підтверджено",
    "pending": "Очікує",
    "rejected": "Відхилено",
    "payment(s)": "оплат(и)",
    "Statut documents are no longer available.": "Документи Statut більше недоступні."
  });

  Object.assign(dictionaries.de, {
    "OPEN TRAINER PANEL": "TRAINERBEREICH ÖFFNEN",
    "OPEN ADMIN PANEL": "ADMIN-BEREICH ÖFFNEN",
    "Nächster Termin": "Nächster Termin",
    "Keine kommenden Termine": "Keine kommenden Termine",
    "Zurzeit sind keine zukünftigen Termine geplant.": "Zurzeit sind keine zukünftigen Termine geplant.",
    "CHECK ACTIVATION": "AKTIVIERUNG PRÜFEN",
    "ENABLE NOTIFICATIONS & REQUEST PAYMENT": "BENACHRICHTIGUNGEN AKTIVIEREN & ZAHLUNG ANFRAGEN",
    "Please enter your Mitgliedsnummer in the format 0000-000.": "Bitte gib deine Mitgliedsnummer im Format 0000-000 ein.",
    "Payment confirmation requested": "Zahlungsbestätigung angefragt",
    "Request sent. Access will activate automatically after approval — no logout is needed.": "Anfrage gesendet. Nach der Bestätigung wird dein Zugang automatisch aktiviert – du musst dich nicht abmelden.",
    "No events this day.": "Keine Termine an diesem Tag.",
    "Upcoming Birthdays": "Bevorstehende Geburtstage",
    "Birthdays in the next 30 days.": "Geburtstage in den nächsten 30 Tagen.",
    "No birthdays in the next 30 days.": "Keine Geburtstage in den nächsten 30 Tagen.",
    "In ": "In ",
    "Profile photo": "Profilfoto",
    "Photo must be smaller than 5 MB.": "Das Foto muss kleiner als 5 MB sein.",
    "Photo uploaded, but profile could not be updated.": "Foto hochgeladen, aber das Profil konnte nicht aktualisiert werden.",
    "Profile and contact details saved successfully.": "Profil und Kontaktdaten erfolgreich gespeichert.",
    "Important club notification": "Wichtige Vereinsmitteilung",
    "Training reminder": "Trainingserinnerung",
    "Competition deadline": "Wettkampffrist",
    "Your answer:": "Deine Antwort:",
    ". You can change it.": ". Du kannst sie ändern.",
    "Only admins can see the results.": "Nur Administratoren können die Ergebnisse sehen.",
    "Could not find competition:": "Wettkampf konnte nicht gefunden werden:",
    "Could not identify the exact competition. Please select it in Admin → Competitions.": "Der Wettkampf konnte nicht eindeutig bestimmt werden. Bitte wähle ihn unter Admin → Wettkämpfe aus.",
    "Competition opened, but the athlete could not be identified uniquely.": "Der Wettkampf wurde geöffnet, aber der Sportler konnte nicht eindeutig bestimmt werden.",
    "Please complete style, age category and experience.": "Bitte Stil, Altersklasse und Erfahrung ausfüllen.",
    "You have already registered for this event.": "Du bist für diese Veranstaltung bereits angemeldet.",
    "Participation request sent successfully.": "Teilnahmeanfrage erfolgreich gesendet.",
    "Please enter a valid weight.": "Bitte gib ein gültiges Gewicht ein.",
    "Saved as Trainer.": "Als Trainer gespeichert.",
    "Competition details saved successfully.": "Wettkampfdaten erfolgreich gespeichert.",
    "No athletes assigned to this training group.": "Dieser Trainingsgruppe sind keine Sportler zugeordnet.",
    "No athletes found.": "Keine Sportler gefunden.",
    "No member number": "Keine Mitgliedsnummer",
    "Saving attendance...": "Anwesenheit wird gespeichert...",
    "Attendance saved successfully.": "Anwesenheit erfolgreich gespeichert.",
    "Title is required.": "Ein Titel ist erforderlich.",
    "Please select a file.": "Bitte wähle eine Datei aus.",
    "File must be smaller than 20 MB.": "Die Datei muss kleiner als 20 MB sein.",
    "Uploading document...": "Dokument wird hochgeladen...",
    "Document uploaded successfully.": "Dokument erfolgreich hochgeladen.",
    "Delete this document?": "Dieses Dokument löschen?",
    "Notification cleanup failed:": "Benachrichtigungen konnten nicht bereinigt werden:",
    "Choose a group for this poll.": "Wähle eine Gruppe für diese Umfrage.",
    "Title and message are required.": "Titel und Nachricht sind erforderlich.",
    "Sending notification...": "Benachrichtigung wird gesendet...",
    "No active recipients found.": "Keine aktiven Empfänger gefunden.",
    "Show in Community": "In Community anzeigen",
    "Hidden members and their pages are excluded from Community.": "Ausgeblendete Mitglieder und ihre Seiten werden in Community nicht angezeigt.",
    "Show photo": "Foto anzeigen",
    "Show groups": "Gruppen anzeigen",
    "Show upcoming competition": "Kommenden Wettkampf anzeigen",
    "Could not save these settings.": "Diese Einstellungen konnten nicht gespeichert werden.",
    "Choose a JPG, PNG or WebP image.": "Wähle ein JPG-, PNG- oder WebP-Bild aus.",
    "The photo must be 5 MB or smaller.": "Das Foto darf höchstens 5 MB groß sein.",
    "Could not find an active member account.": "Es wurde kein aktives Mitgliedskonto gefunden.",
    "Upload failed. Apply the admin member photo SQL migration and try again.": "Upload fehlgeschlagen. Wende die SQL-Migration für Mitgliederfotos an und versuche es erneut.",
    "Profile photo updated.": "Profilfoto aktualisiert.",
    "Could not save the group visibility setting.": "Die Gruppensichtbarkeit konnte nicht gespeichert werden.",
    "Group name is required.": "Ein Gruppenname ist erforderlich.",
    "Creating group...": "Gruppe wird erstellt...",
    "Group athletes saved.": "Sportler der Gruppe gespeichert.",
    "You cannot delete your own logged-in admin account.": "Du kannst dein eigenes angemeldetes Administratorkonto nicht löschen.",
    "Reactivate this member?": "Dieses Mitglied reaktivieren?",
    "Deactivate this member? They will lose access to the app, but all history will be kept.": "Dieses Mitglied deaktivieren? Es verliert den App-Zugang, die gesamte Historie bleibt erhalten.",
    "Please enter a valid price.": "Bitte gib einen gültigen Preis ein.",
    "Saving membership...": "Mitgliedschaft wird gespeichert...",
    "Membership saved successfully.": "Mitgliedschaft erfolgreich gespeichert.",
    "News title": "Nachrichtentitel",
    "Write the news...": "Nachricht verfassen...",
    "Please select a JPG, PNG or WebP image.": "Wähle ein JPG-, PNG- oder WebP-Bild aus.",
    "Image must be smaller than 8 MB.": "Das Bild muss kleiner als 8 MB sein.",
    "News created successfully.": "Nachricht erfolgreich erstellt.",
    "Title and content are required.": "Titel und Inhalt sind erforderlich.",
    "News saved successfully.": "Nachricht erfolgreich gespeichert.",
    "Delete this news item?": "Diese Nachricht löschen?",
    "This training currently repeats every week.": "Dieses Training findet derzeit wöchentlich statt.",
    "This training is currently a single training.": "Dieses Training findet derzeit nur einmal statt.",
    "STOP WEEKLY": "WÖCHENTLICHE WIEDERHOLUNG STOPPEN",
    "MAKE WEEKLY": "WÖCHENTLICH WIEDERHOLEN",
    "Training session not found.": "Trainingseinheit nicht gefunden.",
    "Please enter the date in YYYY-MM-DD format.": "Bitte gib das Datum im Format JJJJ-MM-TT ein.",
    "Creating weekly training rule...": "Wöchentliche Trainingsregel wird erstellt...",
    "Creating training session...": "Trainingseinheit wird erstellt...",
    "Weekly training created successfully. Only one Admin item was created.": "Wöchentliches Training erfolgreich erstellt. Es wurde nur ein Admin-Eintrag angelegt.",
    "Training session created successfully.": "Trainingseinheit erfolgreich erstellt.",
    "New recurring training": "Neues wiederkehrendes Training",
    "New training session": "Neue Trainingseinheit",
    "Title, first date, start time and end time are required.": "Titel, erstes Datum sowie Start- und Endzeit sind erforderlich.",
    "End time must be later than start time.": "Die Endzeit muss nach der Startzeit liegen.",
    "Weekly training rule saved successfully.": "Wöchentliche Trainingsregel erfolgreich gespeichert.",
    "Training session saved successfully. Weekly repetition is off.": "Trainingseinheit erfolgreich gespeichert. Die wöchentliche Wiederholung ist ausgeschaltet.",
    "Repeat-until date cannot be before the first training date.": "Das Wiederholungsende darf nicht vor dem ersten Training liegen.",
    "Choose a date first.": "Wähle zuerst ein Datum aus.",
    "Training not found.": "Training nicht gefunden.",
    "This training is not set to Repeat Weekly.": "Für dieses Training ist keine wöchentliche Wiederholung eingestellt.",
    "The selected date is not an occurrence of this weekly training.": "Am ausgewählten Datum findet dieses wöchentliche Training nicht statt.",
    "Training cancelled": "Training abgesagt",
    "Training restored": "Training wiederhergestellt",
    "Choose a date for every deadline or remove the empty row.": "Gib für jede Frist ein Datum an oder entferne die leere Zeile.",
    "No competition results yet.": "Noch keine Wettkampfergebnisse.",
    "No medal": "Keine Medaille",
    "Discipline is required.": "Die Disziplin ist erforderlich.",
    "Invalid weight.": "Ungültiges Gewicht.",
    "Result place must be 1 or higher.": "Der Platz muss mindestens 1 sein.",
    "Fights count cannot be negative.": "Die Anzahl der Kämpfe darf nicht negativ sein.",
    "Wins count cannot be negative.": "Die Anzahl der Siege darf nicht negativ sein.",
    "Wins count cannot be higher than fights count.": "Die Anzahl der Siege darf nicht höher als die Anzahl der Kämpfe sein.",
    "Finishes count cannot be negative.": "Die Anzahl vorzeitiger Siege darf nicht negativ sein.",
    "Finishes count cannot be higher than wins count.": "Die Anzahl vorzeitiger Siege darf nicht höher als die Anzahl der Siege sein.",
    "Permanently delete this competition result? This cannot be undone.": "Dieses Wettkampfergebnis endgültig löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",
    "Permanently delete this athlete from this competition? All of this athlete's categories/results for this competition will also be deleted. This cannot be undone.": "Diesen Sportler endgültig aus dem Wettkampf entfernen? Alle Kategorien und Ergebnisse dieses Sportlers für diesen Wettkampf werden ebenfalls gelöscht. Dieser Vorgang kann nicht rückgängig gemacht werden.",
    "This cannot be undone.": "Dieser Vorgang kann nicht rückgängig gemacht werden.",
    "🥇 Gold": "🥇 Gold",
    "🥈 Silver": "🥈 Silber",
    "🥉 Bronze": "🥉 Bronze",
    "No result": "Kein Ergebnis",
    "Tap to open": "Zum Öffnen tippen",
    "Member profile": "Mitgliederprofil",
    "Payment request": "Zahlungsanfrage"
  });

  Object.assign(dictionaries.en, {
    "Keine kommenden Termine": "No upcoming events",
    "Zurzeit sind keine zukünftigen Termine geplant.": "No future events are currently scheduled.",
    "Mitgliedschaft endet morgen – bitte Zahlung rechtzeitig veranlassen.": "Membership ends tomorrow—please arrange payment in time.",
    "Термін членства завершується завтра — будь ласка, вчасно здійсніть оплату.": "Membership ends tomorrow—please arrange payment in time.",
    "Mitgliedschaft": "Membership",
    "Zahlung bestätigt": "Payment confirmed",
    "Zahlungsbestätigung angefragt": "Payment confirmation requested",
    "Als Trainer gespeichert.": "Saved as trainer.",
    "Wettkampfdaten erfolgreich gespeichert.": "Competition details saved successfully.",
    "Sportler nach Namen suchen": "Search athletes by name",
    "Meine Nachrichten": "My messages",
    "Sportler werden geladen...": "Loading athletes...",
    "Keine Sportler gefunden.": "No athletes found.",
    "Sportlerprofil wird geladen...": "Loading athlete...",
    "Gruppen werden geladen...": "Loading groups...",
    "Nachrichten werden geladen...": "Loading messages...",
    "Privater Chat": "Private chat",
    "Unterhaltung wird geladen...": "Loading conversation...",
    "Nur Barzahlung. Gib deine Bestellung in der App auf und bezahle bar, wenn du sie von CENTER MMA erhältst.": "Cash payment only. Place your order in the app and pay in cash when you receive it from CENTER MMA.",
    "Produkte werden geladen...": "Loading products...",
    "Dein Warenkorb": "Your cart",
    "Meine Bestellungen": "My orders",
    "Deine aktuellen und früheren Bestellungen.": "Your current and previous shop orders.",
    "Profilfoto": "Profile photo",
    "Sportlerprofil konnte nicht aktualisiert werden.": "Athlete profile could not be updated.",
    "Profil und Kontaktdaten erfolgreich gespeichert.": "Profile and contact details saved successfully.",
    "Wichtige Vereinsmitteilung": "Important club notification",
    "Trainingserinnerung": "Training reminder",
    "Wettkampffrist": "Competition deadline",
    "Bevorstehende Geburtstage": "Upcoming birthdays",
    "Geburtstage in den nächsten 30 Tagen.": "Birthdays in the next 30 days.",
    "Keine Geburtstage in den nächsten 30 Tagen.": "No birthdays in the next 30 days.",
    "Wettkampf konnte nicht gefunden werden:": "Could not find competition:",
    "Die Teilnehmeranfrage wurde erfolgreich gesendet.": "Participation request sent successfully.",
    "Bitte Stil, Altersklasse und Erfahrung ausfüllen.": "Please complete style, age category and experience.",
    "Du bist für diese Veranstaltung bereits angemeldet.": "You have already registered for this event.",
    "Bitte gib ein gültiges Gewicht ein.": "Please enter a valid weight.",
    "Anwesenheit wird gespeichert...": "Saving attendance...",
    "Anwesenheit erfolgreich gespeichert.": "Attendance saved successfully.",
    "Dokument wird hochgeladen...": "Uploading document...",
    "Dokument erfolgreich hochgeladen.": "Document uploaded successfully.",
    "Gruppe wird erstellt...": "Creating group...",
    "Gruppenname ist erforderlich.": "Group name is required.",
    "Sportler der Gruppe gespeichert.": "Group athletes saved.",
    "Mitgliedschaft wird gespeichert...": "Saving membership...",
    "Mitgliedschaft erfolgreich gespeichert.": "Membership saved successfully.",
    "Wöchentliche Wiederholung stoppen": "Stop weekly repetition",
    "WÖCHENTLICHE WIEDERHOLUNG STOPPEN": "STOP WEEKLY",
    "WÖCHENTLICH WIEDERHOLEN": "MAKE WEEKLY",
    "Wöchentliche Trainingsregel erfolgreich gespeichert.": "Weekly training rule saved successfully.",
    "Trainingseinheit erfolgreich erstellt.": "Training session created successfully.",
    "Neue Trainingseinheit": "New training session",
    "Neue wiederkehrende Trainingseinheit": "New recurring training",
    "Titel, erstes Datum sowie Start- und Endzeit sind erforderlich.": "Title, first date, start time and end time are required.",
    "Die Endzeit muss nach der Startzeit liegen.": "End time must be later than start time.",
    "Trainingseinheit erfolgreich gespeichert. Die wöchentliche Wiederholung ist ausgeschaltet.": "Training session saved successfully. Weekly repetition is off.",
    "Wähle zuerst ein Datum aus.": "Choose a date first.",
    "Training nicht gefunden.": "Training not found.",
    "Training abgesagt": "Training cancelled",
    "Training wiederhergestellt": "Training restored",
    "Keine Medaille": "No medal",
    "Die Disziplin ist erforderlich.": "Discipline is required.",
    "Ungültiges Gewicht.": "Invalid weight.",
    "Der Platz muss mindestens 1 sein.": "Result place must be 1 or higher.",
    "Die Anzahl der Kämpfe darf nicht negativ sein.": "Fights count cannot be negative.",
    "Die Anzahl der Siege darf nicht negativ sein.": "Wins count cannot be negative.",
    "Die Anzahl der Siege darf nicht höher als die Anzahl der Kämpfe sein.": "Wins count cannot be higher than fights count.",
    "Die Anzahl vorzeitiger Siege darf nicht negativ sein.": "Finishes count cannot be negative.",
    "Die Anzahl vorzeitiger Siege darf nicht höher als die Anzahl der Siege sein.": "Finishes count cannot be higher than wins count.",
    "Keine Wettkampfergebnisse vorhanden.": "No competition results yet.",
    "Kein Ergebnis": "No result",
    "Zum Öffnen tippen": "Tap to open",
    "Mitgliederprofil": "Member profile",
    "Zahlungsanfrage": "Payment request"
  });

  Object.assign(dictionaries.uk, {
    "OPEN TRAINER PANEL": "ВІДКРИТИ ПАНЕЛЬ ТРЕНЕРА",
    "OPEN ADMIN PANEL": "ВІДКРИТИ ПАНЕЛЬ АДМІНІСТРАТОРА",
    "Keine kommenden Termine": "Найближчих подій немає",
    "Zurzeit sind keine zukünftigen Termine geplant.": "Наразі майбутніх подій не заплановано.",
    "CHECK ACTIVATION": "ПЕРЕВІРИТИ АКТИВАЦІЮ",
    "ENABLE NOTIFICATIONS & REQUEST PAYMENT": "УВІМКНУТИ СПОВІЩЕННЯ Й ЗАПИТАТИ ПІДТВЕРДЖЕННЯ ОПЛАТИ",
    "Please enter your Mitgliedsnummer in the format 0000-000.": "Введіть номер учасника у форматі 0000-000.",
    "Payment confirmation requested": "Запит на підтвердження оплати надіслано",
    "Request sent. Access will activate automatically after approval — no logout is needed.": "Запит надіслано. Після підтвердження доступ активується автоматично — виходити з акаунта не потрібно.",
    "Keine Termine an diesem Tag.": "На цей день подій немає.",
    "Bevorstehende Geburtstage": "Найближчі дні народження",
    "Geburtstage in den nächsten 30 Tagen.": "Дні народження протягом наступних 30 днів.",
    "Keine Geburtstage in den nächsten 30 Tagen.": "Протягом наступних 30 днів днів народження немає.",
    "Dein Profil": "Ваш профіль",
    "Profilfoto": "Фото профілю",
    "Das Foto muss kleiner als 5 MB sein.": "Розмір фото має бути меншим за 5 МБ.",
    "Profil und Kontaktdaten erfolgreich gespeichert.": "Профіль і контактні дані успішно збережено.",
    "Wichtige Vereinsmitteilung": "Важливе повідомлення клубу",
    "Trainingserinnerung": "Нагадування про тренування",
    "Wettkampffrist": "Кінцевий термін змагань",
    "Дисципліна є обов’язковою.": "Потрібно вказати дисципліну.",
    "Wettkampf konnte nicht gefunden werden:": "Не вдалося знайти змагання:",
    "Wettkampfdaten erfolgreich gespeichert.": "Дані змагань успішно збережено.",
    "Тренування, змагання та досвід потрібно заповнити.": "Будь ласка, вкажіть стиль, вікову категорію та досвід.",
    "Teilnahmeanfrage erfolgreich gesendet.": "Запит на участь успішно надіслано.",
    "Du bist für diese Veranstaltung bereits angemeldet.": "Ви вже зареєстровані на цю подію.",
    "Bitte gib ein gültiges Gewicht ein.": "Введіть коректну вагу.",
    "Anwesenheit wird gespeichert...": "Збереження відвідуваності...",
    "Anwesenheit erfolgreich gespeichert.": "Відвідуваність успішно збережено.",
    "Dokument wird hochgeladen...": "Завантаження документа...",
    "Dokument erfolgreich hochgeladen.": "Документ успішно завантажено.",
    "Gruppe wird erstellt...": "Створення групи...",
    "Gruppenname ist erforderlich.": "Потрібно вказати назву групи.",
    "Sportler der Gruppe gespeichert.": "Склад групи збережено.",
    "Mitgliedschaft wird gespeichert...": "Збереження членства...",
    "Mitgliedschaft erfolgreich gespeichert.": "Членство успішно збережено.",
    "Wöchentliche Wiederholung stoppen": "Зупинити щотижневе повторення",
    "WÖCHENTLICHE WIEDERHOLUNG STOPPEN": "ЗУПИНИТИ ЩОТИЖНЕВЕ ПОВТОРЕННЯ",
    "WÖCHENTLICH WIEDERHOLEN": "ПОВТОРЮВАТИ ЩОТИЖНЯ",
    "Wöchentliche Trainingsregel erfolgreich gespeichert.": "Щотижневий розклад тренувань збережено.",
    "Trainingseinheit erfolgreich erstellt.": "Тренування успішно створено.",
    "Neue Trainingseinheit": "Нове тренування",
    "Neue wiederkehrende Trainingseinheit": "Нове регулярне тренування",
    "Titel, erstes Datum sowie Start- und Endzeit sind erforderlich.": "Потрібно вказати назву, першу дату, час початку та завершення.",
    "Die Endzeit muss nach der Startzeit liegen.": "Час завершення має бути пізніше за час початку.",
    "Trainingseinheit erfolgreich gespeichert. Die wöchentliche Wiederholung ist ausgeschaltet.": "Тренування збережено. Щотижневе повторення вимкнено.",
    "Wähle zuerst ein Datum aus.": "Спочатку оберіть дату.",
    "Training nicht gefunden.": "Тренування не знайдено.",
    "Training abgesagt": "Тренування скасовано",
    "Training wiederhergestellt": "Тренування відновлено",
    "Keine Medaille": "Без медалі",
    "Die Disziplin ist erforderlich.": "Потрібно вказати дисципліну.",
    "Ungültiges Gewicht.": "Некоректна вага.",
    "Der Platz muss mindestens 1 sein.": "Місце має бути не менше 1.",
    "Die Anzahl der Kämpfe darf nicht negativ sein.": "Кількість поєдинків не може бути від’ємною.",
    "Die Anzahl der Siege darf nicht negativ sein.": "Кількість перемог не може бути від’ємною.",
    "Die Anzahl der Siege darf nicht höher als die Anzahl der Kämpfe sein.": "Перемог не може бути більше, ніж поєдинків.",
    "Die Anzahl vorzeitiger Siege darf nicht negativ sein.": "Кількість дострокових перемог не може бути від’ємною.",
    "Die Anzahl vorzeitiger Siege darf nicht höher als die Anzahl der Siege sein.": "Дострокових перемог не може бути більше, ніж перемог.",
    "Noch keine Wettkampfergebnisse.": "Результатів змагань поки немає.",
    "Kein Ergebnis": "Немає результату",
    "Zum Öffnen tippen": "Натисніть, щоб відкрити",
    "Mitgliederprofil": "Профіль учасника",
    "Zahlungsanfrage": "Запит на оплату"
  });

  Object.assign(dictionaries.de, {
    "Unauthorized": "Nicht autorisiert",
    "Forbidden": "Zugriff verweigert",
    "Notification not found": "Benachrichtigung nicht gefunden",
    "Chat message not found": "Chatnachricht nicht gefunden",
    "Chat push window expired": "Das Zeitfenster für die Chat-Benachrichtigung ist abgelaufen",
    "notificationId or chatMessageId is required": "notificationId oder chatMessageId ist erforderlich",
    "Authentication required": "Anmeldung erforderlich",
    "Active member profile not found": "Aktives Mitgliederprofil nicht gefunden",
    "Admin access required": "Administratorzugriff erforderlich",
    "Member with a login account not found": "Mitglied mit Benutzerkonto nicht gefunden",
    "Invalid member photo path": "Ungültiger Pfad zum Mitgliederfoto",
    "Choose another authenticated Community member": "Wähle ein anderes angemeldetes Community-Mitglied",
    "Choose another Community member": "Wähle ein anderes Community-Mitglied",
    "Both participants must be active Community members": "Beide Teilnehmer müssen aktive Community-Mitglieder sein",
    "Both participants must be active Center MMA members": "Beide Teilnehmer müssen aktive CENTER-MMA-Mitglieder sein",
    "Conversation not found or access denied": "Unterhaltung nicht gefunden oder Zugriff verweigert",
    "Message not found, not sent by caller, or too old": "Nachricht nicht gefunden, nicht von dir gesendet oder zu alt",
    "Member not found": "Mitglied nicht gefunden",
    "Group is not assigned to this member": "Diese Gruppe ist diesem Mitglied nicht zugeordnet",
    "Could not load this document.": "Dokument konnte nicht geladen werden.",
    "You can delete only your own messages.": "Du kannst nur deine eigenen Nachrichten löschen.",
    "Delete this user's message?": "Diese Nachricht des Mitglieds löschen?",
    "Delete this message?": "Diese Nachricht löschen?",
    "Delete this notification?": "Diese Benachrichtigung löschen?",
    "Delete this group?": "Diese Gruppe löschen?",
    "Delete ALL notifications? This cannot be undone.": "ALLE Benachrichtigungen löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",
    "Tool added.": "Tool hinzugefügt.",
    "Tool name:": "Toolname:",
    "Tool URL:": "Tool-URL:",
    "Icon / emoji:": "Symbol / Emoji:",
    "Name is required.": "Ein Name ist erforderlich.",
    "URL is required.": "Eine URL ist erforderlich.",
    "Only http:// and https:// links are allowed.": "Es sind nur http://- und https://-Links erlaubt.",
    "Tool not found.": "Tool nicht gefunden.",
    "New document": "Neues Dokument",
    "New club news": "Neue Vereinsnachricht",
    "CENTER MMA News": "CENTER MMA Nachrichten",
    "News image": "Nachrichtenbild",
    "News image preview": "Vorschau des Nachrichtenbilds",
    "Uploading image...": "Bild wird hochgeladen...",
    "Creating news...": "Nachricht wird erstellt...",
    "Athlete Results": "Sportler-Ergebnisse",
    "Search athlete...": "Sportler suchen...",
    "Unknown athlete": "Unbekannter Sportler",
    "Weight —": "Gewicht —",
    "First date for duplicated training (YYYY-MM-DD):": "Erstes Datum für das duplizierte Training (JJJJ-MM-TT):",
    "Delete this training session? If it repeats weekly, the whole series will be deleted.": "Diese Trainingseinheit löschen? Bei wöchentlicher Wiederholung wird die gesamte Serie gelöscht.",
    "Delete this participant from this competition? This cannot be undone.": "Diesen Teilnehmer aus dem Wettkampf entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden.",
    "File was deleted, but the document record could not be removed:": "Die Datei wurde gelöscht, aber der Dokumenteintrag konnte nicht entfernt werden:",
    "Notification saved, but the poll could not be created:": "Benachrichtigung gespeichert, aber die Umfrage konnte nicht erstellt werden:",
    "Profile saved, but contact details could not be saved:": "Profil gespeichert, aber die Kontaktdaten konnten nicht gespeichert werden:",
    "Profile saved, but contact emails could not be saved:": "Profil gespeichert, aber die Kontakt-E-Mails konnten nicht gespeichert werden:",
    "Payment request": "Zahlungsanfrage"
  });

  Object.assign(dictionaries.uk, {
    "Unauthorized": "Не авторизовано",
    "Forbidden": "Доступ заборонено",
    "Notification not found": "Сповіщення не знайдено",
    "Chat message not found": "Повідомлення чату не знайдено",
    "Chat push window expired": "Час для push-сповіщення про повідомлення минув",
    "notificationId or chatMessageId is required": "Потрібно вказати notificationId або chatMessageId",
    "Authentication required": "Потрібна авторизація",
    "Active member profile not found": "Активний профіль учасника не знайдено",
    "Admin access required": "Потрібен доступ адміністратора",
    "Member with a login account not found": "Учасника з обліковим записом не знайдено",
    "Invalid member photo path": "Некоректний шлях до фото учасника",
    "Choose another authenticated Community member": "Оберіть іншого авторизованого учасника спільноти",
    "Choose another Community member": "Оберіть іншого учасника спільноти",
    "Both participants must be active Community members": "Обидва учасники мають бути активними учасниками спільноти",
    "Both participants must be active Center MMA members": "Обидва учасники мають бути активними учасниками CENTER MMA",
    "Conversation not found or access denied": "Розмову не знайдено або доступ заборонено",
    "Message not found, not sent by caller, or too old": "Повідомлення не знайдено, його надіслали не ви або воно застаріле",
    "Member not found": "Учасника не знайдено",
    "Group is not assigned to this member": "Цю групу не призначено цьому учаснику",
    "Could not load this document.": "Не вдалося завантажити документ.",
    "You can delete only your own messages.": "Ви можете видаляти лише власні повідомлення.",
    "Delete this user's message?": "Видалити повідомлення цього учасника?",
    "Delete this message?": "Видалити це повідомлення?",
    "Delete this notification?": "Видалити це сповіщення?",
    "Delete this group?": "Видалити цю групу?",
    "Delete ALL notifications? This cannot be undone.": "Видалити ВСІ сповіщення? Цю дію неможливо скасувати.",
    "Tool added.": "Інструмент додано.",
    "Tool name:": "Назва інструмента:",
    "Tool URL:": "URL інструмента:",
    "Icon / emoji:": "Значок / емодзі:",
    "Name is required.": "Потрібно вказати назву.",
    "URL is required.": "Потрібно вказати URL.",
    "Only http:// and https:// links are allowed.": "Дозволені лише посилання http:// та https://.",
    "Tool not found.": "Інструмент не знайдено.",
    "New document": "Новий документ",
    "New club news": "Нова новина клубу",
    "CENTER MMA News": "Новини CENTER MMA",
    "News image": "Зображення новини",
    "News image preview": "Попередній перегляд зображення новини",
    "Uploading image...": "Завантаження зображення...",
    "Creating news...": "Створення новини...",
    "Athlete Results": "Результати спортсменів",
    "Search athlete...": "Пошук спортсмена...",
    "Unknown athlete": "Невідомий спортсмен",
    "Weight —": "Вага —",
    "First date for duplicated training (YYYY-MM-DD):": "Перша дата дубльованого тренування (РРРР-ММ-ДД):",
    "Delete this training session? If it repeats weekly, the whole series will be deleted.": "Видалити це тренування? Якщо воно повторюється щотижня, буде видалено всю серію.",
    "File was deleted, but the document record could not be removed:": "Файл видалено, але не вдалося видалити запис документа:",
    "Notification saved, but the poll could not be created:": "Сповіщення збережено, але не вдалося створити опитування:",
    "Profile saved, but contact details could not be saved:": "Профіль збережено, але не вдалося зберегти контактні дані:",
    "Profile saved, but contact emails could not be saved:": "Профіль збережено, але не вдалося зберегти електронні адреси контактів:",
    "Zahlung über €": "Оплата на суму €",
    "Bestätigt Zahlung…": "Підтвердження оплати…",
    "Diesen Zahlungseintrag und den zugehörigen Mitgliedschaftszeitraum löschen?": "Видалити цей запис про оплату та відповідний період членства?",
    "Überlappende Mitgliedschaft konnte nicht geprüft werden:": "Не вдалося перевірити періоди членства, що перетинаються:",
    "Mitgliedschaftsdatum konnte nicht korrigiert werden:": "Не вдалося виправити дати членства:",
    "Mitgliedschaft konnte nicht gelöscht werden:": "Не вдалося видалити членство:",
    "Zahlung konnte nicht gelöscht werden:": "Не вдалося видалити оплату:",
    "Zahlung konnte nicht bestätigt werden:": "Не вдалося підтвердити оплату:",
    "Your CENTER MMA membership is active until": "Ваше членство CENTER MMA активне до",
    "Payment request": "Запит на оплату"
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
