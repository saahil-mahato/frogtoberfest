import React, { Fragment } from 'react';

import SiteTitle from 'components/SiteTitle';
import SiteDetails from 'components/SiteDetails';
import UsernameForm from 'components/UsernameForm';
import SiteHeader from 'components/SiteHeader';

const Checker = () => (
  <Fragment>
    <SiteHeader />
    <div className='banner banner--img-fixed'>
      <SiteTitle>Frogtoberfest</SiteTitle>
      <UsernameForm />
      <SiteDetails />
    </div>


  </Fragment>
);

export default Checker;
