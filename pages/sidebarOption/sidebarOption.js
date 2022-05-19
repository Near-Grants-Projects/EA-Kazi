import styles from '@/styles/SidebarOption.module.css';

export default function SidebarOption({ Icon, text }) {
  return (
    <div className={styles.sidebarOption}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
