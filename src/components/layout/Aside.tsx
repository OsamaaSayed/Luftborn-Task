const Aside = () => {
  return (
    <aside className='aside'>
      <div className='aside__header'>
        <img
          className='aside__header-img u-mx-auto'
          src='/images/profile-pic.png'
          alt='admin'
        />

        <div className='aside__header-title'>
          <span>Report for</span>
          <p>Best Sales</p>
        </div>
      </div>

      <ul className='aside__links'>
        <li>
          <a
            className='aside__links-anchor'
            href='#'
          >
            Daily
          </a>
        </li>

        <li>
          <a
            className='aside__links-anchor active'
            href='#'
          >
            Weekly
          </a>
        </li>

        <li>
          <a
            className='aside__links-anchor'
            href='#'
          >
            Monthly
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
