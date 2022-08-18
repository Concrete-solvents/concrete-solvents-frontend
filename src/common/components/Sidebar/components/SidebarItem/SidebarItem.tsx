// Libraries
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './sidebarItem.module.css';

interface Props extends ChildrenNever {
  icon: IconDefinition;
  link: string;
}

const SidebarItem: FC<Props> = ({ icon, link }: Props) => (
  <Link to={link}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
  </Link>
);

export { SidebarItem };
