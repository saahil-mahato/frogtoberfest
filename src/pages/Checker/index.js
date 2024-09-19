import React, { Fragment } from 'react';

import SiteTitle from 'components/SiteTitle';
import SiteDetails from 'components/SiteDetails';
import UsernameForm from 'components/UsernameForm';
import SiteHeader from 'components/SiteHeader';

const Checker = () => (
  <Fragment>
    <SiteHeader />
    <div className='banner banner--img-fixed pt-24'>
      <SiteTitle>Frogtoberfest</SiteTitle>
      <div className="flex justify-center">
        <p className='text-black fw-700'>Stay tuned for Frogtoberfest 2024 !!</p>
      </div>
      <UsernameForm />
      <SiteDetails />
    </div>


  </Fragment>
);

export default Checker;
