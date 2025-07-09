import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="The TurnChain Card Game of Cosmic Warriors">
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Welcome to <span className={styles.highlight}>Lunaka</span>
            </h1>
            <p className={styles.heroSubtitle}>
              The TurnChain Card Game of Cosmic Warriors
            </p>
            <p className={styles.heroDescription}>
              Embark on an epic journey through the mystical planet of Lunaka, where legendary Meme Senshi warriors 
              battle to restore the balance of Lunarium flows and fulfill the ancient prophecy of Satoshi Nakamoto.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={styles.heroButtonPrimary}
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className={styles.heroButtonSecondary}
                to="/docs/turnchain-combat">
                Learn Combat
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚔️</div>
            <h3>TurnChain Combat</h3>
            <p>Master the revolutionary chain-based battle system where every action triggers dynamic sequences.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🏛️</div>
            <h3>Five Burokku Orders</h3>
            <p>Choose your path among the five warrior schools, each with unique philosophies and abilities.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌟</div>
            <h3>Meme Senshi Cards</h3>
            <p>Collect and evolve legendary warriors inspired by animals and blockchain themes.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 