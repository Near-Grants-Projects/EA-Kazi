import Layout from '@/components/Layout';
import ProfileHeader from './profileHeader';
import Skills from './skills';
import Wallet from './wallet';
import Portfolio from './portfolio';
import styles from '@/styles/Profile.module.css';

export default function ProfilePage() {
  return (
    <Layout title='Profile'>
      <section className={styles.profile}>
        <div className='container-fluid'>
          <ProfileHeader />
          <Skills />
          <Wallet />
          <Portfolio />
        </div>
      </section>
    </Layout>
  );
}
