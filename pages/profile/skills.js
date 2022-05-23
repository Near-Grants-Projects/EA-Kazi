import styles from '@/styles/Skills.module.css';

export default function SkillsPage() {
  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto mt-4'>
        <div className={styles.proskills}>
          <h4>Skills</h4>
        </div>

        <div className='col-lg-12'>
          <div className={styles.left}>
            <div className='col-lg-12 d-flex flex-wrap align-items-center'>
              <span>UI/UX</span>
              <span>Front-End Dev</span>
              <span>Figma</span>
              <span className={styles.pink}>Adobe XD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
