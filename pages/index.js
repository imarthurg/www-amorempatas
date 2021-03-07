import AnimalList from '../components/AnimalList';

import Page from '../components/Page';
import PageSection from '../components/PageSection';

import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.main_bg}>
          <h1 className={styles.title}>
            Adotar é <br />
            valorizar <br />a vida!
          </h1>
        </div>
        <PageSection>
          <h2>Venha fazer um novo amigo!</h2>

          <AnimalList />
        </PageSection>
        <PageSection off>
          <h2>Agendar uma visita</h2>
        </PageSection>
      </div>
    </Page>
  );
}
