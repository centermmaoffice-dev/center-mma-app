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
