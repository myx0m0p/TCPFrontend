import { useTranslation, Trans } from 'react-i18next';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { memo, useEffect, useState } from 'react';
import urls from '../../utils/urls';
import * as subscribeActions from '../../actions/subscribe';
import styles from './styles.css';
import DropdownMenu from '../DropdownMenu';
import i18nCommon from '../../i18n/common.json';

const Footer = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();
  const dispatch = useDispatch();

  const setLangAndReload = (lang) => {
    setLang(lang);
    Cookies.set('lang', lang, { expires: 365 });
    window.location.reload();
  };

  useEffect(() => {
    let lang = Cookies.get('lang') || 'en';

    if (!i18nCommon[lang]) {
      lang = 'en';
    }

    setLang(lang);
  }, []);

  return (
    <nav className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.list}>
          <span className={styles.telegram}>
            <span className={styles.telegramTitle}>
              <Trans i18nKey="chatWith">
                Chat with <strong>U°Community</strong>:
              </Trans>
            </span>

            <a href="https://t.me/uos_network_en" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9688 1.09375L12.8438 11.0312C12.7604 11.3854 12.6146 11.6146 12.4062 11.7188C12.2188 11.8021 11.9792 11.7604 11.6875 11.5938L8.46875 9.21875L6.90625 10.7188C6.80208 10.8229 6.71875 10.8958 6.65625 10.9375C6.55208 11 6.41667 11.0312 6.25 11.0312L6.5 7.75L12.4688 2.34375C12.5521 2.28125 12.5729 2.22917 12.5312 2.1875C12.5104 2.125 12.4479 2.10417 12.3438 2.125C12.2604 2.125 12.1667 2.15625 12.0625 2.21875L4.6875 6.875L1.5 5.875C1.14583 5.77083 0.979167 5.61458 1 5.40625C1.02083 5.19792 1.23958 5.01042 1.65625 4.84375L14.0625 0.0625C14.375 -0.0416667 14.625 0 14.8125 0.1875C15 0.354167 15.0521 0.65625 14.9688 1.09375Z" fill="black" />
              </svg>
              {t('Chat')}
            </a>
          </span>
        </div>
      </div>

      <div className={styles.side}>
        <div className={styles.list}>
          <Link to={urls.getPostUrl({ id: 7881 })}>{t('Terms')}</Link>
          <Link to={urls.getPostUrl({ id: 7886 })}>{t('Privacy Policy')}</Link>
          <Link to={urls.getPostUrl({ id: 7883 })}>{t('Content Policy')}</Link>
          <Link to={urls.getFaqUrl()}>{t('FAQ')}</Link>
          <a href="https://uos.network/" target="_blank" rel="noopener noreferrer">{t('About')}</a>
          <span
            className="link"
            role="presentation"
            onClick={() => dispatch(subscribeActions.show())}
          >
            {t('Subscribe')}
          </span>

          {lang &&
            <div>
              <DropdownMenu
                position="top-end"
                items={Object.keys(i18nCommon).map(item => ({
                  title: <span className={styles.langItem}>{item}</span>,
                  onClick: () => setLangAndReload(item),
                }))}
              >
                <div className={styles.lang}>{lang}</div>
              </DropdownMenu>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default memo(Footer);
