import styles from '@/styles/SidebarLink.module.css';

export default function SidebarLink({ text, Icon }) {
  return (
    <div className={styles.sidebarLink}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
