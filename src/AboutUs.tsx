const AboutUs = () => {
  return (
    <div className="wrap">
      <div className="picture">
        <div className="picture_wrap">
          <button className="btn_wrap">
            <span className="first-word">Style</span>
            <span className="second-word">Scope</span>
          </button>
          <p className="slogan">Ваш проводник в мир дизайна</p>
        </div>
      </div>

      <div className="content_wrapper">
        <div className="wrap_content">
          <div className="about">
            <div className="content_title">
              <p className="content_scope">Что предлогает</p>
              <p className="content_scope">StyleScope?</p>
            </div>
          </div>
          <div className="about_content">
            <div className="content_one">
              <h2>Краткое описание агрегатора</h2>
              <p className="content_about">
                Аггрегатор дизайнерских услуг, предоставляющий <br /> широкий
                выбор профессиональных услуг дизайна <br /> интерьера и
                экстерьера от лучших компаний и <br /> дизайнеров.
              </p>
            </div>
            <div className="content_two">
              <h2>Наша миссия и цели</h2>
              <p className="content_about">
                Наша миссия - помочь клиентам найти <br /> профессиональные
                дизайнерские услуги,
                <br /> которые помогут им создать идеальное
                <br /> пространство, отражающее их
                <br /> индивидуальный стиль и потребности
              </p>
            </div>
            <div className="content_three">
              <h2>Какие услуги мы предоставляем</h2>
              <p className="content_about">
                Мы предоставляем широкий спектр услуг дизайна
                <br /> интерьера и экстерьера компаний, включая
                <br /> проектирование, меблировку, подбор материалов,
                <br /> декорирование, ремонт, обучение.
              </p>
            </div>
            <div className="content_four">
              <h2>Гарантия качество услуг</h2>
              <p className="content_about">
                Мы тщательно отбираем компании и дизайнеров, чтобы
                <br /> предоставлять только высококачественные услуги,
                <br /> гарантируя тем самым, что наши клиенты получат лучшее
                <br /> в своей отрасли
              </p>
            </div>
          </div>
        </div>

        <div className="contacts">
          <div className="contacts_title">
            <p className="our_contacts">Наши контакты</p>
          </div>
          <div className="contacts_content">
            <div className="contacts_content_one">
              <h2>
                Как связаться с нами и какие преимущества получат клиенты,
                выбрав нас
              </h2>
              <p className="content_contacts">
                Связаться с нами можно через наш сайт, телефон
                <br /> или электронную почту. <br /> Мы предоставляем удобный и
                быстрый способ
                <br /> найти лучшие дизайнерские услуги в Кыргызстане
                <br /> и получить профессиональную помощь в создании
                <br /> уникального пространства.
              </p>
            </div>
            <div className="contacts_icons">
              <div className="icon_style">
                <button className="tel">
                  <img src="src/Pictures/Tel.png" alt="" />
                </button>
                <p className="tel_number">+996 596 666 567</p>
              </div>
              <div className="icon_style">
                <button className="inst">
                  <img src="src/Pictures/Insta.png" alt="" />
                </button>
                <p className="inst_number">stylescope@inst.com</p>
              </div>
              <div className="icon_style">
                <button className="mail">
                  <img src="src/Pictures/post.png" alt="" />
                </button>
                <p className="mail_number">stylescope@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
