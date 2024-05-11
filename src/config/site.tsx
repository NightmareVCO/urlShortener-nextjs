import DashboardIcon from "@icons/Dashboard/DashboardIcon";
// import SettingsIcon from "@icons/Dashboard/SettingsIcon";
import UrlsAnalyticsIcon from "@icons/Dashboard/UrlsAnalyticsIcon";
import UrlsIcon from "@icons/Dashboard/UrlsIcon";
import UserProfileIcon from "@icons/Dashboard/UserProfileIcon";
import UserAnalyticsIcon from "@icons/Dashboard/UsersAnalytics";
import UsersIcon from "@icons/Dashboard/UsersIcon";

export const siteConfig = {
  pages: [
    {
      name: "LinkLoom",
      description:
        "LinkLoom is an efficient and easy-to-use URL shortening service that streamlines your online experience.",
    },
    {
      name: "Login - LinkLoom",
      description: "Login to your account to access your shortened links.",
    },
    {
      name: "Register - LinkLoom",
      description: "Register for an account to start shortening your links.",
    },
    {
      name: "Url Shortener - LinkLoom",
      description: "Shorten your links with LinkLoom.",
    },
    {
      name: "Qr Code - LinkLoom",
      description: "Generate a QR code for your shortened link.",
    },
    {
      name: "Dashboard - LinkLoom",
      description: "Manage your shortened links.",
    },
  ],
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Register",
      href: "/register",
    },
    {
      label: "Shortener",
      href: "/shortener",
    },
    {
      label: "Qr Code",
      href: "/qr",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
  navMenuItems: [
    {
      title: "Pages",
      list: [
        {
          label: "Dashboard",
          href: "/dashboard",
          icon: <DashboardIcon />,
        },
        {
          label: "Users",
          href: "/dashboard/users",
          icon: <UsersIcon />,
        },
        {
          label: "Urls",
          href: "/dashboard/urls",
          icon: <UrlsIcon />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          label: "Users",
          href: "/dashboard/analytics/users",
          icon: <UserAnalyticsIcon />,
        },
        {
          label: "Urls",
          href: "/dashboard/analytics/urls",
          icon: <UrlsAnalyticsIcon />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          label: "Profile",
          href: "/dashboard/user/profile",
          icon: <UserProfileIcon />,
        },
        // {
        //   label: "Settings",
        //   href: "/dashboard/user/settings",
        //   icon: <SettingsIcon />,
        // },
      ],
    },
  ],
};

enum Pages {
  Home,
  Login,
  Register,
  Shortener,
  Qr,
  Dashboard,
}

enum navMenuItems {
  Pages,
  Analytics,
  User,
}

enum navMenuPages {
  Dashboard,
  Users,
  Urls,
}

enum navMenuAnalytics {
  Users,
  Urls,
}

enum navMenuUser {
  Profile,
  Settings,
}

export const HomeInformation = {
  name: siteConfig.pages[Pages.Home].name,
  description: siteConfig.pages[Pages.Home].description,
};

export const LoginInformation = {
  name: siteConfig.pages[Pages.Login].name,
  description: siteConfig.pages[Pages.Login].description,
};

export const RegisterInformation = {
  name: siteConfig.pages[Pages.Register].name,
  description: siteConfig.pages[Pages.Register].description,
};

export const ShortenerInformation = {
  name: siteConfig.pages[Pages.Shortener].name,
  description: siteConfig.pages[Pages.Shortener].description,
};

export const QrInformation = {
  name: siteConfig.pages[Pages.Qr].name,
  description: siteConfig.pages[Pages.Qr].description,
};

export const DashboardInformation = {
  name: siteConfig.pages[Pages.Dashboard].name,
  description: siteConfig.pages[Pages.Dashboard].description,
};

export const NavReferences = {
  Home: siteConfig.navItems[Pages.Home].href,
  Login: siteConfig.navItems[Pages.Login].href,
  Register: siteConfig.navItems[Pages.Register].href,
  Shortener: siteConfig.navItems[Pages.Shortener].href,
  Qr: siteConfig.navItems[Pages.Qr].href,
  Dashboard: siteConfig.navItems[Pages.Dashboard].href,
};

export const NavMenuTitles = {
  Pages: siteConfig.navMenuItems[navMenuItems.Pages].title,
  Analytics: siteConfig.navMenuItems[navMenuItems.Analytics].title,
  User: siteConfig.navMenuItems[navMenuItems.User].title,
};

export const NavMenuPagesItems = {
  Dashboard:
    siteConfig.navMenuItems[navMenuItems.Pages].list[navMenuPages.Dashboard],
  Users: siteConfig.navMenuItems[navMenuItems.Pages].list[navMenuPages.Users],
  Urls: siteConfig.navMenuItems[navMenuItems.Pages].list[navMenuPages.Urls],
};

export const NavMenuAnalyticsItems = {
  Users:
    siteConfig.navMenuItems[navMenuItems.Analytics].list[
      navMenuAnalytics.Users
    ],
  Urls: siteConfig.navMenuItems[navMenuItems.Analytics].list[
    navMenuAnalytics.Urls
  ],
};

export const NavMenuUserItems = {
  Profile: siteConfig.navMenuItems[navMenuItems.User].list[navMenuUser.Profile],
  Settings:
    siteConfig.navMenuItems[navMenuItems.User].list[navMenuUser.Settings],
};
