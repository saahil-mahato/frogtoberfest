import React from 'react';

import { HOSTNAME } from 'config';
import frogtoberfestLogo from 'assets/images/frogtoberfest2022-logo.png';
import leapfrogOpenSourceLogo from 'assets/images/leapfrog-opensource-logo.png';

const SiteTitle = () => (
  <div className="md:py-6 text-center bg-dark-black">
    <div className="mx-auto w-2/3 sm:w-1/2 md:py-12">
      <div className="w-48 mx-auto mb-2">
        <img alt="Leapfrog Open Source" src={leapfrogOpenSourceLogo} />
      </div>
      <div className="text-white tracking-wide text-xs mb-4">PRESENTS</div>
      <a className="block cursor-pointer no-underline" href={HOSTNAME} title="Frogtoberfest">
        <img alt="Frogtoberfest Artwork" src={frogtoberfestLogo} className="frogtoberfest-logo" />
      </a>
    </div>
  </div>
);

export default SiteTitle;
