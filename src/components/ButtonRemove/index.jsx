import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './styles.css';

const ButtonRemove = ({ ...rest }) => {
  const { t } = useTranslation();

  return (
    <span
      {...rest}
      title={t('Remove')}
      role="presentation"
      className={styles.buttonRemove}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.62839 1.3365C7.85088 1.11401 7.85088 0.753279 7.62839 0.530787C7.4059 0.308295 7.04517 0.308295 6.82268 0.530787L4.03125 3.32222L1.23982 0.530787C1.01733 0.308296 0.656599 0.308295 0.434107 0.530787C0.211615 0.753279 0.211615 1.11401 0.434107 1.3365L3.22554 4.12793L0.434108 6.91936C0.211616 7.14185 0.211615 7.50258 0.434107 7.72507C0.656599 7.94756 1.01733 7.94756 1.23982 7.72507L4.03125 4.93364L6.82268 7.72507C7.04517 7.94756 7.4059 7.94756 7.62839 7.72507C7.85088 7.50258 7.85088 7.14185 7.62839 6.91936L4.83696 4.12793L7.62839 1.3365Z" fill="white" />
      </svg>
    </span>
  );
};

export default ButtonRemove;
