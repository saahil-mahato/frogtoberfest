import React, { Fragment } from 'react';
import SiteHeader from 'components/SiteHeader';

const Guidelines = () => (
  <Fragment>
    <SiteHeader />
    <div className="container py-14x text-black">
      <h2>Frogtoberfest Participation Guidelines</h2>
      <div>
        <div className="my-10x">
          <p>
            <strong>Frogtoberfest</strong> is dedicated to fostering high-quality contributions to Open Source projects.
          </p>
          <p className="pt-5x">
            Our mission is to inspire the Nepali community to get involved in Open Source and work together to improve
            projects that power our modern digital landscape.
          </p>
          <p className="pt-5x">
            With that in mind, we have prepared a few guidelines to ensure meaningful participation and contributions
            throughout <strong>Frogtoberfest</strong>.
          </p>
        </div>
        <div className="my-10x">
          <h4>
            <span role="img" aria-label="Wrench" className="mr-2x">
              🔧
            </span>
            <span className='text-black'>Meaningful code changes</span>
          </h4>
          <p className="pt-5x">
            Contributions should focus on meaningful code changes, such as bug fixes, new features, or improvements,
            rather than superficial alterations or cosmetic modifications.
          </p>
        </div>
        <div className="my-10x">
          <h4>
            <span role="img" aria-label="Orange books" className="mr-2x">
              📚
            </span>
            <span className='text-black'>Documentation enhancements</span>
          </h4>
          <p className="pt-5x">
            Encourage participants to contribute to project documentation, including updates, corrections, or
            clarifications, to improve the overall quality and usability of the project.
          </p>
        </div>
        <div className="my-10x">
          <h4>
            <span role="img" aria-label="Magnifying glass" className="mr-2x">
              🔍
            </span>
            <span className='text-black'>Issue tracking</span>
          </h4>
          <p className="pt-5x">
            Participants should prioritize issues or tasks listed in the project's issue tracker. This ensures alignment
            with project priorities and helps address existing challenges.
          </p>
        </div>
        <div className="my-10x">
          <h4>
            <span role="img" aria-label="Light bulb" className="mr-2x">
              💡
            </span>
            <span className='text-black'>Value-added contributions</span>
          </h4>
          <p className="pt-5x">
            Stress the importance of making contributions that provide clear value to the open-source project and its
            users. Ask participants to consider how their contributions benefit the community.
          </p>
        </div>
        <div className="my-10x">
          <h4>
            <span role="img" aria-label="Glowing star" className="mr-2x">
              🌟
            </span>
            <span className='text-black'>Quality over quantity</span>
          </h4>
          <p className="pt-5x">
            The emphasis on quality has resulted in participants submitting fewer, but more substantial, PRs. This
            approach ensures that contributions are valuable to the open-source community.
          </p>
        </div>
        <div className="my-10x">
          <h4>
            <span role="img" aria-label="Eye in speech bubble" className="mr-2x">
              👁️‍🗨️
            </span>
            <span className='text-black'>Code review process</span>
          </h4>
          <p className="pt-5x">
            The code review process will be conducted after the event's completion to maintain the quality of
            contributions.
          </p>
          <p className="pt-5x">
            Experienced reviewers will provide valuable feedback, enhancing the overall quality of PRs. The rejection of
            low-quality PRs will reinforce the importance of quality contributions, and participants will become more
            conscious of submitting meaningful changes.
          </p>
        </div>
        <div className="my-10x">
          <p>
            This approach ensures that the final report for <strong>Frogtoberfest</strong> reflects the true value of
            contributions, as only high-quality PRs that meet the established guidelines will be counted towards
            participants' achievements.
          </p>
          <p>
            Happy contributing!
            <span role="img" aria-label="Frog" className="ml-2x">
              🐸
            </span>
          </p>
          <p className="pt-5x">
            As <strong>Frogtoberfest</strong> continues, we remain dedicated to these principles, ensuring that
            participants continue to make valuable contributions that benefit the open-source community. These
            guidelines will continue to serve as a cornerstone for promoting high-quality contributions and fostering a
            thriving open-source ecosystem.
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Guidelines;
