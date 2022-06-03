import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import * as styles from './Companies.module.less';

interface Company {
  name: string;
  img: string;
}

interface CompaniesProps {
  title: string;
  companies: Company[];
  className?: string;
  style?: React.CSSProperties;
}

const Companies: React.FC<CompaniesProps> = ({
  title,
  companies = [],
  className,
  style,
}) => {
  const getCompanies = companies.map((company) => (
    <Col key={company.name} className={styles.company} md={4} sm={2}>
      <img className={styles.companyimg} src={company.img} alt={company.name} />
    </Col>
  ));

  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      <div key="content" className={styles.content}>
        <p key="title" className={styles.title}>
          {title}
        </p>
        <div key="companies-container" className={styles.companiesContainer}>
          <Row
            key="companies"
            gutter={[{ xs: 77, sm: 77, md: 50, lg: 124 }, 10]}
          >
            {getCompanies}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Companies;
