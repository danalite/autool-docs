import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import GitHubButton from 'react-github-button';
import gh from 'parse-github-url';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import 'video-react/dist/video-react.css';
import * as styles from './Banner.module.less';
import Notification, { NotificationProps } from './Notification';

type BannerButtonShape = 'round' | 'square';

interface BannerButton {
  text: string;
  link: string;
  style?: React.CSSProperties;
  type?: string;
  shape?: BannerButtonShape;
}

interface BannerProps {
  coverImage?: React.ReactNode;
  title: string;
  logoUrl: string;
  description: string;
  notifications?: NotificationProps[];
  style?: React.CSSProperties;
  className?: string;
  video?: string;
  showGithubStars?: boolean;
  buttons?: BannerButton[];
  onCloseVideo?: () => void;
  onPlayVideo?: () => void;
}

const backLeftBottom =
  'https://gw.alipayobjects.com/zos/basement_prod/441d5eaf-e623-47cd-b9b9-2a581d9ce1e3.svg';

const Banner: React.FC<BannerProps> = ({
  coverImage,
  logoUrl,
  title,
  description,
  notifications,
  style = {},
  className,
  showGithubStars = true,
  buttons = [],
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.includes('zh') ? 'zh' : 'en';
  const notificationsUrl = `https://my-json-server.typicode.com/opensumi/website-data/notifications?lang=${lang}`;

  const query = graphql`
    query SiteBannerQuery {
      site {
        siteMetadata {
          githubUrl
        }
      }
    }
  `;
  const { site } = useStaticQuery(query);
  const { githubUrl } = site.siteMetadata;

  const [remoteNews, setRemoteNews] = useState<NotificationProps[]>([]);

  useEffect(() => {
    setRemoteNews([
      {
        type: 'New',
        title: 'AI plugins release',
        date: 'ChatGPT, Stable Diffusion, and more',
        link: 'https://github.com/danalite/autool/releases/',
      },
      {
        type: 'News',
        title: 'Product launch',
        date: 'YC Hacker News',
        link: 'https://qcon.infoq.cn/202302/beijing/presentation/5159',
      },
    ]);
  }, [notificationsUrl]);

  const notificationsNode = (notifications || remoteNews)
    .slice(0, 2)
    .map((notification, i) => (
      <Notification index={i} key={i} {...notification} />
    ));

  const renderButtons = buttons.map((button: BannerButton, i) => {
    const ButtonLink =
      button.link.startsWith('http') || button.link.startsWith('#')
        ? 'a'
        : Link;
    const buttonProps = {} as any;
    if (button.link.startsWith('http')) {
      buttonProps.target = '_blank';
      buttonProps.rel = 'noopener noreferrer';
    }
    if (ButtonLink === 'a') {
      buttonProps.href = button.link;
    } else {
      buttonProps.to = button.link;
    }
    const { shape = 'round' } = button;
    return (
      <ButtonLink
        {...buttonProps}
        className={classNames(
          styles.buttonLink,
          styles[button.type || ''],
          button.type === 'primary' ? 'primary-button' : 'common-button',
        )}
        key={i}
        style={{
          borderRadius: shape === 'round' ? '1000px' : '4px',
          ...button.style,
        }}
      >
        <span>{button.text}</span>
      </ButtonLink>
    );
  });
  if (showGithubStars) {
    const githubObj = gh(githubUrl);
    if (githubObj && githubObj.owner && githubObj.name) {
      renderButtons.push(
        <div key="github" className={styles.githubWrapper}>
          <GitHubButton
            type="stargazers"
            size="large"
            namespace={githubObj.owner}
            repo={githubObj.name}
          />
        </div>,
      );
    }
  }
  return (
    <section className={classNames(styles.wrapper, className)} style={style}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={classNames(styles.title, 'banner-title')}>
            <img className={styles.logo} src={logoUrl} alt="opensumi" />
            <div className={styles.label}>{title}</div>
          </div>
          <p className={classNames(styles.description, 'banner-description')}>
            {description}
          </p>
          <div className={classNames(styles.buttons, 'banner-buttons')}>
            {renderButtons}
          </div>
        </div>
        <div className={classNames(styles.notifications, 'notifications')}>
          {notificationsNode}
        </div>
        <div className={classNames(styles.teaser, 'teaser')}>
          <div className={classNames(styles.teaserimg, 'teaser-img')}>
            {coverImage}
          </div>
        </div>
        <img
          className={styles.backLeftBottom}
          src={backLeftBottom}
          alt="back"
        />
      </div>
    </section>
  );
};

export default Banner;
