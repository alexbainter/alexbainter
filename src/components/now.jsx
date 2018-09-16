import React from 'react';
import dateformat from 'dateformat';

const lastFmDateFormat = date => dateformat(date, 'yyyy-mm-dd');

const TODAY = new Date();
const THIRTY_DAYS_AGO = new Date(new Date().setDate(TODAY.getDate() - 30));

const LAST_FM_LINK = `https://www.last.fm/user/MetalheadAlex/library/albums?to=${lastFmDateFormat(
  TODAY
)}&from=${lastFmDateFormat(THIRTY_DAYS_AGO)}`;

const Now = () => (
  <div>
    <h2>What I'm doing now</h2>
    <h3>Swimlane</h3>
    <div>
      I'm just through my sixth month working remotely for{' '}
      <a href="https://swimlane.com/" target="_blank">
        Swimlane
      </a>
      . The team is amazing and I've found full-time remote work to be a perfect
      fit. Working with Angular and TypeScript (previously unthinkable) has been
      extremely beneficial to my skillset by forcing me out of my comfort zone.
    </div>
    <h3>Generative Music</h3>
    <div>
      After reading{' '}
      <a
        href="https://www.goodreads.com/book/show/160117.A_Year_With_Swollen_Appendices"
        target="_blank"
      >
        <i>A Year With Swollen Appendicies</i> by Brian Eno
      </a>{' '}
      in which he describes building systems which create music that continously
      changes, I was inspired to create{' '}
      <a href="https://generativemusic.alexbainter.com/" target="_blank">
        "generative" music of my own
      </a>
      . This is extremely creatively satisfying for me, and I've been spending
      as much time on it as possible. In addition to music which plays in a
      browser, I'm also working on a programmable acoustic player piano. All of
      this work is forcing me to grow in areas like music theory, machine
      learning, and electronics. It's exciting to have more ideas than time.
    </div>
    <h3>Cat</h3>
    <div>
      It's almost exactly a year since I adopted my first cat. Previously my
      family always had dogs, but I wanted to know what owning a cat was like.
      Conclusion: it's pretty great.
    </div>
    <h4>
      <a href={LAST_FM_LINK} target="_blank">
        What I've been listening to
      </a>
    </h4>
    <div>
      <i>
        This is a{' '}
        <a href="https://nownownow.com/about" target="_blank">
          now page
        </a>
        .
      </i>
    </div>
  </div>
);

export default Now;
