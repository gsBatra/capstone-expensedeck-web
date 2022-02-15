import React from 'react';
import * as BsIcons  from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <BsIcons.BsPhone />,
      cName: 'nav-text'
    },
    {
      title: 'Documentation',
      path: '/documentation',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Team',
      path: '/team',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
  ];