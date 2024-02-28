const Home = () => {
  return (
    <main className='u-min-h-screen u-container u-mx-auto u-flex u-justify-center u-items-center'>
      <div className='u-h-full u-flex u-gap-33'>
        <aside className='aside'>
          <div className='aside__header'>
            <img
              className='aside__header-img u-mx-auto'
              src='/images/admin.png'
              alt='admin'
            />

            <div className='aside__header-title'>
              <span>Report for</span>
              <p>Best Sales</p>
            </div>
          </div>

          <div className='aside__links'>
            <a
              className='aside__links-anchor'
              href='#'
            >
              Daily
            </a>
            <a
              className='aside__links-anchor'
              href='#'
            >
              Weekly
            </a>
            <a
              className='aside__links-anchor'
              href='#'
            >
              Monthly
            </a>
          </div>
        </aside>

        <section>
          <div className='section-main'></div>
        </section>
      </div>
    </main>
  );
};

export default Home;
