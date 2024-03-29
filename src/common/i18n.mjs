import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ru: {
    translation: {
      home_page: "Главная",
      find_jobs: "Свободные места",
      find_worker: "Ищущие работу",
      sign_up: "Регистрация",
      add_job: "Добавить заявка",
      sign_in: "Войти",
      ru: "Русский",
      tm: "Turkmen",
      home_title: "Найти работу, Нанять креативщиков",
      home_desc:
        "Каждый месяц более 3 миллионов соискателей обращаются к веб-сайту в поисках работы, ежедневно подавая более 140 000 заявок.",
      start: "Начать",
      sponsors: "Нам доверяют",
      job_name: "Название вакансии",
      location: "Расположение",
      search: "Поиск",
      search_by_category: "Поиск по категориям",
      see_all: "Показать все",
      see_more: "Заполните информацию",
      today_jobs: "Вакансии сегодня",
      more: "Подробнее",
      left_minute: " минуты назад",
      app_title: "Wakant - Скачай мобильное проложение",
      app_desc:
        "Полнофункциональный портал вакансий " +
        "также с помощью мобильного телефона " +
        "Вы можете Поиск работы теперь очень прост с нашим мобильным приложением! Вы можете отправить свое резюме, найдя работу, которую вы ищете. Мобильное приложение для вакансий и соискателей предлагает уникальный опыт для своих пользователей.",
      immediately: "Срочные работы",
      state_1_title: "Сообщите, что ищете работу",
      state_1_desc:
        "Вы можете отправить свою ссылку для присоединения к работе, выбрав подходящую вам в уведомлениях.",
      state_2_title: "Заполните свое резюме",
      state_2_desc:
        "Если вы укажете подробную информацию о себе и своей профессии, работодателю будет проще вас выбрать.",
      state_3_title: "Работа",
      state_3_desc:
        "С легкостью найдите работу, которую вы ищете, и подайте заявку на работу по вашему выбору",
      user_comment: "См. некоторые слова",
      user_comment_desc:
        "Тысячи сотрудников получают идеальную работу и вернитесь к нам!",
      contact: "Связаться",
      fullname: "Введите ваше имя",
      company: "Компания (необязательно)",
      email: "Ваш электронной почты",
      phone_number: "Номер телефона",
      your_message: "Расскажите нам о себе",
      our_address: "Адрес местоположения",
      our_address_value:
        " Наш адрес: г. Ашхабад, Копетдагский этрап, 62 Парахат 1/1",
      our_email: "Электронная почта",
      our_email_value: "wakant_info@gmail.com",
      number: "Контакты",
      our_numbers: "+993 12 754673,+993 64 086153",
      send: "Отправить",
      docs: "Нормативные документы",
      terms_of_use: "Ассоциация пользователей",
      privacy_policy: "Кнопка входа",
      terms_of_comment: "Соглашение о комментариях",
      all_rights: "Copyright © 2022 Все права защищены",
      mobile_apps: "Мобильное проложение",
      "lorem ipsum":
        "Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае, еос ан деленити цонституам. Ад хомеро сцрипторем усу. Ет яуем солута вулпутате еам, вих ад пробатус партиендо ассуеверит. Меи ат сапиентем елояуентиам.",

      //  JOBS PAGE
      jobb: "вакансии",
      av_jobs: "доступны сейчас",
      per_filter: "Расширенный фильтр",
      page: "Страницы",
      all: "Все",
      category: "Категории",
      job_price: "Диапазон заработной платы",
      job_gender: "Ищете работу",
      job_firm: "Агентства",
      submit_job: "Применить сейчас",
      filter: "Фильтр",
      sort: "организовать",
      man_women: "Мужской / женский",
      man: "Мужской",
      women: "Женщина",
      price_asc: "Цена по возрастанию",
      price_desc: "Цена по убыванию",
      newest_first: "Новички вперед",
      oldest_first: "Сначала старые",
      //  JOBS PAGE

      // View job
      one_bt: "Разметка",
      about_job: "О работе",
      title_category: "Категория:",
      title_job_req: "Ищущие работу:",
      title_submit: "Возраст:",
      title_time: "Графика:",
      title_number: "Номер телефона:",
      title_address: "Адрес:",
      title_email: "Электронной почты:",
      similar: "Похожие посты",
      owner: "Работодатель",
      phone: "Телефон:",
      // View job
      sponseredByText:
        "Программа «Поддержка совершенствования системы государственного управления», финансируемая USAID и реализуемая ООО «QED Group», оказывает консультационную и техническую поддержку государственным органам Туркменистана. Мы также хотели бы поблагодарить QED Group за их поддержку в течение этого периода.",
    },
  },
  tm: {
    translation: {
      home_page: "Baş sahypa",
      find_jobs: "Iş orunlar",
      find_worker: "Iş hödürlemek",
      sign_up: "Agza bolmak",
      add_job: "Iş hödürlemek",
      sign_in: "Ulgama girmek",
      anceta: "Anketam",
      events: "Hereketler",
      favs: "Ýatda saklananlar",
      categories: "Kategoriýalar",
      ru: "Русский",
      tm: "Türkmençe",
      home_title: "Iş orny tapmak. Tejribeli \n" + "hünärmenleri saýlamak",
      home_desc:
        "Iş maksatlaryňyz üçin uzak möhletli üstünlik gazanmagyň çalt we ygtybarly usuly. Shu wagt. \n" +
        "Edil şu ýerde.",
      start: "Gözleg",
      sponsors: "Biziň hyzmatdaşlarymyz",
      job_name: "Iş ornunyň ady",
      location: "Ýerleşýän ýeri",
      search: "Gözle",
      search_by_category: "Saýlanan kategoriýalar",
      see_all: "Beýlekiler",
      see_more: "Bildirişleriň sany",
      today_jobs: "Şu günkiler",
      more: "Doly görmek",
      left_minute: " минуты назад",
      app_title: "Wakant - Mobile goşyndusyny telefonyňyza ýükläň",
      app_desc:
        "Ykjam funksiýaly Wakant mobile goşundysy telefonyňyzda hem ulanyp bilersiňiz. Iş gözlemeklik ykjam mobile goşundusy arkaly indi örän aňsat! Gözleýän işiňizi tapmak bilen öz anketaňyzy saýlan iş ornuňyza aňsatlyk bilen ugradyp bilersiňiz. Wakant iş berijiler we iş gözleýänler üçin mobile goşundysy ulanyjylary üçin özboluşly tejribe hödürleýär.",
      immediately: "Ofis işleri",
      state_1_title: "Iş gözleýändigiňizi bildiriş etmek",
      state_1_desc:
        "Bildirişleriň içinde size gabat gelýänini saýlap işe girmeklik üçin anketaňyzy ugradyp bilersiňiz.",
      state_2_title: "Anketaňyzy dolduryň",
      state_2_desc:
        "Özüňiz we hünäriňiz hakynda giňişleýin maglumat girizseňiz iş berijä sizi saýlamaklyga ýeňillik döredip bilersiňiz.",
      state_3_title: "Saýlan işeňize ýerleşmeklik",
      state_3_desc:
        "Gözleýän işiňize aňsatlyk bilen ýeňillik bilen tapyň we saýlan işiňize teklip bildiriň.",
      user_comment: "Ulanyjylaryň teswirleri",
      user_comment_desc:
        "Müňlerçe hünärmenleriň iş orny tapmaklygyna ýardam berýänligimiz üçin bize ynam bildirýärler!",
      contact: "Habarlaşmak",
      contact_desc:
        "Siziň biz hakyndaky oňyn teswirleriňiz beýleki adamlara öz saýlajak kärinde ynamly bolmaga kömek edýär. Üstünligiňizi paýlaşmak üçin 60 sekunt sarp edip bilersiňizmi? Siziň kömegiňiz üçin biziň minnetdarlygymyz baky bolar.",
      fullname: "Adyňyzy ýazyň",
      company: "Kärhana ady (boş geçip bilersiňiz)",
      email: "Siziň elektron poçtaňyz",
      phone_number: "Telefon belgiňiz",
      your_message: "Biz hakynda teswirleriňizi ýazyň...",
      our_address: "Ýerleşýän ýeriniň salgysy",
      our_address_value:
        "Adresimiz: ş. Aşgabat, Köpetdag etraby, 62 Parahat 1/1",
      our_email: "Mail adresi",
      our_email_value: "wakant_team@gmail.com",
      number: "Telefon belgiler",
      our_numbers: "+993 12 754673, +993 64 086153",
      send: "Ugratmak",
      docs: "Düzgünnamalar",
      terms_of_use: "Ulanyjy ylalaşygy",
      privacy_policy: "Işe girmek düwmesi",
      terms_of_comment: "Teswir ýazmagyň düzgünleri",
      all_rights: "Copyright © 2022 Все права защищены",
      mobile_apps: "Telefon belgiler",
      "lorem ipsum":
        "Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае, еос ан деленити цонституам. Ад хомеро сцрипторем усу. Ет яуем солута вулпутате еам, вих ад пробатус партиендо ассуеверит. Меи ат сапиентем елояуентиам.",

      //  JOBS PAGE
      jobb: " bildiriş şu gün täze goýlan",
      av_jobs: "",
      per_filter: "Giňişleýin filtirlemek",
      page: "Sahypa",
      all: "Ählisi",
      category: "Kategoriýalar",
      job_price: "Iş haky aralygyny saýlamak",
      job_gender: "Işe soralýan",
      job_firm: "Agenstwolar",
      submit_job: "Işe girmek",
      filter: "Filtr",
      sort: "Sort",
      price_asc: "Baha artýan",
      price_desc: "Baha kemelýän",
      newest_first: "Täzeden könä",
      oldest_first: "Köneden täzä",
      jobs_count: "Jemi iş orunlar sany:",
      //  JOBS PAGE

      // View job
      one_bt: "Разметка",
      about_job: "О работе",
      title_category: "Категория:",
      title_job_req: "Ищущие работу:",
      title_submit: "Возраст:",
      title_time: "Графика:",
      title_number: "Номер телефона:",
      title_address: "Адрес:",
      title_email: "Электронной почты:",
      similar: "Похожие посты",
      owner: "Работодатель",
      phone: "Телефон:",
      // add job
      job_category: "Iş kategoriýasy",
      job_times_saturday: "Iş sagatlary: Şenbe ",
      job_times_sunday: "Iş sagatlary: Ýekşenbe",
      job_mail: "Mail adresi",
      job_name_add: "Işiň ady",
      job_hours: "Iş sagatlary: Hepde içi",
      job_expreience: "Iş tejribesi",
      job_age: "Işe soralýan ýaşy",
      job_phone: "Telefon belgisi",
      job_place_document: "Gerekli propiskasy",
      job_type: "Iş wagt görnüşi: ",
      job_address: "Adresi",
      job_salary: "Iş haky",
      job_condition: "Iş şertleri",
      job_about: "Iş beriji hakynda",
      job_gender_add: "Işe soralýan:",
      job_read_1: "Dügünnamany okadym we kabul etdim",
      job_read_2: "Telefon belgim gizlin saklansyn",
      job_read_3: "Ulanyjylar teswir goýup bilýärler",
      add_job_button: "BILDIRIŞ GOŞMAK",
      start_date: "Başlanýan wagty",
      end_date: "Gutarýan wagty",
      ok: "OK",
      no_job: "Dynç",

      // sign page
      sign_in_to: "Ulagama girmek",
      sign_in_desc:
        "Hasaba girmek bilen, boş iş ýerleriňizi we dalaşgärleriňizi iberip bilersiňiz. Profiliňizi sazlap bilersiňiz we mundan başgada, telefonyňyzdaky maglumatlar bilen sazlaşykly işleşip bilersiňiz.",
      your_phone: "Telefon belgiňiz",
      phone_error_1: "Telefon belgisi +9936 bilen başlamaly",
      phone_error_2: "Telefon belgisiniň uzunlygy nädogry",
      next: "Indiki",
      accept_sign_in:
        "WAKANT Ulanyjy şertnamasy, hasabyňyza girip, okandygymy we kabul edendigimi tassyklaýaryn.",
      confirm_code: "Tassyklaýjy kod",
      confirm_desc: "Telefon belgiňize gelen kody giriziň",
      code: "Kod",
      code_not_received: "Tassyklaýjy kod gelmedi",
      error: "Ýalňyşlyk ýüze çykdy",
      success: "Üstünlikli tammamlandy",
      sign_in_2: "Girmek",

      //catgeory
      back: "Yza dolan",
      sponseredByText:
        "IDUSAID tarapyndan maliýeleşdirilýän we QED Group LLC tarapyndan durmuşa geçirilýän Döwlet dolandyryşyny gowulandyrmak üçin goldaw, Türkmenistanyň döwlet edaralaryna maslahat we tehniki goldaw berýär. Şeýle hem, bu döwürde beren goldawlary üçin QED toparyna sag bolsun aýdýarys.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tm", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
