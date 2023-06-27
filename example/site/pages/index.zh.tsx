import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '@opensumi/gatsby-theme/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@opensumi/gatsby-theme/site/components/Banner';
import Companies from '@opensumi/gatsby-theme/site/components/Companies';
import Features from '@opensumi/gatsby-theme/site/components/Features';
import Cases from '@opensumi/gatsby-theme/site/components/Cases';
import BannerSVG from '@opensumi/gatsby-theme/site/components/BannerSVG';

const IndexPage: React.FC = () => {
  const query = graphql`
    query SiteHomeQuery {
      site {
        siteMetadata {
          logoUrl
        }
      }
    }
  `;
  const { t, i18n } = useTranslation();
  const { site } = useStaticQuery(query);
  const { logoUrl } = site.siteMetadata;

  const features = [
    {
      icon: 'https://img.alicdn.com/imgextra/i2/O1CN01tAJG0Q1sy1OZDiqDb_!!6000000005834-2-tps-330-288.png',
      title: t('轻松集成'),
      description: t('连接桌面和网络软件，构建全/半自动工作流'),
    },
    {
      icon: 'https://img.alicdn.com/imgextra/i3/O1CN01EPd2N523bXjOWj7lw_!!6000000007274-2-tps-330-288.png',
      title: t('高拓展性'),
      description: t('对接海量AI服务，快速提升工作效率'),
    },
    {
      icon: 'https://img.alicdn.com/imgextra/i4/O1CN01eKBs1G1aYgOqsknWh_!!6000000003342-2-tps-330-288.png',
      title: t('UI 自定义'),
      description: t('用JSON定义工作流图形界面'),
    },
  ];

  const companies = [
    {
      name: '阿里云',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    },
    {
      name: '支付宝',
      img: 'https://stories.hilton.com/uploads/2022/04/HGI-Brand-Logo_Color.png',
    },
    // {
    //   name: '天猫',
    //   img: 'https://img.alicdn.com/imgextra/i1/O1CN01hK7NHY1g7YdThPWng_!!6000000004095-2-tps-206-64.png',
    // },
    // {
    //   name: '淘宝',
    //   img: 'https://img.alicdn.com/imgextra/i4/O1CN01v5ZFqf1loDbbkZCrV_!!6000000004865-2-tps-291-120.png',
    // },
    // {
    //   name: '斑马智行',
    //   img: 'https://img.alicdn.com/imgextra/i1/O1CN01Kdo06P1EgXeCg89DD_!!6000000000381-2-tps-206-64.png',
    // },
  ];

  const cases = [
    // {
    //   logo: 'https://img.alicdn.com/imgextra/i2/O1CN01DVM7ow1njIZNWiUnK_!!6000000005125-2-tps-180-172.png',
    //   title: t('支付宝小程序开发工具'),
    //   description: t(
    //     '小程序开发者工具是支付宝开放平台打造的一站式小程序研发工具，提供了编码、调试、测试、上传、项目管理等功能。不仅支持开发支付宝小程序，相同代码还通用于蚂蚁开放生态，可直接发布至淘宝、钉钉、高德等应用平台。',
    //   ),
    //   link: 'https://opendocs.alipay.com/mini/ide/overview',
    //   image:
    //     'https://img.alicdn.com/imgextra/i1/O1CN01BYqn4B219wcGGXHBS_!!6000000006943-2-tps-775-667.png',
    // },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/180px-ChatGPT_logo.svg.png',
      title: t('桌面AI工作流'),
      link: 'docs/develop/sample/ai-tools',
      description: t(
        '一键抠图，GPT生成文字，Stable Diffusion模型生成图片，文字语音转换。',
      ),
      image: 'https://www.youtube.com/watch?v=8FOwCdPLD0c',
    },
  ];

  const bannerButtons = [
    {
      text: t('快速开始'),
      link: './docs/develop/quick-start/installation',
      type: 'primary',
    },
    {
      text: t('概览'),
      link: `/${i18n.language}/docs/develop/introduction`,
    },
  ];

  return (
    <>
      <SEO title={t('AuTool 框架')} lang={i18n.language} />
      <Banner
        coverImage={<BannerSVG />}
        logoUrl={logoUrl}
        title={t('AuTool')}
        description={t('一款基于AI的工作流自动化框架。')}
        className="banner"
        buttons={bannerButtons}
      />
      <Cases cases={cases} />
      <Features title={t('特性')} features={features} />
      <Companies title={t('合作公司')} companies={companies} />
    </>
  );
};

export default IndexPage;
