import styles from '@/styles/Walletpro.module.css';

export default function WalletPage() {
  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto mt-4'>
        <div className={styles.prowallet}>
          <h4>Wallet</h4>
        </div>
      </div>

      {/* Convert to component later */}
      <div className='col-lg-10 mx-auto mb-4'>
        <div className={styles.proamount}>
          <h4>#20,600</h4>
          <p>current balance</p>
        </div>
      </div>
    </div>
  );
}
