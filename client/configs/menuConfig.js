const menuConfig = [
  {
    name: 'Home',
    href: '/',
    location: 'menu'
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    location: 'menu'
  },
  {
    name: 'Home',
    href: '/dashboard',
    location: 'sidebar'
  },
  {
    name: 'Tickets',
    href: '/dashboard/tickets',
    location: 'sidebar'
  },
  {
    name: 'Sponsors',
    href: '/dashboard/sponsors',
    location: 'sidebar'
  },
  {
    name: 'Tournaments',
    href: '/dashboard/tournaments',
    location: 'sidebar'
  },
  {
    name: 'QRScanner',
    href: '/dashboard/QRScanner',
    location: 'sidebar'
  },
  {
    name: 'Logout',
    href: '/logout',
    location: 'sidebar'
  }
];

export const getSidebarMenu = () => menuConfig.filter(item => item.location === 'sidebar');
export const getMenu = () => menuConfig.filter(item => item.location === 'menu');

export default menuConfig;
