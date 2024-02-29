const Aside = () => {
  return (
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
  );
};

export default Aside;
