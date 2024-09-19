import React from 'react';

const checklistItems = [
  'Create 8 pull requests (PRs) between Oct 1 to Oct 31, 2024.',
  'At least 5 PRs should be in repositories not owned by you.',
  'PRs can be made to any public repository on GitHub.',
  'PRs should not be labeled as `invalid`.'
];

/**
 * Component to show details about Frogtoberfest in the homepage.
 */
const SiteDetails = () => (
  <div className="md:py-4 mb-6">
    <div className="rounded mx-auto shadow w-3/4 sm:w-1/2 checker-card">
      <div className="px-6 py-4">
        <div className="font-bold mb-4">
          <p className="leading-normal text-lg mb-1">
            Frogtoberfest is a spin-off of Hacktoberfest; a month-long Open Source contribution challenge for open
            source enthusiast.
          </p>
        </div>
        <ul className="p-0">
          {checklistItems.map((item, index) => (
            <li className="flex leading-tight items-center mb-3" key={index}>
              <div className="circle">
              </div>
              <span className="text-m ml-2">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div >
);

export default SiteDetails;
