import React from 'react';
import { Link } from 'gatsby';
import ColoredContainer from '../components/colored-container/colored-container';
import SEO from '../components/seo';
import Landing from '../components/landing/landing';
import landingStyles from '../components/landing/landing.module.css';

const TipPage = () => (
  <ColoredContainer>
    <SEO title="Tips 🙏" keywords={['alex bainter', 'tips']} />
    <Landing title="Tip Alex">
      <p>Woah—you actually clicked that link!</p>
      <p>
        I don't like to charge for access to <Link to="/">my work</Link>. That
        way everyone has an opportunity to enjoy it.
      </p>
      <p>
        But if you're willing and able, here are some ways you can support me:
      </p>
      <ul className={landingStyles.links}>
        <li className={landingStyles.linkItem}>
          <a href="https://www.patreon.com/bePatron?u=2484731" target="_blank">
            Patreon
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <a href="https://paypal.me/alexbainter" target="_blank">
            PayPal
          </a>
        </li>
        <li
          className={[landingStyles.linkItem, landingStyles.linkItemSmall].join(
            ' '
          )}
        >
          BTC: 3DMb8BQVTtfVv59pMLmZmHr6xSoJsb3P4Z
        </li>
        <li
          className={[landingStyles.linkItem, landingStyles.linkItemSmall].join(
            ' '
          )}
        >
          ETH: 0x60e6B0111716eDD65ae4064AdD6db99c5B5C72aA
        </li>
      </ul>
      <p>Thank you!</p>
    </Landing>
  </ColoredContainer>
);

export default TipPage;
